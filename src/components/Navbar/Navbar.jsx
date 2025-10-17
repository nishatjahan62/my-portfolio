import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

 
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActive(link.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  // Theme toggle
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    html.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const navItems = links.map((link) => (
    <li key={link.id}>
      <button
        onClick={() => handleScrollTo(link.id)}
        className={`font-medium ${
          active === link.id
            ? "text-[#A43FDB] font-semibold"
            : "hover:text-[#A43FDB] transition"
        }`}
      >
        {link.title}
      </button>
    </li>
  ));

  return (
    <div className="navbar bg-[#F8F8F8] dark:bg-[#1E2939] shadow-sm lg:px-20 px-8 text-gray-800 dark:text-gray-200 font-poppins fixed top-0 left-0 w-full z-50">
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-800 dark:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 rounded-box z-10 mt-3 w-52 p-2 shadow">
            {navItems}
          </ul>
        </div>

        {/* Logo & Name */}
        <Link
          to="/"
          onClick={() => handleScrollTo("home")}
          className="flex items-center gap-3"
        >
          <div className="flex-shrink-0">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="w-12 sm:w-14 md:w-12 h-12 sm:h-14 md:h-12 rounded-full border-4 border-[#A43FDB] shadow-lg"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-gray-800 dark:text-gray-100 poppins text-base lg:text-lg font-semibold">
              Nishat Jahan
            </p>
          
          </div>
        </Link>
      </div>

      {/* Desktop nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{navItems}</ul>
      </div>

      {/* Theme toggle */}
      <div className="navbar-end flex items-center gap-3">
        <div className="px-2">
          <label className="swap swap-rotate cursor-pointer">
            <input
              type="checkbox"
              onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />
            {/* Moon icon */}
            <svg
              className="swap-on h-8 w-8 fill-current text-secondary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
            </svg>
            {/* Sun icon */}
            <svg
              className="swap-off h-8 w-8 fill-current text-[#FFD700] drop-shadow-[0_0_6px_#FFD700]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
