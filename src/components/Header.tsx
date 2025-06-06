import React from "react";
import { IconDashboard } from "@tabler/icons-react";
// import ThemeToggle from "./ThemeToggle"; // Uncomment if you're using it

const Header: React.FC = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-4 rounded-xl shadow-md mb-6">
      <div className="flex items-center space-x-3">
        <IconDashboard size={28} />
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
          DevOps Dashboard Lite
        </h1>
      </div>
      {/* Optional: Add theme toggle */}
      {/* <ThemeToggle /> */}
    </header>
  );
};

export default Header;
