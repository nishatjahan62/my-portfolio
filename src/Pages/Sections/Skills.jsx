import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaTools, FaDatabase, FaCloudUploadAlt, FaLanguage } from "react-icons/fa";
import { techData, skills } from "../../data/skillData";

const Skills = () => {
  const categoryIcons = {
    Languages: <FaLanguage className="text-primary text-2xl" />,
    Frontend: <FaLaptopCode className="text-primary text-2xl" />,
    Backend: <FaServer className="text-primary text-2xl" />,
    Database: <FaDatabase className="text-primary text-2xl" />,
    Deployment: <FaCloudUploadAlt className="text-primary text-2xl" />,
    Tools: <FaTools className="text-primary text-2xl" />,
  };

  return (
    <section id="skills" className="py-20 px-6 sm:px-10 lg:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-primary poppins mb-2 text-center"
      >
        Technical Expertise
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-gray-600 dark:text-gray-400 mb-14 text-center max-w-2xl mx-auto"
      >
        Technologies I use to build modern, responsive, and scalable web applications.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto">
        {Object.entries(skills).map(([category, list], idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            // Zoom out on hover + minimal border animation
            whileHover={{ scale: 0.98 }}
            className="p-6 rounded-3xl bg-white/80 dark:bg-[#1a2235]/80 backdrop-blur-md
                       border border-primary/45 hover:border-primary
                       shadow-md hover:shadow-md hover:shadow-primary/25
                       transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
              {categoryIcons[category]} {category}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {list.map((skill, index) => (
                <a 
                  key={index} 
                  href={techData[skill].link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 p-2 rounded-xl hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
                >
                  <img 
                    src={techData[skill].logo} 
                    alt={skill} 
                    className={`w-5 h-5 object-contain ${techData[skill].className || ''}`} 
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;