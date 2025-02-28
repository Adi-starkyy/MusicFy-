import React from "react";
import { FaEnvelope, FaPhone, FaInstagram, FaFacebook, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex flex-col items-center pt-20">
      
      {/* About Section */}
      <div className="max-w-4xl text-center py-12">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-400 animate-fade-in">About Musicfy</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Musicfy is an innovative platform designed to bridge the gap between solo artists, bands, and industry professionals.
          We provide musicians with a space to showcase their talent, connect with event organizers, and grow their careers.
          Whether you're an aspiring artist or a manager looking for the perfect performer, Musicfy makes the process seamless and efficient.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl text-center py-8">
        <h2 className="text-3xl font-semibold mb-4 text-green-400">Our Mission</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          We empower artists by giving them a dedicated platform to gain visibility, book gigs, 
          and collaborate with like-minded musicians. We aim to make talent discovery effortless for event organizers, 
          ensuring artists get the recognition they deserve.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-4xl text-center py-8">
        <h3 className="text-3xl font-semibold mb-4 text-purple-400">Why Choose Musicfy?</h3>
        <ul className="text-lg text-gray-300 list-disc list-inside space-y-2">
          <li><strong className="text-white">For Artists:</strong> Build a profile, upload music/videos, and connect with industry professionals.</li>
          <li><strong className="text-white">For Managers & Event Organizers:</strong> Discover and book talented performers effortlessly.</li>
          <li><strong className="text-white">For Music Lovers:</strong> Explore new music, support independent artists, and join a thriving community.</li>
        </ul>
      </div>

      {/* Join Community Section */}
      <div className="max-w-4xl text-center py-8">
        <h4 className="text-3xl font-semibold mb-4 text-yellow-400">Join the Musicfy Community</h4>
        <p className="text-lg text-gray-300 leading-relaxed">
          Whether you're a solo artist, a band, or a talent scout, Musicfy supports your journey. 
          Start showcasing your talent today and let the world hear your sound!
        </p>
      </div>

      {/* Meet the Team Section */}
      <div className="max-w-4xl py-8">
        <h2 className="text-3xl font-semibold text-center mb-6 text-red-400">Meet the Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { name: "Adrijo Bhowmik", role: "Founder & CEO" },
            { name: "Arkaprava Das", role: "Lead Developer" },
            { name: "Roshni Sen", role: "Frontend Developer" },
            { name: "Saheli Ghosh", role: "Backend Developer" },
          ].map((member, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-64 transform transition duration-300 hover:scale-105 hover:bg-gray-700">
              <h5 className="text-xl font-semibold text-white">{member.name}</h5>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="max-w-4xl text-center py-12">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Contact Us</h1>
        <p className="text-lg text-gray-300 mb-6">
          Have questions, feedback, or collaboration ideas? We’d love to hear from you!
          Reach out to us through any of the following channels:
        </p>

        {/* Contact Details */}
        <div className="space-y-6">
          <p className="text-lg flex items-center justify-center gap-2">
            <FaEnvelope className="text-red-500" />
            <a href="mailto:support@musicfy.com" className="text-blue-400 hover:underline transition duration-300">
              support@musicfy.com
            </a>
          </p>

          <p className="text-lg flex items-center justify-center gap-2">
            <FaPhone className="text-green-500" /> +91 xxxxxxxxxx
          </p>

          <p className="text-lg flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-yellow-500" /> "Your Business Address"
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a href="#" className="text-blue-400 text-2xl hover:text-blue-600 transition duration-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-pink-500 text-2xl hover:text-pink-600 transition duration-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-blue-700 text-2xl hover:text-blue-800 transition duration-300">
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
