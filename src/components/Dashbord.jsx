import React from "react";
import { FaMusic, FaUsers, FaCalendarAlt, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

// Sample artist profiles
const artists = [
  { name: "Adrijo Bhowmik", genre: "Rock", image: "https://via.placeholder.com/50", path: "/profile/adrijo" },
  { name: "Roshni Sen", genre: "Pop", image: "https://via.placeholder.com/50", path: "/profile/roshni" },
  { name: "Arkaprava Das", genre: "Jazz", image: "https://via.placeholder.com/50", path: "/profile/arkaprava" },
  { name: "Saheli Ghosh", genre: "Hip-Hop", image: "https://via.placeholder.com/50", path: "/profile/saheli" },
];

// Dashboard stats
const stats = [
  { icon: <FaUsers />, title: "Followers", value: "12.5K" },
  { icon: <FaMusic />, title: "Songs Uploaded", value: "34" },
  { icon: <FaCalendarAlt />, title: "Upcoming Events", value: "5" },
  { icon: <FaDollarSign />, title: "Earnings", value: "$2,500" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-6 flex">
      
      {/* Left Sidebar - Artist Profiles */}
      <div className="w-1/4 bg-gray-800 p-4 rounded-lg shadow-lg transition transform hover:scale-105">
        <h2 className="text-2xl font-semibold mb-4 text-center">🎤 Artists</h2>
        <ul className="space-y-4">
          {artists.map((artist, index) => (
            <li key={index} className="flex items-center bg-gray-700 p-3 rounded-lg shadow-md hover:bg-blue-600 transition transform hover:scale-105">
              <img src={artist.image} alt={artist.name} className="w-12 h-12 rounded-full mr-3 border-2 border-white shadow-md" />
              <div>
                <Link to={artist.path} className="text-lg font-bold hover:text-yellow-400 transition">
                  {artist.name}
                </Link>
                <p className="text-gray-300 text-sm">{artist.genre} Artist</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Middle Section - Recent Activity Feed */}
      <div className="w-2/4 mx-6 bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
        <Link to="/home">
          <h2 className="text-2xl font-semibold mb-4 text-center cursor-pointer hover:text-blue-400 transition transform hover:scale-110">
            🎤 Activity Feed
          </h2>
        </Link>
        <ul className="space-y-3">
          <li className="p-3 bg-gray-700 rounded-md hover:bg-gray-600 transition transform hover:scale-105">
            🎶 Uploaded a new song: <span className="text-blue-400">"Echoes of Time"</span>
          </li>
          <li className="p-3 bg-gray-700 rounded-md hover:bg-gray-600 transition transform hover:scale-105">
            📅 Booked for <span className="text-green-400">Live Concert - NYC</span>
          </li>
          <li className="p-3 bg-gray-700 rounded-md hover:bg-gray-600 transition transform hover:scale-105">
            💰 Earned <span className="text-yellow-400">$1,200</span> from music streams
          </li>
        </ul>
      </div>

      {/* Right Sidebar - Dashboard Stats */}
      <div className="w-1/4 bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
        <h2 className="text-2xl font-semibold mb-4 text-center">📊 Stats</h2>
        <div className="grid grid-cols-1 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 bg-gray-700 rounded-lg shadow-lg flex items-center justify-between hover:bg-purple-600 transition transform hover:scale-105"
            >
              <div className="text-3xl text-blue-400">{stat.icon}</div>
              <div className="text-right">
                <h3 className="text-lg">{stat.title}</h3>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
