import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const phoneNumber = "8801830322562";
  const message = "Hi Nishat! I visited your portfolio and would like to connect. 👋";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-[#1a2235] border border-primary/20 rounded-2xl
                       shadow-xl shadow-black/10 p-4 max-w-[200px] text-right"
          >
            <p className="text-xs font-semibold text-gray-800 dark:text-white mb-0.5">
              Let's Talk! 💬
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Message me on WhatsApp
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Jumping WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          y: [0, -12, 0]   // ← Gentle Jumping Animation
        }}
        transition={{ 
          scale: { delay: 1.2, type: "spring", stiffness: 120 },
          y: { 
            duration: 2.2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }
        }}
        whileHover={{ 
          scale: 1.15,
          y: -18   // Hover এ আরেকটু উপরে উঠবে
        }}
        whileTap={{ scale: 0.92 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative w-14 h-14 rounded-full flex items-center justify-center
                   bg-[#25D366] shadow-lg shadow-[#25D366]/50
                   hover:shadow-2xl hover:shadow-[#25D366]/70 
                   transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* Subtle outer ping ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        
        {/* WhatsApp Icon */}
        <FaWhatsapp className="text-white text-3xl relative z-10" />
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;