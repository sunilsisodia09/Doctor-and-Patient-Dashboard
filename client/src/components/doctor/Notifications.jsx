import React from "react";

const Notifications = () => {
  const notifications = [
    "New appointment booked",
    "Patient uploaded report",
    "Emergency case alert",
    "Medicine stock updated",
  ];

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

    list: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },

    item: {
      background: "#1e293b",
      padding: "14px",
      borderRadius: "12px",
      border: "1px solid rgba(148, 163, 184, 0.15)",
      fontSize: "14px",
      color: "#cbd5e1",
      transition: "0.3s ease",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      {/* TITLE */}
      <h2 style={styles.title}>Notifications</h2>

      {/* LIST */}
      <div style={styles.list}>
        {notifications.map((notification, index) => (
          <div
            key={index}
            style={styles.item}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.borderColor = "#ec4899";
              e.currentTarget.style.background = "#0f172a";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor =
                "rgba(148, 163, 184, 0.15)";
              e.currentTarget.style.background = "#1e293b";
            }}
          >
            {notification}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;