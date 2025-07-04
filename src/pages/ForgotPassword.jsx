import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-customMint px-4">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-customMint text-center">
          Forgot Password
        </h2>
        <p className="mb-4 text-sm text-gray-600 text-center">
          Don’t worry! Enter your email and we’ll send you a reset link.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="form-input"
          />
          <button
            type="submit"
            className="w-full bg-customMint text-white py-2 rounded hover:bg-[#45b5b0] transition"
          >
            Send Reset Link
          </button>
        </form>
        <button
          onClick={() => navigate("/")}
          className="mt-4 text-customMint hover:underline w-full text-sm"
        >
          Back to Sign In
        </button>
      </div>
    </div>
  );
}
