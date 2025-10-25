import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaRocket, FaBookOpen } from "react-icons/fa";

const About = () => {
  const aboutCards = [
    {
      icon: <FaCode className="text-4xl text-primary" />,
      title: "My Journey",
      color: "from-primary/20 to-transparent",
      desc: "I began coding out of curiosity, which quickly grew into a deep passion for developing dynamic, user-centric web applications.",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-secondary" />,
      title: "What I Love",
      color: "from-secondary/20 to-transparent",
      desc: "Designing clean, modern, and responsive interfaces while solving real-world challenges through efficient, scalable code.",
    },
    {
      icon: <FaRocket className="text-4xl text-primary" />,
      title: "My Vision",
      color: "from-primary/20 to-transparent",
      desc: "To continuously learn and create impactful digital experiences that combine creativity, performance, and usability.",
    },
    {
      icon: <FaBookOpen className="text-4xl text-secondary" />,
      title: "Beyond Coding",
      color: "from-secondary/20 to-transparent",
      desc: "Outside of tech, I enjoy reading, exploring new tools, and finding inspiration in creative design and innovation.",
    },
  ];

  // Variants for container and cards
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      id="about"
      className="py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-primary/5 via-secondary/5 to-white 
                 dark:from-[#0B1120] dark:via-[#121A2B] dark:to-[#0B1120] transition-all duration-500"
    >
      {/* Section Header */}
      <motion.div
       initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5}}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold  bg-clip-text bg-gradient-to-r text-primary to-secondary poppins">
          About Me
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A passionate developer dedicated to crafting beautiful, functional, and impactful digital experiences.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {aboutCards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className={`p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br ${card.color} 
                       dark:bg-[#1A2335]/60 shadow-lg border border-white/10 hover:shadow-xl 
                       hover:border-primary/50 transition-all duration-300`}
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white poppins">
              {card.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
