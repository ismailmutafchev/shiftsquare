import { useQuery } from "@apollo/client"
import { endOfDay, endOfWeek, format, startOfDay, startOfWeek } from "date-fns"
import { Fragment, useState } from "react"
import { getHoursByPosition, getWorkingHours } from "../queries/shift/queries"
import { LoadingAnimation } from "../assets/AnimationComponents/AnimationComponents"
// import Datepicker from "tailwind-datepicker-react"
import { CalendarDaysIcon, ChevronDownIcon, ChevronLeftIcon, XMarkIcon } from "@heroicons/react/24/outline"
import Datepicker from "../components/Datepicker"
import { Menu, Transition } from "@headlessui/react"


export default function Dashboard() {
    // const [datesRange, setDatesRange] = useState<DatesType>(
    //     {
    //         startDate: startOfWeek(new Date(), { weekStartsOn: 1 }),
    //         endDate: endOfWeek(new Date(), { weekStartsOn: 1 }),
    //     }
    // )
    const [startDate, setStartDate] = useState<Date>(new Date())
    const [endDate, setEndDate] = useState<Date>(new Date())
    const [showStart, setShowStart] = useState<boolean>(false)
    const [showEnd, setShowEnd] = useState<boolean>(false)
    const handleStartChange = (selectedDate: Date) => {
        setStartDate(selectedDate)
    }
    const handleEndChange = (selectedDate: Date) => {
        setEndDate(selectedDate)
    }
    const handleCloseStart = (state: boolean) => {
        setShowStart(state)
        setShowEnd(false)
    }
    const handleCloseEnd = (state: boolean) => {
        setShowEnd(state)
        setShowStart(false)
    }


    const { loading: totalHoursLoading, data: totalHours, error: totalHoursError } = useQuery(getWorkingHours, {
        variables: {
            start: startOfDay(startDate),
            end: endOfDay(endDate),
            position_id: '8c91c4d2-581e-4d14-800c-df32d3f1a482'
        },
    })

    const { loading: hoursByPositionLoading, data: hoursByPosition, error: hoursByPositionError } = useQuery(getHoursByPosition, {
        variables: {
            start: startOfDay(startDate),
            end: endOfDay(endDate),
        },
    })

    if (totalHoursLoading || hoursByPositionLoading) return <LoadingAnimation />

    const totalHoursSum = totalHours?.shift_aggregate?.aggregate?.sum?.length || 0



    return (
        <div>
            <header className="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4">
                <div className="">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">
                        {format(new Date(), 'd MMMM yyyy')}
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">{format(startDate, 'iiii')}</p>
                </div>
                <div className="flex">
                    <div className="top-16 w-56 text-right">
                        <Menu as="div" className="relative inline-block text-left">
                            {({ open }) =>
                                <>
                                    <div>
                                        <Menu.Button className={`inline-flex items-center rounded-md
                        px-3 py-2 text-sm font-semibold 
                        shadow-sm hover:bg-gray-200 hover:text-polar-800/90 hover:ring-1
                         ring-polar-800/90 focus-visible:outline focus-visible:outline-2
                          focus-visible:outline-offset-2 focus-visible:outline-polar-800/90
                          ${open ? 'bg-gray-200 ring-1 text-polar-800/90' : 'bg-polar-800/90 text-white'}`}>
                                            {startDate.toDateString()}
                                            <ChevronDownIcon
                                                className="ml-2 -mr-1 h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items static>
                                            <div className="relative">
                                                <div className="absolute w-[220%] top-6 -left-32">
                                                    <Datepicker selectedDay={startDate} setSelectedDay={setStartDate} />
                                                </div>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </>
                            }

                        </Menu>
                    </div>
                    <div className="top-16 w-56 text-right">
                        <Menu as="div" className="relative inline-block text-left">
                            {
                                ({ open }) =>
                                    <>
                                        <div>
                                            <Menu.Button className={`inline-flex items-center rounded-md
                        px-3 py-2 text-sm font-semibold 
                        shadow-sm hover:bg-gray-200 hover:text-polar-800/90 hover:ring-1
                         ring-polar-800/90 focus-visible:outline focus-visible:outline-2
                          focus-visible:outline-offset-2 focus-visible:outline-polar-800/90
                          ${open ? 'bg-gray-200 ring-1 text-polar-800/90' : 'bg-polar-800/90 text-white'}`}>
                                                {endDate.toDateString()}
                                                <ChevronDownIcon
                                                    className="ml-2 -mr-1 h-5 w-5"
                                                    aria-hidden="true"
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items static>
                                                <div className="relative">
                                                    <div className="absolute w-[220%] top-6 -left-32">
                                                        <Datepicker selectedDay={endDate} setSelectedDay={setEndDate} />
                                                    </div>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </>
                            }
                        </Menu>
                    </div>
                </div>

            </header>
            {
                totalHoursLoading || hoursByPositionLoading ? <LoadingAnimation /> : <div>
                    <h1>Total Hours: {totalHoursSum}</h1>
                    {
                        hoursByPosition && hoursByPosition.shift && hoursByPosition.shift.map((shift: any) => {
                            return (
                                <div key={shift.position.id}>
                                    <h2
                                        style={{
                                            color: shift.position.bg_color
                                        }}
                                    >
                                        {shift.position.name} : {shift.position.shift_aggregate.aggregate.sum.length}
                                    </h2>
                                </div>
                            )
                        })
                    }
                </div >
            }

        </div>
    )
}

const options = {
    title: "",
    autoHide: true,
    todayBtn: false,
    clearBtn: false,
    maxDate: new Date("2030-01-01"),
    minDate: new Date("2023-01-01"),
    theme: {
        background: "bg-white dark:bg-gray-800",
        todayBtn: "bg-red-400",
        clearBtn: "",
        icons: "",
        text: "",
        disabledText: "bg-gray-100",
        input: "",
        inputIcon: "",
        selected: "",
    },
    icons: {
        // () => ReactElement | JSX.Element
        prev: () => <ChevronLeftIcon className="w-5" />,
        next: () => <ChevronLeftIcon className="w-5 transform rotate-180" />,
    },
    datepickerClassNames: "top-40 z-50",
    defaultDate: new Date() as Date | string | null,
    language: "en",
}
