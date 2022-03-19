import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../context";

export function PrivateRoute({ children }) {
  const { userAuthState } = useAuth();

  if (userAuthState?.isLoggedIn) {
    return children;
  }

  return <Navigate to="/login" replace />;
}
