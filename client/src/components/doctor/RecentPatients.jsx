import React from "react";

const RecentPatients = () => {
  const patients = ["John Doe", "Alex", "Sophia", "Emma"];

  const styles = {
    container: {
      background: "#0f172a",
      padding: "24px",
      borderRadius: "18px",
      border: "1px solid rgba(148, 163, 184, 0.15)",
      color: "#fff",
      boxSizing: "border-box",
      width: "100%",
    },

    title: {
      fontSize: "28px",
      fontWeight: "700",
      marginBottom: "18px",
    },

    list: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
    },

    card: {
      background: "#1e293b",
      padding: "14px",
      borderRadius: "14px",
      display: "flex",
      alignItems: "center",
      gap: "14px",
      transition: "0.3s ease",
      cursor: "pointer",
    },

    avatar: {
      width: "56px",
      height: "56px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "2px solid #ec4899",
    },

    name: {
      fontSize: "18px",
      fontWeight: "600",
      margin: 0,
    },

    role: {
      fontSize: "13px",
      color: "#94a3b8",
      margin: 0,
    },

    // responsive helper (JS media simulation)
    wrapper: {
      width: "100%",
      maxWidth: "500px",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.title}>Recent Patients</h2>

        <div style={styles.list}>
          {patients.map((patient, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0,0,0,0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src="https://i.pravatar.cc/100"
                alt="profile"
                style={styles.avatar}
              />

              <div>
                <h3 style={styles.name}>{patient}</h3>
                <p style={styles.role}>Patient</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPatients;