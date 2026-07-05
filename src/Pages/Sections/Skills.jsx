import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaTools, FaDatabase, FaCloudUploadAlt, FaLanguage } from "react-icons/fa";
import { techData, skills } from "../../data/skillData"; // Import your data

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
    <section id="skills" className="py-16 px-8">

     <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-primary poppins mb-2 text-center"
      >
     Technical Expertise
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-gray-600 dark:text-gray-400 mb-10 text-center max-w-2xl mx-auto"
      >
        Technologies I use to build modern, responsive, and scalable web applications.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
        {Object.entries(skills).map(([category, list], idx) => (
          <motion.div key={idx} className="p-6 rounded-2xl shadow-md bg-[#F8F8F8] dark:bg-[#2B3443] border border-primary/20">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
              {categoryIcons[category]} {category}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {list.map((skill, index) => (
                <a key={index} href={techData[skill].link} target="_blank" rel="noreferrer" 
                   className="flex items-center gap-2 p-2 rounded-md hover:bg-primary/10 transition-colors">
                  <img src={techData[skill].logo} alt={skill} className="w-5 h-5 object-contain" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</span>
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