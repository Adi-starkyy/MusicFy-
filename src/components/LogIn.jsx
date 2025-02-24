import React, { useState } from "react";
import Google from "../assets/google.jpg";
import GitHub from "../assets/github.jpg";
import { Link } from "react-router-dom";
import axios from 'axios'

const LogIn = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {                 // Change this function later to the email and pass from the database
    e.preventDefault()                          
    axios.post('', {email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 p-4 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background Effect */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.15), transparent 50%)`,
          transition: "background 0.1s ease-out",
        }}
      ></div>

      {/* Login Card with White Background */}
      <div className="relative w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-300">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Welcome Back!!</h2>
        <p className="text-gray-600 text-center mb-6">Log in to your account</p>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-4 text-gray-600">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2 accent-blue-500" />
              Remember Me
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <Link to = "/"> {/*Remeber to route it to the user dashboard */}
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md">
                Log In
            </button>
          </Link>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Logins */}
        <div className="flex flex-col space-y-2">
          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition duration-300 cursor-pointer">
            <img src={Google} alt="Google" className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>
          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition duration-300 cursor-pointer">
            <img src={GitHub} alt="GitHub" className="w-5 h-5 mr-2" />
            Sign in with GitHub
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600 mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
