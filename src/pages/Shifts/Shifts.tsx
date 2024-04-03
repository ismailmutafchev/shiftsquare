import { useQuery } from "@apollo/client";
import { useSession } from "../../hooks/session";
import { getShiftsByEmployee } from "../../queries/shift/queries"
import { endOfWeek, startOfWeek } from "date-fns";

export default function Shifts() {
    //TODO
    const {permissions} = useSession();

    const {data} = useQuery(getShiftsByEmployee, {
        variables: {
            start: startOfWeek(new Date(), {weekStartsOn: 1}),
            end: endOfWeek(new Date(), {weekStartsOn: 1}),
            employeeId: permissions["x-hasura-user-id"]
        }
    });

    const shifts = data?.shift;



    console.log(shifts);
    return (
        <div>
            <h1>Reports</h1>
        </div>
    )
}
