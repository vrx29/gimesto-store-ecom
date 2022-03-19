import React from "react";
import { Navigate, Route, useLocation } from "react-router-dom";
import { useAuth } from "../context";

export function PrivateRoute({ children }) {
  const { userAuthState } = useAuth();
  let location = useLocation();

  if (userAuthState?.isLoggedIn) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
}
