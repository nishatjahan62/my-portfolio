// import React, { useState, useEffect } from "react";
// import { FaRegSun } from "react-icons/fa6";
// import { FaMoon } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [active, setActive] = useState("hero");
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navbarHeight = 72;

//   const links = [
//     { id: "hero", title: "Home" },
//     { id: "about-me", title: "About" },
//     { id: "skills", title: "Skills" },
//     { id: "education", title: "Education" },
//     { id: "experience", title: "Experience" },
//     { id: "projects", title: "Projects" },
//     { id: "contact", title: "Contact" },
//   ];

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 50);
//       const scrollPos = window.scrollY + navbarHeight / 2;
//       links.forEach((link) => {
//         const section = document.getElementById(link.id);
//         if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
//           setActive(link.id);
//         }
//       });
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//     document.querySelector("html").classList.toggle("dark", theme === "dark");
//   }, [theme]);

//   const handleScrollTo = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       const y = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
//       window.scrollTo({ top: y, behavior: "smooth" });
//       setActive(id);
//       setDropdownOpen(false);
//     }
//   };

//   return (
//     <>
//       {/* ── TOP NAVBAR ──
//           Mobile:  always visible (fixed)
//           Desktop: hides on scroll (opacity-0 + translate-y) */}
//       <nav
//         className={`fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-700
//           lg:${scrolled ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"}`}
//         style={
//           // On mobile keep it always visible with glass bg when scrolled
//           scrolled
//             ? {
//                 background: "rgba(10,15,30,0.65)",
//                 backdropFilter: "blur(20px)",
//                 WebkitBackdropFilter: "blur(20px)",
//                 borderBottom: "1px solid rgba(255,255,255,0.07)",
//               }
//             : {}
//         }
//       >
//         <div className="flex items-center justify-between px-8 lg:px-20 h-[72px] relative">
//           {/* Logo */}
//           <button onClick={() => handleScrollTo("hero")} className="flex items-center gap-3">
//             <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-full border border-white/10" />
//             <span className="font-bold text-white tracking-wide text-lg">Nishat Jahan</span>
//           </button>

//           {/* Desktop links */}
//           <ul className="hidden lg:flex items-center gap-6">
//             {links.map((link) => (
//               <li key={link.id}>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   onClick={() => handleScrollTo(link.id)}
//                   className={`relative text-sm font-medium transition-colors duration-300
//                     ${active === link.id ? "text-primary" : "text-gray-300 hover:text-primary"}`}
//                 >
//                   {link.title}
//                 </motion.button>
//               </li>
//             ))}
//           </ul>

//           {/* Right side */}
//           <div className="flex items-center gap-3">
//             <label className="swap swap-rotate cursor-pointer text-primary">
//               <input
//                 type="checkbox"
//                 onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
//                 checked={theme === "dark"}
//               />
//               <FaMoon className="swap-on text-xl" />
//               <FaRegSun className="swap-off text-xl" />
//             </label>

//             {/* Animated Hamburger — mobile only */}
//             <button
//               className="lg:hidden relative p-2 rounded-xl transition-colors hover:bg-white/10"
//               onClick={() => setDropdownOpen(!isDropdownOpen)}
//               aria-label="Menu"
//             >
//               {!isDropdownOpen && (
//                 <span className="absolute inset-0 rounded-xl animate-ping bg-primary/20 pointer-events-none" />
//               )}
//               <div className="w-5 h-4 flex flex-col justify-between relative z-10">
//                 <span
//                   className={`block h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary
//                     transition-all duration-300 origin-center
//                     ${isDropdownOpen ? "rotate-45 translate-y-[7px] w-5" : "w-5"}`}
//                 />
//                 <span
//                   className={`block h-0.5 rounded-full bg-gradient-to-r from-secondary to-primary
//                     transition-all duration-300
//                     ${isDropdownOpen ? "opacity-0 scale-x-0" : "w-3.5 opacity-100"}`}
//                 />
//                 <span
//                   className={`block h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary
//                     transition-all duration-300 origin-center
//                     ${isDropdownOpen ? "-rotate-45 -translate-y-[9px] w-5" : "w-5"}`}
//                 />
//               </div>
//             </button>
//           </div>

