import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const DashboardSidebar = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 720) {
        onClose(true); // ✅ Keep open on desktop
      } else {
        onClose(false); // ✅ Hide on mobile
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // ✅ Initial call to set state
    return () => window.removeEventListener("resize", handleResize);
  }, [onClose]);

  const sidebarClasses = isOpen
    ? "block fixed inset-y-0 left-0 w-64 bg-blue-700 text-white z-50 transition-transform duration-300"
    : "hidden md:block md:w-64 bg-blue-700 text-white";

  const navItemClasses = ({ isActive }) =>
    `block px-4 py-2 hover:bg-blue-500 ${
      isActive ? "bg-blue-600 font-semibold" : ""
    }`;

  const handleItemClick = () => {
    if (window.innerWidth < 720) {
      onClose(false); // ✅ Auto-close on mobile after click
    }
  };

  return (
    <div className={sidebarClasses}>
      <div className="p-4 text-lg font-bold border-b border-blue-500">
        Dashboard
      </div>
      <nav className="mt-4 space-y-1">
        <NavLink
          to="/dashboard"
          end
          className={navItemClasses}
          onClick={handleItemClick}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/dashboard/hotels"
          className={navItemClasses}
          onClick={handleItemClick}
        >
          Hotels
        </NavLink>
        <NavLink
          to="/dashboard/bookings"
          className={navItemClasses}
          onClick={handleItemClick}
        >
          Bookings
        </NavLink>
        <NavLink
          to="/dashboard/profile"
          className={navItemClasses}
          onClick={handleItemClick}
        >
          Profile
        </NavLink>
        <NavLink
          to="/dashboard/settings"
          className={navItemClasses}
          onClick={handleItemClick}
        >
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default DashboardSidebar;
