// ✅ src/pages/operations/MyTickets.jsx
import { useState, useEffect } from "react";
import { FaSearch, FaStar, FaTimes, FaDownload } from "react-icons/fa";
import ticketsData from "../../data/tickets";

export default function MyTicketsOp() {
  const [tickets, setTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState(10);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showCreateTeam, setShowCreateTeam] = useState(false);
  const [teamDetails, setTeamDetails] = useState({
    teamName: "",
    members: "",
    remark: "",
  });

  useEffect(() => {
    setTickets(ticketsData);
  }, []);

  const filteredTickets = tickets
    .filter(
      (ticket) =>
        ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.ticketNo.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, limit);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "closed":
        return "bg-green-100 text-green-700";
      case "in progress":
        return "bg-yellow-100 text-yellow-700";
      case "on hold":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleCreateTeam = () => {
    console.log("Team Created:", teamDetails);
    setShowCreateTeam(false);
    setTeamDetails({ teamName: "", members: "", remark: "" });
    setSelectedTicket(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen relative">
      {/* 🔍 Search and Limit */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search Ticket No or Subject"
            className="w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-[#55D6C2]"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
        </div>
        <div>
          <label className="text-sm mr-2 font-medium text-gray-600">Show</label>
          <select
            value={limit}
            onChange={(e) => setLimit(parseInt(e.target.value))}
            className="p-2 border rounded"
          >
            {[5, 10, 20, 50].map((val) => (
              <option key={val} value={val}>{val} Tickets</option>
            ))}
          </select>
        </div>
      </div>

      {/* 🧾 Tickets Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full table-auto text-sm">
          <thead className="bg-[#55D6C2] text-white">
            <tr>
              <th className="p-3 text-left">Ticket No</th>
              <th className="p-3 text-left">Subject</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Priority</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Person In Charge</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center p-4 text-gray-500">No tickets found.</td>
              </tr>
            ) : (
              filteredTickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="border-b hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedTicket(ticket);
                    setShowCreateTeam(false);
                  }}
                >
                  <td className="p-3">{ticket.ticketNo}</td>
                  <td className="p-3">{ticket.subject}</td>
                  <td className="p-3">{ticket.category}</td>
                  <td className="p-3">{ticket.priority}</td>
                  <td className="p-3">{ticket.date}</td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(ticket.status)}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="p-3">{ticket.supportBy}</td>
                  <td className="p-3 text-[#55D6C2]">
                    <FaDownload size={18} className="hover:text-[#3bb9a9]" />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* 🧾 Ticket Modal */}
      {selectedTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white w-[90%] md:w-[500px] p-6 rounded-lg shadow-lg relative animate-fade-in-up max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={() => setSelectedTicket(null)}
            >
              <FaTimes />
            </button>

            {!showCreateTeam ? (
              <>
                <h2 className="text-xl font-bold mb-4 text-[#55D6C2]">{selectedTicket.subject}</h2>
                <div className="text-sm text-gray-800 space-y-2">
                  <p><strong>Ticket No:</strong> {selectedTicket.ticketNo}</p>
                  <p><strong>Category:</strong> {selectedTicket.category}</p>
                  <p><strong>Priority:</strong> {selectedTicket.priority}</p>
                  <p><strong>Status:</strong> {selectedTicket.status}</p>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                  <button className="px-4 py-2 bg-[#55D6C2] text-white rounded hover:bg-[#3bb9a9]">
                    Update
                  </button>
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    onClick={() => setShowCreateTeam(true)}
                  >
                    Create Team
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold text-[#55D6C2] mb-4">Create Team</h2>
                <div className="space-y-4">
                  <p><strong>Ticket No:</strong> {selectedTicket.ticketNo}</p>
                  <input
                    type="text"
                    placeholder="Team Name"
                    className="w-full border rounded p-2"
                    value={teamDetails.teamName}
                    onChange={(e) => setTeamDetails({ ...teamDetails, teamName: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Team Members"
                    className="w-full border rounded p-2"
                    value={teamDetails.members}
                    onChange={(e) => setTeamDetails({ ...teamDetails, members: e.target.value })}
                  />
                  <textarea
                    rows={3}
                    placeholder="Remark / Description"
                    className="w-full border rounded p-2"
                    value={teamDetails.remark}
                    onChange={(e) => setTeamDetails({ ...teamDetails, remark: e.target.value })}
                  />
                  <div className="flex justify-end gap-3 mt-4">
                    <button
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
                      onClick={() => setShowCreateTeam(false)}
                    >
                      Back
                    </button>
                    <button
                      className="px-4 py-2 bg-[#55D6C2] text-white rounded hover:bg-[#3bb9a9]"
                      onClick={handleCreateTeam}
                    >
                      Create Team
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
