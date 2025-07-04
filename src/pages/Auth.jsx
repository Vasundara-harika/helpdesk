import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate("/user/dashboard"); // Go to dashboard after login
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    alert("User registered (demo only)");
    setIsSignIn(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-customMint px-4">
      {/* Toggle Buttons */}
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

      {/* Flip Card */}
      <div className="w-full max-w-md perspective">
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
            isSignIn ? "" : "rotate-y-180"
          }`}
        >
          {/* Front - Sign In */}
          <div className="form-card">
            <h2 className="text-2xl font-bold mb-4 text-customMint text-center">
              Sign In
            </h2>
            <div className="flex justify-center mb-4 text-2xl text-customMint">
              <FaLock />
            </div>
            <form onSubmit={handleSignIn} className="space-y-4">
              <input type="email" placeholder="Email" className="form-input" required />
              <input type="password" placeholder="Password" className="form-input" required />
              <div className="text-right">
                <a href="/forgot-password" className="text-sm text-customMint hover:underline">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-customMint text-white py-2 rounded hover:bg-[#45b5b0] transition"
              >
                Sign In
              </button>
            </form>
          </div>

          {/* Back - Sign Up */}
          <div className="form-card rotate-y-180 absolute top-0 left-0">
            <h2 className="text-2xl font-bold mb-4 text-customMint text-center">
              Sign Up
            </h2>
            <div className="flex justify-center mb-4 text-2xl text-customMint">
              <FaLock />
            </div>
            <form onSubmit={handleSignUp} className="space-y-4">
              <input type="text" placeholder="Full Name" className="form-input" required />
              <input type="email" placeholder="Email" className="form-input" required />
              <input type="password" placeholder="Password" className="form-input" required />
              <button
                type="submit"
                className="w-full bg-customMint text-white py-2 rounded hover:bg-[#45b5b0] transition"
              >
                Sign Up
              </button>
              <p className="text-sm text-customMint text-center">New here? Sign Up</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
