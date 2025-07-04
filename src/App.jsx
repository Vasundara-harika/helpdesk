import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/Auth";
import ProtectedRoute from "./routes/ProtectedRoute";

import AdminLayout from "./layouts/AdminLayout";
import OperationsLayout from "./layouts/OperationsLayout";
import TechnicalLayout from "./layouts/TechnicalLayout";
import UserLayout from "./layouts/UserLayout";

import AdminDashboard from "./pages/Admin/AdminDashboard";
import Database from "./pages/Admin/Database";
import Settings from "./pages/Admin/Settings";
import UserLogins from "./pages/Admin/UserLogins";
import UserProfileAdmin from "./pages/Admin/UserProfilePage";
import UserSettingsPageAdmin from "./pages/Admin/UserSettingsPage";

import OperationDashboard from "./pages/operations/OperationsDashboard";
import MyTicketsOp from "./pages/operations/MyTicketsOp";
import PerformancePage from "./pages/operations/PerformancePage";
import TicketApproval from "./pages/operations/TicketApproval";
import UserProfileOp from "./pages/operations/UserProfilePage";
import UserSettingsPageOp from "./pages/operations/UserSettingsPage";

import TechnicalDashboard from "./pages/Technical/TechnicalDashboard";
import Performance from "./pages/Technical/PerformanceTech";
import MyTicketTechnical from "./pages/Technical/MyTicketTechnical";
import UserProfileTech from "./pages/Technical/UserProfilePage";
import UserSettingsPageTech from "./pages/Technical/UserSettingsPage";

import UserDashboard from "./pages/User/Dashboard";
import MyTickets from "./pages/User/MyTickets";
import NewTicket from "./pages/User/NewTicket";
import UserProfile from "./pages/User/UserProfilePage";
import UserSettingsPage from "./pages/User/UserSettingsPage";

import ForgotPassword from "./pages/ForgotPassword";
import Unauthorized from "./pages/Unauthorized";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<AuthPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* USER ROUTES */}
      <Route
        path="/user"
        element={
          <ProtectedRoute allowedRoles={["User"]}>
            <UserLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="my-tickets" element={<MyTickets />} />
        <Route path="new-ticket" element={<NewTicket />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="profile/settings" element={<UserSettingsPage />} />
      </Route>

      {/* TECHNICAL TEAM ROUTES */}
      <Route
        path="/technical-team"
        element={
          <ProtectedRoute allowedRoles={["Technical Team"]}>
            <TechnicalLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<TechnicalDashboard />} />
        <Route path="my-tickets" element={<MyTicketTechnical />} />
        <Route path="performance" element={<Performance />} />
        <Route path="profile" element={<UserProfileTech />} />
        <Route path="profile/settings" element={<UserSettingsPageTech />} />
      </Route>

      {/* OPERATIONS TEAM ROUTES */}
      <Route
        path="/operation-team"
        element={
          <ProtectedRoute allowedRoles={["Operations Team"]}>
            <OperationsLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<OperationDashboard />} />
        <Route path="my-tickets" element={<MyTicketsOp />} />
        <Route path="performance" element={<PerformancePage />} />
        <Route path="ticket-approval" element={<TicketApproval />} />
        <Route path="profile" element={<UserProfileOp />} />
        <Route path="profile/settings" element={<UserSettingsPageOp />} />
      </Route>

      {/* ADMIN ROUTES */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["Admin"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="database" element={<Database />} />
        <Route path="settings" element={<Settings />} />
        <Route path="userlog" element={<UserLogins />} />
        <Route path="profile" element={<UserProfileAdmin />} />
        <Route path="profile/settings" element={<UserSettingsPageAdmin />} />
      </Route>

      {/* Catch-all Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
