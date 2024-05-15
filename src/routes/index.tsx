import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Dashboard";
import Login from "../pages/Login";
import WelcomePage from "../pages/WelcomePage";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  // Protected Routes
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/search",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/orders",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);
export default router;
