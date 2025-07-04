import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function ProtectedRoute({ children, allowedRoles }) {
  const role = Cookies.get("role");

  if (!role) {
    return <Navigate to="/" replace />; // 🔐 Not logged in → Sign In
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />; // ❌ Wrong role
  }

  return children; // ✅ Allowed
}
