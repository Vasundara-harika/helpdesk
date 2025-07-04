import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

export default function Navbar() {
  const navigate = useNavigate();
  const [role, setRole] = useState("User");
  const [mode, setMode] = useState("BM");

  const roles = ["User", "Operations Team", "Technical Support", "Admin"];

  useEffect(() => {
    const saved = localStorage.getItem("role") || "User";
    setRole(saved);
  }, []);

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    localStorage.setItem("role", newRole);

    if (newRole === "Operations Team") {
      navigate("/operation-team/dashboard");
    } else if (newRole === "Technical Support") {
      navigate("/technical-team/dashboard"); // ✅ Navigate to technical-team route
    } else if (newRole === "Admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/user/dashboard");
    }
  };

  const toggleMode = () => {
    setMode((prev) => (prev === "BM" ? "BI" : "BM"));
  };

  return (
    <header className="bg-white shadow px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2 text-customMint font-bold text-xl">
        <MdDashboard className="text-2xl" />
        <span>Helpdesk</span>
      </div>

      <div className="flex items-center gap-4 text-customMint text-xl">
        <select
          value={role}
          onChange={(e) => handleRoleChange(e.target.value)}
          className="bg-white border-2 border-customMint text-customMint font-medium rounded px-3 py-1 text-sm focus:outline-none hover:bg-customMint hover:text-white cursor-pointer transition duration-300"
        >
          {roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>

        <button
          onClick={toggleMode}
          className="px-3 py-1 text-sm font-semibold border-2 border-customMint rounded hover:bg-customMint hover:text-white transition duration-300"
        >
          {mode}
        </button>

        <IoMdNotificationsOutline className="cursor-pointer hover:text-[#45b5b0]" />

        <button
          onClick={() => navigate("/user/profile")}
          title="User Profile"
          className="hover:text-[#45b5b0]"
        >
          <FaUserCircle size={28} />
        </button>

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1 bg-customMint text-white px-3 py-1.5 rounded hover:bg-[#45b5b0]"
        >
          <FiLogOut />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </header>
  );
}
