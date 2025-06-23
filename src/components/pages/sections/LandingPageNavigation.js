import React from "react";

function LandingPageNavigation() {
  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full top-0 z-50 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MemoryStore
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Stories</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Pricing</a>
            <a href="#demo" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Demo</a>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <a href="/login" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Sign In
            </a>
            <a href="/signup" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default LandingPageNavigation; 