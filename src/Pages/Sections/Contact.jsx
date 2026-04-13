import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegram } from "react-icons/fa";   // ← Telegram icon
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import Button from "../Button/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://my-portfolio-backend-theta.vercel.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          title: "<strong>🎉 Message Sent!</strong>",
          html: "<p>Thank you for reaching out. I’ll respond as soon as possible.</p>",
          icon: "success",
          showConfirmButton: false,
          timer: 2500,
        });

        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error();
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-20 text-gray-800 dark:text-gray-200"
    >
      {/* Centered Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Have a question, an idea, or an opportunity in mind?<br />
          I’d love to hear from you and explore how we can work together.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left Content - Updated with Hero Style Social Links */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I value thoughtful conversations and purposeful collaboration.
            Whether you’re reaching out with a project idea, a learning opportunity,
            or a simple message — your words are always welcome here.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-xl">
                <FaPhoneAlt className="text-primary text-2xl" />
              </div>
              <a
                href="https://wa.me/8801830322562"
                className="text-lg hover:text-primary transition"
              >
                +880 1830-322562 (WhatsApp)
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-xl">
                <HiOutlineMail className="text-primary text-2xl" />
              </div>
              <a
                href="mailto:nishatjahanposhpa@gmail.com"
                className="text-lg hover:text-primary transition"
              >
                nishatjahanposhpa@gmail.com
              </a>
            </div>
          </div>

          {/* Social Links - Hero Style (Glowing + Sequential Animation) */}
          <div className="flex gap-4 pt-6">
            {[
              { href: "https://github.com/nishatjahan62", icon: <FaGithub />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/nishatjahan62/", icon: <FaLinkedin />, label: "LinkedIn" },
              { href: "https://facebook.com/nishatJahan62", icon: <FaFacebook />, label: "Facebook" },
              { href: "https://t.me/nishatjahan62", icon: <FaTelegram />, label: "Telegram" },   // ← Telegram Added
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(164, 63, 219, 0)",
                    "0 0 20px rgba(164, 63, 219, 0.4)",
                    "0 0 0 rgba(164, 63, 219, 0)"
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.6,
                }}
                className="w-10 h-10 rounded-2xl flex items-center justify-center text-2xl
                           bg-white/70 dark:bg-white/10 border border-primary/30
                           hover:border-primary hover:text-primary backdrop-blur-md
                           transition-all duration-300"
              >
                {social.icon}
              </motion.a>
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

          <Button
            type="submit"
            icon={HiOutlineMail}
            disabled={loading}
            className="w-full"
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;