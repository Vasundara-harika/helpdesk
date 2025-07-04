import { FaUser, FaPhone, FaBuilding, FaEye, FaClipboardList, FaCheckCircle, FaHourglassHalf, FaPauseCircle, FaStar } from "react-icons/fa";

export default function Performance() {
  const teamMembers = [
    {
      id: 1,
      name: "Operation 1",
      contact: "9876543210",
      department: "Technical",
    },
    {
      id: 2,
      name: "Operation 2",
      contact: "9123456780",
      department: "Support",
    },
    {
      id: 3,
      name: "Operation 3",
      contact: "9988776655",
      department: "Maintenance",
    },
  ];

  const stats = [
    {
      label: "Total Tickets",
      value: 128,
      icon: <FaClipboardList />,
      bg: "bg-blue-100",
      text: "text-blue-700",
    },
    {
      label: "Solved",
      value: 92,
      icon: <FaCheckCircle />,
      bg: "bg-green-100",
      text: "text-green-700",
    },
    {
      label: "Pending",
      value: 24,
      icon: <FaPauseCircle />,
      bg: "bg-red-100",
      text: "text-red-700",
    },
    {
      label: "In Progress",
      value: 12,
      icon: <FaHourglassHalf />,
      bg: "bg-yellow-100",
      text: "text-yellow-700",
    },
    {
      label: "Avg. Rating",
      value: "4.3 / 5",
      icon: <FaStar />,
      bg: "bg-purple-100",
      text: "text-purple-700",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-[#55D6C2] mb-6">Operations Team Performance</h1>

      {/* Top Stats Cards */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-8">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className={`rounded-lg p-4 shadow-sm hover:shadow-md transition ${s.bg} ${s.text} flex items-center gap-4`}
          >
            <div className="text-2xl">{s.icon}</div>
            <div>
              <p className="text-sm">{s.label}</p>
              <h2 className="text-xl font-bold">{s.value}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Team Member Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <FaUser className="text-[#55D6C2] text-2xl" />
                <div>
                  <h2 className="font-semibold text-lg text-gray-800">
                    {member.name}
                  </h2>
                  <p className="text-sm text-gray-500">Operations Team</p>
                </div>
              </div>
              <img
                src={`https://ui-avatars.com/api/?name=${member.name.replace(
                  " ",
                  "+"
                )}&background=55D6C2&color=fff`}
                alt={member.name}
                className="w-12 h-12 rounded-full border-2 border-[#55D6C2]"
              />
            </div>

            <div className="space-y-2 text-gray-700 text-sm">
              <p className="flex items-center gap-2">
                <FaPhone className="text-gray-500" /> {member.contact}
              </p>
              <p className="flex items-center gap-2">
                <FaBuilding className="text-gray-500" /> {member.department}
              </p>
            </div>

            <div className="mt-4 text-right">
              <button className="bg-[#55D6C2] hover:bg-[#3bb9a9] text-white px-4 py-2 text-sm rounded">
                <FaEye className="inline mr-2" />
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
