import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import Calendar from "./pages/Calendar/Calendar";
import Employees from "./pages/Employee/Employees";
import Positions from "./pages/Positions/Positions";
import About from "./pages/About/About";
import Pricing from "./pages/Pricing/Pricing";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Setting from "./pages/Profile/Setting";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./pages/Login";
import Employee from "./pages/Employee/Employee";
import Onboarding from "./pages/Onboarding/Onboarding";
import Templates from "./pages/Templates/Templates";
import Availability from "./pages/Availability/Availability";
import Timeoff from "./pages/Timeoff/Timeoff";
import NotFound from "./pages/NotFound/NotFound";
import Shifts from "./pages/Shifts/Shifts";
import { TemplateProvider } from "./providers/TemplateContext";
import { useSession } from "./hooks/session";

function perimissionsCheck(isAuthenticated: boolean, permissions: any) {
  if (!permissions) return false;
  if (!isAuthenticated) return false;
  return (
    permissions["x-hasura-allowed-roles"].includes("admin") ||
    permissions["x-hasura-allowed-roles"].includes("manager") ||
    permissions["x-hasura-allowed-roles"].includes("supervisor")
  );
}

function App() {
  const { isAuthenticated } = useAuth0();
  const { permissions } = useSession();

  return (
      <BrowserRouter>
        <TemplateProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/about" element={<Layout />}>
              <Route index element={<About />} />
            </Route>
            <Route path="/pricing" element={<Layout />}>
              <Route index element={<Pricing />} />
            </Route>
            <Route path="/login" element={<Layout />}>
              <Route index element={<Login />} />
            </Route>
            {perimissionsCheck(isAuthenticated, permissions ) ? (
              <>
                <Route path="/calendar" element={<Layout />}>
                  <Route index element={<Calendar />} />
                </Route>
                <Route path="/employees" element={<Layout />}>
                  <Route index element={<Employees />} />
                </Route>
                <Route path="/employees/:id" element={<Layout />}>
                  <Route index element={<Employee />} />
                </Route>
                <Route path="/positions" element={<Layout />}>
                  <Route index element={<Positions />} />
                </Route>
                <Route path="/dashboard" element={<Layout />}>
                  <Route index element={<Dashboard />} />
                </Route>
                <Route path="/onboarding" element={<Layout />}>
                  <Route index element={<Onboarding />} />
                </Route>
                <Route path="/profile" element={<Layout />}>
                  <Route index element={<Profile />} />
                </Route>
                <Route path="/setting" element={<Layout />}>
                  <Route index element={<Setting />} />
                </Route>
                <Route path="/templates" element={<Layout />}>
                  <Route index element={<Templates />} />
                </Route>
                <Route path="/availability" element={<Layout />}>
                  <Route index element={<Availability />} />
                </Route>
                <Route path="/time-off" element={<Layout />}>
                  <Route index element={<Timeoff />} />
                </Route>
              </>
            ) : (
              <>
                <Route path="/calendar" element={<Layout />}>
                  <Route index element={<Calendar />} />
                </Route>
                <Route path="/time-off" element={<Layout />}>
                  <Route index element={<Timeoff />} />
                </Route>
                <Route path="/shifts" element={<Layout />}>
                  <Route index element={<Shifts />} />
                </Route>
              </>
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TemplateProvider>
      </BrowserRouter>
  );
}

export default App;
