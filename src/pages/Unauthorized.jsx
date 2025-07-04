import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Unauthorized() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const email = localStorage.getItem("email"); // assuming stored in login

  // Log unauthorized attempt to backend
  useEffect(() => {
    fetch("http://localhost:5000/api/logs/unauthorized", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        role,
        timestamp: new Date().toISOString(),
        attemptedPath: window.location.pathname,
      }),
    }).catch((err) => console.error("Failed to log unauthorized access", err));
  }, [email, role]);

  const getRedirectPath = () => {
    if (role === "Admin") return "/admin/dashboard";
    if (role === "Operations Team") return "/operation-team/dashboard";
    if (role === "Technical Team") return "/technical/dashboard";
    if (role === "User") return "/user/dashboard";
    return "/";
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-red-50 text-red-700 px-4">
      <h1 className="text-3xl font-bold mb-2">🚫 Access Denied</h1>
      <p className="mb-4 text-lg">You are not authorized to view this page.</p>

      {email && (
        <div className="text-sm mb-4">
          <strong>User:</strong> {email} <br />
          <strong>Role:</strong> {role}
        </div>
      )}

      <button
        onClick={() => navigate(getRedirectPath())}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Go Back to Dashboard
      </button>
    </div>
  );
}
