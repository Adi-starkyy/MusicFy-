import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <Link 
          to="/" 
          className="text-3xl font-extrabold tracking-wider text-white hover:text-blue-400 transition duration-300"
        >
          🎵 Musicfy
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-blue-400 transition duration-300 hover:scale-105">Home</Link>
          </li>
          <li>
            <Link to="/artists" className="hover:text-blue-400 transition duration-300 hover:scale-105">Artists</Link>
          </li>
          <li>
            <Link to="/aboutus" className="hover:text-blue-400 transition duration-300 hover:scale-105">About Us</Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-blue-400 transition duration-300 hover:scale-105">Dashboard</Link>
          </li>
        </ul>

        {/* Desktop Buttons with Beautiful Hover Effects */}
        <div className="hidden md:flex space-x-4">
          <Link 
            to="/login" 
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-md shadow-md transition-all duration-300 hover:scale-110 hover:shadow-xl hover:from-blue-600 hover:to-blue-800"
          >
            Log In
          </Link>
          <Link 
            to="/signup" 
            className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-md shadow-md transition-all duration-300 hover:scale-110 hover:shadow-xl hover:from-green-600 hover:to-green-800"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-2xl focus:outline-none transition-all duration-300 hover:text-blue-400"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu with Smooth Slide Down */}
      <div className={`md:hidden bg-gray-800 text-white w-full py-4 absolute top-full left-0 transform transition-transform duration-300 ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} shadow-lg`}>
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <Link to="/" className="text-lg hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/artists" className="text-lg hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>Artists</Link>
          </li>
          <li>
            <Link to="/aboutus" className="text-lg hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>About Us</Link>
          </li>
          <li>
            <Link to="/dashboard" className="text-lg hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>Dashboard</Link>
          </li>
        </ul>

        {/* Mobile Login & Sign Up Buttons */}
        <div className="mt-6 flex flex-col items-center space-y-3">
          <Link 
            to="/login" 
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-blue-600 hover:to-blue-800"
            onClick={() => setIsOpen(false)}
          >
            Log In
          </Link>
          <Link 
            to="/signup" 
            className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-md shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-green-600 hover:to-green-800"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
