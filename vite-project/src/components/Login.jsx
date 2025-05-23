import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Form.css";
import Footer from "./Footer";
import { FiMail, FiLock, FiLogIn, FiArrowRight, FiUser } from "react-icons/fi";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);
    // Here you would typically call an API to authenticate the user

    // For demo purposes, we'll just redirect to the account settings page
    navigate("/account-settings");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-purple-50 p-4 sm:p-6">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto">
        {/* Login logo with brand */}
        <div className="mb-6 flex justify-center">
          <div className="text-3xl font-bold text-purple-600 flex items-center">
            <span>Pop</span>
            <span className="text-gray-700">X</span>
            <FiUser className="ml-2 h-6 w-6" />
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute w-40 h-40 bg-purple-100 rounded-full -top-20 -right-20 opacity-50"></div>
          <div className="absolute w-24 h-24 bg-purple-200 rounded-full -bottom-10 -left-10 opacity-50"></div>

          <div className="mb-6 sm:mb-8 w-full relative z-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Enter your credentials to access your account and manage your
              business.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full space-y-4 sm:space-y-5 mb-5 sm:mb-6 relative z-10"
          >
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-purple-600 text-sm font-medium flex items-center"
              >
                <FiMail className="mr-1 h-4 w-4" /> Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 pl-10 text-gray-700 
                          focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                          placeholder-gray-400"
                  placeholder="you@example.com"
                  required
                />
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="password"
                className="text-purple-600 text-sm font-medium flex items-center"
              >
                <FiLock className="mr-1 h-4 w-4" /> Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 pl-10 text-gray-700
                          focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                          placeholder-gray-400"
                  placeholder="Enter your password"
                  required
                />
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="flex justify-end">
                <a
                  href="#"
                  className="text-xs sm:text-sm text-purple-600 hover:text-purple-800"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-2 bg-purple-600 text-white font-medium rounded-lg 
                      hover:bg-purple-700 transition-all duration-200 
                      focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
                      flex items-center justify-center"
            >
              <FiLogIn className="mr-2" /> Sign In to Your Account
            </button>
          </form>

          <div className="text-center relative z-10">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-purple-600 hover:text-purple-800 font-medium flex items-center justify-center mt-2"
              >
                Create an Account <FiArrowRight className="ml-1" />
              </Link>
            </p>
          </div>
        </div>
        {/* Trust indicators */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 mb-2">
            Trusted by thousands of companies worldwide
          </p>
          <div className="flex justify-center space-x-4 opacity-60">
            <span className="text-xs font-bold text-gray-500">COMPANY</span>
            <span className="text-xs font-bold text-gray-500">STARTUP</span>
            <span className="text-xs font-bold text-gray-500">ENTERPRISE</span>
          </div>
        </div>{" "}
      </div>

      <div className="w-full mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
