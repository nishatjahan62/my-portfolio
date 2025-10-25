import React from "react";
import { motion } from "framer-motion";
import projects from "../../data/projects";
import { FaExternalLinkAlt } from "react-icons/fa";
;
import { Link } from "react-router";
import Button from "../Button/Button";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 sm:px-10 lg:px-20 bg-white dark:bg-[#1E2939]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-primary poppins mb-2 text-center"
      >
        My Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-gray-600 dark:text-gray-400 mb-14 text-center max-w-2xl mx-auto"
      >
      My recent work showcasing my skills in frontend, backend, and full-stack development.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
       <motion.div
  key={project.id}
  whileHover={{ scale: 1.03 }}
  className="flex flex-col h-full rounded-2xl shadow-lg  overflow-hidden group cursor-pointer hover:border hover:border-primary/60 transition-all duration-300 bg-gray-100 dark:bg-[#2B3443]"
>
  {/* Image Section */}
  <div className="relative h-72 w-full">
    {/* Background image (faint) */}
    <img
      src={project.image}
      alt={`${project.name} background`}
      className="absolute inset-0 w-full h-full object-cover opacity-10 dark:opacity-20"
    />

    {/* Main focused image */}
    <a
      href={project.links.live}
      target="_blank"
      rel="noreferrer"
      className="relative z-10 flex items-center justify-center h-full w-full"
    >
      <img
        src={project.image}
        alt={project.name}
        className="h-56 md:h-64 object-contain rounded-lg shadow-lg filter brightness-100 group-hover:brightness-105 transition-all duration-300"
      />
    </a>
  </div>

  {/* Text Content */}
  <div className="p-6 flex flex-col flex-1 justify-between">
    <div>
      <h3 className="text-2xl font-semibold text-primary mb-2">
        {project.name}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-4">
        {project.overview}
      </p>
    </div>

    {/* Button (fit content) */}
    <div className="mt-2">
     <Button href={`/project-details/${project.id}`} icon={FaExternalLinkAlt}>
  View Details
</Button>

    </div>
  </div>
</motion.div>

        ))}
      </div>
    </section>
  );
};

export default Projects;
