import React from "react";
import Artistimg from "../assets/artists-img.jpeg";
import BandImg from "../assets/bandImg.jpg";
import SingerImg from "../assets/singerImg.jpg";
import GenreImg from "../assets/genreImg.jpeg";

function Artists() {
  return (
    <div
      id="artists-section"
      className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen flex items-center justify-center p-10"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { img: Artistimg, title: "Artists" },
          { img: BandImg, title: "Bands" },
          { img: SingerImg, title: "Singers" },
          { img: GenreImg, title: "Genre" },
        ].map((item, index) => (
          <div
            key={index}
            className="relative bg-white bg-opacity-10 backdrop-blur-lg border border-gray-700 rounded-2xl w-48 h-64 flex flex-col items-center justify-center p-6 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {/* Image with glow effect */}
            <img
              src={item.img}
              alt={item.title}
              className="w-24 h-24 mb-4 rounded-full shadow-lg border-2 border-gray-400 transition-all duration-300 hover:scale-110"
            />

            {/* Title */}
            <h1 className="text-lg font-semibold text-black">{item.title}</h1>

            {/* Button with glow effect */}
            <button className="mt-3 px-5 py-2 bg-purple-600 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-purple-800 hover:shadow-lg hover:scale-105">
              Join Now
            </button>

            {/* Subtle glowing border effect */}
            <div className="absolute inset-0 rounded-2xl border border-gray-500 opacity-20 hover:opacity-40 transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Artists;
