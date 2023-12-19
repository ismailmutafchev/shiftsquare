import { Outlet, useLocation } from "react-router-dom";

import Navigation from "../routes/Nav";
import PublicNavigation from "../routes/PublicNav";
import { useAuth0 } from "@auth0/auth0-react";
import Onboarding from "./Onboarding/Onboarding";
import { useSession } from "../hooks/session";

const Layout = () => {
  const { isAuthenticated } = useAuth0();
  const { profile,user } = useSession();

  const { pathname } = useLocation();

  console.log(profile, 'xss')

  if (profile?.data?.user[0]?.onboarded === false || user?.email_verified === false ){
    return (
      <div className="bg-gradient-to-br from-polar-300 to-white pb-24">
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
      <div className="bg-gradient-to-br from-polar-300 to-white pb-24">
        <PublicNavigation />
        <Outlet />
      </div>
    );
  } else if (isAuthenticated && profile?.data?.user[0]?.onboarded === false) {
    return (
      <div className="bg-gradient-to-br from-polar-300 to-white pb-24">
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
