import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import logo from "../../../public/logo.jpg"; // replace with your actual logo path

const Footer = () => {
  return (
    <footer className="bg-[#1E2939] dark:bg-[#111827] text-gray-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={logo}
            alt="Nishat Jahan Logo"
            className="w-12 sm:w-14  rounded-full border-4 border-[#A43FDB] shadow-lg "
          />
          <h1 className="text-2xl font-bold text-primary mb-2">Nishat Jahan</h1>
          <p className="text-gray-400">Full Stack Developer | Web Enthusiast</p>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-primary mb-2">Contact</h3>
          <a
            href="mailto:nishatjahanposhpa@gmail.com"
            className="hover:text-primary transition"
          >
            nishatjahanposhpa@gmail.com
          </a>
          <a href="tel:+880130322562" className="hover:text-primary transition">
            +880130322562
          </a>
          <a
            href="https://wa.me/880130322562"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition"
          >
            WhatsApp
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-primary mb-2">Follow Me</h3>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://github.com/nishatjahan62"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/nishatJahan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 text-sm">
        © {new Date().getFullYear()} Nishat Jahan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
