import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const { pathname } = useLocation();
  const isAuth = !!localStorage.getItem("sessionToken");
  if (isAuth) {
    console.log(isAuth);
    return <>{children}</>;
  }
  return <Navigate to="/login" replace state={{ referrer: pathname }} />;
}
