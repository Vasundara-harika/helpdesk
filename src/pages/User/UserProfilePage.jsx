// ✅ src/pages/UserProfilePage.jsx
import { useNavigate } from "react-router-dom";
import { FaUserEdit, FaCog, FaStar } from "react-icons/fa";
import { useState } from "react";

export default function UserProfilePage() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleRating = (value) => setRating(value);

  return (
    <div className="max-w-5xl mx-auto p-6 animate-fade-in-up">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#55D6C2]">User Profile</h1>
        <div className="space-x-2">
          <button
            onClick={() => navigate("/user/profile/settings")}
            className="bg-[#55D6C2] text-white px-4 py-2 rounded hover:bg-[#3bb9a9]"
          >
            <FaCog className="inline-block mr-1" /> Settings
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
            <FaUserEdit className="inline-block mr-1" /> Edit Profile
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2zN-5_LE8lihNYwnfx-jIMlJLnfGtxXTSz5oWOznnfJPnm2e6mnZb7VDGfypS6oOAM14&usqp=CAU"
            alt="User"
            className="w-32 h-32 rounded-full object-cover border-4 border-[#55D6C2] mb-4"
          />
          <button className="text-sm text-[#55D6C2] underline hover:text-[#3bb9a9]">
            Change Photo
          </button>
        </div>

        <div className="col-span-2 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullname" className="block text-gray-600 text-sm font-semibold mb-1">Full Name</label>
              <input id="fullname" name="fullname" type="text" className="form-input" value="Vasundara Harika" readOnly />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-1">Email</label>
              <input id="email" name="email" type="email" className="form-input" value="vasundara@example.com" readOnly />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-600 text-sm font-semibold mb-1">Phone</label>
              <input id="phone" name="phone" type="text" className="form-input" value="123-456-7890" readOnly />
            </div>
            <div>
              <label htmlFor="department" className="block text-gray-600 text-sm font-semibold mb-1">Department</label>
              <input id="department" name="department" type="text" className="form-input" value="IT Support" readOnly />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-bold text-[#55D6C2] mb-4">Feedback</h2>
        <textarea
          name="feedback"
          className="w-full p-3 border border-gray-300 rounded mb-4"
          rows={4}
          placeholder="Write your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <div className="flex items-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              onClick={() => handleRating(star)}
              className={`cursor-pointer text-2xl ${rating >= star ? "text-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
        <button
          onClick={() => alert("Feedback submitted!")}
          className="bg-[#55D6C2] text-white px-6 py-2 rounded hover:bg-[#3bb9a9]"
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
}
