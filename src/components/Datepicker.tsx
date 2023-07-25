import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { addMonths, eachDayOfInterval, endOfMonth, endOfWeek, format, isSameDay, isSameMonth, isToday, startOfMonth, startOfWeek, subMonths } from "date-fns"
import React, { useState } from "react"

//@ts-ignore
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

type DatepickerProps = {
    selectedDay: Date,
    setSelectedDay: React.Dispatch<React.SetStateAction<Date>>,
    firstDayInRange: Date,
    setFirstDayInRange: React.Dispatch<React.SetStateAction<Date>>,
    firstDateInRange?: Date,
    lastDateInRange?: Date,
}


export default function Datepicker({
    selectedDay,
    setSelectedDay,
}: DatepickerProps) {
    const [selectedMonth, setSelectedMonth] = useState(new Date())

    const days = eachDayOfInterval({
        start: new Date(startOfWeek(startOfMonth(selectedMonth), { weekStartsOn: 1 })),
        end: new Date(endOfWeek(endOfMonth(selectedMonth), { weekStartsOn: 1 })),
    })
    return (
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
                                    isSelected && isToday(day) && 'bg-polar-800/90 shadow-sm',
                                    isSelected && !isToday(day) && 'bg-polar-700/80',
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
