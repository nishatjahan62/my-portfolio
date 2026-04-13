import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

/* ── Same SocialLink as Hero ── */
const SocialLink = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    whileHover={{ scale: 1.18, y: -4 }}
    whileTap={{ scale: 0.95 }}
    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg
               bg-white/70 dark:bg-white/5 border border-primary/20
               text-gray-700 dark:text-gray-300 hover:text-primary
               hover:border-primary hover:shadow-lg hover:shadow-primary/20
               backdrop-blur-sm transition-all duration-300"
  >
    {icon}
  </motion.a>
);

const socials = [
  { href: "https://github.com/nishatjahan62",          icon: <FaGithub />,     label: "GitHub" },
  { href: "https://www.linkedin.com/in/nishatjahan62/", icon: <FaLinkedin />,   label: "LinkedIn" },
  { href: "https://t.me/nishatjahan62",                 icon: <FaTelegram />,   label: "Telegram" },
  { href: "mailto:nishatjahanposhpa@gmail.com",         icon: <HiOutlineMail />,label: "Email" },
  { href: "https://wa.me/8801830322562",                icon: <FaWhatsapp />,   label: "WhatsApp" },
];

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
          <h1 className="text-2xl font-bold text-[#A43FDB]">Nishat Jahan</h1>
          <p className="mt-1 text-gray-700 dark:text-gray-300">
            Junior Full Stack Developer | Web Enthusiast
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold text-[#A43FDB] mb-3">Contact</h3>
          <a href="mailto:nishatjahanposhpa@gmail.com" className="hover:text-[#A43FDB] transition">
            nishatjahanposhpa@gmail.com
          </a>
          <a href="https://wa.me/8801830322562" className="hover:text-[#A43FDB] transition">
            +880 1830-322562 (WhatsApp)
          </a>
        </div>

        {/* Connect — hero-style animated icons */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold text-[#A43FDB] mb-3">Connect</h3>

          <div className="flex gap-3">
            {socials.map((social, index) => (
              <motion.div
                key={index}
                animate={{
                  color: ["#9ca3af", "#A43FDB", "#9ca3af"],
                  borderColor: [
                    "rgba(164,63,219,0.1)",
                    "rgba(164,63,219,0.8)",
                    "rgba(164,63,219,0.1)",
                  ],
                  boxShadow: [
                    "0px 0px 0px rgba(164,63,219,0)",
                    "0px 0px 15px rgba(164,63,219,0.2)",
                    "0px 0px 0px rgba(164,63,219,0)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 1,
                  delay: index * 0.8,
                  ease: "easeInOut",
                }}
                className="rounded-xl border"
              >
                <SocialLink href={social.href} icon={social.icon} label={social.label} />
              </motion.div>
            ))}
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