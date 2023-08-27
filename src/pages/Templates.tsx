import { ArchiveBoxIcon, ArrowsPointingOutIcon, EllipsisVerticalIcon, PencilSquareIcon, PlusIcon, Square2StackIcon, TrashIcon } from "@heroicons/react/24/outline"
import { Fragment, useState } from "react"
import { useMutation, useQuery } from "@apollo/client"
import { getTemplate, getTemplates } from "../queries/templates/queries"
import { deleteTemplateById } from "../queries/templates/mutations"
import { LoadingAnimation } from "../assets/AnimationComponents/AnimationComponents"
import { Menu, Transition } from "@headlessui/react"
import { useFieldArray, useForm } from 'react-hook-form'
import { useSession } from "../providers/Session"
import { Resizable, ResizableBox } from 'react-resizable';

type FormValues = {
  mondayShifts: {
    position: string;
    start: string;
    end: string;
  }[],
  tuesdayShifts: {
    position: string;
    start: string;
    end: string;
  }[],
  wednesdayShifts: {
    position: string;
    start: string;
    end: string;
  }[],
  thursdayShifts: {
    position: string;
    start: string;
    end: string;
  }[],
  fridayShifts: {
    position: string;
    start: string;
    end: string;
  }[],
  saturdayShifts: {
    position: string;
    start: string;
    end: string;
  }[],
  sundayShifts: {
    position: string;
    start: string;
    end: string;
  }[],
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Templates() {
  const [showBuilder, setShowBuilder] = useState(false)
  const [update, setUpdate] = useState({
    isUpdate: false,
    data: {}
  })
  const [size, setSize] = useState({
    width: 200,
    height: 200
  });

  function onResize(event: any, { element, size, handle }: any) {
    setSize({ width: size.width, height: size.height });
  }

  const {
    register,
    control,
  } = useForm<FormValues>({
    mode: "onBlur"
  });
  const { fields: monday, append: appendMonday, remove: removeMonday } = useFieldArray({
    name: "mondayShifts", // unique name for your Field Array
    control, // control props comes from useForm (optional: if you are using FormContext)
  });
  const { fields: tuesday, append: appendTuesday, remove: removeTuesday } = useFieldArray({
    name: "tuesdayShifts", // unique name for your Field Array
    control, // control props comes from useForm (optional: if you are using FormContext)
  });
  const { fields: wednesday, append: appendWednesday, remove: removeWednesday } = useFieldArray({
    name: "wednesdayShifts", // unique name for your Field Array
    control, // control props comes from useForm (optional: if you are using FormContext)
  });
  const { fields: thursday, append: appendThursday, remove: removeThursday } = useFieldArray({
    name: "thursdayShifts", // unique name for your Field Array
    control, // control props comes from useForm (optional: if you are using FormContext)
  });
  const { fields: friday, append: appendFriday, remove: removeFriday } = useFieldArray({
    name: "fridayShifts", // unique name for your Field Array
    control, // control props comes from useForm (optional: if you are using FormContext)
  });
  const { fields: saturday, append: appendSaturday, remove: removeSaturday } = useFieldArray({
    name: "saturdayShifts", // unique name for your Field Array
    control, // control props comes from useForm (optional: if you are using FormContext)
  });
  const { fields: sunday, append: appendSunday, remove: removeSunday } = useFieldArray({
    name: "sundayShifts", // unique name for your Field Array
    control, // control props comes from useForm (optional: if you are using FormContext)
  });


  const { positions } = useSession()


  const { loading, error, data } = useQuery(getTemplates)
  const [deleteTemplate] = useMutation(deleteTemplateById, { refetchQueries: [{ query: getTemplate }] })

  if (loading) return <LoadingAnimation />
  if (error) return <p>Error :(</p>;

  const templates = data?.template

  // function modalHandler(state: boolean) {
  //   setShowBuilder(state)
  // }

  const deleteHandler = (id: string) => {
    deleteTemplate({ variables: { id } })
  }

  const allDays = [{
    day: "Monday",
    shifts: monday,
    append: appendMonday,
    remove: removeMonday
  },
  {
    day: "Tuesday",
    shifts: tuesday,
    append: appendTuesday,
    remove: removeTuesday
  },
  {
    day: "Wednesday",
    shifts: wednesday,
    append: appendWednesday,
    remove: removeWednesday
  },
  {
    day: "Thursday",
    shifts: thursday,
    append: appendThursday,
    remove: removeThursday
  },
  {
    day: "Friday",
    shifts: friday,
    append: appendFriday,
    remove: removeFriday
  },
  {
    day: "Saturday",
    shifts: saturday,
    append: appendSaturday,
    remove: removeSaturday
  },
  {
    day: "Sunday",
    shifts: sunday,
    append: appendSunday,
    remove: removeSunday
  }
  ]



  return (
    <>
      <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
        <h3 className="text-base font-semibold leading-6 text-gray-900">Templates</h3>
        <div className="mt-3 sm:ml-4 sm:mt-0">
          <button
            onClick={() => {
              setShowBuilder(true), setUpdate({ isUpdate: false, data: {} })
            }}
            type="button"
            className="inline-flex items-center rounded-md bg-polar-800/90 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-polar-800/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-800/90"
          >
            <PlusIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
            Build Template
          </button>
        </div>
      </div >
      {
        showBuilder ?
          // <div>
          //   <h1>
          //     {update.isUpdate ? "Update Template" : "Build Template"}
          //   </h1>
          //   <div>
          //     {
          //       allDays.map((day, index) => {
          //         return (
          //           <div key={index}>
          //             <h1>
          //               {day.day}
          //             </h1>
          //             <div>
          //               <button onClick={() => day.append({
          //                 position: "",
          //                 start: "",
          //                 end: ""
          //               })}>Add Shift</button>
          //               {day.shifts.map((shift, index) => {
          //                 const toRegPosition = `${day.day.toLowerCase()}Shifts.${index}.position` as "mondayShifts.0.position" | "tuesdayShifts.0.position" | "wednesdayShifts.0.position" | "thursdayShifts.0.position" | "fridayShifts.0.position" | "saturdayShifts.0.position" | "sundayShifts.0.position"
          //                 const toRegStart = `${day.day.toLowerCase()}Shifts.${index}.start` as "mondayShifts.0.start" | "tuesdayShifts.0.start" | "wednesdayShifts.0.start" | "thursdayShifts.0.start" | "fridayShifts.0.start" | "saturdayShifts.0.start" | "sundayShifts.0.start"
          //                 const toRegEnd = `${day.day.toLowerCase()}Shifts.${index}.end` as "mondayShifts.0.end" | "tuesdayShifts.0.end" | "wednesdayShifts.0.end" | "thursdayShifts.0.end" | "fridayShifts.0.end" | "saturdayShifts.0.end" | "sundayShifts.0.end"
          //                 return (
          //                   <div key={shift.id}>
          //                     <select {...register(toRegPosition)} >
          //                       {positions && positions.map((position: any) => {
          //                         return (
          //                           <option key={position.id} value={position.id}>{position.name}</option>
          //                         )
          //                       })}
          //                     </select>
          //                     <input type="time" step={300} {...register(toRegStart)} />
          //                     <input type="time" step={300} {...register(toRegEnd)} />
          //                     <button onClick={() => day.remove(index)}>Delete</button>
          //                   </div>
          //                 )
          //               })}
          //               </div>
          //           </div>
          //         )
          //       })
          //     }
          //   </div>
          // </div>
          <div className="w-full border items-center flex justify-center">
            <ResizableBox height={size.height} width={size.width} onResize={onResize} resizeHandles={['e','w']}>
              <div className="border w-full" style={{ width: size.width + 'px', height: size.height + 'px' }}>
                <span className="bg-red-300">Contents</span>
              </div>
            </ResizableBox>
            <ResizableBox height={size.height} width={size.width} onResize={onResize} resizeHandles={['e','w']}>
              <div className="border w-full" style={{ width: size.width + 'px', height: size.height + 'px' }}>
                <span className="bg-red-300">Contents</span>
              </div>
            </ResizableBox>
          </div>
          :
          <div>
            <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {templates && templates.map((template: any) => {
                return (
                  <li key={template.name} className="col-span-1 flex rounded-md shadow-sm">
                    <div
                      className={classNames(
                        'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
                      )}
                      style={
                        {
                          backgroundColor: template.bgColor,
                          opacity: 0.8
                        }
                      }
                    >
                      {/* {template.name.slice(0, 2).toUpperCase()} */}t
                    </div>
                    <div className="flex flex-1 items-center justify-between rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                      <div className="flex-1 truncate px-4 py-2 text-sm">
                        <a href={template.href} className="font-medium text-gray-900 hover:text-gray-600">
                          {template.name}
                        </a>
                        <p className="text-gray-500">{template.members} Members</p>
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
                                        setShowBuilder(true), setUpdate({ isUpdate: true, data: { template } })
                                      }}
                                      className={`${active ? 'bg-polar-800/90 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                      <PencilSquareIcon
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
                                      onClick={() => confirm('Are you sure you want to delete this template?')
                                        ? deleteHandler(template.id)
                                        : null
                                      }
                                      className={`${active ? 'bg-polar-800/90 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                      <TrashIcon
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
          </div>
      }
    </>
  )
}

function AddPosition({ data }: any) {

  const update = data.isUpdate
  const id = data?.data?.template?.id || null
  const { modalHandler, isUpdate } = data

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: isUpdate ? data?.data?.template?.name : '',
      shifts: isUpdate ? data?.data?.template?.shifts : '',
    }
  });

  const [addTemplate] = useMutation(insertTemplate)
  const [updateTemplate] = useMutation(updateTemplateById)

  function submit(data: any) {
    if (update) {
      updateTemplate({ variables: { id: id, object: data }, refetchQueries: [{ query: getTemplate }], onCompleted: () => modalHandler(false) })
      return
    }

    addTemplate({
      variables: { object: data }, refetchQueries: [{ query: getTemplate }], onCompleted: () => modalHandler(false)
    })
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="space-y-12 sm:space-y-16">
        <div>
          <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-rows-3 sm:items-start">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Template Name
              </label>
              <div className="mt-2 sm:row-span-2 sm:mt-0 py-1">
                <input
                  className='w-full row-span-2 p-1 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90'
                  {...register("name", { required: true })}
                />
              </div>
              <div className="w-full px-4 pt-16">
                <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2 overflow-scroll max-h-96">
                  {/* {days.map((day) => {
                    return (
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-polar-100 px-4 py-2 text-left text-sm font-medium text-polar-900 hover:bg-polar-200 focus:outline-none focus-visible:ring focus-visible:ring-polar-500 focus-visible:ring-opacity-75">
                          <span>{day.name}</span>
                          <ChevronUpIcon
                            className={`${open ? 'rotate-180 transform' : ''
                              } h-5 w-5 text-polar-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          <div>
                            
                            <button>
                              <PlusIcon className="h-5 w-5 text-polar-500" />
                            </button>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                    )
                  })} */}
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