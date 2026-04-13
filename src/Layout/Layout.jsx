import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import CustomCursor from '../components/CustomCorsur';
import FloatingWhatsApp from '../components/floatingWhatsup';
// import FloatingWhatsApp from '../components/FloatingWhatsApp';

/* ── Global Particle Canvas ── */
const GlobalParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let W, H;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 60;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(164,63,219,${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(164,63,219,0.45)";
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none opacity-50"
      style={{ zIndex: 0 }}
    />
  );
};

/* ── Ambient Orb ── */
const Orb = ({ className, delay = 0, duration = 7 }) => (
  <motion.div
    className={`fixed rounded-full blur-3xl pointer-events-none ${className}`}
    animate={{ y: [0, -20, 0], scale: [1, 1.06, 1] }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    style={{ zIndex: 0 }}
  />
);

const Layout = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary/5 via-secondary/10 to-white dark:from-[#0B1120] dark:via-[#121A2B] dark:to-[#0B1120] transition-colors duration-500">

      {/* ── Global animated background ── */}
      <GlobalParticleCanvas />

      {/* Ambient orbs — fixed so they stay in bg always */}
      <Orb className="w-80 h-80 bg-primary/15 top-[-5rem] left-[-5rem]"   delay={0}   duration={8} />
      <Orb className="w-96 h-96 bg-secondary/10 bottom-[10%] right-[-6rem]" delay={2}   duration={10} />
      <Orb className="w-56 h-56 bg-primary/10 top-[40%] left-[10%]"       delay={4}   duration={7} />
      <Orb className="w-64 h-64 bg-secondary/10 top-[20%] right-[20%]"    delay={1.5} duration={9} />

      {/* ── Main content (above bg) ── */}
      <div className="relative" style={{ zIndex: 1 }}>
        <CustomCursor></CustomCursor>
        <FloatingWhatsApp></FloatingWhatsApp>
        <Navbar />
        <Outlet />
        <Footer />
      </div>

      {/* Floating WhatsApp */}
      <div style={{ zIndex: 100 }} className="relative">
        {/* <FloatingWhatsApp /> */}
      </div>
    </div>
  );
};

export default Layout;