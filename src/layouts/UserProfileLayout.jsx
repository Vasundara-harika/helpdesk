// ✅ src/layouts/UserProfileLayout.jsx
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function UserProfileLayout() {
  return (
    <div className="flex min-h-screen bg-[#55D6C2] text-gray-800">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 overflow-y-auto bg-white">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}