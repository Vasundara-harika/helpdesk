import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthPage from "./pages/Auth";
import ForgotPassword from "./pages/ForgotPassword";

// Layouts
import DashboardLayout from "./layouts/DashboardLayout";
import UserProfileLayout from "./layouts/UserProfileLayout";
import OperationsLayout from "./layouts/OperationsLayout";
import TechnicalLayout from "./layouts/TechnicalLayout"

// User Pages
import Dashboard from "./pages/Dashboard";
import NewTicket from "./pages/NewTicket";
import MyTickets from "./pages/MyTickets";
import UserProfilePage from "./pages/UserProfilePage";
import SettingsPage from "./pages/SettingsPage";
import PerformancePage from "./pages/operations/PerformancePage";

// 🆕 Operations Pages
import OperationsDashboard from "./pages/operations/OperationsDashboard";
import UserSettings from "./components/UserSettings";
import TicketApproval from "./pages/operations/TicketApproval";
import OperationsMyTickets from "./pages/operations/MyTicketsOp";

import TechnicalDashboard from "./pages/Technical/TechnicalDashboard";
import PerformanceTech from "./pages/Technical/PerformanceTech";
import MyTicketTechnical from  "./pages/Technical/MyTicketTechnical";

import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard"; // ✅ Correct path
import Database from "./pages/Admin/Database";
import Settings from "./pages/Admin/Settings";
import UserLog from "./pages/Admin/UserLog";


export default function App() {
  return (
    <Routes>
      {/* Auth Pages */}
      <Route path="/" element={<AuthPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* User Dashboard */}
      <Route path="/user" element={<DashboardLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="new-ticket" element={<NewTicket />} />
        <Route path="my-tickets" element={<MyTickets />} />
      </Route>

      {/* User Profile & Settings */}
      <Route path="/user" element={<UserProfileLayout />}>
        <Route path="profile" element={<UserProfilePage />} />
        <Route path="profile/settings" element={<UserSettings />} />
      </Route>

      {/* 🟩 Operations Team Dashboard */}
      {/* 🟩 Operations Team Dashboard */}
      <Route path="/operation-team" element={<OperationsLayout />}>
        <Route path="dashboard" element={<OperationsDashboard />} />
        <Route path="ticket-approval" element={<TicketApproval />} />
        <Route path="performance" element={<PerformancePage />} />
        <Route path="my-tickets" element={<OperationsMyTickets />} /> {/* ✅ Remove leading slash */}
      </Route>


      {/*  TECH Team Dashboard */}
      <Route path="/technical-team" element={<TechnicalLayout />}>
        <Route path="dashboard" element={<TechnicalDashboard />} />
        <Route path="performance" element={<PerformanceTech />} />
        <Route path="my-tickets" element={<MyTicketTechnical />} />

      </Route>

     <Route path="/admin" element={<AdminLayout />}>
  <Route index element={<AdminDashboard />} />
  <Route path="dashboard" element={<AdminDashboard />} />
  <Route path="database" element={<Database />} />
  <Route path="settings" element={<Settings />} />
  <Route path="userlog" element={<UserLog />} />
</Route>


    </Routes>
  );
}
