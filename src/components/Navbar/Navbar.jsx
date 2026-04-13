// // 

// import React, { useState, useEffect } from "react";
// import { FaRegSun } from "react-icons/fa6";
// import { FaMoon } from "react-icons/fa";

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
//     { id: "projects", title: "Projects" },
//     { id: "contact", title: "Contact" },
//   ];

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 20);
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

//   const handleScrollTo = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       const y = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
//       window.scrollTo({ top: y, behavior: "smooth" });
//       setActive(id);
//       setDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//     document.querySelector("html").classList.toggle("dark", theme === "dark");
//   }, [theme]);

//   return (
//     <>
//       {/* ── GLASSMORPHISM TOP NAVBAR ── */}
//       <nav
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
//           ${scrolled
//             ? "opacity-0 pointer-events-none -translate-y-full"
//             : "opacity-100 translate-y-0"
//           }`}
//         style={{
//           background: "rgba(255,255,255,0.12)",
//           backdropFilter: "blur(20px) saturate(180%)",
//           WebkitBackdropFilter: "blur(20px) saturate(180%)",
//           borderBottom: "1px solid rgba(255,255,255,0.18)",
//           boxShadow: "0 4px 32px 0 rgba(164,63,219,0.07)",
//         }}
//       >
//         <div className="flex items-center justify-between px-8 lg:px-20 h-[72px]">
//           {/* Logo */}
//           <button onClick={() => handleScrollTo("hero")} className="flex items-center gap-3 group">
//             <div className="relative">
//               <div className="absolute inset-0 rounded-full bg-primary/30 blur-sm scale-110 group-hover:scale-125 transition-transform duration-300" />
//               <img src="/logo.jpg" alt="Logo" className="relative w-10 h-10 rounded-full border-2 border-primary/60 shadow-md" />
//             </div>
//             <span className="font-semibold text-gray-800 dark:text-white text-base hidden sm:block tracking-wide">
//               Nishat Jahan
//             </span>
//           </button>

//           {/* Desktop links */}
//           <ul className="hidden lg:flex items-center gap-1">
//             {links.map((link) => (
//               <li key={link.id}>
//                 <button
//                   onClick={() => handleScrollTo(link.id)}
//                   className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300
//                     ${active === link.id
//                       ? "text-primary"
//                       : "text-gray-700 dark:text-gray-200 hover:text-primary"
//                     }`}
//                 >
//                   {active === link.id && (
//                     <span
//                       className="absolute inset-0 rounded-xl"
//                       style={{
//                         background: "rgba(164,63,219,0.12)",
//                         border: "1px solid rgba(164,63,219,0.22)",
//                         backdropFilter: "blur(8px)",
//                       }}
//                     />
//                   )}
//                   <span className="relative">{link.title}</span>
//                 </button>
//               </li>
//             ))}
//           </ul>

//           {/* Right */}
//           <div className="flex items-center gap-3">
//             <label className="swap swap-rotate cursor-pointer">
//               <input type="checkbox" onChange={(e) => setTheme(e.target.checked ? "dark" : "light")} checked={theme === "dark"} />
//               <FaMoon className="swap-on text-lg text-primary" />
//               <FaRegSun className="swap-off text-lg text-primary" />
//             </label>

//             {/* Animated hamburger */}
//             <button
//               className="lg:hidden relative p-2 rounded-xl transition-colors hover:bg-white/20"
//               onClick={() => setDropdownOpen(!isDropdownOpen)}
//               aria-label="Menu"
//             >
//               {!isDropdownOpen && (
//                 <span className="absolute inset-0 rounded-xl animate-ping bg-primary/15 pointer-events-none" />
//               )}
//               <div className="w-5 h-4 flex flex-col justify-between relative z-10">
//                 <span className={`block h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 origin-center ${isDropdownOpen ? "rotate-45 translate-y-[7px] w-5" : "w-5"}`} />
//                 <span className={`block h-0.5 rounded-full bg-gradient-to-r from-secondary to-primary transition-all duration-300 ${isDropdownOpen ? "opacity-0 scale-x-0" : "w-3.5 opacity-100"}`} />
//                 <span className={`block h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 origin-center ${isDropdownOpen ? "-rotate-45 -translate-y-[9px] w-5" : "w-5"}`} />
//               </div>
//             </button>
//           </div>
//         </div>

//         {/* Mobile dropdown */}
//         <div
//           className={`lg:hidden overflow-hidden transition-all duration-400 ${isDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
//           style={{
//             background: "rgba(255,255,255,0.15)",
//             backdropFilter: "blur(24px)",
//             WebkitBackdropFilter: "blur(24px)",
//             borderTop: "1px solid rgba(255,255,255,0.12)",
//           }}
//         >
//           <ul className="flex flex-col gap-1 px-6 py-3">
//             {links.map((link, i) => (
//               <li
//                 key={link.id}
//                 style={{ transitionDelay: isDropdownOpen ? `${i * 45}ms` : "0ms" }}
//                 className={`transition-all duration-300 ${isDropdownOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
//               >
//                 <button
//                   onClick={() => handleScrollTo(link.id)}
//                   className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium flex items-center gap-3 transition-all duration-200
//                     ${active === link.id
//                       ? "text-primary"
//                       : "text-gray-700 dark:text-gray-200 hover:text-primary"
//                     }`}
//                   style={active === link.id ? {
//                     background: "rgba(164,63,219,0.12)",
//                     border: "1px solid rgba(164,63,219,0.2)",
//                   } : {}}
//                 >
//                   <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all ${active === link.id ? "bg-primary scale-100" : "bg-gray-300 scale-75"}`} />
//                   {link.title}
//                   {active === link.id && <span className="ml-auto text-xs text-primary/50">current</span>}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>

