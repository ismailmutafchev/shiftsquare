import { useQuery } from "@apollo/client";
import { getEmployees } from "../queries/user/queries";
import { getPositions } from "../queries/position/queries";


export const useSession = () => {
    const employees = useQuery(getEmployees);
    const positions = useQuery(getPositions);

    return {
        employees: employees.data?.user,
        positions: positions.data?.position,
    }
}