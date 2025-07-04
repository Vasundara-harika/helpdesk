import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdSettings,
  MdStorage,
  MdHistory,
} from "react-icons/md";

const adminLinks = [
  { to: "/admin/dashboard", label: "Dashboard", icon: <MdDashboard /> },
  { to: "/admin/database", label: "Database", icon: <MdStorage /> },
  { to: "/admin/settings", label: "Settings", icon: <MdSettings /> },
  { to: "/admin/userlog", label: "User Log History", icon: <MdHistory /> },
];

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-[#55D6C2] text-white h-full min-h-screen shadow-md flex flex-col sticky top-0">
      <div className="p-4 text-xl font-bold border-b border-white">Admin Panel</div>
      <nav className="flex-1 flex flex-col p-4 gap-2">
        {adminLinks.map(({ to, label, icon }) => (
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
