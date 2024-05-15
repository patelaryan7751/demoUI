import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import WelcomePage from "../pages/WelcomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  // Protected Routes
  //   {
  //     path: "account",
  //     element: <AccountLayout />
  //   },
]);
export default router;
