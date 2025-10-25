import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from "react-icons/fa";
import Logo from "../../../public/logo.jpg";
import Resume from "../../../public/Resume.pdf";
import Button from "../../Pages/Button/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className=" flex flex-col md:flex-row items-center justify-center px-6 sm:px-10 lg:px-20 py-10 pb-14 sm:py-18 sm:pt-30 
                 bg-gradient-to-br from-primary/5 via-secondary/10 to-white
                 dark:from-[#0B1120] dark:via-[#121A2B] dark:to-[#0B1120] transition-all duration-500"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 12,
        }}
        whileHover={{ scale: 1.05 }}
        className="flex justify-center mb-8 md:mb-0 md:mr-12"
      >
        <img
          src={Logo}
          alt="Profile"
          className="w-30 h-30 md:w-52 md:h-52 rounded-full border-4 border-primary shadow-xl"
        />
      </motion.div>

      {/* Text Content */}
      <div className="text-center lg:text-left">
        {/* Name */}
    <motion.h1
  initial={{ opacity: 1, y: 0 }} // keep "Hi, I'm" visible immediately
  whileInView={{ opacity: 1 }}
  viewport={{ once: false, amount: 0.5 }}
  className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white poppins"
>
  Hi, I’m{" "}
  <motion.span
    initial={{ opacity: 0, x: 50 }} 
    whileInView={{ opacity: 1, x: 50 }} 
    viewport={{ once: false, amount: 0.5 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
  >
    Nishat Jahan
  </motion.span>
</motion.h1>


        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5}}
          className="text-xl md:text-2xl mt-3 font-semibold text-gray-700 dark:text-gray-300"
        >
          MERN-Stack Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="max-w-xl mt-4 text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          Passionate about building modern, interactive, and scalable web applications.
          I love blending design and functionality to create seamless digital experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
        >
          <Button
            href={Resume}
            download="Nishat_Jahan_Resume.pdf"
            icon={FaDownload}
          >
            Get Resume
          </Button>

          <Button href="#projects">
            View Projects
          </Button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex justify-center md:justify-start gap-6 mt-8 text-2xl"
        >
          <a
            href="https://github.com/nishatjahan62"
            target="_blank"
            rel="noreferrer"
            className="text-gray-800 dark:text-gray-300 hover:text-primary transition-colors duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-800 dark:text-gray-300 hover:text-secondary transition-colors duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://facebook.com/nishatjahan"
            target="_blank"
            rel="noreferrer"
            className="text-gray-800 dark:text-gray-300 hover:text-[#1877F2] transition-colors duration-300"
          >
            <FaFacebook />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
