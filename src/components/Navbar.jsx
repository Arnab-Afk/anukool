import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white  rounded-lg p-4">
      <div className="container mx-auto flex justify-start items-center">
        <div className="text-black text-4xl font-bold">Anukul</div>

        <ul className="flex ml-10 space-x-6">
          <li>
            <Link
              to="/"
              className={`hover:text-blue-900 ${
                isActive("/") ? "font-bold" : "text-black"
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/commitee"
              className={`hover:text-blue-900 ${
                isActive("/commitee") ? "font-bold" : "text-black"
              }`}
            >
              Committee
            </Link>
          </li>
          <li>
            <Link
              to="/interview"
              className={`hover:text-blue-900 ${
                isActive("/interview") ? "font-bold" : "text-black"
              }`}
            >
              Interview
            </Link>
          </li>
          <li>
            <Link
              to="/calendar"
              className={`hover:text-blue-900 ${
                isActive("/calendar") ? "font-bold" : "text-black"
              }`}
            >
              Calendar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
