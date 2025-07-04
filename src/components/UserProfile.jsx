import React, { useState } from "react";
import { FaUserCircle, FaStar, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-blue-600">User Profile</h2>
        <button
          onClick={() => navigate("/user-profile/settings")}
          title="Settings"
          className="text-gray-600 hover:text-blue-500"
        >
          <FaCog size={20} />
        </button>
      </div>

      <div className="flex flex-col items-center gap-2">
        <FaUserCircle className="text-6xl text-gray-400" />
        <h3 className="text-lg font-semibold">Vasundara Harika</h3>
        <p className="text-sm text-gray-600">📞 123-456-7890</p>
        <p className="text-sm text-gray-600">📧 vasundara@example.com</p>
        <p className="text-sm text-gray-600">🗂️ Department: IT Support</p>

        <div className="flex mt-3">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={20}
              onClick={() => setRating(i + 1)}
              className={`cursor-pointer ${
                i < rating ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Give Feedback
        </button>
      </div>
    </div>
  );
}
