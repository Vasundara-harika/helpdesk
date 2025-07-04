// src/pages/AuthPage.jsx
import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    role: "User",
  });

  const navigate = useNavigate();

  const credentials = [
    { email: "admin@helpdesk.com", password: "admin123", role: "Admin" },
    { email: "ops@helpdesk.com", password: "ops123", role: "Operations Team" },
    { email: "tech@helpdesk.com", password: "tech123", role: "Technical Team" },
    { email: "user@helpdesk.com", password: "user123", role: "User" },
  ];

  const handleSignIn = (e) => {
    e.preventDefault();
    const matchedUser = credentials.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      localStorage.setItem("role", matchedUser.role);
      localStorage.setItem("email", matchedUser.email);

      switch (matchedUser.role) {
        case "Admin":
          navigate("/admin/dashboard");
          break;
        case "Operations Team":
          navigate("/operation-team/dashboard");
          break;
        case "Technical Team":
          navigate("/technical-team/dashboard");
          break;
        case "User":
          navigate("/user/dashboard");
          break;
        default:
          navigate("/unauthorized");
      }
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    alert("Sign Up is currently disabled.");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-customMint px-4">
      <div className="mb-6 flex gap-4">
        <button
          onClick={() => setIsSignIn(true)}
          className={`px-4 py-2 rounded font-semibold border ${
            isSignIn
              ? "bg-white text-customMint border-white"
              : "bg-customMint text-white border-white"
          } transition`}
        >
          Sign In
        </button>
        <button
          onClick={() => setIsSignIn(false)}
          className={`px-4 py-2 rounded font-semibold border ${
            !isSignIn
              ? "bg-white text-customMint border-white"
              : "bg-customMint text-white border-white"
          } transition`}
        >
          Sign Up
        </button>
      </div>

      <div className="w-full max-w-md perspective">
        <div
          className={`relative w-full transition-transform duration-700 transform-style-preserve-3d ${
            isSignIn ? "" : "rotate-y-180"
          }`}
        >
          {/* Sign In Card */}
          <div className="form-card">
            <h2 className="text-2xl font-bold mb-4 text-customMint text-center">
              Sign In
            </h2>
            <div className="flex justify-center mb-4 text-2xl text-customMint">
              <FaLock />
            </div>
            <form onSubmit={handleSignIn} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="form-input w-full border px-4 py-2 rounded"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="form-input w-full border px-4 py-2 rounded"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full bg-customMint text-white py-2 rounded hover:bg-[#45b5b0] transition"
              >
                Sign In
              </button>
            </form>
          </div>

          {/* Sign Up Card */}
          <div className="form-card rotate-y-180 absolute top-0 left-0">
            <h2 className="text-2xl font-bold mb-4 text-customMint text-center">
              Sign Up
            </h2>
            <div className="flex justify-center mb-4 text-2xl text-customMint">
              <FaLock />
            </div>
            <form onSubmit={handleSignUp} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="form-input w-full border px-4 py-2 rounded"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="form-input w-full border px-4 py-2 rounded"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="form-input w-full border px-4 py-2 rounded"
                required
              />
              <select className="form-input w-full border px-4 py-2 rounded">
                <option value="User">User</option>
                <option value="Technical Team">Technical Team</option>
                <option value="Operations Team">Operations Team</option>
                <option value="Admin">Admin</option>
              </select>
              <button
                type="submit"
                className="w-full bg-gray-400 text-white py-2 rounded cursor-not-allowed"
              >
                Sign Up (Disabled)
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
