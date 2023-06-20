import { Outlet, useLocation } from "react-router-dom";

import Navigation from "../routes/Nav";
import PublicNavigation from "../routes/PublicNav";
import { useAuth0 } from "@auth0/auth0-react";

const Layout = () => {
    const { isAuthenticated } = useAuth0();

    const { pathname } = useLocation()

    if (!isAuthenticated || pathname === "/" || pathname === "/about" || pathname === "/pricing") {
        return (<div className="bg-gradient-to-br from-polar-400 to-white pb-24">
            <PublicNavigation />
            <Outlet />
        </div>)
    } else {
        return (
            <Navigation>
                <Outlet />
            </Navigation>
        )
    }
};

export default Layout;
