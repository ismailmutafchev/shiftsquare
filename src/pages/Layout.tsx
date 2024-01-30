import { Outlet, useLocation } from "react-router-dom";

import Navigation from "../routes/Nav";
import PublicNavigation from "../routes/PublicNav";
import { useAuth0 } from "@auth0/auth0-react";
import Onboarding from "./Onboarding/Onboarding";
import { useSession } from "../hooks/session";

const Layout = () => {
  const { isAuthenticated } = useAuth0();
  const { profile } = useSession();

  const { pathname } = useLocation();

  if (profile?.data?.user[0]?.onboarded === false || profile?.onboarded === false
     ){
    return (
      <div className="bg-gray-300/40 pb-24">
        <Onboarding />
      </div>
    );
  }


  if (
    !isAuthenticated ||
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/pricing"
  ) {
    return (
      <div>
        <PublicNavigation />
        <Outlet />
      </div>
    );
  } else if (isAuthenticated && profile?.data?.user[0]?.onboarded === false) {
    return (
      <div>
        <Onboarding />
      </div>
    );
  } else {
    return (
      <>
        <Navigation>
          <Outlet />
        </Navigation>
      </>
    );
  }
};

export default Layout;
