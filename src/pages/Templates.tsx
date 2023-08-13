import { ArchiveBoxIcon, ArrowsPointingOutIcon, ChevronUpIcon, EllipsisVerticalIcon, PencilSquareIcon, PlusIcon, Square2StackIcon, TrashIcon } from "@heroicons/react/24/outline"
import Modal from "../components/Modal"
import { Fragment, useState } from "react"
import { useMutation, useQuery } from "@apollo/client"
import { getTemplate, getTemplates } from "../queries/templates/queries"
import { deleteTemplateById, insertTemplate, updateTemplateById } from "../queries/templates/mutations"
import { LoadingAnimation } from "../assets/AnimationComponents/AnimationComponents"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { useFieldArray, useForm } from 'react-hook-form'
import { useSession } from "../providers/Session"
import { fi } from "date-fns/locale"

type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

type FormValues = {
  shift: {
    day: Day;
    position: string;
    start: string;
    end: string;
  } [];
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

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      shift: []
    },
    mode: "onBlur"
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    name: "shift", // unique name for your Field Array
    control, // control props comes from useForm (optional: if you are using FormContext)
  },
  );

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

  const days:Day[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  console.log(fields)

 const shift = watch("shift");
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
        showBuilder ? <div>
          <h1>
            {update.isUpdate ? "Update Template" : "Build Template"}
          </h1>
          <div>
      <form
      //  onSubmit={handleSubmit(onSubmit)}
       >
        {days.map((day:Day, index) => {
          return (
            <>
            <div key={day}>
              <h2>{day}</h2>
              {
                fields.map((field, index) => {
                  return (
                    <div key={field.id}>
                      <input
                        placeholder="start"
                        type="time"
                        {...register(`shift.${index}.start` as const, {
                          valueAsNumber: false,
                          required: true
                        })}
                      />
                      <input
                        placeholder="end"
                        type="time"
                        {...register(`shift.${index}.end` as const, {
                          valueAsNumber: false,
                          required: true
                        })}
                      />
                    </div>
                  )
                })
              }
              <section className={"section"} key={day}>
                <select
                  {...register(`shift.${index}.position` as const, {
                    required: true
                  })}

                >
                  {positions && positions.map((position: any) => {
                    return (
                      <option value={position.name}>{position.name}</option>
                    )
                  })}
                </select>
                <input
                  placeholder="start"
                  type="time"
                  {...register(`shift.${index}.start` as const, {
                    valueAsNumber: false,
                    required: true
                  })}
                />
                <input
                  placeholder="end"
                  type="time"
                  {...register(`shift.${index}.end` as const, {
                    valueAsNumber: false,
                    required: true
                  })}
                />
                <button type="button" onClick={() => remove(index)}>
                  DELETE
                </button>
        <button
          type="button"
          onClick={() =>
            append({
              day: day,
              position: shift[index].position,
              start: shift[index].start,
              end: shift[index].end,
            })
          }
        >
          APPEND
        </button>
              </section>
            </div>
            </>
          );
        })}

        {/* <Total control={control} /> */}

        <input type="submit" />
      </form>
    </div>
        </div>
        :
      <div>
        <button onClick={() => {
          append({ position: "Front Grill", start: "8:00", end: "16:00", break: "12:00", hours: "8:00", rate: "10.00" })
        }}>Append</button>
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
                      backgroundColor: template.bg_color,
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
                                    setShowModal(true), setUpdate({ isUpdate: true, data: { template } })
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

// function AddPosition({ data }: any) {

//   const update = data.isUpdate
//   const id = data?.data?.template?.id || null
//   const { modalHandler, isUpdate } = data

//   const { register, handleSubmit } = useForm({
//     defaultValues: {
//       name: isUpdate ? data?.data?.template?.name : '',
//       shifts: isUpdate ? data?.data?.template?.shifts : '',
//     }
//   });

//   const [addTemplate] = useMutation(insertTemplate)
//   const [updateTemplate] = useMutation(updateTemplateById)

//   function submit(data: any) {
//     if (update) {
//       updateTemplate({ variables: { id: id, object: data }, refetchQueries: [{ query: getTemplate }], onCompleted: () => modalHandler(false) })
//       return
//     }

//     addTemplate({
//       variables: { object: data }, refetchQueries: [{ query: getTemplate }], onCompleted: () => modalHandler(false)
//     })
//   }

//   return (
//     <form onSubmit={handleSubmit(submit)}>
//       <div className="space-y-12 sm:space-y-16">
//         <div>
//           <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
//             <div className="sm:grid sm:grid-rows-3 sm:items-start">
//               <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
//                 Template Name
//               </label>
//               <div className="mt-2 sm:row-span-2 sm:mt-0 py-1">
//                 <input
//                   className='w-full row-span-2 p-1 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90'
//                   {...register("name", { required: true })}
//                 />
//               </div>
//               <div className="w-full px-4 pt-16">
//                 <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2 overflow-scroll max-h-96">
//                   {/* {days.map((day) => {
//                     return (
//                   <Disclosure>
//                     {({ open }) => (
//                       <>
//                         <Disclosure.Button className="flex w-full justify-between rounded-lg bg-polar-100 px-4 py-2 text-left text-sm font-medium text-polar-900 hover:bg-polar-200 focus:outline-none focus-visible:ring focus-visible:ring-polar-500 focus-visible:ring-opacity-75">
//                           <span>{day.name}</span>
//                           <ChevronUpIcon
//                             className={`${open ? 'rotate-180 transform' : ''
//                               } h-5 w-5 text-polar-500`}
//                           />
//                         </Disclosure.Button>
//                         <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
//                           <div>
                            
//                             <button>
//                               <PlusIcon className="h-5 w-5 text-polar-500" />
//                             </button>
//                           </div>
//                         </Disclosure.Panel>
//                       </>
//                     )}
//                   </Disclosure>
//                     )
//                   })} */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-6 flex items-center justify-end gap-x-6">
//         <button
//           type="submit"
//           className="inline-flex items-center rounded-md bg-polar-800/90 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-polar-800/90 hover:ring-1 ring-polar-800/90  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-800/90"
//         >
//           Submit
//         </button>
//       </div>
//     </form>
//   )
// }