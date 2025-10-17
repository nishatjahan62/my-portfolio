import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaTools } from "react-icons/fa";

// Technology logos + links
const techData = {
  HTML5: {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  CSS3: {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  JavaScript: {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  React: {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    link: "https://reactjs.org/",
  },
  Tailwind: {
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    link: "https://tailwindcss.com/",
  },
  Node: {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    link: "https://nodejs.org/",
  },
  Express: {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    link: "https://expressjs.com/",
  },
  MongoDB: {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    link: "https://www.mongodb.com/",
  },
  Git: {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    link: "https://git-scm.com/",
  },
  GitHub: {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    link: "https://github.com/",
  },
  VSCode: {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    link: "https://code.visualstudio.com/",
  },
};

const skills = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind"],
  Backend: ["Node", "Express", "MongoDB"],
  Tools: ["Git", "GitHub", "VSCode",],
};

const Skills = () => {
  const categoryIcons = {
    Frontend: <FaLaptopCode className="text-primary text-2xl" />,
    Backend: <FaServer className="text-primary text-2xl" />,
    Tools: <FaTools className="text-primary text-2xl" />,
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#1E2939] px-6 md:px-20 py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-primary poppins mb-12 text-center"
      >
        My Skills
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {Object.entries(skills).map(([category, list], idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl shadow-lg bg-[#F8F8F8] dark:bg-[#2B3443] border-t-4 border-primary transition"
          >
            {/* Category Header */}
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              {categoryIcons[category]} {category}
            </h3>

            {/* Skill List */}
            <ul className="space-y-3">
              {list.map((skill, index) => (
                <li key={index} className="flex items-center gap-3">
                  <img
                    src={techData[skill].logo}
                    alt={skill}
                    className="w-6 h-6"
                  />
                  <a
                    href={techData[skill].link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    {skill}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
