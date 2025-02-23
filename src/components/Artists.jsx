import React from 'react';
import Artistimg from '../assets/artists-img.jpeg'


function Artists() {
  return (
    <div id="artists-section" className="bg-black min-h-screen p-10 flex items-center justify-center">
      <div className="mt-30 flex gap-6">

          <div className="text-black border-none bg-white rounded-lg w-40 h-60 flex flex-col items-center justify-center p-5 shadow-lg">
            <img src= {Artistimg} alt="placeholder" className="w-24 h-24 mb-4 rounded-2xl" />
            <h1 className="text-lg font-semibold">Artists</h1>
            <button className="border px-4 py-2 mt-2 bg-black text-white rounded-lg">Join Now</button>
          </div>

          <div className="text-black border-none bg-white rounded-lg w-40 h-60 flex flex-col items-center justify-center p-5 shadow-lg">
            <img src="https://via.placeholder.com/150" alt="placeholder" className="w-24 h-24 mb-4" />
            <h1 className="text-lg font-semibold">Bands</h1>
            <button className="border px-4 py-2 mt-2 bg-black text-white rounded-lg">Join Now</button>
          </div>

          <div className="text-black border-none bg-white rounded-lg w-40 h-60 flex flex-col items-center justify-center p-5 shadow-lg">
            <img src="https://via.placeholder.com/150" alt="placeholder" className="w-24 h-24 mb-4" />
            <h1 className="text-lg font-semibold">Singers</h1>
            <button className="border px-4 py-2 mt-2 bg-black text-white rounded-lg">Join Now</button>
          </div>

          <div className="text-black border-none bg-white rounded-lg w-40 h-60 flex flex-col items-center justify-center p-5 shadow-lg">
            <img src="https://via.placeholder.com/150" alt="placeholder" className="w-24 h-24 mb-4" />
            <h1 className="text-lg font-semibold">Genre</h1>
            <button className="border px-4 py-2 mt-2 bg-black text-white rounded-lg">Join Now</button>
          </div>
      </div>
    </div>
  );
}

export default Artists;
