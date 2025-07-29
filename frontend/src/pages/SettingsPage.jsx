import React, { useState } from "react";
import { toast } from "react-toastify";

const SettingsPage = () => {
  // Dummy user info (replace with real data from API later)
  const [userInfo, setUserInfo] = useState({
    name: "Prathmesh",
    email: "prathmesh@example.com",
  });

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInfoChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    // ✅ Placeholder logic (API to be added later)
    toast.success("User info update coming soon!");
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }
    toast.success("Password change feature coming soon!");
  };

  return (
    <div className="min-h-screen bg-blue-50 p-4 flex justify-center items-start">
      <div className="bg-white rounded-lg shadow p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Settings</h2>

        {/* User Info Section */}
        <form onSubmit={handleInfoSubmit} className="space-y-4 mb-8">
          <div>
            <label className="block text-gray-600 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleInfoChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              readOnly
              className="w-full mt-1 p-2 border rounded bg-gray-100 cursor-not-allowed"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
          >
            Save User Info
          </button>
        </form>

        {/* Password Change Section */}
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <h3 className="text-xl font-semibold mb-2">Change Password</h3>
          <div>
            <label className="block text-gray-600 font-semibold">
              Current Password
            </label>
            <input
              type="password"
              name="currentPassword"
              value={passwords.currentPassword}
              onChange={handlePasswordChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              value={passwords.newPassword}
              onChange={handlePasswordChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">
              Confirm New Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={passwords.confirmPassword}
              onChange={handlePasswordChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
