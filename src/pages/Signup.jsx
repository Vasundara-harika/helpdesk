import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css"; // optional for extra styling

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to login for now
    navigate("/login");
  };

  return (
    <div className="signup-wrapper bg-gradient-to-br from-purple-700 to-indigo-800 min-h-screen flex items-center justify-center px-4">
      <div className="signup-card bg-white shadow-xl rounded-2xl p-8 w-full max-w-md animate-slide-in">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="form-input"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="form-input"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="form-input"
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="form-input"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="techsupport">Tech Support</option>
            <option value="operations">Operations</option>
          </select>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg hover:scale-105 transition-transform"
          >
            Sign Up
          </button>
          <p className="text-sm text-center">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-indigo-600 hover:underline cursor-pointer"
            >
              Sign In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
