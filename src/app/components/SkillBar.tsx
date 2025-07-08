"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillBarProps {
  skill: string;
  percentage: number;
  color?: string;
  delay?: number;
}

export default function SkillBar({ skill, percentage, color = "bg-blue-500", delay = 0 }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-blue-200 font-medium">{skill}</span>
        <motion.span 
          className="text-blue-300 text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: delay + 0.5, duration: 0.5 }}
        >
          {percentage}%
        </motion.span>
      </div>
      <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
        <motion.div
          className={`h-full ${color} rounded-full relative`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ 
            delay: delay, 
            duration: 1.5, 
            ease: [0.25, 0.46, 0.45, 0.94] 
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            animate={isInView ? { x: '100%' } : { x: '-100%' }}
            transition={{ 
              delay: delay + 0.2, 
              duration: 1.5, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
