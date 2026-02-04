import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#111827] py-10 sm:py-16 px-6 md:px-20 text-gray-800 dark:text-gray-100">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/logo.jpg"
            alt="Nishat Jahan Logo"
            className="w-12 sm:w-14 rounded-full border-4 border-[#A43FDB] shadow-lg mb-3"
          />
          <h1 className="text-2xl font-bold text-[#A43FDB]">
            Nishat Jahan
          </h1>
          <p className="mt-1 text-gray-700 dark:text-gray-300">
            MERN Stack Developer | Web Enthusiast
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold text-[#A43FDB] mb-3">
            Contact
          </h3>
         <span> <a
            href="mailto:nishatjahanposhpa@gmail.com"
            className="hover:text-[#A43FDB] transition"
          >
            nishatjahanposhpa@gmail.com
          </a></span>
           <a
  href="https://wa.me/8801830322562"
  className="hover:text-[#A43FDB] transition"
>
  +880 1830-322562 (WhatsApp)
</a>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold text-[#A43FDB] mb-3">
            Connect
          </h3>
          <div className="flex gap-5 text-2xl">
            <a
              href="https://github.com/nishatjahan62"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-[#A43FDB] transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nishatjahan62/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#A43FDB] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/nishatJahan62"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-[#A43FDB] transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Nishat Jahan. Crafted with care.
      </div>
    </footer>
  );
};

export default Footer;
