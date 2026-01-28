import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
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
      className="py-24 px-6 md:px-20 bg-white dark:bg-[#0f172a] text-gray-800 dark:text-gray-200"
    >
      {/* Top heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl  text-center mb-20"
      >
        <h2 className="text-4xl text-primary md:text-5xl font-bold mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          Have a question, an idea, or an opportunity in mind?
          <br />
          I’d love to hear from you and explore how we can work together.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left content */}
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

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-primary" />
              <span><a
            href="tel:+880130322562"
            className="hover:text-[#A43FDB] transition"
          >
            +880 1830-322562 (WhatsApp)
          </a></span>
            </div>
            <div className="flex items-center gap-4">
              <HiOutlineMail className="text-primary text-xl" />
              <span> <a
            href="mailto:nishatjahanposhpa@gmail.com"
            className="hover:text-[#A43FDB] transition"
          >
            nishatjahanposhpa@gmail.com
          </a></span>
            </div>
          </div>

          <div className="flex gap-6 text-2xl">
             <a
                          href="https://github.com/nishatjahan62"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="GitHub"
                          className="hover:text-[#A43FDB] transition"
                        >
                          <FaGithub />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/nishatjahan62/"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="LinkedIn"
                          className="hover:text-[#A43FDB] transition"
                        >
                          <FaLinkedin />
                        </a>
                        <a
                          href="https://facebook.com/nishatJahan62"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Facebook"
                          className="hover:text-[#A43FDB] transition"
                        >
                          <FaFacebook />
                        </a>
          </div>
        </motion.div>

        {/* Form */}
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
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 rounded-xl bg-transparent border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary outline-none"
          />

          {/* Button aligned LEFT */}
         <Button
  type="submit"
  icon={HiOutlineMail}
  disabled={loading}
>
  {loading ? "Sending..." : "Send Message"}
</Button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
