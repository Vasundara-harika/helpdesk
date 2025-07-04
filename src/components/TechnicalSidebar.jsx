// ✅ Technical Team Sidebar
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaTicketAlt, FaChartLine } from "react-icons/fa";

export default function TechnicalSidebar() {
  return (
    <aside className="w-64 bg-[#55D6C2] text-white h-screen shadow-md fixed top-0 left-0">
      <div className="p-4 text-xl font-bold border-b border-white">Technical Team</div>
      <nav className="flex flex-col p-4 gap-2">
        <NavLink
          to="/technical-team/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded transition duration-200 hover:bg-[#3bb9a9] ${
              isActive ? "bg-white text-[#55D6C2] font-semibold" : ""
            }`
          }
        >
          <MdDashboard /> <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/technical-team/my-tickets"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded transition duration-200 hover:bg-[#3bb9a9] ${
              isActive ? "bg-white text-[#55D6C2] font-semibold" : ""
            }`
          }
        >
          <FaTicketAlt /> <span>My Tickets</span>
        </NavLink>

        <NavLink
          to="/technical-team/performance"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded transition duration-200 hover:bg-[#3bb9a9] ${
              isActive ? "bg-white text-[#55D6C2] font-semibold" : ""
            }`
          }
        >
          <FaChartLine /> <span>Performance</span>
        </NavLink>
      </nav>
    </aside>
  );
}
