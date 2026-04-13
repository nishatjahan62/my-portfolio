import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [clicks, setClicks] = useState([]); // ক্লিকের পজিশন স্টোর করার জন্য

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Main dot — snappy
  const dotX = useSpring(rawX, { stiffness: 700, damping: 35 });
  const dotY = useSpring(rawY, { stiffness: 700, damping: 35 });

  // Ring — laggy (follows with delay)
  const ringX = useSpring(rawX, { stiffness: 150, damping: 20 });
  const ringY = useSpring(rawY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    // Only show on desktop
    if (window.innerWidth < 1024) return;

    const move = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, [data-cursor]");
      setIsHovering(!!target);
    };

    const handleMouseDown = (e) => {
      setIsClicking(true);
      // ক্লিক করলে একটি রি্পল ইফেক্ট তৈরি হবে
      const newClick = { id: Date.now(), x: e.clientX, y: e.clientY };
      setClicks((prev) => [...prev, newClick]);
      setTimeout(() => {
        setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
      }, 800);
    };

    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (typeof window !== "undefined" && window.innerWidth < 1024) return null;

  return (
    <>
      {/* Hide default cursor globally */}
      <style>{`
        * { cursor: none !important; }
      `}</style>

      {/* ── Click Ripple Animation (ক্লিক করলে যে ওয়েব তৈরি হবে) ── */}
      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={click.id}
            initial={{ opacity: 0.5, scale: 0 }}
            animate={{ opacity: 0, scale: 4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-primary/50"
            style={{
              left: click.x,
              top: click.y,
              translateX: "-50%",
              translateY: "-50%",
              width: "20px",
              height: "20px",
            }}
          />
        ))}
      </AnimatePresence>

      {/* ── Outer ring (নরমাল সাইজ রাখা হয়েছে) ── */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          background: "rgba(164,63,219,0.08)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          border: `1.5px solid ${isHovering ? "rgba(164,63,219,0.7)" : "rgba(164,63,219,0.35)"}`,
          boxShadow: isHovering 
            ? "0 0 18px rgba(164,63,219,0.3)" 
            : "0 0 8px rgba(164,63,219,0.1)",
        }}
        animate={{
          // হোভার করলেও সাইজ ৩৬ থাকবে (বড় হবে না)
          width: isClicking ? 28 : 36, 
          height: isClicking ? 28 : 36,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* ── Inner dot (snappy) ── */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          background: "linear-gradient(135deg, #A43FDB, #6366f1)",
          boxShadow: "0 0 10px rgba(164,63,219,0.6)",
        }}
        animate={{
          width: isClicking ? 4 : 6,
          height: isClicking ? 4 : 6,
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.6 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;