import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      toast.error("No token found. Please login.");
      return;
    }

    axios
      .get("http://localhost:8080/api/user/me", {
        headers: {
          Authorization: token, // ✅ Already has Bearer prefix
        },
      })
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        toast.error("Failed to fetch profile info");
        console.error(error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 p-6 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-600 font-semibold">
              Username
            </label>
            <input
              type="text"
              value={profile.username}
              readOnly
              className="w-full mt-1 p-2 border rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">Email</label>
            <input
              type="email"
              value={profile.email}
              readOnly
              className="w-full mt-1 p-2 border rounded bg-gray-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

// import React from "react";

// const ProfilePage = () => {
//   // Dummy user data (replace with real API data later)
//   const user = {
//     username: "prathmesh",
//     email: "prathmesh@example.com",
//     role: "ROLE_USER",
//   };

//   return (
//     <div className="p-4 sm:p-6 min-h-screen bg-gray-50">
//       <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">
//         Profile
//       </h2>

//       <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
//         <div className="mb-4">
//           <label className="block text-gray-600 font-semibold mb-1">
//             Username
//           </label>
//           <p className="text-gray-800">{user.username}</p>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-600 font-semibold mb-1">
//             Email
//           </label>
//           <p className="text-gray-800">{user.email}</p>
//         </div>

//         <div className="mb-6">
//           <label className="block text-gray-600 font-semibold mb-1">Role</label>
//           <p className="text-gray-800">{user.role}</p>
//         </div>

//         <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
//           Edit Profile
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
