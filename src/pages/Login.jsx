import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/user"); // you can redirect based on role later
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-600 to-purple-600">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md animate-fade-in">
        <h2 className="text-3xl font-bold mb-4 text-center text-purple-700">Sign In</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 rounded hover:scale-105 transition-transform"
          >
            Signnn In
          </button>

          <div className="text-sm text-center">
            <p className="mb-1">
              <span
                onClick={() => navigate("/forgot-password")}
                className="text-indigo-600 cursor-pointer hover:underline"
              >
                Forgot Password?
              </span>
            </p>
            <p>
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/")}
                className="text-indigo-600 cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </p>
          </div>
        </form>

        {/* ------- LOGIN CREDENTIALS CARD -------- */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-center font-semibold text-purple-600 mb-3">Login Credentials</h3>

          {/* ------- FLOATING LOGIN CREDENTIALS CARD -------- */}
          <div className="absolute top-3 right-3 bg-gray-100 shadow-md rounded-lg p-3 text-xs w-40 border">
            <h3 className="font-semibold text-purple-600 mb-2 text-center text-sm">Credentials</h3>
            <p><b>Admin:</b><br />admin@helpdesk.com<br /><b>admin123</b></p>
            <p className="mt-1"><b>Ops:</b><br />ops@helpdesk.com<br /><b>ops123</b></p>
            <p className="mt-1"><b>Tech:</b><br />tech@helpdesk.com<br /><b>tech123</b></p>
            <p className="mt-1"><b>User:</b><br />user@helpdesk.com<br /><b>user123</b></p>
          </div>
        </div>
      
      </div>
    </div>
  );
}
