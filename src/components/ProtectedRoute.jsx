import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthenticationContext";

function ProtectedRoute() {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function() {
      if (!auth?.accessToken) navigate("/");
    },
    [auth?.accessToken, navigate]
  );

  return auth?.accessToken ? <Outlet /> : null;
}

export default ProtectedRoute;
