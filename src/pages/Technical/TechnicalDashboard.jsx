// ✅ Technical Team Dashboard
import React from "react";
import { FaBug, FaCheckCircle, FaSpinner, FaTasks } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

export default function TechnicalDashboard() {
  const stats = [
    {
      label: "Total Tickets",
      count: 124,
      icon: <FaTasks className="text-3xl text-blue-500" />,
      bg: "bg-blue-100",
    },
    {
      label: "Solved Tickets",
      count: 89,
      icon: <FaCheckCircle className="text-3xl text-green-500" />,
      bg: "bg-green-100",
    },
    {
      label: "Pending Tickets",
      count: 21,
      icon: <FaBug className="text-3xl text-yellow-500" />,
      bg: "bg-yellow-100",
    },
    {
      label: "In Progress",
      count: 14,
      icon: <FaSpinner className="text-3xl text-purple-500 animate-spin" />,
      bg: "bg-purple-100",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-[#55D6C2] mb-6">Technical Team Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-md ${stat.bg} flex items-center justify-between`}
          >
            <div>
              <div className="text-lg font-semibold text-gray-700">{stat.label}</div>
              <div className="text-2xl font-bold text-gray-900">{stat.count}</div>
            </div>
            <div>{stat.icon}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <img
            src="https://img.freepik.com/free-vector/tiny-people-testing-quality-assurance-software-isolated-flat-vector-illustration-cartoon-character-fixing-bugs-hardware-device-application-test-it-service-concept_74855-10172.jpg"
            alt="Technical Team Illustration"
            className="rounded-lg shadow w-full object-cover"
          />
        </div>

        <div className="space-y-4">
          {[1, 2, 3, 4].map((id) => (
            <div
              key={id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-4">
                <MdSupportAgent className="text-3xl text-[#55D6C2]" />
                <div>
                  <p className="font-semibold text-gray-800">Tech {id}</p>
                  <p className="text-sm text-gray-500">Dept: IT | 📞 +91 987654321{id}</p>
                </div>
              </div>
              <button className="px-3 py-1 text-sm bg-[#55D6C2] text-white rounded hover:bg-[#45b5b0]">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
