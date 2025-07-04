// src/components/Navbar.jsx
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

  useEffect(() => {
    const saved = localStorage.getItem("role") || "User";
    setRole(saved);
  }, []);

  const toggleMode = () => {
    setMode((prev) => (prev === "BM" ? "BI" : "BM"));
  };

  const goToProfile = () => {
    if (role === "User") {
      navigate("/user/profile");
    } else if (role === "Admin") {
      navigate("/admin/profile");
    } else if (role === "Operations Team") {
      navigate("/operation-team/profile");
    } else if (role === "Technical Team") {
      navigate("/technical-team/profile");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <header className="bg-white shadow px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2 text-customMint font-bold text-xl">
        <MdDashboard className="text-2xl" />
        <span>Helpdesk</span>
      </div>

      <div className="flex items-center gap-4 text-customMint text-xl">
        <span className="font-medium text-sm">
          {role === "Operations Team"
            ? "Operations"
            : role === "Technical Team"
            ? "Technical"
            : role}
        </span>

        <button
          onClick={toggleMode}
          className="px-3 py-1 text-sm font-semibold border-2 border-customMint rounded hover:bg-customMint hover:text-white transition duration-300"
        >
          {mode}
        </button>

        <IoMdNotificationsOutline className="cursor-pointer hover:text-[#45b5b0]" />

        <button
          onClick={goToProfile}
          title="User Profile"
          className="hover:text-[#45b5b0]"
        >
          <FaUserCircle size={28} />
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center gap-1 bg-customMint text-white px-3 py-1.5 rounded hover:bg-[#45b5b0]"
        >
          <FiLogOut />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </header>
  );
}
