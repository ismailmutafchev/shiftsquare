import { useQuery } from "@apollo/client"
import { endOfDay, endOfWeek, format, startOfDay, startOfWeek } from "date-fns"
import { useState } from "react"
import { getHoursByPosition, getWorkingHours } from "../queries/shift/queries"
import { LoadingAnimation } from "../assets/AnimationComponents/AnimationComponents"
// import Datepicker from "tailwind-datepicker-react"
import { CalendarDaysIcon, CalendarIcon, ChevronLeftIcon } from "@heroicons/react/24/outline"
import Datepicker from "../components/Datepicker"

type DatesType = {
    startDate: Date,
    endDate: Date
}

export default function Dashboard() {
    const [datesRange, setDatesRange] = useState<DatesType>(
        {
            startDate: startOfWeek(new Date(), { weekStartsOn: 1 }),
            endDate: endOfWeek(new Date(), { weekStartsOn: 1 }),
        }
    )
    const [showStart, setShowStart] = useState<boolean>(false)
    const [showEnd, setShowEnd] = useState<boolean>(false)
    const handleStartChange = (selectedDate: Date) => {
        setDatesRange({
            ...datesRange,
            startDate: selectedDate
        })
    }
    const handleEndChange = (selectedDate: Date) => {
        setDatesRange({
            ...datesRange,
            endDate: selectedDate
        })
    }
    const handleCloseStart = (state: boolean) => {
        setShowStart(state)
    }
    const handleCloseEnd = (state: boolean) => {
        setShowEnd(state)
    }


    const { loading: totalHoursLoading, data: totalHours, error: totalHoursError } = useQuery(getWorkingHours, {
        variables: {
            start: startOfDay(datesRange.startDate),
            end: endOfDay(datesRange.endDate),
            position_id: '8c91c4d2-581e-4d14-800c-df32d3f1a482'
        },
    })

    const { loading: hoursByPositionLoading, data: hoursByPosition, error: hoursByPositionError } = useQuery(getHoursByPosition, {
        variables: {
            start: startOfDay(datesRange.startDate),
            end: endOfDay(datesRange.endDate),
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
                    <p className="mt-1 text-sm text-gray-500">{format(datesRange.startDate, 'iiii')}</p>
                </div>
                <div className="flex">
                    {/* <Datepicker options={options} onChange={handleStartChange} show={showStart} setShow={handleCloseStart} >
                        <div className="border rounded-md p-2 bg-polar-800/90  flex space-x-2 items-center">
                            <div>
                                <CalendarDaysIcon className="w-5 text-white" />
                            </div>
                            <input type="text" className="bg-transparent text-white font-semibold" placeholder="Select Date" value={datesRange.startDate.toDateString()} onFocus={() => setShowStart(true)} readOnly />
                        </div>
                    </Datepicker> */}
                    {/* <Datepicker onBlur={() => setShowEnd(false)} options={options} onChange={handleEndChange} show={showEnd} setShow={handleCloseEnd}>
                        <div  className="border rounded-md p-2 bg-polar-800/90  flex space-x-2 items-center">
                            <div>
                                <CalendarDaysIcon className="w-5 text-white" />
                            </div>
                            <input type="text" className="bg-transparent text-white font-semibold" placeholder="Select Date" value={datesRange.endDate.toDateString()} onFocus={() => setShowEnd(true)} readOnly />
                        </div>
                    </Datepicker> */}
                    {/* <Datepicker selectedDay={datesRange.startDate} setSelectedDay={setDatesRange}> */}
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