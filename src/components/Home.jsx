import React from "react";
import homeLogo from "../assets/homeLogo.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen w-full relative">
      {/* Background Image with Overlay */}
      <div
        style={{ backgroundImage: `url(${homeLogo})` }}
        className="h-full w-full bg-cover bg-center bg-no-repeat relative"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div> {/* Dark overlay with blur */}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          
          {/* Heading with animation */}
          <h1 className="text-white md:text-6xl font-extrabold mb-6 animate-fade-in transition-all duration-500 hover:scale-105 hover:text-blue-400">
            Connect Talent with Opportunity
          </h1>

          {/* Search & Buttons Section */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 bg-black/70 p-6 rounded-lg backdrop-blur-lg shadow-2xl animate-slide-up border border-gray-700">
            
            {/* Join Talent Button */}
            <Link to="/Artists">
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-blue-800">
                Join Talent
              </button>
            </Link>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search talent or jobs..."
              className="p-3 w-64 md:w-80 rounded-lg bg-gray-800 text-white outline-none placeholder-gray-400 focus:ring-2 focus:ring-blue-400 transition-all duration-300 border border-gray-600 hover:border-blue-400"
            />

            {/* Find Talent Button */}
            <Link to="/Dashboard"> {/* Fixed link error */}
              <button className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-green-800">
                Find Talent
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
