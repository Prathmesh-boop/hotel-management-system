import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          HotelEase
        </Link>
        <nav className="space-x-4">
          <Link
            to="/register"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
