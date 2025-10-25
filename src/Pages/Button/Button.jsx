import React from "react";

const Button = ({ children, icon: Icon, href, download }) => {
  return (
    <a
      href={href}
      download={download}
      target={href?.startsWith("http") ? "_blank" : "_self"}
      rel="noreferrer"
      className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
    >
      {Icon && <Icon className="text-lg" />}
      {children}
    </a>
  );
};

export default Button;
