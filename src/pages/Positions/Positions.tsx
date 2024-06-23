import { ArchiveBoxIcon, ArrowsPointingOutIcon, EllipsisVerticalIcon, Square2StackIcon, TrashIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'
import Modal from '../../components/Modal'
import { PencilSquareIcon, PlusIcon } from '@heroicons/react/24/solid'
import { deletePositionById } from '../../queries/position/mutations'
import { getPositions } from '../../queries/position/queries'
import { useMutation, useQuery } from '@apollo/client'
import { LoadingAnimation } from '../../assets/AnimationComponents/AnimationComponents'
import { Menu, Transition } from '@headlessui/react'
import { deleteShiftsByPositionId } from '../../queries/shift/mutations'
import { getShifts } from '../../queries/shift/queries'
import { endOfMonth, startOfMonth } from 'date-fns'
import { AddPosition } from './component/PositionModal'
import { PositionsQuery } from '../../gql/graphql'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type GetPositions = PositionsQuery['position']
type Position = GetPositions[0]

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

  const positions: GetPositions = data?.position

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
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between py-10">
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
          {positions && positions.map((position: Position) => {
            return (
              <li key={position.name} className="col-span-1 flex rounded-md shadow-sm">
                <div
                  className={classNames(
                    'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
                  )}
                  style={
                    {
                      backgroundColor: position.bgColor as string,
                      opacity: 0.8
                    }
                  }
                >
                  {position.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex flex-1 items-center justify-between rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                  <div className="flex-1 truncate px-4 py-2 text-sm">
                    <a className="font-medium text-gray-900 hover:text-gray-600">
                      {position.name}
                    </a>
                    <p className="text-gray-500">Members</p>
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
                                    color={position.bgColor as string}
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
                                    color={position.bgColor as string}
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
                                    color={position.bgColor as string}
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
                                    color={position.bgColor as string}
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
                                    color={position.bgColor as string}
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
    </div>
  )
}