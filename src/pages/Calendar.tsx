import { Fragment, useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { addDays, addMonths, eachDayOfInterval, eachMinuteOfInterval, endOfDay, endOfMonth, endOfWeek, format, getHours, getMinutes, isSameDay, isSameMonth, isToday, set, startOfDay, startOfMonth, startOfWeek, subDays, subMonths } from 'date-fns'
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { LoadingAnimation } from '../assets/AnimationComponents/AnimationComponents';
import { getShifts } from '../queries/shift/queries';
import { useMutation, useQuery } from '@apollo/client';
import Modal from '../components/Modal';
import { useForm } from 'react-hook-form';
import { CalendarDaysIcon, CheckIcon, PencilSquareIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useSession } from '../providers/Session';
import { addShiftOne, deleteShiftById, updateShiftById } from '../queries/shift/mutations';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Listbox, Popover, Transition } from '@headlessui/react';

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Calendar() {
  const [selectedMonth, setSelectedMonth] = useState(new Date())
  const [selectedDay, setSelectedDay] = useState(new Date())
  const container = useRef(null)
  const containerNav = useRef(null)
  const containerOffset = useRef(null)
  const [showModal, setShowModal] = useState(false)
  const [update, setUpdate] = useState({
    isUpdate: false,
    data: {}
  })
  const { positions, employees } = useSession();

  const days = eachDayOfInterval({
    start: new Date(startOfWeek(startOfMonth(selectedMonth))),
    end: new Date(endOfWeek(endOfMonth(selectedMonth))),
  })

  const [deleteShift] = useMutation(deleteShiftById, {
    refetchQueries: [
      {
        query: getShifts,
        variables: {
          start: startOfDay(selectedDay),
          end: endOfDay(selectedDay),
        },
      },
    ],
  })


  const { loading, data } = useQuery(getShifts, {
    variables: {
      start: startOfDay(selectedDay),
      end: endOfDay(selectedDay),
    },
  })

  const { isLoading, isAuthenticated, error, user, logout } =
    useAuth0();

  if (isLoading) {
    return <LoadingAnimation />;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  const timeSlots = eachMinuteOfInterval({
    start: startOfDay(selectedDay),
    end: endOfDay(selectedDay),
  }, { step: 30 })

  const weekDays = eachDayOfInterval({
    start: startOfWeek(selectedDay),
    end: endOfWeek(selectedDay),
  })

  function modalHandler(state: boolean) {
    setShowModal(state)
  }

  const [showCalendar, setShowCalendar] = useState(false)

  return (
    <div className="flex h-full flex-col">
      <header className="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4">
        <div>
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            {format(new Date(selectedDay), 'd MMMM yyyy')}
          </h1>
          <p className="mt-1 text-sm text-gray-500">{format(selectedDay, 'iiii')}</p>
        </div>
        <div className="flex items-center">
          <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
            <div
              className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-gray-300"
              aria-hidden="true"
            />
            <button
              type="button"
              className="flex items-center justify-center rounded-l-md py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
              onClick={() => {
                setSelectedMonth(selectedDay)
                setSelectedDay(subDays(selectedDay, 1))
                if (!isSameMonth(selectedDay, subDays(selectedDay, 1))) {
                  setSelectedMonth(subMonths(selectedDay, 1))
                }
              }}
            >
              <span className="sr-only">Previous day</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="hidden px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
            >
              {isToday(selectedDay) ? 'Today' : format(selectedDay, 'd MMMM')}
            </button>
            <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
            <button
              type="button"
              onClick={() => {
                setSelectedMonth(selectedDay)
                setSelectedDay(addDays(selectedDay, 1))
                if (!isSameMonth(selectedDay, addDays(selectedDay, 1))) {
                  setSelectedMonth(addMonths(selectedDay, 1))
                }
              }}
              className="flex items-center justify-center rounded-r-md py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
            >
              <span className="sr-only">Next day</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:ml-4 md:flex md:items-center">
            <div className="ml-6 h-6 w-px bg-gray-300" />
            <button
              type="button"
              onClick={() => {
                setSelectedMonth(selectedDay)
                setSelectedDay(new Date())
                if (!isSameMonth(selectedDay, new Date())) {
                  setSelectedMonth(new Date())
                }
              }}
              className="ml-6 rounded-md bg-white-600 px-3 py-2 text-sm font-semibold text-black shadow-sm border border-gray-300 hover:bg-gray-50 "
            >
              See Today
            </button>
          </div>
          <div className="hidden md:ml-4 md:flex md:items-center">
            <div className="ml-6 h-6 w-px bg-gray-300" />
            <button
              onClick={() => {
                setShowModal(true), setUpdate({ isUpdate: false, data: {} })
              }}
              type="button"
              className="inline-flex items-center rounded-md bg-polar-800/90 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-polar-800/90 hover:ring-1 ring-polar-800/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-800/90"
            >
              <PlusIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
              Add Shift
            </button>
          </div>
          <div className="hidden md:ml-4 md:flex md:items-center">

            <button
              onClick={() => {
                setShowCalendar(!showCalendar)
              }}
              type="button"
              className="inline-flex items-center rounded-md bg-polar-800/90 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-polar-800/90 hover:ring-1 ring-polar-800/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-800/90"
            >
              <CalendarDaysIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      <div className="isolate flex flex-auto overflow-y-scroll bg-white h-[65vh]">
        <div ref={container} className="flex flex-auto flex-col overflow-auto">
          <div
            ref={containerNav}
            className="sticky top-0 z-10 grid flex-none grid-cols-7 bg-white text-xs text-gray-500 shadow ring-1 ring-black ring-opacity-5 md:hidden"
          >
            {
              weekDays.map((day, idx) => {
                const isSelected = selectedDay && isSameDay(selectedDay, day)
                return (
                  <button key={day.toDateString() + idx} onClick={
                    () => {
                      setSelectedDay(day)
                      setSelectedMonth(day)
                      if (!isSameMonth(day, selectedMonth)) {
                        setSelectedMonth(day)
                      }
                    }
                  } type="button" className={
                    classNames(
                      'py-1.5 hover:bg-gray-100 focus:z-10 flex flex-col items-center',
                      isSameMonth(day, selectedMonth) ? 'bg-white' : 'bg-gray-50',
                      (isToday(day) || isSelected) && 'font-semibold',
                      isSelected && 'font-semibold text-polar-600',
                      !isSelected && isSameMonth(day, selectedMonth) && !isToday(day) && 'text-gray-900',
                      !isSelected && !isSameMonth(day, selectedMonth) && !isToday(day) && 'text-gray-400',
                      isToday(day) && !isSelected && 'text-polar-600',
                      idx === 0 && 'rounded-tl-lg',
                      idx === 6 && 'rounded-tr-lg',
                      idx === days.length - 7 && 'rounded-bl-lg',
                      idx === days.length - 1 && 'rounded-br-lg'
                    )} >
                    <span>{format(day, 'E')}</span>
                    {/* Default: "text-gray-900", Selected: "bg-gray-900 text-white", Today (Not Selected): "text-polar-600", Today (Selected): "bg-gradient-to-br from-polar-800 to-polar-300 text-white" */}
                    <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold">
                      {format(day, 'dd')}
                    </span>
                  </button>
                )
              })
            }

          </div>
          <div className="flex w-full flex-auto">
            <div className="h-10  bg-white ring-gray-100" />
            <div className="grid flex-row grid-cols-3 grid-rows-1">
              {/* Vertical lines */}
              <div
                className="row-start-1 col-start-1 grid divide-x divide-gray-100"
                style={{ gridTemplateColumns: 'repeat(48, minmax(3.6rem, 1fr))' }}
              >
                <div ref={containerOffset} className="col-end-1 h-7"></div>
                {timeSlots.map((timeSlot, idx) => (
                  <div key={timeSlot.toString() + idx}>
                    <div className="sticky w-10 items-center justify-center bg-white border flex text-xs leading-5 text-gray-400">
                      {format(timeSlot, 'H:mm')}
                    </div>
                  </div>
                ))}
              </div>

              {/* Events */}
              <ol
                className="col-start-1 col-end-4 row-start-1 grid grid-cols-12"
                style={{
                  gridTemplateColumns: '0 repeat(288, minmax(0.6rem, 1fr)) auto',
                  gridTemplateRows: 'repeat(15, minmax(0, 1fr))',
                }}
              >
                <li className="relative mt-px flex" style={{ gridColumn: `${110} / span ${96}` }}>
                </li >
                {data?.shift.map((shift: any) => {
                  const startTimeStr = shift.start
                  const finishTimeStr = shift.end

                  let startHour = getHours(new Date(startTimeStr)) * 12
                  let startMinute = getMinutes(new Date(startTimeStr)) / 5


                  const startNumber = startHour + startMinute + 2

                  let endHour = getHours(new Date(finishTimeStr)) * 12
                  let endMinute = getMinutes(new Date(finishTimeStr)) / 5

                  const endNumber = (endHour + endMinute + 2) - startNumber
                  return (
                    <Popover key={shift.id} className="relative mt-px flex" style={{ gridColumn: `${startNumber} / span ${endNumber}` }}>
                      {({ open }) => (
                        <>
                          <Popover.Button
                            style={{ backgroundColor: shift.position.bg_color }}
                            className="group no-scrollbar min-h-10 items-center justify-center absolute inset-1 flex flex-col overflow-y-auto rounded-lg opacity-80 p-2 text-xs  hover:opacity-100"
                          >
                            <p className="font-semibold text-black text-base">{
                              `${shift.employee.first_name} (${shift?.position?.name}) `
                            }</p>
                          </Popover.Button>
                          <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel
                              static
                              className="absolute z-10 max-w-sm px-2 -top-8 transform -translate-x-1/2 left-1/2 sm:px-0 "
                            >
                              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="relative grid gap-6 bg-white p-1">
                                  <div className="flex space-x-6 justify-evenly">


                                    <div className='flex items-center col-span-1'>
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setShowModal(true), setUpdate({ isUpdate: true, data: shift })
                                        }}
                                        className="inline-flex items-center rounded-md bg-polar-900/90 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-polar-900/90 hover:ring-1 ring-polar-900/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-900/90"

                                      >
                                        <PencilSquareIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                                        Edit
                                      </button>
                                    </div>
                                    <div className='flex items-center col-span-1'>
                                      <button
                                        type="button"
                                        onClick={() => confirm('Are you sure you want to delete this shift?')
                                          ? deleteShift({ variables: { id: shift.id } })
                                          : null
                                        }
                                        className="inline-flex items-center rounded-md bg-red-600/90 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-red-600/90 hover:ring-1 ring-red-600/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600/90"

                                      >
                                        <TrashIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>

                        </>
                      )}
                    </Popover>
                  )
                })}
              </ol >
            </div >
          </div >
        </div >
        {
          showCalendar && (
            <div className="hidden w-1/2 max-w-md flex-none border-l border-gray-100 px-8 py-10 md:block">
              <div className="flex items-center text-center text-gray-900">
                <button
                  type="button"
                  onClick={() => setSelectedMonth(subMonths(selectedMonth, 1))}
                  className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Previous month</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <div className="flex-auto text-sm font-semibold">{format(selectedMonth, 'MMMM yyyy')}</div>
                <button
                  type="button"
                  onClick={() => setSelectedMonth(addMonths(selectedMonth, 1))}
                  className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Next month</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
                <div>S</div>
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
              </div>
              <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                {days.map((day, dayIdx) => {
                  const isSelected = selectedDay && isSameDay(selectedDay, day)
                  return (
                    <button
                      key={day.toDateString()}
                      onClick={() => setSelectedDay(day)}
                      type="button"
                      className={
                        classNames(
                          'py-1.5 hover:bg-gray-100 focus:z-10',
                          isSameMonth(day, selectedMonth) ? 'bg-white' : 'bg-gray-50',
                          (isToday(day) || isSelected) && 'font-semibold',
                          isSelected && 'text-white',
                          !isSelected && isSameMonth(day, selectedMonth) && !isToday(day) && 'text-gray-900',
                          !isSelected && !isSameMonth(day, selectedMonth) && !isToday(day) && 'text-gray-400',
                          isToday(day) && !isSelected && 'text-polar-600',
                          dayIdx === 0 && 'rounded-tl-lg',
                          dayIdx === 6 && 'rounded-tr-lg',
                          dayIdx === days.length - 7 && 'rounded-bl-lg',
                          dayIdx === days.length - 1 && 'rounded-br-lg'
                        )}
                    >
                      <time
                        dateTime={day.toDateString()}
                        className={classNames(
                          'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                          isSelected && isToday(day) && 'bg-gradient-to-br from-polar-800 to-polar-300',
                          isSelected && !isToday(day) && 'bg-gray-900'
                        )}
                      >
                        {format(day, 'd')}
                      </time>
                    </button>

                  )
                })}
              </div>
            </div>
          )
        }
      </div >

      <Modal data={{ ...update, modalHandler, selectedDay }} open={showModal} setOpen={() => { setShowModal(false) }} {
        ...update.isUpdate ? { title: 'Edit Shift' } : { title: 'Add Shift' }
      } children={AddShift} />
    </div >
  )
}


