import React from "react";

const Button = ({
  children,
  icon: Icon,
  href,
  download,
  type = "button",
  onClick,
  disabled,
}) => {
  // If href exists → render anchor
  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={href.startsWith("http") ? "_blank" : "_self"}
        rel="noreferrer"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        {Icon && <Icon className="text-lg" />}
        {children}
      </a>
    );
  }

  // Otherwise → render real button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-60"
    >
      {Icon && <Icon className="text-lg" />}
      {children}
    </button>
  );
};

export default Button;
