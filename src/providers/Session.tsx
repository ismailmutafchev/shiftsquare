import { useQuery } from "@apollo/client";
import { getEmployees, getProfile } from "../queries/user/queries";
import { getPositions } from "../queries/position/queries";
// import { useAuth0 } from "@auth0/auth0-react";


export const useSession = () => {
    // const { user } = useAuth0();
    const employees = useQuery(getEmployees);
    const positions = useQuery(getPositions);
    const profile = useQuery(getProfile, {
        variables: {
            auth_id: "auth0|64cc10f2058120f1fe6db021"
        }
    });

    return {
        employees: employees.data?.user,
        positions: positions.data?.position,
        profile: profile
    }
}