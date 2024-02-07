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
import { TemplateProvider } from "./providers/TemplateContext";

function App() {
  const { isAuthenticated } = useAuth0();

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
            {isAuthenticated && (
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
              </>
            )}
          </Routes>
        </TemplateProvider>
    </BrowserRouter>
  );
}

export default App;
