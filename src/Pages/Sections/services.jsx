import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaServer, FaLayerGroup, FaLink, FaRocket, FaMobileAlt, FaCheckCircle } from 'react-icons/fa';
import Button from '../Button/Button';

const services = [
  {
    id: 1,
    title: "Jr. Full-Stack Development",
    icon: <FaRocket />,
    shortDesc: "End-to-end web solutions with modern architecture.",
    longDesc: "Building scalable web applications from scratch using the latest technologies. Handling both client-side and server-side logic efficiently.",
    expertise: ["MERN Stack", "Next.js 15", "Authentication", "Deployment"],
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    id: 2,
    title: "Frontend Development",
    icon: <FaMobileAlt />,
    shortDesc: "Responsive and interactive UIs with React and Tailwind.",
    longDesc: "Crafting pixel-perfect, mobile-first responsive designs with smooth animations and high-performance interfaces.",
    expertise: ["React.js", "Tailwind CSS", "Framer Motion", "Swiper.js"],
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: 3,
    title: "Backend Development",
    icon: <FaServer />,
    shortDesc: "Robust server-side logic and database management.",
    longDesc: "Developing secure and fast server environments. Expert in database schema design and ensuring data integrity.",
    expertise: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 4,
    title: "MERN Stack Solutions",
    icon: <FaLayerGroup />,
    shortDesc: "Full-cycle MERN development for modern applications.",
    longDesc: "Building full-featured applications with secure authentication, state management, and real-time data flow.",
    expertise: ["Redux Toolkit", "JWT Auth", "Cloudinary", "Firebase"],
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 5,
    title: "API Integration & Dev",
    icon: <FaLink />,
    shortDesc: "Seamlessly connecting third-party services and APIs.",
    longDesc: "Expertise in integrating payment gateways, social logins, and custom RESTful APIs for optimized data flow.",
    expertise: ["REST API", "Axios", "Stripe/SSLCommerz", "Social Login"],
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: 6,
    title: "UI Optimization",
    icon: <FaCode />,
    shortDesc: "Optimizing speed and minimalist UI/UX patterns.",
    longDesc: "Applying minimalist design principles and focusing on performance to ensure applications load instantly.",
    expertise: ["Clean Code", "SEO Friendly", "Performance Tuning", "Light/Dark Mode"],
    color: "from-indigo-500/20 to-purple-500/20"
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-primary mb-4"
          >
            My Services
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400">Solutions tailored to your technical needs.</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 dark:bg-[#1e293b]/40 border border-gray-200 dark:border-white/10 backdrop-blur-sm cursor-pointer hover:border-primary transition-all group shadow-sm"
              onClick={() => setSelectedService(service)}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-primary mb-6 text-2xl group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2">{service.shortDesc}</p>
              <span className="text-primary text-sm font-medium flex items-center gap-2">
                View Details <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glassmorphism Modal */}
     <AnimatePresence>
  {selectedService && (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Background overlay - একদম পাতলা */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedService(null)}
        className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" 
      />
      
      {/* Ultra Glassy Card */}
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-lg p-8 rounded-[2.5rem] bg-white/[0.01] backdrop-blur-[40px] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.3)] overflow-hidden"
        style={{ boxShadow: 'inset 0 0 30px rgba(255,255,255,0.05)' }}
      >

        <div className="relative z-10 pointer-events-auto">
  
           <div className="text-5xl text-primary mb-6">{selectedService.icon}</div>
           <h2 className="text-3xl font-bold text-dark/70 dark:text-white mb-4">{selectedService.title}</h2>
           <p className="text-dark/70 dark:text-white/70 mb-6">{selectedService.longDesc}</p>
           
           <div className="grid grid-cols-2 gap-4 mb-8">
             {selectedService.expertise.map(item => (
               <div className="flex items-center gap-2 dark:text-white/60 text-sm">
                 <FaCheckCircle className="text-primary" /> {item}
               </div>
             ))}
           </div>

   <Button 
  onClick={() => setSelectedService(null)}
  className="w-full mt-8 py-4 text-center text-sm font-bold uppercase tracking-widest"
>
  Got It
</Button>

        </div>
      </motion.div>
    </div>
  )}
</AnimatePresence>
    </section>
  );
};

export default Services;