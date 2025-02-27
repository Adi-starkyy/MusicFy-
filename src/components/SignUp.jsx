import React, { useState } from "react";
import Google from "../assets/google.jpg";
import GitHub from "../assets/github.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const SignUp = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const [name, setName] = useState()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  const handleSignUpSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/signup', {name, email, password})
    .then(result => {console.log(result)
    navigate('/login')
    }
  )
    .catch(err => console.log(err))
  }

  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 p-4"
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute w-40 h-40 bg-white/20 blur-3xl rounded-full pointer-events-none transition-all duration-300"
        style={{
          top: cursorPos.y - 50 + "px",
          left: cursorPos.x - 50 + "px",
        }}
      ></div>

      <div className="relative w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-300 transition-all duration-300">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Create an Account</h2>
        <p className="text-gray-600 text-center mb-6">Sign up to get started</p>

        <form onSubmit={handleSignUpSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md">
            Sign Up
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex flex-col space-y-2">
          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition duration-300">
            <img src={Google} alt="Google" className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>
          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition duration-300">
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
