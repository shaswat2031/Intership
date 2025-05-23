import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import {
  FiHelpCircle,
  FiArrowUp,
  FiUsers,
  FiCheckCircle,
  FiBarChart2,
  FiPieChart,
  FiTrendingUp,
  FiBell,
  FiSearch,
  FiCalendar,
} from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header - Enhanced for better visual */}
      <div className="w-full bg-white shadow-sm p-3 sm:p-4 border-b sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="mr-2 text-purple-600 hidden sm:block">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 14L12 10L16 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
              PopX Dashboard
            </h1>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 rounded-lg px-3 py-2 text-sm w-40 lg:w-60 focus:outline-none focus:ring-2 focus:ring-purple-500 pl-9"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <button className="text-sm text-purple-600 hover:text-purple-800 flex items-center">
              <FiHelpCircle className="h-5 w-5 sm:mr-1" />
              <span className="hidden sm:inline">Help</span>
            </button>

            <button className="text-sm bg-purple-100 text-purple-700 px-3 py-1.5 rounded-lg hover:bg-purple-200 flex items-center">
              <FiArrowUp className="h-4 w-4 sm:mr-1" />
              <span className="hidden sm:inline">Upgrade</span>
            </button>

            {/* Notification bell */}
            <div className="relative">
              <button className="text-gray-600 hover:text-purple-600">
                <FiBell className="h-5 w-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>

            {/* User avatar */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                alt="User"
                className="h-8 w-8 rounded-full border-2 border-purple-200"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Main Content Area with Desktop Sidebar Layout */}
      <div className="flex-grow">
        <div className="max-w-6xl mx-auto">
          <div className="sm:flex sm:space-x-4">
            {/* Desktop Sidebar - With better styling */}
            <div className="hidden sm:block w-64 lg:w-72 flex-shrink-0 pt-4 px-2">
              {/* Profile Card */}
              <div className="bg-white shadow rounded-xl p-4 mb-4">
                <div className="flex items-center mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    alt="Profile"
                    className="h-12 w-12 rounded-full border-2 border-purple-100"
                  />
                  <div className="ml-3">
                    <h3 className="text-md font-medium text-gray-800">
                      John Doe
                    </h3>
                    <p className="text-xs text-gray-500">Project Manager</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Projects</p>
                    <p className="font-medium text-purple-700">12</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Tasks</p>
                    <p className="font-medium text-purple-700">24</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Completed</p>
                    <p className="font-medium text-purple-700">8</p>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow rounded-xl p-4">
                <h3 className="text-md font-medium text-gray-800 mb-3 flex items-center">
                  <FiBarChart2 className="mr-2 text-purple-600" />
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-purple-600 hover:text-purple-800 flex items-center p-2 hover:bg-purple-50 rounded-md"
                    >
                      <FiPieChart className="mr-2" />
                      Analytics Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-purple-600 hover:text-purple-800 flex items-center p-2 hover:bg-purple-50 rounded-md"
                    >
                      <FiUsers className="mr-2" />
                      Team Management
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-purple-600 hover:text-purple-800 flex items-center p-2 hover:bg-purple-50 rounded-md"
                    >
                      <FiCalendar className="mr-2" />
                      Project Calendar
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Content - Both Mobile and Desktop */}
            <div className="flex-grow p-3 sm:p-4 sm:pt-4">
              {/* Welcome Card */}
              <div className="bg-white shadow rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 bg-gradient-to-r from-purple-50 to-white">
                <div className="sm:flex sm:justify-between sm:items-start">
                  <div className="mb-4 sm:mb-0">
                    <h2 className="text-lg sm:text-xl font-medium text-gray-800 mb-2 sm:mb-4">
                      Welcome Back, John!
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600">
                      Your project performance is looking good today.
                      <span className="hidden sm:inline">
                        {" "}
                        You've completed 8 tasks this week.
                      </span>
                    </p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                    alt="Project Team"
                    className="hidden sm:block h-24 w-32 object-cover rounded-lg shadow"
                  />
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 sm:mb-6">
                <div className="bg-white rounded-xl shadow p-4 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">Total Users</span>
                    <div className="p-1.5 bg-blue-100 rounded-md">
                      <FiUsers className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-lg font-bold">1,249</div>
                  <div className="text-xs text-green-600 flex items-center mt-1">
                    <FiArrowUp className="h-3 w-3 mr-1" />
                    <span>+12.5% this week</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow p-4 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">Completed</span>
                    <div className="p-1.5 bg-green-100 rounded-md">
                      <FiCheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                  </div>
                  <div className="text-lg font-bold">84%</div>
                  <div className="text-xs text-green-600 flex items-center mt-1">
                    <FiArrowUp className="h-3 w-3 mr-1" />
                    <span>+4.3% this week</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow p-4 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">Revenue</span>
                    <div className="p-1.5 bg-purple-100 rounded-md">
                      <FiTrendingUp className="h-4 w-4 text-purple-600" />
                    </div>
                  </div>
                  <div className="text-lg font-bold">$24,500</div>
                  <div className="text-xs text-green-600 flex items-center mt-1">
                    <FiArrowUp className="h-3 w-3 mr-1" />
                    <span>+18.2% this week</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow p-4 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">Active Now</span>
                    <div className="p-1.5 bg-yellow-100 rounded-md">
                      <FiUsers className="h-4 w-4 text-yellow-600" />
                    </div>
                  </div>
                  <div className="text-lg font-bold">573</div>
                  <div className="text-xs text-green-600 flex items-center mt-1">
                    <FiArrowUp className="h-3 w-3 mr-1" />
                    <span>+8% this hour</span>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow rounded-xl p-4 sm:p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-md font-medium text-gray-800">
                    Recent Activity
                  </h3>
                  <button className="text-xs text-purple-600 px-2 py-1 bg-purple-50 rounded-md hover:bg-purple-100">
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="py-2 border-b border-gray-100 last:border-0"
                    >
                      <div className="sm:flex sm:justify-between sm:items-center">
                        <div className="flex items-center">
                          <img
                            src={`https://images.unsplash.com/photo-${
                              1530000000000 + item * 100
                            }?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=80`}
                            alt={`User ${item}`}
                            className="h-10 w-10 rounded-full mr-3"
                          />
                          <div>
                            <p className="text-sm text-gray-700 font-medium">
                              Activity #{item} - New project milestone completed
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date().toLocaleDateString()} -{" "}
                              {new Date().toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                        <button className="mt-2 sm:mt-0 text-xs text-purple-600 hover:text-purple-800 hidden sm:block">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile-only quick actions */}
                <div className="flex justify-between mt-4 sm:hidden">
                  <button className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1.5 rounded-lg">
                    View All
                  </button>
                  <button className="text-xs bg-purple-100 text-purple-700 px-2.5 py-1.5 rounded-lg">
                    Filter Results
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Footer with enough space for the navigation - fullwidth */}
      <div className="w-full mt-8 mb-16 sm:mb-4">
        <Footer />
      </div>
      {/* Navigation */}
      <Navigation />
    </div>
  );
};

export default Dashboard;
