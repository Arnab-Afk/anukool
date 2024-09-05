import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          AnuKool
        </div>

        <ul className="flex space-x-6">
          <li>
            <Link to="/dashboard" className="text-white hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/commitee" className="text-white hover:text-gray-300">
              Committee
            </Link>
          </li>
          <li>
            <Link to="/interview" className="text-white hover:text-gray-300">
              Interview
            </Link>
          </li>
          <li>
            <Link to="/calendar" className="text-white hover:text-gray-300">
              Calendar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
