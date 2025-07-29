// import React from "react";

// const BookingsPage = () => {
//   // Dummy bookings for now (to be replaced by real API data later)
//   const bookings = [
//     {
//       id: 1,
//       hotelName: "Sea View Resort",
//       location: "Goa",
//       checkInDate: "2025-08-01",
//       checkOutDate: "2025-08-03",
//       guests: 2,
//       totalPrice: 9000,
//       imageUrl: "https://picsum.photos/300/200", // Optional image
//     },
//     {
//       id: 2,
//       hotelName: "Hilltop Hotel",
//       location: "Manali",
//       checkInDate: "2025-08-10",
//       checkOutDate: "2025-08-13",
//       guests: 3,
//       totalPrice: 9600,
//       imageUrl: "https://picsum.photos/300/200",
//     },
//   ];

//   return (
//     <div className="p-4 sm:p-6">
//       <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">
//         My Bookings
//       </h2>

//       {bookings.length === 0 ? (
//         <p className="text-gray-600 text-center">No bookings found.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {bookings.map((booking) => (
//             <div
//               key={booking.id}
//               className="bg-white rounded-lg shadow border p-4 hover:shadow-md transition"
//             >
//               {/* Optional Image */}
//               <img
//                 src={booking.imageUrl}
//                 alt={booking.hotelName}
//                 className="rounded w-full h-40 object-cover mb-3"
//               />

//               <h3 className="text-xl font-semibold">{booking.hotelName}</h3>
//               <p className="text-gray-600">📍 {booking.location}</p>
//               <p className="text-gray-600">
//                 📅 Check-in: {booking.checkInDate}
//               </p>
//               <p className="text-gray-600">
//                 📅 Check-out: {booking.checkOutDate}
//               </p>
//               <p className="text-gray-600">👤 Guests: {booking.guests}</p>
//               <p className="text-blue-600 font-bold mt-2">
//                 💰 Total: ₹{booking.totalPrice}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookingsPage;

import React, { useEffect, useState } from "react";
import { getBookingsForUser } from "../services/bookingService";
import { toast } from "react-toastify";

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken"); // ✅ Matches ProfilePage
    if (!token) {
      toast.error("No token found. Please login.");
      return;
    }

    getBookingsForUser(token)
      .then((data) => {
        setBookings(data);
      })
      .catch((error) => {
        toast.error("Failed to load bookings");
        console.error("Error loading bookings:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading bookings...</p>;

  if (bookings.length === 0)
    return <p className="text-center">No bookings found.</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">My Bookings</h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {bookings.map((booking) => (
          <div
            key={booking.bookingId}
            className="p-4 border rounded-lg shadow-md bg-white"
          >
            <img
              src={booking.imageUrl}
              alt={booking.hotelName}
              className="rounded-md w-full h-[180px] object-cover mb-3"
            />
            <h3 className="text-lg font-semibold mb-1">{booking.hotelName}</h3>
            <p className="text-gray-600 mb-1">{booking.location}</p>
            <p className="text-sm">Check-in: {booking.checkInDate}</p>
            <p className="text-sm mb-1">Check-out: {booking.checkOutDate}</p>
            <p className="text-sm mb-1">Guests: {booking.numOfGuests}</p>
            <p className="text-sm font-semibold text-green-600">
              Total: ₹{booking.totalPrice}
            </p>
            <p className="text-sm text-blue-600 mt-1">Status: Confirmed</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingsPage;
