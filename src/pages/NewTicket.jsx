import { useState } from "react";
import { FaLink } from "react-icons/fa";

export default function NewTicket() {
  const [form, setForm] = useState({
    ticketNo: "",
    name: "",
    date: "",
    department: "",
    subject: "",
    category: "",
    type: "",
    priority: "",
    description: "",
    link: "",
    isHuman: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.isHuman) {
      alert("🤖 Please confirm you're not a robot!");
      return;
    }
    alert("🎉 Ticket submitted successfully!");
  };

  return (
    <div className="min-h-screen  p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-bb from-[#E0F7FA] to-[#F1FAEE] p-5 max-w-6xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          📝 Create New Ticket
        </h2>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {["ticketNo", "name", "date", "department"].map((field, idx) => (
            <div key={idx}>
              <label className="block text-sm font-medium text-gray-700 capitalize mb-1">
                {field === "ticketNo" ? "Ticket No" : field}
              </label>
              <input
                type={field === "date" ? "date" : "text"}
                name={field}
                value={form[field]}
                onChange={handleChange}
                placeholder={field === "ticketNo" ? "Auto or Manual" : ""}
                className="w-full rounded-md border-2  border-gray-400 bg-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#55D6C2]"
              />
            </div>
          ))}
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border-2  border-gray-400 bg-gray-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55D6C2]"
            placeholder="Brief issue summary"
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Left: Category, Type, Priority */}
          <div className="space-y-4">
            {[
              { label: "Category", name: "category", placeholder: "Ex: Software" },
              { label: "Type", name: "type", placeholder: "Ex: Bug, Request" },
              { label: "Priority", name: "priority", type: "select" },
            ].map(({ label, name, placeholder, type }, i) => (
              <div key={i}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {label}
                </label>
                {type === "select" ? (
                  <select
                    name="priority"
                    value={form.priority}
                    onChange={handleChange}
                    className="w-full border-2  border-gray-400 bg-gray-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55D6C2]"
                  >
                    <option value="">Select</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                ) : (
                  <input
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full border-2  border-gray-400 bg-gray-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55D6C2]"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Right: Description + Link */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <div className="relative">
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows="6"
                placeholder="Explain your issue"
                className="w-full border-2  border-gray-400 bg-gray-100 px-3 py-8 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55D6C2]"
              ></textarea>

              {/* Link in corner */}
              <div className="absolute bottom-2 right-2 flex items-center gap-2">
                <FaLink className="text-[#55D6C2]" />
                <input
                  type="url"
                  name="link"
                  value={form.link}
                  onChange={handleChange}
                  placeholder="https://link.com"
                  className="border border-[#55D6C2] bg-white text-sm px-2 py-1 rounded-md focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 border-solid">
          <label className="flex items-center gap-2 text-sm text-gray-800">
            <input
              type="checkbox"
              name="isHuman"
              checked={form.isHuman}
              onChange={handleChange}
              className="w-4 h-4"
            />
            I am not a robot
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUq3hRHp9A5JVKAyPlLvYPvQRNPSlXypR3Zg&s"
              alt="Not a robot"
              className="w-15 h-10"
            />
          </label>

          <button
            type="submit"
            className="mt-4 md:mt-0 bg-[#55D6C2] hover:bg-[#3cc9b4] text-white px-6 py-2 rounded-md font-semibold"
          >
            Submit Ticket
          </button>
        </div>
      </form>
    </div>
  );
}
