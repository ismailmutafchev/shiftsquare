import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import Modal from '../components/Modal'
import { PlusIcon } from '@heroicons/react/24/outline'
import { addPositionOne, updatePositionById } from '../queries/position/mutations'
import { getPositions } from '../queries/position/queries'
import { useMutation, useQuery } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { LoadingAnimation } from '../assets/AnimationComponents/AnimationComponents'
import { SketchPicker } from 'react-color'
import { set } from 'date-fns'
import ColorPicker from '../components/colorPicker'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Positions() {
  const [showModal, setShowModal] = useState(false)
  const [update, setUpdate] = useState({
    isUpdate: false,
    data: {}
  })

  const { loading, error, data } = useQuery(getPositions)

  if (loading) return <LoadingAnimation />
  if (error) return <p>Error :(</p>;

  const positions = data?.position

  function modalHandler(state: boolean) {
    setShowModal(state)
  }
  return (
    <>
      <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
        <h3 className="text-base font-semibold leading-6 text-gray-900">Positions</h3>
        <div className="mt-3 sm:ml-4 sm:mt-0">
          <button
            onClick={() => {
              setShowModal(true), setUpdate({ isUpdate: false, data: {} })
            }}
            type="button"
            className="inline-flex items-center rounded-md bg-gray-900/80 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-gray-900/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900/80"
          >
            <PlusIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
            Add Position
          </button>
        </div>
      </div >
      <div>
        <h2 className="text-sm font-medium text-gray-500">Pinned Projects</h2>
        <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {positions && positions.map((position: any) => {
            const color = `bg-[${position.bg_color}]`
            return (
            <li key={position.name} className="col-span-1 flex rounded-md shadow-sm">
              <div
                className={classNames(
                  color,
                  'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
                )}
              >
                {position.name.slice(0, 2).toUpperCase()}
              </div>
              <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                <div className="flex-1 truncate px-4 py-2 text-sm">
                  <a href={position.href} className="font-medium text-gray-900 hover:text-gray-600">
                    {position.name}
                  </a>
                  <p className="text-gray-500">{position.members} Members</p>
                </div>
                <div className="flex-shrink-0 pr-2">
                  <button
                    type="button"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-polar-300 focus:ring-offset-2"
                  >
                    <span className="sr-only">Open options</span>
                    <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </li>
          )})}
        </ul>
        {showModal &&
          <Modal data={{ ...update, modalHandler }} open={showModal} setOpen={() => { setShowModal(false) }} title="Add User" children={AddPosition} />
        }
      </div>
    </>
  )
}

function AddPosition({ data }: any) {

  const update = data.isUpdate
  const id = data?.data?.id || null
  const { modalHandler } = data

  const { register, handleSubmit, setValue, watch } = useForm();

  const [addUser] = useMutation(addPositionOne)
  const [updateUser] = useMutation(updatePositionById)

  function submit(data: any) {
    if (update) {
      updateUser({ variables: { id: id, object: data }, refetchQueries: [{ query: getPositions }], onCompleted: () => modalHandler(false) })
      return
    }

    addUser({
      variables: { object: data }, refetchQueries: [{ query: getPositions }], onCompleted: () => modalHandler(false)
    })
  }

  const color = watch('bg_color')

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="space-y-12 sm:space-y-16">
        <div>
          <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                  Position Name
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    {...register("name", { required: true })}
                    defaultValue={data?.data?.name || ''}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label htmlFor="bg_color" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                  Identify Color
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    {...register("bg_color", { required: true })}
                    defaultValue={data?.data?.bg_color || ''}
                  />
                </div>
              </div>
              <SketchPicker
                color={color}
                onChangeComplete={(color) => {
                  console.log(color, 'color')
                  setValue('bg_color', color.hex)
                }
                }
              />
              <ColorPicker />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md bg-gradient-to-br from-polar-400 to-polar-300 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-polar-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}