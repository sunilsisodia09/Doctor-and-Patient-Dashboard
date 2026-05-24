import React from "react";

const Topbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const styles = {
    topbar: {
      background: "#0f172a",
      borderBottom: "1px solid rgba(148, 163, 184, 0.15)",
      padding: "16px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "12px",
    },

    left: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },

    title: {
      fontSize: "22px",
      fontWeight: "700",
      color: "#ffffff",
      margin: 0,
    },

    subtitle: {
      fontSize: "14px",
      color: "#94a3b8",
      margin: 0,
    },

    right: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },

    notification: {
      background: "#1e293b",
      padding: "8px 14px",
      borderRadius: "10px",
      color: "#cbd5e1",
      fontSize: "14px",
      cursor: "pointer",
      transition: "0.3s",
      userSelect: "none",
    },

    avatar: {
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      border: "2px solid #ec4899",
      objectFit: "cover",
    },

    // responsive helper (manual)
    mobileWrap: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
  };

  return (
    <div style={styles.topbar}>
      {/* LEFT SIDE */}
      <div style={styles.left}>
        <h1 style={styles.title}>Welcome Back 👋</h1>
        <p style={styles.subtitle}>
          {user?.role ? `${user.role} Panel` : "User Panel"}
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div style={styles.right}>
        <div
          style={styles.notification}
          onMouseOver={(e) =>
            (e.currentTarget.style.background = "#334155")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.background = "#1e293b")
          }
        >
          Notifications
        </div>

        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          style={styles.avatar}
        />
      </div>
    </div>
  );
};

export default Topbar;