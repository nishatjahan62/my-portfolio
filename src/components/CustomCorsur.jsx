import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TAIL_LENGTH = 20;

const IDLE_KEYFRAMES = `
  @keyframes cursorFloat {
    0%, 100% { transform: translate(-50%, -50%) translateY(0px) scale(1); }
    50%       { transform: translate(-50%, -50%) translateY(-8px) scale(1.18); }
  }
`;

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [clicks, setClicks] = useState([]);
  const [tail, setTail] = useState(
    Array.from({ length: TAIL_LENGTH }, () => ({ x: -100, y: -100 }))
  );

  const posRef = useRef({ x: -100, y: -100 });
  const tailRef = useRef(
    Array.from({ length: TAIL_LENGTH }, () => ({ x: -100, y: -100 }))
  );
  const frameRef = useRef(null);
  const idleTimer = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;

    const resetIdle = () => {
      setIsIdle(false);
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setIsIdle(true), 1500);
    };

    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
      resetIdle();
    };

    const onOver = (e) => {
      const target = e.target.closest("a, button, [data-cursor]");
      setIsHovering(!!target);
    };

    const onDown = (e) => {
      setIsClicking(true);
      const id = Date.now();
      setClicks((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setClicks((prev) => prev.filter((c) => c.id !== id)), 700);
      resetIdle();
    };

    const onUp = () => setIsClicking(false);
    const onLeave = () => { setIsVisible(false); setIsIdle(false); };
    const onEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    // Start idle timer immediately
    resetIdle();

    const animate = () => {
      const prev = tailRef.current;
      const head = posRef.current;
      const next = [head];
      for (let i = 1; i < TAIL_LENGTH; i++) {
        next.push({
          x: prev[i - 1].x + (prev[i].x - prev[i - 1].x) * 0.35,
          y: prev[i - 1].y + (prev[i].y - prev[i - 1].y) * 0.35,
        });
      }
      tailRef.current = next;
      setTail([...next]);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(frameRef.current);
      clearTimeout(idleTimer.current);
    };
  }, []);

  if (typeof window !== "undefined" && window.innerWidth < 1024) return null;

  // Dot size: idle/hover/click
  const dotSize = isClicking ? 14 : isHovering ? 26 : 18;

  return (
    <>
      <style>{`* { cursor: none !important; } ${IDLE_KEYFRAMES}`}</style>

      {/* ── Tail dots ── */}
      {isVisible &&
        tail.map((point, i) => {
          const progress = 1 - i / TAIL_LENGTH;
          const size = Math.max(2, 10 * progress);
          const opacity = progress * 0.6;
          const r = Math.round(164 + (99 - 164) * (1 - progress));
          const g = Math.round(63 + (102 - 63) * (1 - progress));
          const b = Math.round(219 + (241 - 219) * (1 - progress));

          return (
            <div
              key={i}
              style={{
                position: "fixed",
                left: point.x,
                top: point.y,
                width: size,
                height: size,
                borderRadius: "50%",
                background: `rgba(${r},${g},${b},${opacity})`,
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
                zIndex: 99998,
                filter: i < 5 ? `blur(${(5 - i) * 0.4}px)` : "none",
              }}
            />
          );
        })}

      {/* ── Main dot ── */}
      {isVisible && (
        <div
          style={{
            position: "fixed",
            left: tail[0]?.x ?? -100,
            top: tail[0]?.y ?? -100,
            width: dotSize,
            height: dotSize,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #A43FDB, #6366f1)",
            boxShadow: isIdle
              ? "0 0 20px rgba(164,63,219,1), 0 0 40px rgba(164,63,219,0.5)"
              : isHovering
              ? "0 0 16px rgba(164,63,219,0.9), 0 0 32px rgba(164,63,219,0.4)"
              : "0 0 10px rgba(164,63,219,0.7)",
            // When idle: CSS animation handles transform; otherwise set it manually
            transform: isIdle ? undefined : "translate(-50%, -50%)",
            animation: isIdle
              ? "cursorFloat 1.8s ease-in-out infinite"
              : "none",
            pointerEvents: "none",
            zIndex: 99999,
            transition: "width 0.15s, height 0.15s, box-shadow 0.3s",
          }}
        />
      )}

      {/* ── Click ripple ── */}
      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={click.id}
            initial={{ opacity: 0.6, scale: 0 }}
            animate={{ opacity: 0, scale: 5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: "fixed",
              left: click.x,
              top: click.y,
              width: 20,
              height: 20,
              borderRadius: "50%",
              border: "1.5px solid rgba(164,63,219,0.6)",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              zIndex: 99997,
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
};

export default CustomCursor;