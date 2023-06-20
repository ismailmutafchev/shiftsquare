import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Calendar from './pages/Calendar';
import Employees from './pages/Employees';
import Positions from './pages/Positions';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Setting from './pages/Setting';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <BrowserRouter>
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
        {isAuthenticated && (
          <>
            <Route path="/calendar" element={<Layout />}>
              <Route index element={<Calendar />} />
            </Route>
            <Route path="/employees" element={<Layout />}>
              <Route index element={<Employees />} />
            </Route>
            <Route path="/positions" element={<Layout />}>
              <Route index element={<Positions />} />
            </Route>
            <Route path="/dashboard" element={<Layout />}>
              <Route index element={<Dashboard />} />
            </Route>
            <Route path="/profile" element={<Layout />}>
              <Route index element={<Profile />} />
            </Route>
            <Route path="/setting" element={<Layout />}>
              <Route index element={<Setting />} />
            </Route>
          </>
        )}
      </Routes>
    </BrowserRouter >
  )
}

export default App
