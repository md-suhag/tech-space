import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ children, role }) => {
  const { token, user } = useSelector((state) => state.authR);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/sign-in" replace state={{ from: location }} />;
  }

  if (!user || user.role !== role) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-lg">
        Unauthorized - You do not have access to this page.
      </div>
    );
  }

  return children;
};

export default ProtectedRoutes;
