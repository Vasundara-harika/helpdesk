import Sidebar from "../components/AdminSidebar"; // Admin-specific sidebar
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-[#f1fefb]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 ml-0">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-64 right-0 z-50">
          <Navbar />
        </div>

        {/* Page Content under Navbar */}
        <main className="flex-1 px-6 pt-20 pb-16">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
