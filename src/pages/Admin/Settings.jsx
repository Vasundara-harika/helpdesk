import { useState } from "react";
import { FaCog, FaServer, FaEnvelope, FaUserShield, FaBell } from "react-icons/fa";

const settingsStructure = {
  General: ["Language", "Data Backup"],
  "Connect To": ["GoDash", "SuperController"],
  Email: ["Email SMTP"],
  Authorization: ["Edit Authorization", "Authority Level"],
  Notifications: ["Enable Notifications"],
};

const iconMap = {
  General: <FaCog />,
  "Connect To": <FaServer />,
  Email: <FaEnvelope />,
  Authorization: <FaUserShield />,
  Notifications: <FaBell />,
};

export default function Settings() {
  const [activeMain, setActiveMain] = useState("General");

  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col md:flex-row bg-gradient-to-br from-[#f0f4ff] to-[#f0fcf8] p-6 rounded-lg shadow-inner">
      {/* Left - Main Settings Menu */}
      <div className="md:w-1/4 w-full bg-[#55D6C2] text-white rounded-xl shadow-lg p-4">
        <h2 className="text-xl font-bold mb-4 border-b border-white pb-2">Settings</h2>
        <ul className="space-y-3">
          {Object.keys(settingsStructure).map((main) => (
            <li key={main}>
              <button
                onClick={() => setActiveMain(main)}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-2 transition duration-300 ${
                  activeMain === main ? "bg-white text-[#55D6C2] font-semibold" : "hover:bg-[#3bb9a9]"
                }`}
              >
                {iconMap[main]} {main}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right - Sub Settings */}
      <div className="flex-1 bg-white rounded-xl shadow-lg p-6 mt-6 md:mt-0 md:ml-6">
        <h3 className="text-2xl font-bold text-[#55D6C2] mb-4">
          {activeMain} Settings
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {settingsStructure[activeMain].map((sub, index) => (
            <div
              key={index}
              className="p-4 bg-[#f1fefb] border border-[#c7f0eb] rounded-lg shadow hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-[#369d8f]">{sub}</h4>
              <p className="text-gray-600 mt-1 text-sm">
                Configure settings for <span className="font-medium">{sub}</span>.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
