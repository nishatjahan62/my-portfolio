import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Logo from "../../../public/logo.jpg"; 
import Resume from "../../../public/Resume.pdf"; 
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16 bg-white dark:bg-[#0B1120] transition-all duration-500"
    >
     
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center"
      >
        <img
          src={Logo}
          alt="Profile"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-primary shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-primary">
          Hi, I’m <span className="text-gray-800 dark:text-gray-100 poppins">Nishat Jahan</span>
        </h1>
        <h2 className="text-xl md:text-2xl mt-2 font-medium text-gray-700 poppins dark:text-gray-300">
          Full Stack Web Developer
        </h2>
        <p className="max-w-xl mt-4 text-gray-600 dark:text-gray-400">
          Passionate about building interactive, user-friendly, and scalable web applications.
        </p>

      
        <div className="mt-6">
          <a
            href={Resume}
            download="My_Resume.pdf"
            className="bg-primary text-white px-6 py-3 rounded-full shadow-md hover:bg-[#922DD9] transition-all duration-300"
          >
            Download Resume
          </a>
        </div>

        
      <div className="flex justify-center md:justify-start gap-5 mt-6 text-2xl">
  {/* GitHub */}
  <a
    href="https://github.com/nishatjahan62"
    target="_blank"
    rel="noreferrer"
    className="text-[#181717] transition-colors"
  >
    <FaGithub />
  </a>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noreferrer"
    className="text-[#0077B5] transition-colors"
  >
    <FaLinkedin />
  </a>

  {/* Facebook */}
  <a
    href="https://facebook.com/nishatjahan"
    target="_blank"
    rel="noreferrer"
    className="text-[#1877F2] transition-colors"
  >
    <FaFacebook />
  </a>
</div>
 
      </motion.div>
    </section>
  );
};

export default Hero;
