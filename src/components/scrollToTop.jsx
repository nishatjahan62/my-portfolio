import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaArrowUp, FaArrowDown, FaWhatsapp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const { scrollYProgress } = useScroll();
  
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20;
      setIsAtBottom(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-24  right-7 flex flex-col items-center gap-4" style={{ zIndex: 1000 }}>
      
      {/* Scroll Progress Circle with Arrow */}
      <div 
        onClick={isAtBottom ? scrollToTop : null}
        className={`relative flex items-center justify-center w-12 h-12 cursor-pointer transition-all duration-300 ${isAtBottom ? 'scale-110' : 'opacity-80'}`}
      >
        {/* Progress Circle SVG */}
        <svg className="absolute w-full h-full -rotate-90">
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="4"
            className="text-gray-300 dark:text-gray-700"
          />
          <motion.circle
            cx="24"
            cy="24"
            r="20"
            fill="transparent"
            stroke="#A43FDB" 
            strokeWidth="4"
            strokeDasharray="126" // 2 * Math.PI * r
            style={{ pathLength: scrollYProgress }}
            strokeLinecap="round"
          />
        </svg>

        {/* Icon inside circle */}
        <div className="z-10 text-primary dark:text-white">
          {isAtBottom ? <FaArrowUp size={18} /> : <FaArrowDown size={18} />}
        </div>
      </div>

   
    </div>
  );
};

export default ScrollToTop;