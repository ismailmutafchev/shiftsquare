import { useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { addDays, addMonths, eachDayOfInterval, eachMinuteOfInterval, endOfDay, endOfMonth, endOfWeek, format, getHours, getMinutes, isSameDay, isSameMonth, isToday, startOfDay, startOfMonth, startOfWeek, subDays, subMonths } from 'date-fns'
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { LoadingAnimation } from '../assets/AnimationComponents/AnimationComponents';
import { getShifts } from '../queries/shift/queries';
import { useQuery } from '@apollo/client';

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

    const days = eachDayOfInterval({
        start: new Date(startOfWeek(startOfMonth(selectedMonth))),
        end: new Date(endOfWeek(endOfMonth(selectedMonth))),
    })

    const { loading, data } = useQuery(getShifts, {
        variables: {
            start: startOfDay(selectedMonth),
            end: endOfDay(selectedMonth),
        },
    })

    console.log(data, 'xx23')

    const { isLoading, isAuthenticated, error, user, logout } =
        useAuth0();

    if (isLoading) {
        return <LoadingAnimation />;
    }
    if (error) {
        return <div>Oops... {error.message}</div>;
    }

    const startTimeStr = data.shift[0].start
    const finishTimeStr = data.shift[0].end

    let startHour = getHours(new Date(startTimeStr)) * 12
    let startMinute = getMinutes(new Date(startTimeStr)) / 5


    const startNumber = startHour + startMinute + 2

    let endHour = getHours(new Date(finishTimeStr)) * 12
    let endMinute = getMinutes(new Date(finishTimeStr)) / 5

    const endNumber = (endHour + endMinute + 2) - startNumber

    const timeSlots = eachMinuteOfInterval({
        start: startOfDay(selectedDay),
        end: endOfDay(selectedDay),
    }, { step: 30 })

    const weekDays = eachDayOfInterval({
        start: startOfWeek(selectedDay),
        end: endOfWeek(selectedDay),
    })



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
                            type="button"
                            className="ml-6 rounded-md bg-gradient-to-br from-polar-800 to-polar-300 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-polar-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-600"
                        >
                            Add Shift
                        </button>
                    </div>
                    {/* <Menu as="div" className="relative ml-6 md:hidden">
                                <Menu.Button className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Open menu</span>
                                    <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
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
                                    <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Create event
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </div>
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Go to today
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </div>
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Day view
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Week view
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Month view
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Year view
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu> */}
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
                                    gridTemplateRows: 'repeat(12, minmax(0, 1fr))',
                                }}
                            >
                                <li className="relative mt-px flex" style={{ gridColumn: `${startNumber} / span ${endNumber}` }}>
                                </li >
                                <li className="relative mt-px flex" style={{ gridColumn: `${startNumber} / span ${endNumber}` }}>
                                    <a
                                        href="#"
                                        className="group items-center justify-center absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-red-50 p-2 text-xs leading-5 hover:bg-red-100"
                                    >
                                        <p className="font-semibold text-polar-900 text-base ">Elwira</p>
                                    </a>
                                </li>
                            </ol >
                        </div >
                    </div >
                </div >
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
            </div >
        </div >
    )
}
