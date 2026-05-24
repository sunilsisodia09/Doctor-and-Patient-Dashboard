import React from "react";

const Button = ({
  text,
  type = "button",
  onClick,
  disabled = false,
  className = "",
}) => {
  const baseStyle = {
    background: disabled
      ? "#64748b"
      : "linear-gradient(135deg, #ec4899, #8b5cf6)",
    color: "#ffffff",
    border: "none",
    padding: "12px 22px",
    borderRadius: "12px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all 0.3s ease",
    boxShadow: disabled
      ? "none"
      : "0 10px 25px rgba(236, 72, 153, 0.25)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    width: "fit-content",
    userSelect: "none",
  };

  const hoverStyle = {
    transform: "translateY(-3px)",
    boxShadow: "0 15px 35px rgba(236, 72, 153, 0.35)",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={baseStyle}
      onMouseEnter={(e) => {
        if (!disabled) {
          Object.assign(e.target.style, hoverStyle);
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          Object.assign(e.target.style, {
            transform: "translateY(0px)",
            boxShadow: "0 10px 25px rgba(236, 72, 153, 0.25)",
          });
        }
      }}
    >
      {text}
    </button>
  );
};

export default Button;