import { useContext } from "react";
import { OrganizationContext } from "../providers/OrganizationProvider";

export const useOrganizationDispatchContext = () => {
    const organizationDispatch = useContext(OrganizationContext);
    if (!organizationDispatch) {
      throw new Error(
        "useOrganizationDispatchContext must be used within a OrganizationProvider"
      );
    }
    return organizationDispatch;
  };
  
  export const useOrganizationStateContext = () => {
    const organization  = useContext(OrganizationContext);
    if (!organization) {
      throw new Error("useOrganizationStateContext must be used within a OrganizationProvider");
    }
    return organization;
  };

export function useOrganization() {
  const organization = useOrganizationStateContext();

  return {...organization};
}