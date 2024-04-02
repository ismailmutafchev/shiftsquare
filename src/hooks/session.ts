import { useContext } from "react";
import { SessionContext } from "../providers/SessionProvider";

export const useSessionDispatchContext = () => {
    const sessionDispatch = useContext(SessionContext);
    if (!sessionDispatch) {
      throw new Error(
        "useSessionDispatchContext must be used within a SessionProvider"
      );
    }
    return sessionDispatch;
  };
  
  export const useSessionStateContext = () => {
    const session  = useContext(SessionContext);
    if (!session) {
      throw new Error("useSessionStateContext must be used within a SessionProvider");
    }
    return session;
  };

export function useSession() {
  const session = useSessionStateContext();

  return {...session.session};
}