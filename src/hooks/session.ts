import { useQuery } from "@apollo/client";

import { useAuth0 } from "@auth0/auth0-react";
import { getEmployees, getProfile } from "../queries/user/queries";
import { getPositions } from "../queries/position/queries";


export const useSession = () => {
    const { user } = useAuth0();
    const employees = useQuery(getEmployees);
    const positions = useQuery(getPositions);
    const {data: profile } = useQuery(getProfile, {
        variables: {
            authId: user?.sub
        },
        onCompleted: (data) => {
            console.log(data, 'xyss');
        }
    });

    console.log(profile, 'profile');
    console.log(user, 'user');  

    return {
        employees: employees.data?.user,
        positions: positions.data?.position,
        profile: {...profile?.user[0], picture: user?.picture},
        user: user
    }
}