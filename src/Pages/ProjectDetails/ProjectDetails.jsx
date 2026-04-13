import React from "react";
import { Link, useParams } from "react-router";
import projects from "../../data/projects";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaLightbulb, FaExclamationTriangle, FaStar } from "react-icons/fa";

const techLogos = {
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Tailwind: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Mongoose: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/mongoose.svg",
  Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  Node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  JWT: "https://jwt.io/img/pic_logo.svg",
  Stripe: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
  SweetAlert2: "https://sweetalert2.github.io/images/logo.png",
  NextAuth: "https://next-auth.js.org/img/logo/logo-sm.png",
  "Framer Motion": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
};

const Section = ({ title, icon, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
    className="mb-10"
  >
    <div className="flex items-center gap-2 mb-4">
      <span className="text-primary">{icon}</span>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
    </div>
    {children}
  </motion.div>
);

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-lg">Project not found.</p>
      </div>
    );

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 sm:px-10 lg:px-20 bg-transparent">
      <div className="max-w-4xl mx-auto">

        {/* ── Back button ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400
                       hover:text-primary transition-colors duration-200"
          >
            <FaArrowLeft className="text-xs" /> Back to Portfolio
          </Link>
        </motion.div>

        {/* ── Hero image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden mb-10 h-64 sm:h-80 md:h-96
                     bg-gray-100 dark:bg-[#0d1117] border border-primary/10"
        >
          <img
            src={project.image}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover opacity-15 dark:opacity-20"
          />
          <img
            src={project.image}
            alt={project.name}
            className="relative z-10 h-full w-full object-contain p-4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>

        {/* ── Title + badges ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary poppins mb-3">
            {project.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
            {project.overview}
          </p>
        </motion.div>

        {/* ── Action buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                       bg-gradient-to-r from-primary to-secondary text-white
                       shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40
                       hover:scale-105 transition-all duration-300"
          >
            <FaExternalLinkAlt className="text-xs" /> Live Demo
          </a>

          {project.links.frontend && (
            <a
              href={project.links.frontend}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                         bg-white/80 dark:bg-white/5 border border-primary/20
                         text-gray-700 dark:text-gray-300 hover:text-primary hover:border-primary
                         hover:scale-105 transition-all duration-300"
            >
              <FaGithub /> Frontend Repo
            </a>
          )}

          {project.links.backend && (
            <a
              href={project.links.backend}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                         bg-white/80 dark:bg-white/5 border border-primary/20
                         text-gray-700 dark:text-gray-300 hover:text-primary hover:border-primary
                         hover:scale-105 transition-all duration-300"
            >
              <FaGithub /> Backend Repo
            </a>
          )}
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-10" />

        {/* ── Tech Stack ── */}
        <Section title="Tech Stack" icon={<FaStar />} delay={0}>
          <div className="flex flex-wrap gap-3">
            {project.tools.map((tool, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl
                           bg-white/80 dark:bg-[#1a2235]/80 backdrop-blur-sm
                           border border-primary/15 hover:border-primary/40
                           shadow-sm hover:shadow-md hover:scale-105
                           transition-all duration-300"
              >
                {techLogos[tool] && (
                  <img src={techLogos[tool]} alt={tool} className="w-5 h-5 object-contain" />
                )}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tool}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Key Features ── */}
        <Section title="Key Features" icon={<FaStar />} delay={0.1}>
          <ul className="space-y-2.5">
            {project.keyFeatures.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </Section>

        {/* ── Impact ── */}
        <Section title="Impact & Functionality" icon={<FaStar />} delay={0.15}>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed bg-white/60 dark:bg-white/5 rounded-2xl p-5 border border-primary/10">
            {project.impact}
          </p>
        </Section>

        {/* ── Challenges ── */}
        <Section title="Challenges Faced" icon={<FaExclamationTriangle />} delay={0.2}>
          <div className="space-y-3">
            {project.challenges.map((c, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-2xl
                           bg-orange-50/80 dark:bg-orange-900/10
                           border border-orange-200/60 dark:border-orange-700/20"
              >
                <span className="text-orange-500 font-bold text-sm flex-shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Future Plans ── */}
        <Section title="Future Plans & Improvements" icon={<FaLightbulb />} delay={0.25}>
          <div className="space-y-3">
            {project.futurePlans.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-2xl
                           bg-purple-50/80 dark:bg-purple-900/10
                           border border-purple-200/60 dark:border-purple-700/20"
              >
                <span className="text-primary font-bold text-sm flex-shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Bottom nav ── */}
        <div className="flex justify-between items-center pt-4 border-t border-primary/10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500
                       hover:text-primary transition-colors duration-200"
          >
            <FaArrowLeft className="text-xs" /> Back to Portfolio
          </Link>

          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold
                       bg-gradient-to-r from-primary to-secondary text-white
                       shadow-md shadow-primary/30 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <FaExternalLinkAlt className="text-xs" /> Visit Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;