import axios from "axios";

const BASE_URL = "http://localhost:8080/api/bookings"; // Adjust if different

export const getBookingsForUser = async (token) => {
  console.log("Token before axios request:", token); // ✅ Print token
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw error;
  }
};
