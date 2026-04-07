import React, { useState, useEffect } from "react";
import { FaRegSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navbarHeight = 80;

  const links = [
    { id: "hero", title: "Home" },
    { id: "about-me", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "education", title: "Education" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  // Track scroll for morphing
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const scrollPos = window.scrollY + navbarHeight / 2;
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
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const y = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActive(id);
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      {/* ── TOP NAVBAR (before scroll) ── */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
          ${scrolled ? "opacity-0 pointer-events-none translate-y-[-100%]" : "opacity-100 translate-y-0"}
          bg-white/80 dark:bg-[#1E2939]/90 backdrop-blur-md
          border-b border-gray-100 dark:border-white/5 shadow-sm`}
      >
        <div className="flex items-center justify-between px-8 lg:px-20 h-[72px]">
          {/* Logo */}
          <button
            onClick={() => handleScrollTo("hero")}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-sm scale-110 group-hover:scale-125 transition-transform duration-300" />
              <img
                src="/logo.jpg"
                alt="Logo"
                className="relative w-10 h-10 rounded-full border-2 border-primary shadow-md"
              />
            </div>
            <span className="font-semibold text-gray-800 dark:text-gray-100 text-base hidden sm:block">
              Nishat Jahan
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleScrollTo(link.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300
                    ${active === link.id
                      ? "text-primary"
                      : "text-gray-600 dark:text-gray-300 hover:text-primary"
                    }`}
                >
                  {active === link.id && (
                    <span className="absolute inset-0 rounded-lg bg-primary/10 dark:bg-primary/15" />
                  )}
                  <span className="relative">{link.title}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Right: theme + hamburger */}
          <div className="flex items-center gap-3">
            <label className="swap swap-rotate cursor-pointer">
              <input
                type="checkbox"
                onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
              />
              <FaMoon className="swap-on text-lg text-primary" />
              <FaRegSun className="swap-off text-lg text-primary" />
            </label>

            {/* Hamburger (mobile) */}
            <button
              className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              <div className="w-5 flex flex-col gap-1">
                <span className={`block h-0.5 bg-gray-700 dark:bg-gray-200 transition-all duration-300 ${isDropdownOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-0.5 bg-gray-700 dark:bg-gray-200 transition-all duration-300 ${isDropdownOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-gray-700 dark:bg-gray-200 transition-all duration-300 ${isDropdownOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isDropdownOpen && (
          <div className="lg:hidden px-6 pb-4 bg-white/95 dark:bg-[#1E2939]/95 backdrop-blur-md border-t border-gray-100 dark:border-white/5">
            <ul className="flex flex-col gap-1 pt-2">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                      ${active === link.id
                        ? "bg-primary/10 text-primary"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary"
                      }`}
                  >
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* ── FLOATING PILL NAVBAR (after scroll) ── */}
      <div
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500
          ${scrolled ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <div className="flex items-center gap-2 px-3 py-2 rounded-full
                        bg-white/80 dark:bg-[#1E2939]/90 backdrop-blur-xl
                        border border-gray-200/60 dark:border-white/10
                        shadow-xl shadow-black/10 dark:shadow-black/30">

          {/* Logo dot */}
          <button
            onClick={() => handleScrollTo("hero")}
            className="relative mr-1"
            title="Home"
          >
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-sm scale-110" />
            <img src="/logo.jpg" alt="Logo" className="relative w-8 h-8 rounded-full border-2 border-primary" />
          </button>

          {/* Divider */}
          <div className="w-px h-5 bg-gray-200 dark:bg-white/10 mr-1" />

          {/* Nav links */}
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className={`relative px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300
                ${active === link.id
                  ? "text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-primary"
                }`}
            >
              {/* Active pill background */}
              {active === link.id && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary shadow-md shadow-primary/30" />
              )}
              <span className="relative">{link.title}</span>
            </button>
          ))}

          {/* Divider */}
          <div className="w-px h-5 bg-gray-200 dark:bg-white/10 ml-1" />

          {/* Theme toggle */}
          <label className="swap swap-rotate cursor-pointer ml-1">
            <input
              type="checkbox"
              onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />
            <FaMoon className="swap-on text-base text-primary" />
            <FaRegSun className="swap-off text-base text-primary" />
          </label>
        </div>
      </div>
    </>
  );
};

export default Navbar;