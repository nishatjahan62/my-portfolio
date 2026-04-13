import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import Button from "../Button/Button";

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
  { href: "https://github.com/nishatjahan62",           icon: <FaGithub />,     label: "GitHub" },
  { href: "https://www.linkedin.com/in/nishatjahan62/", icon: <FaLinkedin />,   label: "LinkedIn" },
  { href: "https://t.me/nishatjahan62",                 icon: <FaTelegram />,   label: "Telegram" },
  { href: "mailto:nishatjahanposhpa@gmail.com",         icon: <HiOutlineMail />,label: "Email" },
  { href: "https://wa.me/8801830322562",                icon: <FaWhatsapp />,   label: "WhatsApp" },
];

/* ── Letter-by-letter animated text ── */
const AnimatedText = ({ text, href, className }) => {
  const letters = text.split("");
  return (
    <motion.a
      href={href}
      className={`flex flex-wrap hover:text-primary transition-colors duration-300 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.03, delay: i * 0.04 }}
          className={char === " " ? "mr-1" : ""}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.a>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://my-portfolio-backend-theta.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        Swal.fire({
          title: "<strong>🎉 Message Sent!</strong>",
          html: "<p>Thank you for reaching out. I'll respond as soon as possible.</p>",
          icon: "success",
          showConfirmButton: false,
          timer: 2500,
        });
        setFormData({ name: "", email: "", message: "" });
      } else throw new Error();
    } catch {
      Swal.fire({ icon: "error", title: "Something went wrong", text: "Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-20 text-gray-800 dark:text-gray-200">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Have a question, an idea, or an opportunity in mind?<br />
          I'd love to hear from you and explore how we can work together.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I value thoughtful conversations and purposeful collaboration.
            Whether you're reaching out with a project idea, a learning opportunity,
            or a simple message — your words are always welcome here.
          </p>

          {/* Contact info with letter animation */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-xl">
                <FaWhatsapp className="text-primary text-2xl" />
              </div>
              <AnimatedText
                text="+880 1830-322562 (WhatsApp)"
                href="https://wa.me/8801830322562"
                className="text-base text-gray-700 dark:text-gray-300"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-xl">
                <HiOutlineMail className="text-primary text-2xl" />
              </div>
              <AnimatedText
                text="nishatjahanposhpa@gmail.com"
                href="mailto:nishatjahanposhpa@gmail.com"
                className="text-base text-gray-700 dark:text-gray-300"
              />
            </div>
          </div>

          {/* Social icons — exact Hero style */}
          <div className="flex gap-3 pt-2">
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
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 dark:bg-[#1e293b] p-6 sm:p-10 rounded-3xl space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 rounded-xl bg-transparent border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 rounded-xl bg-transparent border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary outline-none"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 rounded-xl bg-transparent border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary outline-none resize-y"
          />
          <Button type="submit" icon={HiOutlineMail} disabled={loading} className="w-full">
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;