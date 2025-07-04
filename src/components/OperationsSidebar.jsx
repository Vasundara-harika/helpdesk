import { NavLink, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaTicketAlt, FaUserCog, FaClipboardCheck, FaChartLine } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const location = useLocation();
  const [role, setRole] = useState("User");

  useEffect(() => {
    const storedRole = localStorage.getItem("role") || "User";
    setRole(storedRole);
  }, []);

  const userLinks = [
    { to: "/user/dashboard", label: "Dashboard", icon: <MdDashboard /> },
    { to: "/user/new-ticket", label: "New Ticket", icon: <FaTicketAlt /> },
    { to: "/user/my-tickets", label: "My Tickets", icon: <FaClipboardCheck /> },
    { to: "/user/profile", label: "Profile", icon: <FaUserCog /> },
  ];

  const opsLinks = [
    { to: "/operation-team/dashboard", label: "Dashboard", icon: <MdDashboard /> },
    { to: "/operation-team/ticket-approval", label: "Ticket Approval", icon: <FaClipboardCheck /> },
    { to: "/operation-team/my-tickets", label: "My Tickets", icon: <FaTicketAlt /> },
    { to: "/operation-team/performance", label: "Performance", icon: <FaChartLine /> },
  ];

  const linksToRender = role === "Operations Team" ? opsLinks : userLinks;

  return (
    <aside className="w-64 bg-[#55D6C2] text-white min-h-screen shadow-md flex flex-col sticky top-0">
      {/* Hardcoded Heading */}
      <div className="p-4 text-xl font-bold border-b border-white">Operation Team</div>
      
      <nav className="flex-1 flex flex-col p-4 gap-2">
        {linksToRender.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded transition duration-200 hover:bg-[#3bb9a9] ${
                isActive ? "bg-white text-[#55D6C2] font-semibold" : ""
              }`
            }
          >
            {icon} <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
