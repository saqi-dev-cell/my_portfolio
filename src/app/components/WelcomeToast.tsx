"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VscClose, VscMail, VscHeart } from 'react-icons/vsc';

export default function WelcomeToast() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has seen the welcome message before
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    
    if (!hasSeenWelcome) {
      // Show welcome message after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenWelcome', 'true');
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    handleClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-6 left-6 z-50 max-w-sm"
        >
          <div className="bg-gradient-to-r from-blue-900/95 to-blue-800/95 backdrop-blur-sm border border-blue-400/50 rounded-xl shadow-2xl p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <VscHeart className="text-red-400" size={20} />
                <h3 className="text-white font-semibold">Welcome to my portfolio!</h3>
              </div>
              <button
                onClick={handleClose}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <VscClose size={18} />
              </button>
            </div>
            
            <p className="text-blue-100 text-sm mb-4 leading-relaxed">
              Hi there! 👋 I'm Saqlain, a passionate full-stack developer. Feel free to explore my work and don't hesitate to reach out!
            </p>
            
            <div className="flex gap-2">
              <button
                onClick={handleContactClick}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <VscMail size={16} />
                Get In Touch
              </button>
              <button
                onClick={handleClose}
                className="px-4 py-2 text-blue-300 hover:text-white text-sm transition-colors"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
