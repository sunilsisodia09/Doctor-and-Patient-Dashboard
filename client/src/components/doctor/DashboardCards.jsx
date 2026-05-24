import React from "react";

const Button = ({
  text,
  type = "button",
  onClick,
  className = "",
}) => {
  const baseStyle = {
    background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "12px",
    fontSize: "15px",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 25px rgba(236, 72, 153, 0.25)",
    width: "fit-content",
    display: "inline-block",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={baseStyle}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow =
          "0 18px 35px rgba(236, 72, 153, 0.35)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 10px 25px rgba(236, 72, 153, 0.25)";
      }}
    >
      {text}
    </button>
  );
};

export default Button;