import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import HotelList from "../pages/HotelList";
import BookingPage from "../pages/BookingPage";
import DashboardLayout from "../layouts/DashboardLayout";
import ProfilePage from "../pages/ProfilePage";
import SettingsPage from "../pages/SettingsPage";
import BookingsPage from "../pages/BookingsPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Dashboard routes wrapped inside layout */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="profile" element={<ProfilePage />} /> {/* ✅ Add here */}
        <Route path="settings" element={<SettingsPage />} /> {/* ✅ Add here */}
        <Route path="hotels" element={<HotelList />} />
        {/* ✅ Bookings list page */}
        <Route path="bookings" element={<BookingsPage />} />
        {/* ✅ Booking form page */}
        <Route path="booking" element={<BookingPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
