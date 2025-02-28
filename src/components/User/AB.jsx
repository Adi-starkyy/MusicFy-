import React, { useState } from "react";

const UserProfile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileType, setFileType] = useState("");

  // Simulate user data (this should come from backend)
  const user = {
    name: "John Doe",
    email: "john@example.com",
    profileImage: "https://via.placeholder.com/100",
    genre: "Rock",
    followers: "12.5K",
    uploadedSongs: 34,
    upcomingEvents: 5,
    earnings: "$2,500",
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    const type = e.target.files[0]?.type.startsWith("video") ? "Video" : "Audio";
    setFileType(type);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }
    alert(`Uploading ${fileType}: ${selectedFile.name}`);
    // Implement actual upload logic (e.g., API call)
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex justify-center">
      <div className="w-3/4 bg-gray-800 p-6 rounded-lg shadow-lg">
        
        {/* User Profile Header */}
        <div className="flex items-center space-x-6 mb-6">
          <img src={user.profileImage} alt="Profile" className="w-20 h-20 rounded-full border-4 border-gray-600" />
          <div>
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-gray-400">{user.genre} Artist</p>
            <p className="text-gray-400">{user.email}</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {[
            { title: "Followers", value: user.followers },
            { title: "Songs Uploaded", value: user.uploadedSongs },
            { title: "Upcoming Events", value: user.upcomingEvents },
            { title: "Earnings", value: user.earnings },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 bg-gray-700 rounded-lg shadow-lg flex flex-col items-center hover:bg-gray-600 transition"
            >
              <h2 className="text-lg">{stat.title}</h2>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Upload Section */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">📤 Upload Video or Audio</h2>
          <input
            type="file"
            accept="audio/*,video/*"
            className="block w-full p-2 bg-gray-800 text-gray-300 rounded-md mb-4"
            onChange={handleFileChange}
          />
          {selectedFile && (
            <p className="text-gray-300 mb-4">
              Selected {fileType}: <span className="text-blue-400">{selectedFile.name}</span>
            </p>
          )}
          <button
            className="bg-blue-500 px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
