import React, { useState } from "react";
import { toast } from "react-toastify";

const BookingPage = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const pricePerNight = 2800; // Dummy price for now

  const calculateNights = () => {
    const inDate = new Date(checkInDate);
    const outDate = new Date(checkOutDate);
    const diffTime = outDate - inDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const totalPrice = calculateNights() * pricePerNight;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", {
      checkInDate,
      checkOutDate,
      guests,
      totalPrice,
    });
    toast.success("Booking submitted (dummy).");
  };

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">
        Book Your Stay
      </h2>
      <div className="bg-white p-6 rounded-lg shadow max-w-lg mx-auto">
        {/* Hotel Info */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">City Center Inn</h3>
          <p className="text-gray-600">📍 Mumbai</p>
          <p className="text-blue-600 font-bold mt-1">
            ₹{pricePerNight} / night
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Check-in Date:</label>
            <input
              type="date"
              className="w-full border rounded px-3 py-2"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-medium">Check-out Date:</label>
            <input
              type="date"
              className="w-full border rounded px-3 py-2"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-medium">Guests:</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          {/* Total Price */}
          <p className="text-gray-700 font-medium">
            Total Price:{" "}
            <span className="text-blue-600 font-bold">₹{totalPrice}</span>
          </p>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
