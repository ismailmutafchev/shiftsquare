import { Outlet, useLocation } from "react-router-dom";

import Navigation from "../routes/Nav";
import PublicNavigation from "../routes/PublicNav";
import { useAuth0 } from "@auth0/auth0-react";
import { useSession } from "../providers/Session";
import Onboarding from "./Onboarding";

const Layout = () => {
    const { isAuthenticated } = useAuth0();
    const { profile } = useSession();

    const { pathname } = useLocation();

    if (!isAuthenticated || pathname === "/" || pathname === "/about" || pathname === "/pricing") {
        return (<div className="bg-gradient-to-br from-polar-300 to-white pb-24">
            <PublicNavigation />
            <Outlet />
        </div>)
    } else if (profile?.data?.user[0]?.onboarded === false) {
        return (
            <div className="bg-gradient-to-br from-polar-300 to-white pb-24">
                <Onboarding />
            </div>
        )
    } else {
        return (
            <Navigation>
                <Outlet />
            </Navigation>
        )
    }
};

export default Layout;
