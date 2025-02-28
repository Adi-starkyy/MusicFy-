import React, { useState } from "react";
import Google from "../assets/google.jpg";
import GitHub from "../assets/github.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const SignUp = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const validateForm = () => {
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required!");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return false;
    }
    setError("");
    return true;
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    axios
      .post("http://localhost:3001/signup", { name, email, password })
      .then((result) => {
        setSuccess(true);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((err) => setError("Email already exists!"));
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 p-4 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Mouse Follow Circle */}
      <div
        className="absolute w-40 h-40 bg-white/20 blur-3xl rounded-full pointer-events-none transition-all duration-300"
        style={{
          top: cursorPos.y - 50 + "px",
          left: cursorPos.x - 50 + "px",
        }}
      ></div>

      {/* Form Container */}
      <div className="relative w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-300 transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 animate-fade-in">
          Create an Account 🚀
        </h2>
        <p className="text-gray-600 text-center mb-6">Sign up to explore talent!</p>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 mb-4 rounded-lg flex items-center">
            <FaTimesCircle className="mr-2" />
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 text-green-600 p-3 mb-4 rounded-lg flex items-center">
            <FaCheckCircle className="mr-2" />
            Account Created Successfully!
          </div>
        )}

        <form onSubmit={handleSignUpSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setPassword(e.target.value)}
            />
            {password && password.length < 6 && (
              <span className="text-sm text-red-500">Password too weak 🔴</span>
            )}
            {password && password.length >= 6 && (
              <span className="text-sm text-green-500">Strong Password ✅</span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg hover:scale-105 transition duration-300 shadow-md"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Signup Buttons */}
        <div className="flex flex-col space-y-2">
          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition duration-300 group">
            <img src={Google} alt="Google" className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>

          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition duration-300 group">
            <img src={GitHub} alt="GitHub" className="w-5 h-5 mr-2" />
            Sign up with GitHub
          </button>
        </div>

        <p className="text-center text-gray-600 mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
