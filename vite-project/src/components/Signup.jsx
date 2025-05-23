import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Form.css";
import Footer from "./Footer";
import {
  FiMail,
  FiLock,
  FiUser,
  FiPhone,
  FiBriefcase,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
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
    console.log("Signup form submitted:", formData);
    // Here you would typically call an API to register the user

    // For demo purposes, we'll just redirect to the account settings page
    navigate("/account-settings");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-purple-50 p-3 sm:p-6">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto">
        {/* Signup logo with brand */}
        <div className="mb-6 flex justify-center">
          <div className="text-3xl font-bold text-purple-600 flex items-center">
            <span>Pop</span>
            <span className="text-gray-700">X</span>
            <FiUser className="ml-2 h-6 w-6" />
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute w-40 h-40 bg-purple-100 rounded-full -top-20 -right-20 opacity-50"></div>
          <div className="absolute w-24 h-24 bg-purple-200 rounded-full -bottom-10 -left-10 opacity-50"></div>

          <div className="mb-5 sm:mb-6 w-full relative z-10">
            <div className="inline-block mb-2 px-3 py-1 bg-purple-100 rounded-full">
              <span className="text-xs text-purple-800 font-semibold">
                Create New Account
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              Join PopX Community
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Fill out the form below to create your account and start managing
              your business
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full space-y-4 relative z-10"
          >
            <div className="space-y-1">
              <label
                htmlFor="fullName"
                className="text-purple-600 text-sm font-medium flex items-center"
              >
                <FiUser className="mr-1 h-4 w-4" /> Full Name
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 pl-10 text-gray-700 
                          focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  required
                />
                <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label
                  htmlFor="phoneNumber"
                  className="text-purple-600 text-sm font-medium flex items-center"
                >
                  <FiPhone className="mr-1 h-4 w-4" /> Phone number
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 pl-10 text-gray-700 
                            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                  <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-purple-600 text-sm font-medium flex items-center"
                >
                  <FiMail className="mr-1 h-4 w-4" /> Email address
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 pl-10 text-gray-700 
                            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="password"
                className="text-purple-600 text-sm font-medium flex items-center"
              >
                <FiLock className="mr-1 h-4 w-4" /> Password
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 pl-10 text-gray-700 
                          focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  required
                />
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 8 characters
              </p>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="companyName"
                className="text-purple-600 text-sm font-medium flex items-center"
              >
                <FiBriefcase className="mr-1 h-4 w-4" /> Company name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 pl-10 text-gray-700 
                          focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
                <FiBriefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="mt-3 sm:mt-4">
              <p className="text-purple-600 text-sm font-medium mb-2 flex items-center">
                <FiCheckCircle className="mr-1 h-4 w-4" /> Are you an Agency?
                <span className="text-red-500 ml-1">*</span>
              </p>
              <div className="flex space-x-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="isAgency"
                    value="yes"
                    checked={formData.isAgency === "yes"}
                    onChange={handleChange}
                    className="form-radio text-purple-600 h-4 w-4 sm:h-5 sm:w-5"
                  />
                  <span className="text-sm sm:text-base">Yes</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="isAgency"
                    value="no"
                    checked={formData.isAgency === "no"}
                    onChange={handleChange}
                    className="form-radio text-purple-600 h-4 w-4 sm:h-5 sm:w-5"
                  />
                  <span className="text-sm sm:text-base">No</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-6 bg-purple-600 text-white text-sm sm:text-base font-medium rounded-lg 
                      hover:bg-purple-700 active:bg-purple-800 transition-all duration-200 
                      focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
                      flex items-center justify-center"
            >
              <FiUser className="mr-2" /> Create Account
            </button>

            <p className="text-xs text-gray-500 text-center mt-3">
              By signing up, you agree to our
              <a
                href="#"
                className="text-purple-600 hover:text-purple-800 mx-1"
              >
                Terms of Service
              </a>
              and
              <a
                href="#"
                className="text-purple-600 hover:text-purple-800 mx-1"
              >
                Privacy Policy
              </a>
            </p>
          </form>

          <div className="text-center mt-5 relative z-10">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-purple-600 hover:text-purple-800 font-medium flex items-center justify-center mt-2"
              >
                Login to your account <FiArrowRight className="ml-1" />
              </Link>
            </p>
          </div>
        </div>{" "}
      </div>

      <div className="w-full mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Signup;
