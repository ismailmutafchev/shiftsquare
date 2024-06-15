import { useQuery } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { jwtDecode } from "jwt-decode";
import React, { createContext, useState, useEffect } from "react";
import { getEmployees, getProfile } from "../queries/user/queries";
import { getPositions } from "../queries/position/queries";
import type { GetProfileByAuthIdQuery } from "../gql/graphql";

type Profile = {
  picture: string;
} & GetProfileByAuthIdQuery["user"][0];

interface SessionContextProps {
  session: {
    employees: any;
    positions: any;
    profile: Profile;
    user: any;
    userLoading: boolean;
    onboarded: boolean;
    permissions: any;
  };
}

export const SessionContext = createContext<SessionContextProps | undefined>(
  undefined
);

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const token = async () => {
    return await getAccessTokenSilently();
  };
  const [permissions, setPermissions] = useState<any>(
    localStorage.getItem("permissions")
      ? JSON.parse(localStorage.getItem("permissions") as string)
      : null
  );
  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    token()
      .then((res: string) => {
        const decodedToken: { [key: string]: any } = jwtDecode(res);
        setPermissions(decodedToken["https://hasura.io/jwt/claims"]);
        localStorage.setItem(
          "permissions",
          JSON.stringify(decodedToken["https://hasura.io/jwt/claims"])
        );
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  const employees = useQuery(getEmployees);
  const positions = useQuery(getPositions);
  const { data: profile, loading: userLoading } = useQuery(getProfile, {
    variables: {
      authId: user?.sub,
    },
  });

  const onboarded = () => {
    if (profile?.user[0]?.onboarded === false || profile?.onboarded === false) {
      return false;
    } else {
      return true;
    }
  };

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("profile", JSON.stringify(profile?.user[0]));

  const session = {
    employees: employees.data?.user,
    positions: positions.data?.position,
    profile: { ...profile?.user[0], picture: user?.picture },
    user: user,
    userLoading: userLoading,
    onboarded: onboarded(),
    permissions: (permissions && permissions["x-hasura-allowed-roles"]) || [],
  };
  return (
    <SessionContext.Provider value={{ session }}>
      {children}
    </SessionContext.Provider>
  );
};
