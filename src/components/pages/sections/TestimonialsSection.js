import React, { useState, useEffect } from "react";

function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Mother of 3",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      quote: "MemoryStore transformed our chaotic photo collection into a beautiful family archive. My kids love looking through our organized memories!"
    },
    {
      name: "Michael Chen",
      role: "Family Photographer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      quote: "As a photographer, I have thousands of family photos. MemoryStore's AI organization saved me countless hours of manual sorting."
    },
    {
      name: "Lisa Rodriguez",
      role: "Grandmother",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      quote: "I can finally see all my grandchildren's photos instantly. The family sharing feature keeps us all connected."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Families, Real Stories
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover how MemoryStore has helped thousands of families preserve their precious memories
          </p>
        </div>
        
        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 relative">
            <div className="text-center">
              <img 
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-6 border-4 border-white shadow-lg"
              />
              <blockquote className="text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="mb-4">
                <div className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</div>
                <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
              </div>
              
              {/* Testimonial Dots */}
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection; 