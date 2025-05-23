import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
// Import React Icons - Add more icon imports for enhanced UI
import {
  FiSettings,
  FiHelpCircle,
  FiUser,
  FiLock,
  FiBell,
  FiCreditCard,
  FiSave,
  FiX,
  FiRefreshCw,
  FiInfo,
  FiMapPin,
  FiBriefcase,
  FiLogOut,
  FiCamera,
  FiCheckCircle,
  FiShield,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import { MdEdit } from "react-icons/md";

const AccountSettings = () => {
  const navigate = useNavigate();

  // In a real app, this would come from authentication context or API
  const userProfile = {
    name: "Marry Doe",
    email: "marry@gmail.com",
    profileImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    description:
      "Product designer and marketing strategist with 5+ years of experience in digital product development. Passionate about user-centric design and data-driven marketing approaches.",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    role: "Senior Product Designer",
  };

  const handleLogout = () => {
    // In a real app, you would clear auth tokens, etc.
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header - Enhanced for full width on laptop */}
      <div className="w-full bg-white shadow-sm p-3 sm:p-4 lg:p-5 border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-3 sm:px-4 lg:px-6">
          <div className="flex items-center">
            <FiSettings className="h-6 w-6 text-purple-600 mr-2 hidden sm:block" />
            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
              Account Settings
            </h1>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={handleLogout}
              className="text-sm text-purple-600 hover:text-purple-800 transition-colors duration-200 flex items-center"
            >
              <FiLogOut className="hidden sm:inline h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Logout</span>
              <span className="sm:hidden">Sign Out</span>
            </button>
            <button className="hidden sm:flex items-center text-sm bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-md text-purple-700 hover:bg-purple-100 transition-colors duration-200">
              <FiHelpCircle className="h-4 w-4 mr-1" />
              Help
            </button>
            <div className="relative">
              <button className="text-gray-600 hover:text-purple-600">
                <FiBell className="h-5 w-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Main content - Improved for full width on laptop */}
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto w-full px-0 sm:px-4 lg:px-6">
          <div className="sm:flex">
            {/* Desktop Sidebar - Adjusted for better proportions */}
            <div className="hidden sm:block w-60 lg:w-64 xl:w-72 bg-white p-4 lg:p-6 border-r sticky top-16 self-start h-screen overflow-y-auto">
              <div className="mb-8">
                <div className="relative inline-block group">
                  <img
                    src={userProfile.profileImage}
                    alt={userProfile.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-200 shadow-sm"
                  />
                  <div className="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border-2 border-white"></div>
                  <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <FiCamera className="text-white h-5 w-5" />
                  </div>
                </div>
                <h3 className="font-medium mt-3 text-gray-800">
                  {userProfile.name}
                </h3>
                <p className="text-xs text-gray-500">{userProfile.email}</p>
                <div className="mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <FiCheckCircle className="mr-1 h-3 w-3" />
                    Verified Account
                  </span>
                </div>
              </div>

              <nav className="flex flex-col space-y-1">
                <button className="flex items-center text-left p-2.5 bg-purple-100 text-purple-700 rounded-md font-medium">
                  <FiUser className="h-4 w-4 mr-2" />
                  Profile Settings
                </button>
                <button className="flex items-center text-left p-2.5 text-gray-700 hover:bg-gray-100 rounded-md">
                  <FiShield className="h-4 w-4 mr-2" />
                  Security
                </button>
                <button className="flex items-center text-left p-2.5 text-gray-700 hover:bg-gray-100 rounded-md">
                  <FiBell className="h-4 w-4 mr-2" />
                  Notifications
                </button>
                <button className="flex items-center text-left p-2.5 text-gray-700 hover:bg-gray-100 rounded-md">
                  <FiCreditCard className="h-4 w-4 mr-2" />
                  Billing & Plans
                </button>
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-2">
                    <FiCreditCard className="h-5 w-5 text-blue-600 mr-2" />
                    <h4 className="text-sm font-medium text-blue-800">
                      Pro Plan
                    </h4>
                  </div>
                  <p className="text-xs text-blue-600 mb-3">
                    Your plan expires in 30 days
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <button className="w-full bg-white text-blue-700 border border-blue-200 text-xs font-medium py-1.5 rounded hover:bg-blue-50">
                    Manage Plan
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content Area - Enhanced for full width display */}
            <div className="flex-grow">
              <div className="bg-white shadow-sm sm:shadow-none sm:bg-transparent">
                {/* Mobile Header with Image */}
                <div className="sm:hidden p-4 bg-gradient-to-r from-purple-100 to-purple-50 border-b flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={userProfile.profileImage}
                      alt={userProfile.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div className="absolute bottom-0 right-0 bg-green-500 h-2 w-2 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h2 className="text-gray-800 font-medium text-sm">
                      {userProfile.name}
                    </h2>
                    <p className="text-gray-500 text-xs truncate max-w-[180px]">
                      {userProfile.email}
                    </p>
                  </div>
                </div>

                {/* Mobile Quick Actions */}
                <div className="sm:hidden p-3 border-b flex space-x-2 overflow-x-auto bg-white">
                  <button className="flex items-center px-3 py-1.5 bg-purple-100 text-purple-700 text-xs rounded-md flex-shrink-0">
                    <MdEdit className="h-3 w-3 mr-1" />
                    Edit
                  </button>
                  <button className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-md flex-shrink-0">
                    <FiLock className="h-3 w-3 mr-1" />
                    Security
                  </button>
                  <button className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-md flex-shrink-0">
                    <FiBell className="h-3 w-3 mr-1" />
                    Alerts
                  </button>
                </div>

                {/* Profile Content Panel - Desktop with better layout */}
                <div className="hidden sm:block bg-white rounded-xl shadow-sm mb-6 overflow-hidden">
                  <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="text-lg font-medium text-gray-800 flex items-center">
                      <FiUser className="mr-2 text-purple-600" />
                      Profile Information
                    </h2>
                    <button className="text-sm text-purple-600 hover:text-purple-800 flex items-center">
                      <MdEdit className="h-3 w-3 mr-1" />
                      Edit
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center">
                      <div className="relative group mb-4 lg:mb-0">
                        <img
                          src={userProfile.profileImage}
                          alt={userProfile.name}
                          className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover mr-6 border-2 border-gray-100"
                        />
                        <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <FiCamera className="text-white h-6 w-6" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                          <div>
                            <h3 className="text-xl font-medium text-gray-800 mb-1">
                              {userProfile.name}
                            </h3>
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                              <p className="text-gray-500 text-sm flex items-center">
                                <FiMail className="mr-1 h-3 w-3" />
                                {userProfile.email}
                              </p>
                              <p className="text-gray-500 text-sm flex items-center">
                                <FiPhone className="mr-1 h-3 w-3" />
                                {userProfile.phone}
                              </p>
                            </div>
                            <p className="text-gray-500 text-sm flex items-center mb-4 lg:mb-0">
                              <FiMapPin className="mr-1 h-3 w-3" />
                              {userProfile.location}
                            </p>
                          </div>
                          <div className="hidden lg:flex lg:items-center">
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                              <FiCheckCircle className="mr-1 h-3 w-3" />
                              Active Account
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mt-2 lg:mt-4 lg:max-w-3xl">
                          {userProfile.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Edit Profile Form - Enhanced for full width */}
                <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-5 lg:mb-6">
                    <h3 className="font-medium text-gray-800 flex items-center text-lg lg:text-xl">
                      <MdEdit className="h-5 w-5 lg:h-6 lg:w-6 mr-2 text-purple-600" />
                      Edit Profile
                    </h3>

                    {/* Desktop Only Additional Options */}
                    <div className="hidden sm:block">
                      <button className="text-sm text-purple-600 hover:underline flex items-center">
                        <FiSettings className="h-4 w-4 mr-1" />
                        Advanced Settings
                      </button>
                    </div>
                  </div>

                  <form className="space-y-5 lg:space-y-6">
                    {/* Three column layout on large screens for better full-width usage */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                      <div className="space-y-1">
                        <label className="text-sm text-gray-600 font-medium flex items-center">
                          <FiUser className="h-3.5 w-3.5 mr-1 text-gray-500" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue={userProfile.name}
                          className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          This will be displayed on your profile
                        </p>
                      </div>

                      <div className="space-y-1">
                        <label className="text-sm text-gray-600 font-medium flex items-center">
                          <FiMail className="h-3.5 w-3.5 mr-1 text-gray-500" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          defaultValue={userProfile.email}
                          className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          We'll never share your email with anyone
                        </p>
                      </div>

                      <div className="space-y-1">
                        <label className="text-sm text-gray-600 font-medium flex items-center">
                          <FiPhone className="h-3.5 w-3.5 mr-1 text-gray-500" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          defaultValue={userProfile.phone}
                          className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          For account recovery and notifications
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                      <div className="space-y-1">
                        <label className="text-sm text-gray-600 font-medium flex items-center">
                          <FiBriefcase className="h-3.5 w-3.5 mr-1 text-gray-500" />
                          Professional Title
                        </label>
                        <input
                          type="text"
                          defaultValue={userProfile.role}
                          className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-sm text-gray-600 font-medium flex items-center">
                          <FiMapPin className="h-3.5 w-3.5 mr-1 text-gray-500" />
                          Location
                        </label>
                        <input
                          type="text"
                          defaultValue={userProfile.location}
                          className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm text-gray-600 font-medium flex items-center">
                        <FiInfo className="h-3.5 w-3.5 mr-1 text-gray-500" />
                        Bio
                      </label>
                      <textarea
                        rows="4"
                        defaultValue={userProfile.description}
                        className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      ></textarea>
                      <p className="text-xs text-gray-500 mt-1">
                        Write a short introduction about yourself
                      </p>
                    </div>

                    <div className="pt-4 lg:pt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <button
                        type="button"
                        className="w-full sm:w-auto py-2.5 lg:py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm px-6 sm:px-8 flex items-center justify-center"
                      >
                        <FiSave className="h-4 w-4 mr-2" />
                        Save Changes
                      </button>

                      <div className="flex mt-3 sm:mt-0">
                        {/* Mobile Cancel/Reset Buttons */}
                        <button
                          type="button"
                          className="w-1/2 sm:hidden py-2.5 bg-gray-100 text-gray-700 font-medium rounded-md mr-2 hover:bg-gray-200 flex items-center justify-center"
                        >
                          <FiX className="h-4 w-4 mr-1" />
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="w-1/2 sm:hidden py-2.5 bg-gray-100 text-gray-700 font-medium rounded-md hover:bg-gray-200 flex items-center justify-center"
                        >
                          <FiRefreshCw className="h-4 w-4 mr-1" />
                          Reset
                        </button>

                        {/* Desktop Only Cancel Button */}
                        <button
                          type="button"
                          className="hidden sm:flex items-center py-2.5 lg:py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 px-6 mx-2"
                        >
                          <FiX className="h-4 w-4 mr-2" />
                          Cancel
                        </button>

                        {/* Desktop Only Reset Button */}
                        <button
                          type="button"
                          className="hidden sm:flex items-center py-2.5 lg:py-3 bg-white border border-gray-300 text-red-600 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 px-6"
                        >
                          <FiRefreshCw className="h-4 w-4 mr-2" />
                          Reset Form
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                {/* Spacer for mobile navigation */}
                <div className="h-20 sm:hidden"></div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Footer - Enhanced for full width */}
      <div className="w-full mt-6 sm:mt-8">
        <Footer />
      </div>
      {/* Navigation */}
      <Navigation />
    </div>
  );
};

export default AccountSettings;
