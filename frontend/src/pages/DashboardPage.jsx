// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const DashboardPage = () => {
//   const [userInfo, setUserInfo] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     if (!token) {
//       toast.error("No token found. Please login.");
//       return;
//     }

//     axios
//       .get("http://localhost:8080/api/user/me", {
//         headers: {
//           Authorization: token.startsWith("Bearer ")
//             ? token
//             : `Bearer ${token}`,
//         },
//         withCredentials: false, // ✅ Important: You're using token, not cookies
//       })

//       .then((response) => {
//         setUserInfo(response.data);
//       })
//       .catch((error) => {
//         toast.error("Failed to fetch user info");
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-blue-100">
//       <div className="bg-white p-6 rounded shadow w-full max-w-md text-center">
//         <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//         {userInfo ? (
//           <>
//             <p>
//               Welcome,{" "}
//               <span className="font-semibold">{userInfo.username}</span>
//             </p>
//             <p className="text-sm text-gray-600">{userInfo.email}</p>
//           </>
//         ) : (
//           <p>Loading user info...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const DashboardPage = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      toast.error("No token found. Please login.");
      return;
    }

    axios
      .get("http://localhost:8080/api/user/me", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        toast.error("Failed to fetch user info");
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome to Dashboard</h2>
      {userInfo ? (
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-700">Username: {userInfo.username}</p>
          <p className="text-gray-500 text-sm">Email: {userInfo.email}</p>
        </div>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
};

export default DashboardPage;
