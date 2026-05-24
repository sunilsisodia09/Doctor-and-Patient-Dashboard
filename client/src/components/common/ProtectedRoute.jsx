import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");

  let user = null;

  // SAFE JSON PARSE (prevents crash if corrupted)
  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch (err) {
    user = null;
  }

  // 1. Not logged in → go login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // 2. Role mismatch → redirect based on role type
  if (role && user?.role !== role) {
    if (user?.role === "doctor") {
      return <Navigate to="/doctor/dashboard" replace />;
    }

    if (user?.role === "patient") {
      return <Navigate to="/patient/dashboard" replace />;
    }

    return <Navigate to="/login" replace />;
  }

  // 3. Allow access
  return children;
};

export default ProtectedRoute;