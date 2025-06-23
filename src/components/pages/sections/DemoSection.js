import React from "react";

function DemoSection() {
  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See MemoryStore In Action
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Upload a sample photo and watch our AI organize it instantly
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8">
              {/* Upload Area */}
              <div className="border-2 border-dashed border-blue-300 rounded-2xl p-12 text-center hover:border-blue-500 transition-colors cursor-pointer bg-gradient-to-br from-blue-50 to-purple-50">
                <svg className="w-20 h-20 text-blue-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                </svg>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Drop Your Photo Here</h3>
                <p className="text-gray-600 mb-6">Or click to browse your device</p>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                  Try Demo Upload
                </button>
              </div>
              
              {/* Demo Results */}
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-gray-900">AI Analysis Results:</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                      <span className="text-gray-700">Date Detected</span>
                      <span className="font-semibold text-blue-600">December 25, 2023</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                      <span className="text-gray-700">Faces Found</span>
                      <span className="font-semibold text-purple-600">3 family members</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                      <span className="text-gray-700">Suggested Album</span>
                      <span className="font-semibold text-green-600">Holiday Celebrations</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-gray-900">Story Suggestions:</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <p className="text-gray-700 italic">"Christmas morning magic with the whole family gathered around the tree..."</p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                      <p className="text-gray-700 italic">"The joy on everyone's faces as we opened presents together..."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DemoSection; 