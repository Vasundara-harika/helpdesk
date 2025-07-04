import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const dummyTickets = [
  { id: 1, title: "Login Issue", status: "Open", priority: "High", assignee: "John", type: "Bug" },
  { id: 2, title: "Payment Gateway Error", status: "In Progress", priority: "Critical", assignee: "Alice", type: "Bug" },
  { id: 3, title: "Update User Profile", status: "Resolved", priority: "Low", assignee: "David", type: "Feature" },
  { id: 4, title: "Server Crash", status: "Escalated", priority: "High", assignee: "Bob", type: "Incident" },
  { id: 5, title: "UI Alignment Fix", status: "Open", priority: "Medium", assignee: "Harika", type: "UI Bug" },
];

export default function TicketTable({ title = "Find Tickets", tickets = dummyTickets }) {
  const [search, setSearch] = useState("");

  const filtered = tickets.filter((ticket) =>
    ticket.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-7xl mx-auto mt-6">
      <h2 className="text-2xl font-bold text-[#55D6C2] mb-4 flex items-center gap-2">
        <FaSearch className="text-[#55D6C2]" /> {title}
      </h2>

      <input
        type="text"
        placeholder="Search tickets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#55D6C2]"
      />

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border rounded-lg">
          <thead className="bg-[#55D6C2] text-white">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3">Assignee</th>
              <th className="px-4 py-3">Type</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            {filtered.map((ticket) => (
              <tr key={ticket.id} className="hover:bg-[#f0fefb] transition">
                <td className="px-4 py-2">{ticket.id}</td>
                <td className="px-4 py-2">{ticket.title}</td>
                <td className="px-4 py-2">{ticket.status}</td>
                <td className="px-4 py-2">{ticket.priority}</td>
                <td className="px-4 py-2">{ticket.assignee}</td>
                <td className="px-4 py-2">{ticket.type}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No tickets found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
