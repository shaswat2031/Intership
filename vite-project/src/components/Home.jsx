import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { FiUser, FiArrowRight, FiCheckCircle } from "react-icons/fi";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-purple-50 p-4 sm:p-6">
      {/* Hero Banner - For mobile */}
      <div className="block sm:hidden w-full mb-6">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
          alt="PopX Platform - Mobile Hero"
          className="w-full h-48 object-cover rounded-xl shadow-md"
        />
      </div>
      <div className="sm:flex sm:items-center sm:justify-between w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Desktop only image/banner */}
        <div className="hidden sm:block sm:w-2/5 lg:w-1/2 h-full">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            alt="PopX Platform - Desktop"
            className="w-full h-full object-cover object-center"
            style={{ minHeight: "500px" }}
          />
        </div>

        {/* Main content - responsive for both mobile and desktop */}
        <div className="w-full sm:w-3/5 lg:w-1/2 bg-white p-6 sm:p-8 md:p-10 flex flex-col">
          {" "}
          <div className="mb-8 sm:mb-10 w-full">
            <div className="inline-block mb-3 px-4 py-1 bg-purple-100 rounded-full">
              <span className="text-xs text-purple-800 font-semibold uppercase tracking-wide">
                New Platform
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Build Your Business with{" "}
              <span className="text-purple-600">PopX</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg hidden sm:block leading-relaxed">
              Your all-in-one platform for business growth, customer engagement,
              and analytics. Join thousands of businesses already transforming
              with PopX.
            </p>
            <p className="text-gray-600 text-sm block sm:hidden">
              Start growing your business today with our powerful platform
            </p>
          </div>
          <div className="w-full space-y-4 mb-8">
            <Link
              to="/signup"
              className="w-full py-3 sm:py-4 bg-purple-600 text-white text-sm sm:text-base font-medium rounded-lg 
                      hover:bg-purple-700 active:bg-purple-800 transition-all duration-200 
                      focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow-md block text-center
                      flex items-center justify-center"
            >
              <FiUser className="mr-2" />
              Create Your Free Account
            </Link>
            <Link
              to="/login"
              className="w-full py-3 sm:py-4 bg-white border border-purple-200 text-purple-800 text-sm sm:text-base font-medium rounded-lg 
                      hover:bg-purple-50 active:bg-purple-100 transition-all duration-200 
                      focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 block text-center
                      flex items-center justify-center"
            >
              Already have an account? <span className="ml-1">Sign In</span>{" "}
              <FiArrowRight className="ml-1" />
            </Link>
          </div>
          {/* Features section */}
          <div className="border-t border-gray-100 pt-6 mt-auto">
            <p className="font-medium text-sm text-gray-700 mb-3">
              Trusted by thousands of companies:
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center text-sm text-gray-600">
                <FiCheckCircle className="text-green-500 mr-2" />
                <span>Easy Setup</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <FiCheckCircle className="text-green-500 mr-2" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <FiCheckCircle className="text-green-500 mr-2" />
                <span>Advanced Analytics</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <FiCheckCircle className="text-green-500 mr-2" />
                <span>Team Collaboration</span>
              </div>
            </div>
          </div>
          {/* Mobile only feature highlights */}
          <div className="block sm:hidden mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs font-medium text-gray-600 mb-2">
              Popular features:
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                Easy Setup
              </span>
              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                Analytics
              </span>
              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                Support
              </span>
            </div>
          </div>
          {/* Desktop feature list */}
          <div className="hidden sm:block mt-5 pt-5 border-t border-gray-100">
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Advanced analytics dashboard
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                24/7 customer support
              </li>
            </ul>
          </div>{" "}
        </div>
      </div>

      {/* Full width footer */}
      <div className="w-full mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
