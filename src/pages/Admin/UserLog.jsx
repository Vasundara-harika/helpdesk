import { useState } from "react";

const userLogs = [
  { no: 1, date: "2025-07-03", signIn: "09:00 AM", staffId: "EMP001", department: "Technical Support", activity: "Resolved 3 tickets", signOut: "05:00 PM" },
  { no: 2, date: "2025-07-03", signIn: "10:15 AM", staffId: "EMP002", department: "Operations", activity: "Approved 2 tickets", signOut: "06:10 PM" },
  { no: 3, date: "2025-07-02", signIn: "08:45 AM", staffId: "EMP003", department: "Admin", activity: "Updated user roles", signOut: "04:50 PM" },
  { no: 4, date: "2025-07-02", signIn: "09:30 AM", staffId: "EMP004", department: "Technical Support", activity: "Fixed server bug", signOut: "05:20 PM" },
  { no: 5, date: "2025-07-01", signIn: "10:00 AM", staffId: "EMP005", department: "Operations", activity: "Monitored logs", signOut: "06:00 PM" },
  { no: 6, date: "2025-06-30", signIn: "08:30 AM", staffId: "EMP006", department: "Admin", activity: "Reviewed policy", signOut: "04:45 PM" },
  { no: 7, date: "2025-06-30", signIn: "09:00 AM", staffId: "EMP007", department: "Technical Support", activity: "Updated backend", signOut: "05:30 PM" },
];

export default function UserLogHistory() {
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filteredLogs, setFilteredLogs] = useState(userLogs);

  const handleFilter = () => {
    const filtered =
      departmentFilter === "All"
        ? userLogs
        : userLogs.filter((log) => log.department === departmentFilter);
    setFilteredLogs(filtered);
  };

  const displayedLogs = filteredLogs.slice(0, rowsPerPage === "All" ? filteredLogs.length : rowsPerPage);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-7xl mx-auto mt-6">
      <h2 className="text-2xl font-bold text-[#55D6C2] mb-6">User Log History</h2>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 mb-4">
        <select
          className="border border-gray-300 px-4 py-2 rounded-lg focus:ring-[#55D6C2]"
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
        >
          <option value="All">All Departments</option>
          <option value="Technical Support">Technical Support</option>
          <option value="Operations">Operations</option>
          <option value="Admin">Admin</option>
        </select>

        

        <div className="ml-auto">
          <label className="mr-2 font-medium text-gray-600">Rows per page:</label>
          <select
            className="border border-gray-300 px-3 py-2 rounded-lg"
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(e.target.value === "All" ? "All" : parseInt(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value="All">All</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border rounded-lg">
          <thead className="bg-[#55D6C2] text-white">
            <tr>
              <th className="px-4 py-3">No.</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Sign In</th>
              <th className="px-4 py-3">Staff ID</th>
              <th className="px-4 py-3">Department</th>
              <th className="px-4 py-3">Activity</th>
              <th className="px-4 py-3">Sign Out</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            {displayedLogs.map((log) => (
              <tr key={log.no} className="hover:bg-[#f0fefb] transition">
                <td className="px-4 py-2">{log.no}</td>
                <td className="px-4 py-2">{log.date}</td>
                <td className="px-4 py-2">{log.signIn}</td>
                <td className="px-4 py-2">{log.staffId}</td>
                <td className="px-4 py-2">{log.department}</td>
                <td className="px-4 py-2">{log.activity}</td>
                <td className="px-4 py-2">{log.signOut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
