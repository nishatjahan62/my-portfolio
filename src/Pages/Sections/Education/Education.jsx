import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      degree: "Higher Secondary Certificate (HSC)",
      duration: "2023-2024",
      group: "Business Studies",
      college: "Govt. Hazi Mohammad Mohsin College",
      location: "Chattogram, Bangladesh",
    },
  ];

  return (
    <div id="education" className="py-16 px-6 sm:px-10 lg:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-primary bg-gradient-to-r from-primary to-secondary poppins">
          Education
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          My academic journey so far.
        </p>
      </motion.div>

      {/* Education List */}
      <motion.div
        className="max-w-4xl mx-auto flex flex-col gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="flex  items-start gap-6 relative"
          >
            {/* Left Side: Duration & Degree */}
           <div className="flex flex-col items-start  relative">
  {/* Icon on top-left */}
  <div className="">
    <FaBookOpen className="text-primary text-4xl " />
  </div>

  {/* Main content */}
  <div className="flex flex-col sm:flex-row justify-between items-center gap-5 flex-1">
    {/* Degree + Duration */}
    <div className="">
      <p className="text-lg font-semibold text-gray-900 dark:text-white poppins">
        {edu.degree}
      </p>
   
      <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.duration}</p>
    </div>

    {/* Border divider and College info */}
    <div className="mt-3 pl-4 border-l-2 border-primary/40 dark:border-primary/60">
      <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">{edu.group}</p>
      <p className="text-gray-700 dark:text-gray-300">{edu.college}</p>
      <p className="text-gray-700 dark:text-gray-300">{edu.location}</p>
    </div>
  </div>
</div>

           
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
