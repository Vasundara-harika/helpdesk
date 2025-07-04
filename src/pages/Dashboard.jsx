import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useLocation } from "react-router-dom";

const roleStats = {
  User: [
    { label: "Total Tickets", value: 120 },
    { label: "Solved", value: 95 },
    { label: "In Progress", value: 18 },
    { label: "Awaiting Approval", value: 7 },
  ],
  "Operations Team": [
    { label: "Assigned Tickets", value: 48 },
    { label: "Escalated", value: 12 },
    { label: "Resolved", value: 30 },
    { label: "Pending", value: 6 },
  ],
  "Technical Support": [
    { label: "Bugs Fixed", value: 65 },
    { label: "Open Tickets", value: 20 },
    { label: "Deployments", value: 10 },
    { label: "Waiting on Dev", value: 5 },
  ],
  Admin: [
    { label: "Total Users", value: 220 },
    { label: "Team Members", value: 25 },
    { label: "System Logs", value: 312 },
    { label: "Pending Approvals", value: 9 },
  ],
};

export default function Dashboard() {
  const location = useLocation();
  const [role, setRole] = useState("User");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const roleParam = queryParams.get("role") || localStorage.getItem("role") || "User";
    setRole(roleParam);
  }, [location]);

  const stats = roleStats[role] || [];

  return (
    <div className="p-6 bg-gradient-to-br from-[#d1f5ef] to-[#b8f0e4] min-h-screen">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#55D6C2] to-[#3AC2AD] animate-fade-in">
        {role} Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border-t-4 border-[#55D6C2]"
          >
            <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            <h2 className="text-4xl font-bold text-[#55D6C2] mt-2">
              <CountUp end={stat.value} duration={1.5} />
            </h2>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <img
          src="https://media.istockphoto.com/id/1188816693/vector/young-teenage-woman-uses-laptop-for-work-or-chatting-with-friends.jpg?s=612x612&w=0&k=20&c=FRUajWyXnGV6UshCz72GDz4ImV0BrU9VTXoFvdRz6U4="
          alt="Illustration"
          className="rounded-xl w-full max-w-[600px] shadow-lg hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}
