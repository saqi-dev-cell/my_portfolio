"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VscHome, VscAccount, VscMail, VscArchive, VscMenu, VscClose } from 'react-icons/vsc';

const navItems = [
  { id: 'home', icon: VscHome, label: 'Home' },
  { id: 'about', icon: VscAccount, label: 'About' },
  { id: 'projects', icon: VscArchive, label: 'Projects' },
  { id: 'contact', icon: VscMail, label: 'Contact' },
];

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 flex flex-col gap-3"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-3 bg-neutral-900/50 backdrop-blur-sm text-blue-300 px-4 py-3 rounded-full shadow-lg hover:bg-blue-900/30 hover:text-blue-400 transition-all duration-300 group"
              >
                <item.icon size={20} />
                <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-lg flex items-center justify-center text-white hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <VscClose size={24} /> : <VscMenu size={24} />}
        </motion.div>
      </motion.button>
    </div>
  );
}
