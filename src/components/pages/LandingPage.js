import React from "react";
import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import DemoSection from "./sections/DemoSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import CTASection from "./sections/CTASection";
import Footer from "./sections/Footer";
import LandingPageNavigation from "./sections/LandingPageNavigation";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <LandingPageNavigation />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default LandingPage; 