import { Outlet, useLocation } from "react-router-dom";

import Navigation from "../routes/Nav";
import PublicNavigation from "../routes/PublicNav";
import { useAuth0 } from "@auth0/auth0-react";
import Onboarding from "./Onboarding/Onboarding";
import { useSession } from "../hooks/session";
import { LoadingAnimation } from "../assets/AnimationComponents/AnimationComponents";

const Layout = () => {
  const { isAuthenticated } = useAuth0();
  const { profile, onboarded, userLoading } = useSession();
  const { pathname } = useLocation();

  console.log("test", userLoading, isAuthenticated, profile, onboarded); 
  if (userLoading) {
    return <LoadingAnimation />;
  }

  if (
    !onboarded &&
    pathname !== "/" &&
    pathname !== "/about" &&
    pathname !== "/pricing"
  ) {
    return (
      <div className="bg-gray-white">
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
  } else if (isAuthenticated && profile?.data?.user[0]?.onboarded === true) {
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
