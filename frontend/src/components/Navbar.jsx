import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Login', path: '/login' },
    { name: 'Signup', path: '/signup' },
    { name: 'Dashboard', path: '/dashboard' }
  ];

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MedVision 🧠
        </Link>

        <ul className="flex space-x-4">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-gray-700 hover:text-blue-600 font-medium transition ${
                  currentPath === link.path ? 'text-blue-600 underline' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
