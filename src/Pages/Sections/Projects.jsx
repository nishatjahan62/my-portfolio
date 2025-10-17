import React from "react";
import { Link } from "react-router";
import projectsData from "../../../public/projects.json"; 
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-[#1E2939] px-6 md:px-20 py-16 pt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center poppins">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            className="bg-[#F8F8F8] dark:bg-[#2B3443] rounded-2xl p-4 shadow-lg flex flex-col items-center gap-4 transition"
          >
          
            <img
              src={project.logoCard}
              alt={project.name}
              className="w-32 h-32 rounded-full border-2 border-secondary shadow-2xl"
            />

          
            <h3 className="text-xl font-bold text-primary text-center">
              {project.name}
            </h3>

 <h3 className="text-sm  text-center">
              {project.shortDescription}
            </h3>

      
            <Link
              to={`/project-details/${project.id}`}
              className="text-white bg-secondary px-4 py-2 rounded font-bold hover:bg-primary transition"
            >
              View More / Details
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
