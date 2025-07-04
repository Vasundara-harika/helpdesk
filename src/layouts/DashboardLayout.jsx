import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-64 right-0 z-50">
          <Navbar />
        </div>

        {/* Adjust content padding for fixed navbar */}
        <main className="flex-1 p-4 pt-20">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
