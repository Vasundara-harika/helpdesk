import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function UserSettings() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-customMint">User Profile Settings</h2>

      <form className="space-y-4">
        <div className="flex items-center gap-4">
          <FaUserCircle className="text-5xl text-gray-400" />
          <button
            type="button"
            className="text-customMint underline hover:text-blue-700 text-sm"
          >
            Change Profile Picture
          </button>
        </div>

        <input className="w-full p-2 border rounded" placeholder="Username" />
        <input className="w-full p-2 border rounded" type="password" placeholder="Current Password" />
        <input className="w-full p-2 border rounded" type="password" placeholder="New Password" />
        <input className="w-full p-2 border rounded" type="password" placeholder="Confirm Password" />
        <input className="w-full p-2 border rounded" placeholder="Real Name" />

        <select className="w-full p-2 border rounded">
          <option>Admin</option>
          <option>Staff</option>
          <option>User</option>
        </select>

        <select className="w-full p-2 border rounded">
          <option>Read</option>
          <option>Write</option>
          <option>Full Access</option>
        </select>

        <button
          type="submit"
          className="w-full bg-customMint text-white py-2 rounded hover:bg-[#45b5b0]"
        >
          Update User
        </button>
      </form>
    </div>
  );
}
