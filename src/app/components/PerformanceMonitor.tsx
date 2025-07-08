"use client"

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number | null; // First Contentful Paint
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null
  });
  const [showMetrics, setShowMetrics] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
            break;
          case 'largest-contentful-paint':
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
            break;
          case 'first-input':
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
            break;
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              setMetrics(prev => ({ 
                ...prev, 
                cls: (prev.cls || 0) + (entry as any).value 
              }));
            }
            break;
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      try {
        observer.observe({ entryTypes: ['paint'] });
      } catch (e) {
        console.warn('Performance Observer not supported');
      }
    }

    // Keyboard shortcut to toggle metrics (Ctrl/Cmd + Shift + P)
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setShowMetrics(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      observer.disconnect();
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A';
    return `${Math.round(value)}${unit}`;
  };

  const getMetricColor = (metric: string, value: number | null) => {
    if (value === null) return 'text-gray-400';
    
    switch (metric) {
      case 'fcp':
        return value < 1800 ? 'text-green-400' : value < 3000 ? 'text-yellow-400' : 'text-red-400';
      case 'lcp':
        return value < 2500 ? 'text-green-400' : value < 4000 ? 'text-yellow-400' : 'text-red-400';
      case 'fid':
        return value < 100 ? 'text-green-400' : value < 300 ? 'text-yellow-400' : 'text-red-400';
      case 'cls':
        return value < 0.1 ? 'text-green-400' : value < 0.25 ? 'text-yellow-400' : 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <AnimatePresence>
      {showMetrics && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="fixed top-20 right-4 z-50 bg-black/90 backdrop-blur border border-neutral-700 rounded-lg p-4 text-sm font-mono"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-blue-400 font-semibold">Performance Metrics</h3>
            <button
              onClick={() => setShowMetrics(false)}
              className="text-gray-400 hover:text-white"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-300">FCP:</span>
              <span className={getMetricColor('fcp', metrics.fcp)}>
                {formatMetric(metrics.fcp)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">LCP:</span>
              <span className={getMetricColor('lcp', metrics.lcp)}>
                {formatMetric(metrics.lcp)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">FID:</span>
              <span className={getMetricColor('fid', metrics.fid)}>
                {formatMetric(metrics.fid)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">CLS:</span>
              <span className={getMetricColor('cls', metrics.cls)}>
                {formatMetric(metrics.cls, '')}
              </span>
            </div>
          </div>
          
          <div className="mt-3 pt-3 border-t border-neutral-700 text-xs text-gray-400">
            Press Ctrl+Shift+P to toggle
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
