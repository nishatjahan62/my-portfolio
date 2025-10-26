import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Button from "../Button/Button";
import { FaMessage } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 bg-white dark:bg-[#111827] text-gray-800 dark:text-gray-200"
    >
      {/* Heading */}
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-primary bg-gradient-to-r from-primary to-secondary poppins">
       
   Let's Work Together!
     
        </h2>
  
      </motion.div>
     

      {/* Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left side - Info */}
        <div className="flex flex-col gap-6">
          <p className="text-lg leading-relaxed">
            I'm always open to new opportunities, collaborations, or even just a
            friendly chat. Feel free to reach out using the form or connect with
            me directly through my social links.
          </p>

          <div className="flex flex-col gap-3 text-base">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary" />
              <span>+880 1830-322562</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-primary" />
              <span>nishatjahanposhpa@gmail.com.com</span>
            </div>
          </div>

          <div className="flex gap-5 text-2xl mt-4">
            <a
              href="https://facebook.com/nishatjahan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com/in/nishatjahan62"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/nishatjahan62"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right side - Form */}
        <form className="flex flex-col gap-5 bg-gray-100 dark:bg-[#1f2937] p-8 rounded-2xl shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-5 py-3 rounded-xl bg-transparent border border-primary/80 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-5 py-3 rounded-xl bg-transparent border border-primary/80 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-5 py-3 rounded-xl bg-transparent border border-primary/80 focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
         <div className="mx-auto"> <Button icon={FaMessage} >Send Message</Button></div>

        </form>
      </div>
    </section>
  );
};

export default Contact;
