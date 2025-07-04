// ✅ Responsive TechnicalLayout with fixed sidebar
import TechnicalSidebar from "../components/TechnicalSidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TechnicalLayout() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* ✅ Sidebar - hidden on small screens, visible on md+ */}
      <aside className="w-full md:w-64 bg-[#55D6C2] text-white md:min-h-screen sticky top-0 z-40">
        <TechnicalSidebar />
      </aside>

      {/* ✅ Content area: Navbar + Main + Footer */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="sticky top-0 z-50 shadow bg-white">
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="flex-1 p-4 bg-gray-50">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
