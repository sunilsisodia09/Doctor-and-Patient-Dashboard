import React from "react";

const AnalyticsChart = () => {
  const styles = {
    container: {
      background: "#0f172a",
      padding: "20px",
      borderRadius: "18px",
      border: "1px solid rgba(148, 163, 184, 0.15)",
      color: "#fff",
      width: "100%",
      boxSizing: "border-box",
    },

    title: {
      fontSize: "22px",
      fontWeight: "700",
      marginBottom: "18px",
    },

    chartArea: {
      height: "220px",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "12px",
      flexWrap: "wrap",
    },

    bar: (height) => ({
      width: "18%",
      minWidth: "40px",
      height: height,
      background: "linear-gradient(180deg, #ec4899, #8b5cf6)",
      borderTopLeftRadius: "12px",
      borderTopRightRadius: "12px",
      transition: "0.3s ease",
      cursor: "pointer",
    }),

    // responsive helper (optional container scaling)
    wrapper: {
      width: "100%",
    },
  };

  const bars = [
    { h: "120px" },
    { h: "180px" },
    { h: "90px" },
    { h: "210px" },
    { h: "150px" },
  ];

  return (
    <div style={styles.container}>
      {/* TITLE */}
      <h2 style={styles.title}>Analytics Overview</h2>

      {/* CHART */}
      <div style={styles.chartArea}>
        {bars.map((b, i) => (
          <div
            key={i}
            style={styles.bar(b.h)}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = "0.8";
              e.currentTarget.style.transform = "scaleY(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "scaleY(1)";
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnalyticsChart;