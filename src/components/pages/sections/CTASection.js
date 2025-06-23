import React from "react";

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Start Preserving Your Memories Today
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Join thousands of families who trust MemoryStore with their most precious moments. 
          Get started for free, no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTASection; 