// Import global CSS styles
import "./styles.css";

// Import routing components from react-router-dom
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

// Import your page components
import About from "./components/About";
import Contact from "./components/Contact";
import UserProfile from "./components/userProfile";
import DashboardButton from "./components/dashboardButton";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";

// Main App Component
export default function App() {
  return (
    // BrowserRouter enables routing in the entire app
    <BrowserRouter>
      <div className="App">
        {/* Navigation Links */}
        {/* Link is used instead of <a> to prevent page reload */}
        <nav>
          <Link to="/home">Home</Link> |<Link to="/about">About</Link> |
          <Link to="/contact">Contact</Link> |
          <Link to="/dashboard">Dashboard</Link> |
          <Link to="/user/101">UserProfile</Link>
        </nav>

        {/* Routes container (React Router v6 syntax) */}
        <Routes>
          {/* ❌ PROBLEM: You should REMOVE this route 
              because you are protecting dashboard below.
              Having two same paths causes conflict.
          */}
          <Route path="/dashboard" element={<DashboardButton />} />

          {/* Public Routes (No authentication required) */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Dynamic Route
              :id is a URL parameter
              Example: /user/101
          */}
          <Route path="/user/:id" element={<UserProfile />} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* ✅ Protected Route
              If user is authenticated → show Dashboard
              If NOT → redirect to /login
          */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardButton />
              </PrivateRoute>
            }
          />

          {/* Wildcard Route (404 Page) */}
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
