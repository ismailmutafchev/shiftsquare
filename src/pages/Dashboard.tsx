import { useQuery } from "@apollo/client"
import { endOfDay, endOfWeek, startOfDay, startOfWeek } from "date-fns"
import { useState } from "react"
import { getHoursByPosition, getWorkingHours } from "../queries/shift/queries"
import { useSession } from "../providers/Session"
import { LoadingAnimation } from "../assets/AnimationComponents/AnimationComponents"

export default function Dashboard() {
    const [datesRange, setDatesRange] = useState(
        {
            startDate: startOfWeek(new Date()),
            endDate: endOfWeek(new Date()),
        }
    )

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

    console.log(hoursByPosition)

    return (
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
    )
}