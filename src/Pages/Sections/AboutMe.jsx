import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaRocket, FaBookOpen } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-[#F8F8F8] dark:bg-[#1E2939] px-6 md:px-20 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center md:text-left"
      >
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
          About Me
        </h2>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Journey */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl shadow-md bg-white dark:bg-[#2B3443] border-l-4 border-primary transition"
          >
            <FaCode className="text-4xl text-primary mb-3" />
            <h3 className="text-xl font-semibold text-primary mb-2">
              My Journey
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              I started my coding journey with curiosity and grew into a passion
              for building modern, user-focused web apps.
            </p>
          </motion.div>

          {/* What I Love */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl shadow-md bg-white dark:bg-[#2B3443] border-l-4 border-secondary transition"
          >
            <FaLaptopCode className="text-4xl text-secondary mb-3" />
            <h3 className="text-xl font-semibold text-secondary mb-2">
              What I Love
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              I enjoy crafting clean, interactive UIs and solving real-world
              problems with modern tech.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl shadow-md bg-white dark:bg-[#2B3443] border-l-4 border-primary transition"
          >
            <FaRocket className="text-4xl text-primary mb-3" />
            <h3 className="text-xl font-semibold text-primary mb-2">
              My Vision
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              To keep learning, growing, and creating impactful digital
              experiences that inspire others.
            </p>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl shadow-md bg-white dark:bg-[#2B3443] border-l-4 border-secondary transition"
          >
            <FaBookOpen className="text-4xl text-secondary mb-3" />
            <h3 className="text-xl font-semibold text-secondary mb-2">
              Hobbies
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              I love reading, exploring new technologies, and discovering new
              creative ideas every day.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
