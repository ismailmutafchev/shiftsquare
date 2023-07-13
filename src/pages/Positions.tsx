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
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { deleteShiftsByPositionId } from '../queries/shift/mutations'
import { getShifts } from '../queries/shift/queries'
import { endOfMonth, startOfMonth } from 'date-fns'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Positions() {
  const [showModal, setShowModal] = useState(false)
  const [update, setUpdate] = useState({
    isUpdate: false,
    data: {}
  })

  const { loading, error, data, client } = useQuery(getPositions)
  const [deletePosition] = useMutation(deletePositionById, { refetchQueries: [{ query: getPositions }] })
  const [deleteShiftsByPosition] = useMutation(deleteShiftsByPositionId, {
    refetchQueries: [
      {
        query: getShifts,
        variables: {
          start: startOfMonth(new Date()),
          end: endOfMonth(new Date()),
        },
      },
    ],
  })

  if (loading) return <LoadingAnimation />
  if (error) return <p>Error :(</p>;

  const positions = data?.position

  function modalHandler(state: boolean) {
    setShowModal(state)
  }

  async function deleteHandler(id: string) {
    const result = await deleteShiftsByPosition({ variables: { position_id: id } });
    if (result) {
      deletePosition({ variables: { id } });
      client.resetStore();
    }
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
            className="inline-flex items-center rounded-md bg-polar-800/90 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-polar-800/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-800/90"
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
                      backgroundColor: position.bg_color,
                      opacity: 0.8
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
                        <Menu.Items className="absolute right-0 top-6 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="px-1 py-1 ">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => {
                                    setShowModal(true), setUpdate({ isUpdate: true, data: { position } })
                                  }}
                                  className={`${active ? 'bg-polar-800/90 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
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
                                  className={`${active ? 'bg-polar-800/90 text-white' : 'text-gray-900'
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
                                  className={`${active ? 'bg-polar-800/90 text-white' : 'text-gray-900'
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
                                  className={`${active ? 'bg-polar-800/90 text-white' : 'text-gray-900'
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
                                    ? deleteHandler(position.id)
                                    : null
                                  }
                                  className={`${active ? 'bg-polar-800/90 text-white' : 'text-gray-900'
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
        <Modal data={{ ...update, modalHandler }} open={showModal} setOpen={() => { setShowModal(false) }} title={
          update.isUpdate ? 'Edit Position' : 'Add Position'
        } children={AddPosition} />
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
            <div className="sm:grid sm:grid-rows-3 sm:items-start">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Position Name
              </label>
              <div className="mt-2 sm:row-span-2 sm:mt-0 py-1">
                <input
                  className='w-full row-span-2 p-1 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90'
                  {...register("name", { required: true })}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-rows-10 sm:items-start">
              <label htmlFor="bg_color" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Identify Color
              </label>
              <div className="mt-2 sm:row-span-2 sm:mt-0 py-1">
                <input
                  className='w-full row-span-2 p-1 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90'
                  {...register("bg_color", { required: true })}
                />
                <div className='row-span-3'>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="py-2 w-full flex justify-between items-center">
                          Show Color Picker<ChevronRightIcon className={`${open ? 'rotate-90 transform' : ''} w-4 h-4`} />
                        </Disclosure.Button>
                        <Transition
                          enter="transition duration-200 delay-50 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-100 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Disclosure.Panel className="text-gray-500">
                            <div className='w-full flex justify-center'>
                              <SketchPicker
                                styles={{
                                  default: {
                                    picker: {
                                      width: '60%',
                                      borderRadius: '10px',
                                    },
                                    saturation: {
                                      width: '100% !important',
                                      borderRadius: '10px',
                                    },
                                    alpha: {
                                      display: 'none'
                                    },
                                    activeColor: {
                                      borderRadius: '5px',
                                    },
                                    color: {
                                      borderRadius: '5px',
                                    }
                                  }

                                  // picker: CSSProperties;
                                  // saturation: CSSProperties;
                                  // Saturation: CSSProperties;
                                  // controls: CSSProperties;
                                  // sliders: CSSProperties;
                                  // color: CSSProperties;
                                  // activeColor: CSSProperties;
                                  // hue: CSSProperties;
                                  // Hue: CSSProperties;
                                  // alpha: CSSProperties;
                                  // Alpha: CSSProperties;
                                }}
                                color={color}
                                onChangeComplete={(color: any) => {
                                  setValue('bg_color', color.hex)
                                }
                                }
                              />
                            </div>
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-polar-800/90 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-polar-800/90 hover:ring-1 ring-polar-800/90  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-800/90"
        >
          Submit
        </button>
      </div>
    </form>
  )
}