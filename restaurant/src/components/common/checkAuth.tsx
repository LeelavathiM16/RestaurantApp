import { useLocation, Navigate } from "react-router";
import type { AuthcheckType } from "../../type";

function CheckAuth({ isAuthenticated, user, children }: AuthcheckType) {
  const location = useLocation();

  if (!isAuthenticated && !location.pathname.startsWith("/auth")) {
    return <Navigate to="/auth/login" replace />;
  }
  if (
    isAuthenticated &&
    (location.pathname.includes("login") ||
      location.pathname.includes("register"))
  ) {
    if (user.role === "admin") {
      return <Navigate to="/admin/dashboard" replace />;
    } else {
      return <Navigate to="/shopping/home" replace />;
    }
  }
  if (
    isAuthenticated &&
    user.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unAuthPage" replace />;
  }
  if (
    isAuthenticated &&
    user.role === "admin" &&
    location.pathname.includes("shopping")
  ) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <>{children}</>;
}

export default CheckAuth;
