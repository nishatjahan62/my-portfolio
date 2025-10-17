import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-white dark:bg-[#1E2939] px-6 md:px-20 py-16 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold text-primary mb-12 text-center">
        Contact Me
      </h2>

      <div className="bg-[#F8F8F8] dark:bg-[#2B3443] rounded-2xl p-8 shadow-lg max-w-2xl w-full flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <span className="text-2xl">📧</span>
          <a
            href="mailto:nishatjahanposhpa@gmail.com
"
            className="text-lg text-gray-700 dark:text-gray-300 font-medium hover:text-primary transition"
          >
            nishatjahanposhpa@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-2xl">📞</span>
          <a
            href="tel:+8801830322562"
            className="text-lg text-gray-700 dark:text-gray-300 font-medium hover:text-primary transition"
          >
            +8801830 32 2562
          </a>
        </div>
<hr className="text-primary" />
        <p className=" text-gray-500 dark:text-gray-400 text-center">
          I am available for freelance projects or collaborations. Feel free to
          reach out!
        </p>
      </div>
    </section>
  );
};

export default Contact;
