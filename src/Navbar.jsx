import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-gray-800 text-white shadow-md">
        <ul className="flex space-x-6 text-lg">
          <li><a href="#" className="hover:text-gray-400">Home</a></li>
          <li><a href="#" className="hover:text-gray-400">Artists</a></li>
          <li><a href="#" className="hover:text-gray-400">About Us</a></li>
          <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
        </ul>
        <div className="flex items-center space-x-4 mr-8">
          <button className="bg-blue-500 px-4 py-2 rounded">Log In</button>
          <button className="bg-green-500 px-4 py-2 rounded">Sign Up</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
