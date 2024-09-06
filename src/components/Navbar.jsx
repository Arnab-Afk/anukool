import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-transparent rounded-lg p-4 px-9">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-2xl font-bold">
          Anukul
        </div>

        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className={`hover:text-blue-900 ${
                isActive('/') ? 'font-bold' : 'text-black'
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/commitee"
              className={`hover:text-blue-900 ${
                isActive('/commitee') ? 'font-bold' : 'text-black'
              }`}
            >
              Committee
            </Link>
          </li>
          <li>
            <Link
              to="/interview"
              className={`hover:text-blue-900 ${
                isActive('/interview') ? 'font-bold' : 'text-black'
              }`}
            >
              Interview
            </Link>
          </li>
          <li>
            <Link
              to="/user"
              className={`hover:text-blue-900 ${
                isActive('/user') ? 'font-bold' : 'text-black'
              }`}
            >
              User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
