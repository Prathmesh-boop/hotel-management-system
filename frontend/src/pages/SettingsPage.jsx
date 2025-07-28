import React, { useState } from "react";
import { toast } from "react-toastify";

const SettingsPage = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwords.newPassword !== passwords.confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }

    // ✅ Placeholder logic (API to be added later)
    toast.success("Password change feature coming soon!");
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Settings</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-semibold">Current Password</label>
            <input
              type="password"
              name="currentPassword"
              value={passwords.currentPassword}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={passwords.newPassword}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">Confirm New Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={passwords.confirmPassword}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
