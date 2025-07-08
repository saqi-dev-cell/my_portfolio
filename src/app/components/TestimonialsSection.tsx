"use client"

import { motion } from 'framer-motion';
import { VscQuote } from 'react-icons/vsc';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "Project Manager at TechCorp",
    content: "Saqlain delivered exceptional work on our IoT project. His expertise in ESP32 and real-time data processing helped us create a robust monitoring system.",
    rating: 5,
    avatar: "https://via.placeholder.com/60x60/3b82f6/ffffff?text=AH"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "CTO at StartupXYZ",
    content: "Working with Saqlain on our MERN stack application was fantastic. His attention to detail and modern development practices exceeded our expectations.",
    rating: 5,
    avatar: "https://via.placeholder.com/60x60/10b981/ffffff?text=SJ"
  },
  {
    id: 3,
    name: "Muhammad Ali",
    role: "Lead Developer at DevSolutions",
    content: "Saqlain's full-stack skills are impressive. He seamlessly integrated our frontend with complex backend systems and delivered on time.",
    rating: 5,
    avatar: "https://via.placeholder.com/60x60/f59e0b/ffffff?text=MA"
  },
  {
    id: 4,
    name: "Emily Chen",
    role: "Product Owner at InnovateLab",
    content: "His React and Next.js expertise helped us build a lightning-fast application. Great communication and problem-solving skills.",
    rating: 5,
    avatar: "https://via.placeholder.com/60x60/ef4444/ffffff?text=EC"
  }
];

const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] } 
    }
};

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <motion.section
      className="max-w-4xl mx-auto mb-16 bg-neutral-900/30 backdrop-blur-sm border border-neutral-800/50 rounded-2xl shadow-xl p-10 transition-all duration-300"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-blue-400 flex items-center justify-center gap-2">
          <VscQuote size={28} /> What People Say
        </h2>
        <p className="text-blue-200">
          Feedback from clients and colleagues I've worked with
        </p>
      </div>

      <div className="relative">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mb-6">
            <VscQuote className="text-blue-400 text-4xl mx-auto mb-4 opacity-50" />
            <p className="text-neutral-200 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              "{testimonials[currentIndex].content}"
            </p>
            <div className="flex justify-center mb-4">
              {renderStars(testimonials[currentIndex].rating)}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <img
              src={testimonials[currentIndex].avatar}
              alt={testimonials[currentIndex].name}
              className="w-12 h-12 rounded-full border-2 border-blue-400"
            />
            <div className="text-left">
              <h4 className="text-blue-300 font-semibold">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-neutral-400 text-sm">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-colors"
        >
          ←
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-colors"
        >
          →
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-400' : 'bg-neutral-600'
            }`}
          />
        ))}
      </div>
    </motion.section>
  );
}
