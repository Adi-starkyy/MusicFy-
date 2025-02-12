import React from "react";
import homeLogo from "./assets/homeLogo.jpg";

function Home() {
  return (
    <div className="h-screen w-full">
      <div
        style={{ backgroundImage: `url(${homeLogo})` }}
        className="h-full w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white text-center"
      >
        {/* Heading */}
        <h1 className="text-5xl font-extrabold mb-6">
          Connect Talent with Opportunity
        </h1>

        {/* Action Section */}
        <div className="flex items-center space-x-4 bg-black/50 p-4 rounded-lg">
          {/* Left Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
            Join Talent
          </button>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search talent or jobs..."
            className="p-3 w-64 rounded-lg text-white outline-none"
          />

          {/* Right Button */}
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold">
            Find Talent
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
