import { ArchiveBoxIcon, ArrowsPointingOutIcon, EllipsisVerticalIcon, Square2StackIcon, TrashIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'
import Modal from '../components/Modal'
import { PencilSquareIcon, PlusIcon } from '@heroicons/react/24/solid'
import { addPositionOne, deletePositionById, updatePositionById } from '../queries/position/mutations'
import { getPositions } from '../queries/position/queries'
import { useMutation, useQuery } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { LoadingAnimation } from '../assets/AnimationComponents/AnimationComponents'
import { SketchPicker } from 'react-color'
import { Menu, Transition } from '@headlessui/react'

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
  const [deletePosition] = useMutation(deletePositionById, { refetchQueries: [{ query: getPositions }] })

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
            return (
              <li key={position.name} className="col-span-1 flex rounded-md shadow-sm">
                <div
                  className={classNames(
                    'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
                  )}
                  style={
                    {
                      backgroundColor: position.bg_color
                    }
                  }
                >
                  {position.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex flex-1 items-center justify-between rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                  <div className="flex-1 truncate px-4 py-2 text-sm">
                    <a href={position.href} className="font-medium text-gray-900 hover:text-gray-600">
                      {position.name}
                    </a>
                    <p className="text-gray-500">{position.members} Members</p>
                  </div>
                  <div className="flex-shrink-0 pr-2 relative">
                    <Menu as="div" className="relative text-left">
                      <Menu.Button className="flex">
                        <EllipsisVerticalIcon className="h-5 w-5 hover:text-gray-500" aria-hidden="true" />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="px-1 py-1 ">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => {
                                    setShowModal(true), setUpdate({ isUpdate: true, data: { position } })
                                  }}
                                  className={`${active ? 'bg-gray-900/80 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  <PencilSquareIcon
                                    color={position.bg_color}
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                  Edit
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${active ? 'bg-gray-900/80 text-white' : 'text-gray-900'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  <Square2StackIcon
                                    color={position.bg_color}
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                  Duplicate
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${active ? 'bg-gray-900/80 text-white' : 'text-gray-900'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  <ArchiveBoxIcon
                                    color={position.bg_color}
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                  Archive
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${active ? 'bg-gray-900/80 text-white' : 'text-gray-900'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  <ArrowsPointingOutIcon
                                    color={position.bg_color}
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                  Move
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => confirm('Are you sure you want to delete this position?')
                                    ? deletePosition({ variables: { id: position.id }, refetchQueries: [{ query: getPositions }] })
                                    : null
                                  }
                                  className={`${active ? 'bg-gray-900/80 text-white' : 'text-gray-900'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  <TrashIcon
                                    color={position.bg_color}
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                  Delete
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
        {showModal &&
          <Modal data={{ ...update, modalHandler }} open={showModal} setOpen={() => { setShowModal(false) }} title={
            update.isUpdate ? 'Update Position' : 'Add Position'
          } children={AddPosition} />
        }
      </div>
    </>
  )
}

function AddPosition({ data }: any) {

  const update = data.isUpdate
  const id = data?.data?.position?.id || null
  const { modalHandler, isUpdate } = data

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      name: isUpdate ? data?.data?.position?.name : '',
      bg_color: isUpdate ? data?.data?.position?.bg_color : '#000000',
    }
  });

  const [addUser] = useMutation(addPositionOne)
  const [updatePosition] = useMutation(updatePositionById)

  function submit(data: any) {
    if (update) {
      updatePosition({ variables: { id: id, object: data }, refetchQueries: [{ query: getPositions }], onCompleted: () => modalHandler(false) })
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
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                  Position Name
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    {...register("name", { required: true })}
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
                  />
                </div>
              </div>
              <SketchPicker
                color={color}
                onChangeComplete={(color: any) => {
                  setValue('bg_color', color.hex)
                }
                }
              />
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