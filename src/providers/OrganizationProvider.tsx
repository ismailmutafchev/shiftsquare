import { useQuery } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import React, { createContext } from "react";
import { getProfile } from "../queries/user/queries";
import { getOrganizationById } from "../queries/organization/quieries";
import { GetOrganizationByIdQuery } from "../gql/graphql";

type OrganizationContextType = GetOrganizationByIdQuery["organization_by_pk"];

export const OrganizationContext = createContext<
  OrganizationContextType | undefined
>(undefined);

export const OrganizationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth0();

  const { data: profile, loading: userLoading } = useQuery(getProfile, {
    variables: {
      authId: user?.sub,
    },
  });

  const { data: organizationData } = useQuery(getOrganizationById, {
    variables: {
      id: !userLoading && profile?.user[0]?.organizationId,
    },
  });

  const organization = {...organizationData?.organization_by_pk}

  localStorage.setItem("organization", JSON.stringify(organization)); // Save organization to local storage

  return (
    <OrganizationContext.Provider value={organization}>
      {children}
    </OrganizationContext.Provider>
  );
};