//           {/* Bottom line animation — only when not scrolled */}
//           {!scrolled && (
//             <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
//               <motion.div
//                 animate={{ x: ["-100%", "100%"] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                 className="w-full h-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"
//               />
//             </div>
//           )}
//         </div>

//         {/* Mobile dropdown */}
//         <div
//           className={`lg:hidden overflow-hidden transition-all duration-400
//             ${isDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
//           style={{
//             background: "rgba(10,15,30,0.85)",
//             backdropFilter: "blur(24px)",
//             WebkitBackdropFilter: "blur(24px)",
//             borderTop: "1px solid rgba(255,255,255,0.07)",
//           }}
//         >
//           <ul className="flex flex-col gap-1 px-6 py-3">
//             {links.map((link, i) => (
//               <li
//                 key={link.id}
//                 style={{ transitionDelay: isDropdownOpen ? `${i * 45}ms` : "0ms" }}
//                 className={`transition-all duration-300
//                   ${isDropdownOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
//               >
//                 <button
//                   onClick={() => handleScrollTo(link.id)}
//                   className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium
//                     flex items-center gap-3 transition-all duration-200
//                     ${active === link.id ? "text-primary" : "text-gray-300 hover:text-primary"}`}
//                   style={
//                     active === link.id
//                       ? { background: "rgba(164,63,219,0.12)", border: "1px solid rgba(164,63,219,0.2)" }
//                       : {}
//                   }
//                 >
//                   <span
//                     className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all
//                       ${active === link.id ? "bg-primary scale-100" : "bg-gray-600 scale-75"}`}
//                   />
//                   {link.title}
//                   {active === link.id && (
//                     <span className="ml-auto text-xs text-primary/50">current</span>
//                   )}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>

