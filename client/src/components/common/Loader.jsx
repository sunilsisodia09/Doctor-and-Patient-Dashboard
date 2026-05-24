import React from "react";

const Loader = () => {
  const containerStyle = {
    height: "100vh",
    width: "100%",
    background: "#020617",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const spinnerStyle = {
    width: "64px",
    height: "64px",
    border: "4px solid #ec4899",
    borderTop: "4px solid transparent",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };

  const textStyle = {
    marginTop: "16px",
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: "500",
    letterSpacing: "0.5px",
  };

  return (
    <>
      {/* Spinner animation */}
      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      <div style={containerStyle}>
        <div style={wrapperStyle}>
          <div style={spinnerStyle}></div>
          <p style={textStyle}>Loading...</p>
        </div>
      </div>
    </>
  );
};

export default Loader;