// src/layouts/DashboardLayout.jsx
import React, { useState, useEffect } from "react";
import DashboardSidebar from "../components/common/DashboardSidebar";
import DashboardHeader from "../components/common/DashboardHeader";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 720);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Auto-close sidebar on mobile after resize
  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 720);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <DashboardHeader toggleSidebar={toggleSidebar} />

      {/* Main content with sidebar and page */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <DashboardSidebar isOpen={isSidebarOpen} onClose={setIsSidebarOpen} />

        {/* Page Content */}
        <main
          className={`flex-1 p-4 bg-gray-100 transition-all duration-300 ${
            isSidebarOpen && window.innerWidth >= 720 ? "ml-64" : ""
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
