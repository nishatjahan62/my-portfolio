import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
  <footer className="bg-white shadow-sm dark:bg-[#111827] py-10 sm:py-16 px-6 md:px-20 text-gray-800 dark:text-gray-100">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 ">
    {/* Logo */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <img
        src="/logo.jpg"
        alt="Nishat Jahan Logo"
        className="w-12 sm:w-14 rounded-full border-4 border-[#A43FDB] shadow-lg mb-2"
      />
      <h1 className="text-2xl font-bold text-[#A43FDB] mb-1">Nishat Jahan</h1>
      <p className="text-gray-700 dark:text-gray-300">Full Stack Developer | Web Enthusiast</p>
    </div>

    {/* Contact */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <h3 className="text-lg font-semibold text-[#A43FDB] mb-2">Contact</h3>
      <a
        href="mailto:nishatjahanposhpa@gmail.com"
        className="hover:text-[#A43FDB] transition"
      >
        nishatjahanposhpa@gmail.com
      </a>
      <a href="tel:+880130322562" className="hover:text-[#A43FDB] transition">
        +880130322562
      </a>
      <a
        href="https://wa.me/880130322562"
        target="_blank"
        rel="noreferrer"
        className="hover:text-[#A43FDB] transition"
      >
        WhatsApp
      </a>
    </div>

    {/* Social Links */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <h3 className="text-lg font-semibold text-[#A43FDB] mb-2">Follow Me</h3>
      <div className="flex gap-4 text-2xl">
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
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:text-[#A43FDB] transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://facebook.com/nishatJahan"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="hover:text-[#A43FDB] transition"
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
          className="hover:text-[#A43FDB] transition"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  </div>

  <div className="text-center text-gray-500 dark:text-gray-400 mt-8 text-sm">
    © {new Date().getFullYear()} Nishat Jahan. All rights reserved.
  </div>
</footer>

  );
};

export default Footer;
