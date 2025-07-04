// ✅ src/routes/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRoles }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role");

  if (!isLoggedIn) return <Navigate to="/login" />;

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" />; // you can also create this page
  }

  return children;
}
