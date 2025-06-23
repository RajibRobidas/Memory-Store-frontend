import React from "react";
import { Link } from "react-router-dom";

function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Chaos Into
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Organized Memories
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Watch your scattered photos become beautifully organized family archives in seconds
          </p>
        </div>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* AI Organization */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Organization</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Smart technology automatically sorts by date, recognizes faces, and suggests story themes. 
              No more manual organization needed.
            </p>
            <div className="flex items-center text-blue-600 font-semibold">
              <span>Learn more</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>

          {/* Secure Storage */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Military-Grade Security</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your memories are protected with the same encryption used by banks and government agencies. 
              Multiple backup locations ensure your photos are never lost.
            </p>
            <div className="flex items-center text-purple-600 font-semibold">
              <span>Learn more</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>

          {/* Family Sharing */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Seamless Family Sharing</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Invite family members to contribute photos and stories. Create a living family history 
              that everyone can access and contribute to.
            </p>
            <div className="flex items-center text-green-600 font-semibold">
              <span>Learn more</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection; 