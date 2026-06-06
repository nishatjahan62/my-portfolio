import React from "react";
import { motion } from "framer-motion";
import { FaServer, FaCode, FaBookOpen } from "react-icons/fa";

const highlights = [
  {
    icon: FaCode,
    text: "Started with a genuine love for programming and web development.",
  },
  {
    icon: FaServer,
    text: "Backend is where I belong — building APIs, structuring servers, and writing logic that works quietly behind the scenes.",
  },
  {
    icon: FaBookOpen,
    text: "Always reading, learning, and sharpening the craft.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6 sm:px-10 lg:px-24">

      {/* Center heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary poppins">
          About Me
        </h2>
        <p className="mt-3 text-gray-500 dark:text-gray-300 text-sm sm:text-base">
          A developer, a learner, and a little bit of everything else.
        </p>
      </motion.div>

      {/* Who I Am rule line */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex items-center gap-3 mb-12 mt-8 max-w-5xl mx-auto"
      >
        <div className="flex-1 h-px bg-primary/20" />
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/80 shrink-0">
          Who I Am
        </span>
        <div className="flex-1 h-px bg-primary/20" />
      </motion.div>

      {/* Two column layout */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

      {/* LEFT — intro + pills */}
<motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.5 }}
  className="flex flex-col gap-4"
>
  
 {/* Intro */}
<div className="mb-2">
 <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed">
  Hi, I'm{" "}
  <span className="text-primary font-semibold">Nishat Jahan</span>
  {" "}— a{" "}
  <span className="text-primary font-semibold">Junior Full-Stack Developer</span>
  {" "}working with the MERN stack (MongoDB, Express.js, React, Node.js),
  Next.js and TypeScript, with a growing focus on backend architecture.
  Currently exploring SQL while exploring how modern applications work behind the scenes.
</p>
</div>

  {/* Divider */}
  <div className="w-full h-px bg-primary/15 mb-1" />

  {/* Pills */}
  {highlights.map((h, i) => {
    const Icon = h.icon;
    return (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: i * 0.08 }}
        className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-200"
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/15 shrink-0">
          <Icon className="text-primary text-sm" />
        </span>
        {h.text}
      </motion.div>
    );
  })}
</motion.div>

        {/* RIGHT — 3 blocks */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          {/* Currently */}
          <div className="flex items-start gap-3 p-4 rounded-xl border border-dashed border-primary/30">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0 mt-1" />
            <p className="text-sm text-gray-700 dark:text-gray-200">
              <span className="text-gray-900 dark:text-white font-semibold block mb-1">
                Currently
              </span>
              Pursuing{" "}
              <span className="text-primary font-medium">BBA in Accounting</span>  {" "}
            while dedicating my time to backend development, building projects, and continuously growing as a developer.
            </p>
          </div>

          {/* My Focus */}
          <div className="flex items-start gap-3 p-4 rounded-xl border border-dashed border-primary/30">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0 mt-1" />
            <p className="text-sm text-gray-700 dark:text-gray-200">
              <span className="text-gray-900 dark:text-white font-semibold block mb-1">
                My Focus
              </span>
              I'm drawn to{" "}
              <span className="text-primary font-medium">backend development</span>
              {" "}— REST APIs, building logics, and turning logic into real solutions.
            </p>
          </div>

          {/* Beyond Code */}
          <div className="flex items-start gap-3 p-4 rounded-xl border border-dashed border-primary/30">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shrink-0 mt-1" />
            <p className="text-sm text-gray-700 dark:text-gray-200">
              <span className="text-gray-900 dark:text-white font-semibold block mb-1">
                Beyond Code
              </span>
              When I'm not coding, you'll find me reading, exploring new ideas,
              cooking, or working on creative crafts. These interests help me
              stay curious, patient, and continuously learning.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;