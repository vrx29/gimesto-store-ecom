import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export function PrivateRoute({ children }) {
  const { authToken } = useSelector((state) => state.auth);
  let location = useLocation();

  if (authToken) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
}
