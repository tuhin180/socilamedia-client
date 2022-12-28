import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";

import { AuthUserContext } from "../Context/UserContext";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthUserContext);
  const location = useLocation();
  if (loading) {
    return <Spinner />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;
