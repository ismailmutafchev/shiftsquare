import { Outlet, useLocation } from "react-router-dom";

import Navigation from "../routes/Nav";
import PublicNavigation from "../routes/PublicNav";
import { useAuth0 } from "@auth0/auth0-react";
import Onboarding from "./Onboarding/Onboarding";
import { useSession } from "../hooks/session";
import { LoadingAnimation } from "../assets/AnimationComponents/AnimationComponents";

const Layout = () => {
  const { isAuthenticated } = useAuth0();
  const { profile, onboarded, userLoading, permissions } = useSession();
  const { pathname } = useLocation();

  if (userLoading) {
    return <LoadingAnimation />;
  }

  console.log(profile, "profile");
  console.log(permissions, "permissions");


  if (profile === null || permissions.length === 0) {
    return (
      <div>
        <PublicNavigation />
        <Outlet />
      </div>
    );
  }

  //return onboarding page
  if (
    !onboarded &&
    pathname !== "/" &&
    pathname !== "/about" &&
    pathname !== "/pricing"
  ) {
    return (
      <div className="bg-white">
        <Onboarding />
      </div>
    );
  }

  // return public navigation

  if (
    !isAuthenticated ||
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/pricing"
  ) {
    // return public navigation
    return (
      <div>
        <PublicNavigation />
        <Outlet />
      </div>
    );
    // return onboarding page
  } else if (isAuthenticated && profile?.onboarded === false) {
    return (
      <div>
        <Onboarding />
      </div>
    );
  } else if (
    permissions.includes("admin") ||
    permissions.includes("manager") ||
    permissions.includes("supervisor")
  ) {
    return (
      <>
        <Navigation>
          <Outlet />
        </Navigation>
      </>
    );
    // return private navigation
  } else {
    return (
      <div>
        <PublicNavigation />
        <div className="py-20">
          <Outlet />
        </div>
      </div>
    );
  }
};

export default Layout;
