import React, { useState, useEffect } from "react";
import { FaRegSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const navbarHeight = 80; // Adjust to your actual navbar height

  const links = [
    { id: "hero", title: "Home" },
    { id: "about-me", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "education", title: "Education" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  // Highlight active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + navbarHeight / 2;
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          setActive(link.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const y = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActive(id);
      setDropdownOpen(false); // close mobile dropdown
    }
  };

  // Theme toggle
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const html = document.querySelector("html");
    html.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Navigation items
  const navItems = links.map((link) => (
    <li key={link.id}>
      <button
        onClick={() => handleScrollTo(link.id)}
        className={`font-medium transition-colors ${
          active === link.id ? "text-[#A43FDB] font-semibold" : "hover:text-[#A43FDB]"
        }`}
      >
        {link.title}
      </button>
    </li>
  ));

  return (
    <div className="navbar bg-white dark:bg-[#1E2939] shadow-sm lg:px-20 px-8 text-gray-800 dark:text-gray-200 font-poppins fixed top-0 left-0 w-full z-50">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown relative">
          <div
            tabIndex={0}
            role="button"
            className="lg:hidden pr-2"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800 dark:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          {isDropdownOpen && (
            <ul className="menu menu-sm dropdown-content bg-white dark:bg-[#1E2939] rounded-box z-10 mt-3 w-52 p-2 shadow absolute">
              {navItems}
            </ul>
          )}
        </div>

        {/* Logo + Name */}
        <button onClick={() => handleScrollTo("hero")} className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="w-12 h-12 rounded-full border-4 border-[#A43FDB] shadow-md"
          />
          <p className="text-gray-800 dark:text-gray-100 font-semibold text-lg whitespace-nowrap">
            Nishat Jahan
          </p>
        </button>
      </div>

      {/* Navbar Center (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{navItems}</ul>
      </div>

      {/* Navbar End (Theme Toggle) */}
      <div className="navbar-end flex items-center">
        <label className="swap swap-rotate cursor-pointer">
          <input
            type="checkbox"
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />
          <FaMoon className="swap-on text-xl text-primary" />
          <FaRegSun className="swap-off text-xl text-primary" />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
