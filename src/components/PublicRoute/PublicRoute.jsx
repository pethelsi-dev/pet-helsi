import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute({ isAuthenticated }) {
  return isAuthenticated ? <Navigate to="/profile" /> : <Outlet />;
}