function AddShift({ data }: any) {

  const update = data.isUpdate
  const id = data?.data?.id || null
  const { modalHandler } = data
  const { selectedDay } = data
  const { employees, positions } = useSession();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      position: data?.data?.position_id || '',
      employee: data?.data?.employee_id || '',
      date: data.data.start ? format(new Date(data.data.start), 'yyyy-MM-dd') : '',
      start: data.data.start ? format(new Date(data.data.start), 'HH:mm') : '',
      end: data.data.end ? format(new Date(data.data.end), 'HH:mm') : ''
    }
  });

  const [addShift] = useMutation(addShiftOne)
  const [updateShift] = useMutation(updateShiftById)

  function submit(data: any) {
    if (update) {
      updateShift({
        variables: {
          id: id,
          start: new Date(data.date + 'T' + data.start).toISOString(),
          end: new Date(data.date + 'T' + data.end).toISOString(),
          employee_id: data.employee,
          position_id: data.position,
        }, refetchQueries: [{
          query: getShifts, variables: {
            start: startOfDay(selectedDay),
            end: endOfDay(selectedDay),
          }
        }], onCompleted: () => modalHandler(false)
      })
      return
    }

    addShift({
      variables: {
        object: {
          start: new Date(data.date + 'T' + data.start).toISOString(),
          end: new Date(data.date + 'T' + data.end).toISOString(),
          employee_id: data.employee,
          position_id: data.position,
        }
      }, refetchQueries: [{
        query: getShifts, variables: {
          start: startOfDay(selectedDay),
          end: endOfDay(selectedDay),
        }
      }], onCompleted: () => modalHandler(false)
    })
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="space-y-12 sm:space-y-16">
        <div>
          <div className="mt-10 space-y-8 pb-12 sm:space-y-0 sm:divide-y sm:pb-0">
            <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
              <label htmlFor="first-name" className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Position
              </label>
              <select
                className='w-full row-span-2 p-1 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90'
                {...register("position", { required: true })}
              >
                {
                  positions?.map((position: any) => (
                    <option key={position.id} value={position.id}>{position.name}</option>
                  ))
                }
              </select>
            </div>

            <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
              <label htmlFor="last-name" className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Employee
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <select
                  className='w-full row-span-2 p-1 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90'
                  {...register("employee", { required: true })}
                >
                  {
                    employees?.map((employee: any) => (
                      <option key={employee.id} value={employee.id}>{employee.last_name}, {employee.first_name}</option>
                    ))
                  }
                </select>
              </div>
            </div>

            <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
              <label htmlFor="email" className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Date
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type='date'
                  className='w-full row-span-2 p-1 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90'
                  {...register("date", { required: true })}
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
              <label htmlFor="email" className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Start
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type='time'
                  className='w-full row-span-2 p-1 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90'
                  {...register("start", { required: true })}
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
              <label htmlFor="email" className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                End
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type='time'
                  className='w-full row-span-2 p-1 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-polar-700 focus:border-polar-800/90'
                  {...register("end", { required: true })}
                />
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