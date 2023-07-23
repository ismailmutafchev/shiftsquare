import { useQuery } from "@apollo/client"
import { endOfDay, endOfWeek, format, startOfDay, startOfWeek } from "date-fns"
import { useState } from "react"
import { getHoursByPosition, getWorkingHours } from "../queries/shift/queries"
import { useSession } from "../providers/Session"
import { LoadingAnimation } from "../assets/AnimationComponents/AnimationComponents"
import Datepicker from "tailwind-datepicker-react"



export default function Dashboard() {
    const [datesRange, setDatesRange] = useState(
        {
            startDate: startOfWeek(new Date(), { weekStartsOn: 1 }),
            endDate: endOfWeek(new Date(), { weekStartsOn: 1 }),
        }
    )
    const [show, setShow] = useState<boolean>(false)
    const handleChange = (selectedDate: Date) => {
        console.log(selectedDate)
    }
    const handleClose = (state: boolean) => {
        setShow(state)
    }

    const { positions } = useSession()



    const { loading: totalHoursLoading, data: totalHours, error: totalHoursError } = useQuery(getWorkingHours, {
        variables: {
            start: startOfDay(datesRange.startDate),
            end: endOfDay(datesRange.endDate),
            position_id: '8c91c4d2-581e-4d14-800c-df32d3f1a482'
        },
        fetchPolicy: "network-only",
    })

    const { loading: hoursByPositionLoading, data: hoursByPosition, error: hoursByPositionError } = useQuery(getHoursByPosition, {
        variables: {
            start: startOfDay(datesRange.startDate),
            end: endOfDay(datesRange.endDate),
        },
        fetchPolicy: "network-only",
    })

    if (totalHoursLoading || hoursByPositionLoading) return <LoadingAnimation />

    const totalHoursSum = totalHours?.shift_aggregate?.aggregate?.sum?.length || 0



    return (
        <div>
            <header className="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4">
                <div>
                    <h1 className="text-base font-semibold leading-6 text-gray-900">
                        {format(new Date(datesRange.startDate), 'd MMMM yyyy')}
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">{format(datesRange.startDate, 'iiii')}</p>
                </div>
                <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />

            </header>
            <div>
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
        </div>
    )
}

const options = {
    title: "Demo Title",
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
        background: "bg-gray-700 dark:bg-gray-800",
        todayBtn: "",
        clearBtn: "",
        icons: "",
        text: "",
        disabledText: "bg-red-500",
        input: "",
        inputIcon: "",
        selected: "",
    },
    icons: {
        // () => ReactElement | JSX.Element
        prev: () => <span>Previous</span>,
        next: () => <span>Next</span>,
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date("2022-01-01"),
    language: "en",
}