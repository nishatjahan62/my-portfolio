import React from "react";
import { useParams } from "react-router";
import projects from "../../data/projects";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Button from "../Button/Button";

const techLogos = {
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Tailwind: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Express: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  NodeJS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  JWT: "https://jwt.io/img/pic_logo.svg",
  Stripe: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
  SweetAlert2: "https://sweetalert2.github.io/images/logo.png",
  "FramerMotion": "https://upload.wikimedia.org/wikipedia/commons/6/62/Framer-motion-logo.svg",
};


const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <p className="text-center mt-20">Project not found.</p>;

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white dark:bg-[#1E2939]">
      {/* Hero Image */}
      <div className="relative h-[30rem] lg:h-[40rem] rounded-2xl overflow-hidden mb-12 flex items-center justify-center">
        {/* Background blur */}
        <img
          src={project.image}
          alt={`${project.name} background`}
          className="absolute inset-0 w-full h-full object-cover opacity-10 dark:opacity-20"
        />
        {/* Focus image */}
        <img
          src={project.image}
          alt={project.name}
          className="relative z-10 h-[26rem] md:h-[34rem] object-contain rounded-2xl shadow-2xl brightness-105 transition-all duration-500"
        />
      </div>

      {/* Title + Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-primary mb-4 poppins">
          {project.name}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.overview}
        </p>
      </motion.div>

      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <h3 className="text-2xl font-semibold text-primary mb-4">
          Key Features
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          {project.keyFeatures.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </motion.div>

      {/* Impact / Functionality */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <h3 className="text-2xl font-semibold text-primary mb-4">
          Impact / Functionality
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.impact}
        </p>
      </motion.div>

      {/* Technologies Used */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <h3 className="text-2xl font-semibold text-primary mb-6">
          Technologies Used
        </h3>
        <div className="flex flex-wrap gap-5 justify-center">
          {project.tools.map((tool, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-gray-100 dark:bg-[#2B3443] px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={techLogos[tool]}
                alt={tool}
                className="w-10 h-10 object-contain"
              />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {tool}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <Button href={project.links.live} icon={FaExternalLinkAlt}>
          Live Demo
        </Button>
        <Button href={project.links.frontend} icon={FaGithub}>
          Frontend
        </Button>
        {project.links.backend && (
          <Button href={project.links.backend} icon={FaGithub}>
            Backend
          </Button>
        )}
      </motion.div>
    </section>
  );
};

export default ProjectDetails;
