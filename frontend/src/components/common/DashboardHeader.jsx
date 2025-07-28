// src/components/common/DashboardHeader.jsx
import React from "react";

const DashboardHeader = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-600 focus:outline-none"
        onClick={toggleSidebar}
      >
        {/* Hamburger icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Title or other content */}
      <h1 className="text-xl font-bold text-gray-700">Dashboard</h1>

      {/* Optional: User profile or logout button */}
    </header>
  );
};

export default DashboardHeader;
