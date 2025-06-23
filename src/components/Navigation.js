import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <Link to="/" className="text-xl font-bold text-gray-900">MemoryStore</Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/photos" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Photos</Link>
            <Link to="/video" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Video</Link>
            <Link to="/add" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Add</Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Sign In
            </Link>
            <Link to="/signup" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Get Started Free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 