//       {/* ── SCROLLED PILL — desktop only ── */}
//       <AnimatePresence>
//         {scrolled && (
//           <motion.div
//             initial={{ y: -20, x: "-50%", opacity: 0 }}
//             animate={{ y: 0, x: "-50%", opacity: 1 }}
//             exit={{ y: -20, x: "-50%", opacity: 0 }}
//             className="hidden lg:block fixed top-5 left-1/2 z-[100] pointer-events-auto"
//           >
//             <div className="relative p-[1px] rounded-full overflow-hidden">
//               <div className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_25%,#A43FDB_50%,transparent_75%,transparent_100%)] animate-[spin_4s_linear_infinite]" />
//               <div className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
//                 {links.map((link) => (
//                   <button
//                     key={link.id}
//                     onClick={() => handleScrollTo(link.id)}
//                     className={`relative px-3 py-1 text-xs font-bold transition-all duration-300
//                       ${active === link.id ? "text-white" : "text-gray-300 hover:text-primary hover:scale-105"}`}
//                   >
//                     {active === link.id && (
//                       <motion.span
//                         layoutId="activePill"
//                         className="absolute inset-0 bg-primary rounded-full -z-10"
//                         transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                       />
//                     )}
//                     {link.title}
//                   </button>
//                 ))}
//                 <div className="w-[1px] h-4 bg-white/10 mx-2" />
//                 <label className="swap swap-rotate cursor-pointer text-primary text-sm">
//                   <input
//                     type="checkbox"
//                     onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
//                     checked={theme === "dark"}
//                   />
//                   <FaMoon className="swap-on" />
//                   <FaRegSun className="swap-off" />
//                 </label>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useRef } from "react";
import { FaRegSun } from "react-icons/fa6";
import { FaMoon, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const primaryLinks = [
  { id: "hero",     title: "Home" },
  { id: "about-me", title: "About" },
  { id: "skills",   title: "Skills" },
  { id: "projects", title: "Projects" },
];

const moreLinks = [
  { id: "education",  title: "Education" },
  { id: "experience", title: "Experience" },
  { id: "contact",    title: "Contact" },
];

const allLinks = [...primaryLinks, ...moreLinks];

const Navbar = () => {
  const [active, setActive]               = useState("hero");
  const [theme, setTheme]                 = useState(localStorage.getItem("theme") || "light");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMoreOpen, setMoreOpen]         = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const moreRef                           = useRef(null);

  const navbarHeight = 72;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPos = window.scrollY + navbarHeight / 2;
      allLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          setActive(link.id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const y = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActive(id);
      setDropdownOpen(false);
      setMoreOpen(false);
    }
  };

  const isMoreActive = moreLinks.some((l) => l.id === active);

  // Mobile: always glass | Desktop: transparent until scrolled (then hides anyway)
  const mobileGlass = {
    background: "rgba(10,15,30,0.55)",
    backdropFilter: "blur(22px) saturate(160%)",
    WebkitBackdropFilter: "blur(22px) saturate(160%)",
    borderBottom: "1px solid rgba(255,255,255,0.09)",
    boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
  };

  return (
    <>
      {/* ── TOP NAVBAR ── */}
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-700">

        {/* Mobile glass wrapper (always) | Desktop transparent (hides on scroll) */}
        <div
          className={`transition-all duration-700
            ${scrolled ? "lg:opacity-0 lg:-translate-y-full lg:pointer-events-none" : "lg:opacity-100 lg:translate-y-0"}`}
          style={mobileGlass}
        >
          {/* Override desktop bg to transparent */}
          <div
            className="lg:bg-transparent"
            style={{ backdropFilter: "none" }} // reset blur on lg — handled via Tailwind override
          >
            {/* We use a wrapper that on lg screens removes the glass */}
            <div
              className="hidden lg:block absolute inset-0 pointer-events-none"
              style={{
                background: scrolled ? "transparent" : "transparent",
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
              }}
            />

            <div className="flex items-center justify-between px-8 lg:px-20 h-[72px] relative">

              {/* Logo */}
              <button onClick={() => handleScrollTo("hero")} className="flex items-center gap-3">
                <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-full border border-white/10" />
                <span className="font-bold text-white tracking-wide text-lg">Nishat Jahan</span>
              </button>

              {/* Desktop links */}
              <ul className="hidden lg:flex items-center gap-6">
                {primaryLinks.map((link) => (
                  <li key={link.id}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={() => handleScrollTo(link.id)}
                      className={`text-sm font-medium transition-colors duration-300
                        ${active === link.id ? "text-primary" : "text-gray-300 hover:text-primary"}`}
                    >
                      {link.title}
                    </motion.button>
                  </li>
                ))}

                {/* More dropdown */}
                <li ref={moreRef} className="relative">
                  <button
                    onClick={() => setMoreOpen((v) => !v)}
                    className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-300
                      ${isMoreActive ? "text-primary" : "text-gray-300 hover:text-primary"}`}
                  >
                    More
                    <FaChevronDown className={`text-[10px] transition-transform duration-300 ${isMoreOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isMoreOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full right-0 mt-3 w-44 rounded-2xl overflow-hidden py-1.5"
                        style={{
                          background: "rgba(10,15,30,0.88)",
                          backdropFilter: "blur(24px)",
                          WebkitBackdropFilter: "blur(24px)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
                        }}
                      >
                        {moreLinks.map((link) => (
                          <li key={link.id}>
                            <button
                              onClick={() => handleScrollTo(link.id)}
                              className={`w-full text-left px-4 py-2.5 text-sm font-medium
                                flex items-center gap-2.5 transition-all duration-200
                                ${active === link.id ? "text-primary" : "text-gray-300 hover:text-primary hover:bg-white/5"}`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${active === link.id ? "bg-primary" : "bg-gray-600"}`} />
                              {link.title}
                            </button>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              </ul>

              {/* Right */}
              <div className="flex items-center gap-3">
                <label className="swap swap-rotate cursor-pointer text-primary">
                  <input type="checkbox" onChange={(e) => setTheme(e.target.checked ? "dark" : "light")} checked={theme === "dark"} />
                  <FaMoon className="swap-on text-xl" />
                  <FaRegSun className="swap-off text-xl" />
                </label>

                {/* Hamburger mobile */}
                <button
                  className="lg:hidden relative p-2 rounded-xl transition-colors hover:bg-white/10"
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  aria-label="Menu"
                >
                  {!isDropdownOpen && (
                    <span className="absolute inset-0 rounded-xl animate-ping bg-primary/20 pointer-events-none" />
                  )}
                  <div className="w-5 h-4 flex flex-col justify-between relative z-10">
                    <span className={`block h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 origin-center ${isDropdownOpen ? "rotate-45 translate-y-[7px] w-5" : "w-5"}`} />
                    <span className={`block h-0.5 rounded-full bg-gradient-to-r from-secondary to-primary transition-all duration-300 ${isDropdownOpen ? "opacity-0 scale-x-0" : "w-3.5 opacity-100"}`} />
                    <span className={`block h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 origin-center ${isDropdownOpen ? "-rotate-45 -translate-y-[9px] w-5" : "w-5"}`} />
                  </div>
                </button>
              </div>

              {/* Bottom scan line — desktop only when not scrolled */}
              {!scrolled && (
                <div className="hidden lg:block absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                  />
                </div>
              )}
            </div>

            {/* Mobile dropdown */}
            <div
              className={`lg:hidden overflow-hidden transition-all duration-400 ${isDropdownOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
              style={{
                background: "rgba(8,12,25,0.92)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                borderTop: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <ul className="flex flex-col gap-1 px-6 py-3">
                {allLinks.map((link, i) => (
                  <li
                    key={link.id}
                    style={{ transitionDelay: isDropdownOpen ? `${i * 40}ms` : "0ms" }}
                    className={`transition-all duration-300 ${isDropdownOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                  >
                    <button
                      onClick={() => handleScrollTo(link.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium flex items-center gap-3 transition-all duration-200
                        ${active === link.id ? "text-primary" : "text-gray-300 hover:text-primary"}`}
                      style={active === link.id ? { background: "rgba(164,63,219,0.12)", border: "1px solid rgba(164,63,219,0.2)" } : {}}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${active === link.id ? "bg-primary" : "bg-gray-600"}`} />
                      {link.title}
                      {active === link.id && <span className="ml-auto text-xs text-primary/50">current</span>}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* ── SCROLLED PILL — desktop only ── */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: -20, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: -20, x: "-50%", opacity: 0 }}
            className="hidden lg:block fixed top-5 left-1/2 z-[100] pointer-events-auto"
          style={{ background: "transparent" }}
          >
            <div className="relative">
              <div className="relative flex items-center gap-1.5 px-3 py-2 rounded-full bg-black/40 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
                style={{ border: "1px solid rgba(164,63,219,0.45)" }}
              >

                {/* Logo only */}
                <button onClick={() => handleScrollTo("hero")} className="mr-1 flex-shrink-0" title="Home">
                  <img src="/logo.jpg" alt="Logo" className="w-7 h-7 rounded-full border border-primary/50 shadow-md" />
                </button>

                <div className="w-[1px] h-4 bg-white/10 mr-1" />

                {allLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleScrollTo(link.id)}
                    className={`relative px-3 py-1 text-xs font-bold transition-all duration-300
                      ${active === link.id ? "text-white" : "text-gray-300 hover:text-primary hover:scale-105"}`}
                  >
                    {active === link.id && (
                      <motion.span
                        layoutId="activePill"
                        className="absolute inset-0 bg-primary rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.title}
                  </button>
                ))}

                <div className="w-[1px] h-4 bg-white/10 mx-1" />

                <label className="swap swap-rotate cursor-pointer text-primary text-sm ml-0.5">
                  <input type="checkbox" onChange={(e) => setTheme(e.target.checked ? "dark" : "light")} checked={theme === "dark"} />
                  <FaMoon className="swap-on" />
                  <FaRegSun className="swap-off" />
                </label>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;