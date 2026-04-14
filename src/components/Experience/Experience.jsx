import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaCircle } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    role: "Junior Full-Stack Developer",
    company: "Pixlab Solutions",
    location: "Sylhet, Bangladesh",
    duration: "Ongoing",
    type: "Contractual",
    description:
      "Working as a contractual Junior Full-Stack Developer, building and maintaining web applications using modern technologies including the MERN stack and Next.js.",
    tags: ["MERN Stack", "Next.js", "MongoDB", "React", "Node.js"],
    current: true,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-14 px-8 sm:px-10 sm:py-16 overflow-hidden"
    >
      {/* Background (আগের মতোই রাখা হয়েছে) */}

      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-primary poppins mb-2 text-center"
        >
          Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-300 mb-10 text-center max-w-2xl"
        >
          My professional journey so far.
        </motion.p>

        <div className="w-full max-w-3xl">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative flex gap-6"
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="relative mt-1">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                  )}
                  <div className="relative w-4 h-4 rounded-full bg-primary border-2 border-white dark:border-[#0B1120] z-10" />
                </div>
                {idx < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-primary/20 mt-2" />
                )}
              </div>

              {/* Glassmorphism Card */}
              <div className="flex-1 mb-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 sm:p-8 rounded-3xl 
                             bg-white/10 dark:bg-white/5 
                             backdrop-blur-2xl 
                             border border-white/20 hover:border-primary/40 
                             shadow-2xl hover:shadow-primary/30 
                             transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <FaBriefcase className="text-primary" />
                        <h3 className="text-xl font-bold dark:text-white ">
                          {exp.role}
                        </h3>
                      </div>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      {exp.current && (
                        <span className="flex items-center gap-1.5 px-4 py-1 text-xs font-semibold rounded-full 
                                         bg-green-500/10 border border-green-500/30 text-green-400">
                          <FaCircle className="text-[6px] animate-pulse" />
                          {exp.duration}
                        </span>
                      )}
                      <span className="px-4 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm dark:text-gray-400 mb-4">
                    <FaMapMarkerAlt className="text-primary/70" />
                    {exp.location}
                  </div>

                  {/* Description */}
                  <p className=" text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-0.5 rounded-full font-medium
                               bg-primary/8 dark:bg-primary/15 text-primary border border-primary/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;