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
          ${scrolled ? "opacity-0 pointer-events-none -translate-y-full" : "opacity-100 translate-y-0"}
          bg-white/80 dark:bg-[#1E2939]/90 backdrop-blur-md
          border-b border-gray-100 dark:border-white/5 shadow-sm`}
      >
        <div className="flex items-center justify-between px-8 lg:px-20 h-[72px]">
          {/* Logo */}
          <button onClick={() => handleScrollTo("hero")} className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-sm scale-110 group-hover:scale-125 transition-transform duration-300" />
              <img src="/logo.jpg" alt="Logo" className="relative w-10 h-10 rounded-full border-2 border-primary shadow-md" />
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
                    ${active === link.id ? "text-primary" : "text-gray-600 dark:text-gray-300 hover:text-primary"}`}
                >
                  {active === link.id && (
                    <span className="absolute inset-0 rounded-lg bg-primary/10 dark:bg-primary/15" />
                  )}
                  <span className="relative">{link.title}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <label className="swap swap-rotate cursor-pointer">
              <input type="checkbox" onChange={(e) => setTheme(e.target.checked ? "dark" : "light")} checked={theme === "dark"} />
              <FaMoon className="swap-on text-lg text-primary" />
              <FaRegSun className="swap-off text-lg text-primary" />
            </label>

            {/* ── Animated Hamburger (mobile only) ── */}
            <button
              className="lg:hidden relative p-2 rounded-xl transition-colors
                         hover:bg-primary/10 active:scale-95"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              aria-label="Menu"
            >
              {/* Pulse ring when closed */}
              {!isDropdownOpen && (
                <span className="absolute inset-0 rounded-xl animate-ping bg-primary/20 pointer-events-none" />
              )}

              <div className="w-5 h-4 flex flex-col justify-between relative z-10">
                {/* Line 1 */}
                <span
                  className={`block h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary
                    transition-all duration-300 origin-center
                    ${isDropdownOpen ? "rotate-45 translate-y-[7px] w-5" : "w-5"}`}
                />
                {/* Line 2 */}
                <span
                  className={`block h-0.5 rounded-full bg-gradient-to-r from-secondary to-primary
                    transition-all duration-300
                    ${isDropdownOpen ? "opacity-0 scale-x-0" : "w-3.5 opacity-100"}`}
                />
                {/* Line 3 */}
                <span
                  className={`block h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary
                    transition-all duration-300 origin-center
                    ${isDropdownOpen ? "-rotate-45 -translate-y-[9px] w-5" : "w-5"}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* ── Mobile dropdown ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400
            ${isDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-6 pb-4 bg-white/98 dark:bg-[#1E2939]/98 backdrop-blur-md border-t border-gray-100 dark:border-white/5">
            <ul className="flex flex-col gap-1 pt-3">
              {links.map((link, i) => (
                <li
                  key={link.id}
                  style={{
                    transitionDelay: isDropdownOpen ? `${i * 45}ms` : "0ms",
                  }}
                  className={`transition-all duration-300 ${isDropdownOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                >
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium
                      flex items-center gap-3 transition-all duration-200
                      ${active === link.id
                        ? "bg-gradient-to-r from-primary/15 to-secondary/10 text-primary border border-primary/20"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary"
                      }`}
                  >
                    {/* Active dot */}
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300
                      ${active === link.id ? "bg-primary scale-100" : "bg-gray-300 dark:bg-gray-600 scale-75"}`}
                    />
                    {link.title}
                    {active === link.id && (
                      <span className="ml-auto text-xs text-primary/60 font-normal">current</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* ── FLOATING PILL NAVBAR — desktop only (hidden on mobile) ── */}
      <div
        className={`hidden lg:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500
          ${scrolled ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <div className="flex items-center gap-2 px-3 py-2 rounded-full
                        bg-white/80 dark:bg-[#1E2939]/90 backdrop-blur-xl
                        border border-gray-200/60 dark:border-white/10
                        shadow-xl shadow-black/10 dark:shadow-black/30">

          <button onClick={() => handleScrollTo("hero")} className="relative mr-1" title="Home">
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-sm scale-110" />
            <img src="/logo.jpg" alt="Logo" className="relative w-8 h-8 rounded-full border-2 border-primary" />
          </button>

          <div className="w-px h-5 bg-gray-200 dark:bg-white/10 mr-1" />

          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className={`relative px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300
                ${active === link.id ? "text-white" : "text-gray-600 dark:text-gray-400 hover:text-primary"}`}
            >
              {active === link.id && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary shadow-md shadow-primary/30" />
              )}
              <span className="relative">{link.title}</span>
            </button>
          ))}

          <div className="w-px h-5 bg-gray-200 dark:bg-white/10 ml-1" />

          <label className="swap swap-rotate cursor-pointer ml-1">
            <input type="checkbox" onChange={(e) => setTheme(e.target.checked ? "dark" : "light")} checked={theme === "dark"} />
            <FaMoon className="swap-on text-base text-primary" />
            <FaRegSun className="swap-off text-base text-primary" />
          </label>
        </div>
      </div>
    </>
  );
};

export default Navbar;