import React from "react";
import { FaEnvelope, FaPhone, FaInstagram, FaFacebook, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";



const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center pt-20">
      {/* Added pt-20 to push content below navbar */}

      <div className="max-w-4xl text-center py-12">
        <h1 className="text-4xl font-bold mb-4">About Musicfy</h1>
        <p className="text-lg text-gray-300">
          Musicfy is an innovative platform designed to bridge the gap between solo artists, bands, and industry professionals.
          We provide musicians with a space to showcase their talent, connect with event organizers, and grow their careers.
          Whether you are an aspiring artist looking for opportunities or a manager searching for the perfect performer,
          Musicfy makes the process seamless and efficient.
        </p>
      </div>

      <div className="max-w-4xl text-center py-8">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-300">
          Our mission is to empower artists by giving them a dedicated platform to gain visibility, book gigs,
          and collaborate with like-minded musicians. We aim to make talent discovery effortless for event organizers
          while ensuring artists get the recognition they deserve.
        </p>
      </div>

      <div className="max-w-4xl text-center py-8">
        <h3 className="text-3xl font-semibold mb-4">Why Choose Musicfy?</h3>
        <ul className="text-lg text-gray-300 list-disc list-inside">
          <li><strong>For Artists:</strong> Build a professional profile, upload your music and videos, and connect with industry professionals.</li>
          <li><strong>For Managers & Event Organizers:</strong> Discover talented performers that match your needs and book them with ease.</li>
          <li><strong>For Music Lovers:</strong> Explore new music, support independent artists, and be part of a growing community.</li>
        </ul>
      </div>

      <div className="max-w-4xl text-center py-8">
        <h4 className="text-3xl font-semibold mb-4">Join the Musicfy Community</h4>
        <p className="text-lg text-gray-300">
          Be part of a revolution in the music industry. Whether you are a solo artist, a band, or a talent scout,
          Musicfy is here to support your journey. Start showcasing your talent today and let the world hear your sound!
        </p>
      </div>

      {/* Meet the Team Section */}
      <div className="max-w-4xl py-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Meet the Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Team Member Cards */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-64">
            <h5 className="text-xl font-semibold">Adrijo Bhowmik</h5>
            <p className="text-gray-400">Founder & CEO</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-64">
            <h5 className="text-xl font-semibold">Arkaprava Das</h5>
            <p className="text-gray-400">Lead Developer</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-64">
            <h5 className="text-xl font-semibold">Roshni Sen</h5>
            <p className="text-gray-400">Frontend Developer</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-64">
            <h5 className="text-xl font-semibold">Saheli Ghosh</h5>
            <p className="text-gray-400">Backend Developer</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-64">
            <h5 className="text-xl font-semibold">Juhi Das</h5>
            <p className="text-gray-400">Content Writer</p>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center pt-20">
        <div className="max-w-4xl text-center py-12">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-gray-300 mb-6">
            Have questions, feedback, or collaboration ideas? We’d love to hear from you! Feel free to reach out to us through any of the following channels:
          </p>

          {/* Contact Details */}
          <div className="space-y-6">
            <p className="text-lg flex items-center justify-center gap-2">
              <FaEnvelope className="text-red-500" />
              <a href="mailto:support@musicfy.com" className="text-blue-400 hover:underline">
                support@musicfy.com
              </a>
            </p>

            <p className="text-lg flex items-center justify-center gap-2">
              <FaPhone className="text-green-500" /> +91 xxxxxxxxxx
            </p>

            <p className="text-lg flex items-center justify-center gap-2">
              <FaMapMarkerAlt className="text-yellow-500" /> "Address"
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mt-6">
            <a href="#" className="text-blue-400 text-2xl hover:text-blue-600">
              <FaTwitter />
            </a>
            <a href="#" className="text-pink-500 text-2xl hover:text-pink-600">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-700 text-2xl hover:text-blue-800">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