//       {/* ── FLOATING PILL (after scroll, desktop only) ── */}
//       <div
//         className={`hidden lg:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500
//           ${scrolled ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}
//       >
//         <div
//           className="flex items-center gap-2 px-3 py-2 rounded-full"
//           style={{
//             background: "rgba(255,255,255,0.14)",
//             backdropFilter: "blur(24px) saturate(180%)",
//             WebkitBackdropFilter: "blur(24px) saturate(180%)",
//             border: "1px solid rgba(255,255,255,0.22)",
//             boxShadow: "0 8px 32px rgba(164,63,219,0.12), inset 0 1px 0 rgba(255,255,255,0.3)",
//           }}
//         >
//           <button onClick={() => handleScrollTo("hero")} className="relative mr-1">
//             <div className="absolute inset-0 rounded-full bg-primary/25 blur-sm scale-110" />
//             <img src="/logo.jpg" alt="Logo" className="relative w-8 h-8 rounded-full border-2 border-primary/60" />
//           </button>

//           <div className="w-px h-5 bg-white/20 mr-1" />

//           {links.map((link) => (
//             <button
//               key={link.id}
//               onClick={() => handleScrollTo(link.id)}
//               className={`relative px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300
//                 ${active === link.id ? "text-white" : "text-gray-600 dark:text-gray-300 hover:text-primary"}`}
//             >
//               {active === link.id && (
//                 <span
//                   className="absolute inset-0 rounded-full"
//                   style={{
//                     background: "linear-gradient(135deg, #A43FDB, #6366f1)",
//                     boxShadow: "0 2px 12px rgba(164,63,219,0.4)",
//                   }}
//                 />
//               )}
//               <span className="relative">{link.title}</span>
//             </button>
//           ))}

//           <div className="w-px h-5 bg-white/20 ml-1" />

//           <label className="swap swap-rotate cursor-pointer ml-1">
//             <input type="checkbox" onChange={(e) => setTheme(e.target.checked ? "dark" : "light")} checked={theme === "dark"} />
//             <FaMoon className="swap-on text-base text-primary" />
//             <FaRegSun className="swap-off text-base text-primary" />
//           </label>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
import { FaRegSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navbarHeight = 72;

  const links = [
    { id: "hero", title: "Home" },
    { id: "about-me", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "education", title: "Education" },
    { id: "experience", title: "Experience" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPos = window.scrollY + navbarHeight / 2;
      links.forEach((link) => {
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
    }
  };

  return (
    <>
      {/* ── TOP NAVBAR ── */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700
          ${scrolled ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"}
          bg-transparent`}
      >
        <div className="flex items-center justify-between px-8 lg:px-20 h-[80px] relative">
          <button onClick={() => handleScrollTo("hero")} className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-full border border-white/10" />
            <span className="font-bold text-white tracking-wide text-lg">Nishat Jahan</span>
          </button>

          <ul className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <li key={link.id}>
                <motion.button
                  whileHover={{ scale: 1.05 }} // সামান্য অ্যানিমেশন
                  onClick={() => handleScrollTo(link.id)}
                  className={`relative text-sm font-medium transition-colors duration-300
                    ${active === link.id ? "text-primary" : "text-gray-300 hover:text-primary"}`} // হোভার কালার প্রাইমারি
                >
                  {link.title}
                </motion.button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <label className="swap swap-rotate cursor-pointer text-primary">
              <input type="checkbox" onChange={(e) => setTheme(e.target.checked ? "dark" : "light")} checked={theme === "dark"} />
              <FaMoon className="swap-on text-xl" />
              <FaRegSun className="swap-off text-xl" />
            </label>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-full h-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            />
            <div className="absolute inset-0 bg-white/5" />
          </div>
        </div>
      </nav>

      {/* ── SCROLLED NAVBAR: Glassmorphism Pill ── */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: -20, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: -20, x: "-50%", opacity: 0 }}
            className="fixed top-5 left-1/2 z-[100] pointer-events-auto"
          >
            <div className="relative p-[1px] rounded-full overflow-hidden">
              <div className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_25%,#A43FDB_50%,transparent_75%,transparent_100%)] animate-[spin_4s_linear_infinity]" />
              
              {/* Navbar Body with Enhanced Glassmorphism */}
              <div className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                {links.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleScrollTo(link.id)}
                    className={`relative px-3 py-1 text-xs font-bold transition-all duration-300
                      ${active === link.id ? "text-white" : "text-gray-300 hover:text-primary hover:scale-105"}`} // হোভার কালার ও স্কেল
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
                
                <div className="w-[1px] h-4 bg-white/10 mx-2" />
                
                <label className="swap swap-rotate cursor-pointer text-primary text-sm">
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