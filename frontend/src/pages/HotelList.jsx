import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      toast.error("No token found. Please login again.");
      return;
    }

    axios
      .get("http://localhost:8080/api/hotels", {
        headers: {
          Authorization: token, // ✅ Already contains 'Bearer'
        },
      })
      .then((response) => {
        setHotels(response.data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Failed to load hotels");
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">
        Hotel List
      </h2>
      {loading ? (
        <p>Loading hotels...</p>
      ) : hotels.length === 0 ? (
        <p>No hotels available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-lg shadow p-4 border hover:shadow-md transition"
            >
              {/* ✅ Hotel Image */}
              {hotel.imageUrl ? (
                <img
                  src={hotel.imageUrl}
                  alt={hotel.name}
                  className="w-full h-40 object-cover rounded mb-3"
                />
              ) : (
                <div className="w-full h-40 bg-gray-200 rounded mb-3 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}

              <h3 className="text-xl font-semibold mb-1">{hotel.name}</h3>
              <p className="text-gray-600 text-sm">📍 {hotel.location}</p>
              <p className="text-blue-600 font-bold mt-2">
                ₹{hotel.pricePerNight} / night
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HotelList;
