// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router";
// import projects from "../../data/projects";
// import { FaExternalLinkAlt, FaArrowRight, FaGithub } from "react-icons/fa";

// const Projects = () => {
//   return (
//     <section id="projects" className="py-20 px-6 sm:px-10 lg:px-20 bg-transparent">

//       <motion.h2
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl md:text-4xl font-bold text-primary poppins mb-2 text-center"
//       >
//         My Projects
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.1 }}
//         className="text-gray-600 dark:text-gray-400 mb-14 text-center max-w-2xl mx-auto"
//       >
//         My recent work showcasing skills in frontend, backend, and full-stack development.
//       </motion.p>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
//         {projects.map((project, idx) => (
//           <motion.div
//             key={project.id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false, amount: 0.15 }}
//             transition={{ duration: 0.5, delay: idx * 0.08 }}
//             whileHover={{ y: -6, transition: { duration: 0.25 } }}
//             className="flex flex-col rounded-3xl overflow-hidden
//                        bg-white/80 dark:bg-[#1a2235]/80 backdrop-blur-md
//                        border border-primary/10 hover:border-primary/35
//                        shadow-md hover:shadow-xl hover:shadow-primary/10
//                        transition-all duration-300"
//           >
//             {/* ── Image (original design) ── */}
//             <div className="relative h-48 w-full bg-gray-100 dark:bg-[#0d1117] overflow-hidden flex items-center justify-center">
//               {/* Faint bg */}
//               <img
//                 src={project.image}
//                 alt=""
//                 className="absolute inset-0 w-full h-full object-cover opacity-10 dark:opacity-20"
//               />
//               {/* Focused image */}
//               <img
//                 src={project.image}
//                 alt={project.name}
//                 className="relative z-10 h-36 object-contain rounded-xl shadow-lg"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent z-10" />

//               {/* Live badge */}
//               <a
//                 href={project.links.live}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="absolute top-3 right-3 z-20 flex items-center gap-1.5 text-[11px] font-semibold
//                            px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white
//                            border border-white/20 hover:bg-primary/80 transition-colors duration-200"
//               >
//                 <FaExternalLinkAlt className="text-[9px]" /> Live
//               </a>

//               <span className="absolute bottom-2 left-3 z-20 font-mono text-[10px] text-white/40">
//                 {String(idx + 1).padStart(2, "0")}
//               </span>
//             </div>

//             {/* ── Content ── */}
//             <div className="flex flex-col flex-1 p-5">
//               <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary">
//                 {project.name}
//               </h3>

//               <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 mb-4 flex-1">
//                 {project.overview}
//               </p>

//               {/* Tech tags */}
//               <div className="flex flex-wrap gap-1.5 mb-4">
//                 {project.tools.slice(0, 4).map((tool, i) => (
//                   <span
//                     key={i}
//                     className="text-[11px] px-2.5 py-0.5 rounded-full font-medium
//                                bg-primary/8 dark:bg-primary/15 text-primary border border-primary/15"
//                   >
//                     {tool}
//                   </span>
//                 ))}
//                 {project.tools.length > 4 && (
//                   <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-400">
//                     +{project.tools.length - 4}
//                   </span>
//                 )}
//               </div>

//               {/* Buttons */}
//               <div className="flex gap-2 mt-auto">
//                 <Link
//                   to={`/project-details/${project.id}`}
//                   className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl
//                              text-xs font-semibold border border-primary/25 text-primary
//                              hover:bg-primary hover:text-white hover:border-transparent
//                              transition-all duration-250"
//                 >
//                   View Details <FaArrowRight className="text-[9px]" />
//                 </Link>

//                 {project.links.frontend && (
//                   <a
//                     href={project.links.frontend}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="w-9 flex items-center justify-center rounded-xl
//                                bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10
//                                text-gray-500 dark:text-gray-400 hover:text-primary hover:border-primary/40
//                                transition-all duration-250"
//                   >
//                     <FaGithub className="text-sm" />
//                   </a>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import projects from "../../data/projects";
import { FaExternalLinkAlt, FaArrowRight, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id="projects" className="py-20 px-6 sm:px-10 lg:px-20 bg-transparent">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-primary poppins mb-2 text-center"
      >
        My Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-gray-600 dark:text-gray-400 mb-14 text-center max-w-2xl mx-auto"
      >
        My recent work showcasing skills in frontend, backend, and full-stack development.
      </motion.p>

      {/* Projects Grid with Pagination */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
        {currentProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="flex flex-col rounded-3xl overflow-hidden
                       bg-white/80 dark:bg-[#1a2235]/80 backdrop-blur-md
                       border border-primary/10 hover:border-primary/35
                       shadow-md hover:shadow-xl hover:shadow-primary/10
                       transition-all duration-300"
          >
            {/* Image Section - exact same as your original */}
            <div className="relative h-48 w-full bg-gray-100 dark:bg-[#0d1117] overflow-hidden flex items-center justify-center">
              <img
                src={project.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-10 dark:opacity-20"
              />
              <img
                src={project.image}
                alt={project.name}
                className="relative z-10 h-36 object-contain rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent z-10" />

              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="absolute top-3 right-3 z-20 flex items-center gap-1.5 text-[11px] font-semibold
                           px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white
                           border border-white/20 hover:bg-primary/80 transition-colors duration-200"
              >
                <FaExternalLinkAlt className="text-[9px]" /> Live
              </a>

              <span className="absolute bottom-2 left-3 z-20 font-mono text-[10px] text-white/40">
                {String(projects.indexOf(project) + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Content - exact same */}
            <div className="flex flex-col flex-1 p-5">
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 mb-4 flex-1">
                {project.overview}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tools.slice(0, 4).map((tool, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2.5 py-0.5 rounded-full font-medium
                               bg-primary/8 dark:bg-primary/15 text-primary border border-primary/15"
                  >
                    {tool}
                  </span>
                ))}
                {project.tools.length > 4 && (
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-400">
                    +{project.tools.length - 4}
                  </span>
                )}
              </div>

              <div className="flex gap-2 mt-auto">
                <Link
                  to={`/project-details/${project.id}`}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl
                             text-xs font-semibold border border-primary/25 text-primary
                             hover:bg-primary hover:text-white hover:border-transparent
                             transition-all duration-250"
                >
                  View Details <FaArrowRight className="text-[9px]" />
                </Link>
                {project.links.frontend && (
                  <a
                    href={project.links.frontend}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 flex items-center justify-center rounded-xl
                               bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10
                               text-gray-500 dark:text-gray-400 hover:text-primary hover:border-primary/40
                               transition-all duration-250"
                  >
                    <FaGithub className="text-sm" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls - Sundor Design */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-16">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center w-10 h-10 rounded-2xl border border-primary/20 hover:border-primary/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <FaChevronLeft className="text-primary" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`w-10 h-10 rounded-2xl font-semibold text-sm transition-all ${
                currentPage === number
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "border border-primary/20 hover:border-primary/50 text-gray-700 dark:text-gray-300"
              }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center w-10 h-10 rounded-2xl border border-primary/20 hover:border-primary/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <FaChevronRight className="text-primary" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;