import React, { useState, useEffect } from "react";

function Navigation() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const checkAuth = () => {
      try {
        const token = localStorage.getItem("token");
        const userString = localStorage.getItem("userData");
        
        setIsLoggedIn(!!token);
        setUserData(userString ? JSON.parse(userString) : null);
      } catch (error) {
        console.error("Error parsing user data:", error);
        setIsLoggedIn(false);
        setUserData(null);
      }
    };

    // Initial check
    checkAuth();

    const handleStorageChange = () => {
      checkAuth();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.profile-dropdown')) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userData");
    localStorage.removeItem("userEmail");
    window.dispatchEvent(new Event('storage'));
    window.location.href = "/";
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg sticky top-0 z-10">
      {/* Left side - always visible */}
      <div className="flex items-center space-x-6">
        <div className="text-indigo-600">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12.79V21a2 2 0 002 2H5a2 2 0 01-2-2v-3.61a1 1 0 01.3-.71L12 3l8.7 8.59a1 1 0 01.3.71z"
              />
            </svg>
          </a>
        </div>

        <nav className="flex space-x-4">
          <a
            href="/"
            className="text-gray-800 font-semibold border-b-2 border-blue-600"
          >
            MemoryStore
          </a>
        </nav>
      </div>

      {/* Right side - conditionally rendered based on login status */}
      {isLoggedIn ? (
        <div className="flex items-center space-x-6">
          {/* Navigation links for logged in users */}
          <nav className="flex space-x-4">
            <a href="/photos" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
              Photos
            </a>
            <a href="/video" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
              Video
            </a>
            <a href="/add" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
              Add
            </a>
          </nav>

          {/* User dropdown */}
          <div className="relative profile-dropdown">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 focus:outline-none transition-all duration-200 hover:scale-105"
            >
              {userData?.profilePicture ? (
                <img
                  src={userData.profilePicture}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 hover:border-blue-400 transition-colors duration-200"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                  {userData?.fullName ? userData.fullName.charAt(0).toUpperCase() : 'U'}
                </div>
              )}
              <svg className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 transform transition-all duration-200 ease-out">
                {/* Header with gradient background */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                  <div className="flex items-center space-x-4">
                    {userData?.profilePicture ? (
                      <img
                        src={userData.profilePicture}
                        alt="Profile"
                        className="w-16 h-16 rounded-full object-cover border-4 border-white/20"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-2xl border-4 border-white/20">
                        {userData?.fullName ? userData.fullName.charAt(0).toUpperCase() : 'U'}
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">
                        {userData?.fullName || 'User'}
                      </h3>
                      <p className="text-blue-100 text-sm">
                        {userData?.email || ''}
                      </p>
                      {userData?.role && (
                        <span className="inline-block mt-1 px-2 py-1 bg-white/20 rounded-full text-xs font-medium">
                          {userData.role.replace('ROLE_', '')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* User details */}
                <div className="p-4 space-y-3">
                  {userData?.mobile && (
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Mobile</p>
                        <p className="font-medium text-gray-900">{userData.mobile}</p>
                      </div>
                    </div>
                  )}

                  {/* Menu items */}
                  <div className="space-y-1">
                    <a
                      href="/profile"
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-700 group-hover:text-gray-900">Profile</span>
                    </a>

                    <a
                      href="/settings"
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
                    >
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-200">
                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-700 group-hover:text-gray-900">Settings</span>
                    </a>
                  </div>

                  {/* Logout button */}
                  <div className="pt-2 border-t border-gray-100">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-red-50 transition-colors duration-200 group text-left"
                    >
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors duration-200">
                        <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                      </div>
                      <span className="font-medium text-red-600 group-hover:text-red-700">Logout</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        // Show login link when not logged in
        <div className="flex items-center space-x-4">
          <a href="/login" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
            Login
          </a>
          <a
            href="/signup"
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            Sign Up
          </a>
        </div>
      )}
    </div>
  );
}

export default Navigation; 