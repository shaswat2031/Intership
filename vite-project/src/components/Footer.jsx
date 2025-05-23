import React from "react";
import {
  FiGithub,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiHeart,
} from "react-icons/fi";

const Footer = () => {
  return (
    <div className="w-full bg-white border-t border-gray-200 py-6 text-center text-xs text-gray-500 mt-auto">
      <div className="max-w-full mx-auto px-4 lg:px-8">
        {/* Logo for branding */}
        <div className="flex justify-center mb-4">
          <div className="text-xl font-bold text-purple-600">
            <span>Pop</span>
            <span className="text-gray-700">X</span>
          </div>
        </div>

        {/* Links - Desktop view */}
        <div className="hidden sm:flex justify-center space-x-8 mb-4">
          <a
            href="#"
            className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
          >
            Contact Support
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
          >
            About Us
          </a>
        </div>

        {/* Links - Mobile view */}
        <div className="grid grid-cols-2 gap-2 mb-4 sm:hidden">
          <a href="#" className="text-gray-600 hover:text-purple-600">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600">
            Terms of Service
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600">
            Contact Support
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600">
            About Us
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-5 mb-4">
          <a
            href="#"
            className="text-gray-500 hover:text-purple-600 transition-colors duration-200"
          >
            <FiTwitter className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-purple-600 transition-colors duration-200"
          >
            <FiInstagram className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-purple-600 transition-colors duration-200"
          >
            <FiLinkedin className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-purple-600 transition-colors duration-200"
          >
            <FiGithub className="h-5 w-5" />
          </a>
        </div>

        <p className="text-sm">
          © {new Date().getFullYear()} PopX. All rights reserved.
        </p>
        <p className="mt-2 text-xs flex items-center justify-center">
          Made with <FiHeart className="mx-1 text-red-500" /> by the PopX Team
        </p>
      </div>
    </div>
  );
};

export default Footer;
