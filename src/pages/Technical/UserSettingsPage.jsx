// src/pages/UserSettingsPage.jsx
export default function UserSettingsPage() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto animate-fade-in-up">
      <h2 className="text-xl font-bold mb-4 text-[#55D6C2]">Edit Profile Settings</h2>
      <form className="space-y-4">
        <input className="form-input" type="text" placeholder="Real Name" />
        <input className="form-input" type="text" placeholder="Username" />
        <input className="form-input" type="password" placeholder="Current Password" />
        <input className="form-input" type="password" placeholder="New Password" />
        <input className="form-input" type="password" placeholder="Confirm Password" />
        <input className="form-input" type="text" placeholder="Access Level" />
        <input className="form-input" type="text" placeholder="Project Access" />
        <button
          type="submit"
          className="w-full bg-[#55D6C2] text-white py-2 px-4 rounded hover:bg-[#3bb9a9] transition"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}
