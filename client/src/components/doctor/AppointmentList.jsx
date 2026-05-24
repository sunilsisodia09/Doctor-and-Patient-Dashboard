import React from "react";

const AppointmentList = () => {
  const appointments = [
    {
      patient: "John Doe",
      time: "10:00 AM",
      date: "20 June 2025",
    },
    {
      patient: "Alex",
      time: "12:00 PM",
      date: "20 June 2025",
    },
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

    card: {
      background: "#1e293b",
      padding: "14px",
      borderRadius: "14px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      border: "1px solid rgba(148, 163, 184, 0.15)",
      transition: "0.3s ease",
      flexWrap: "wrap",
      gap: "10px",
    },

    left: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },

    patient: {
      fontSize: "18px",
      fontWeight: "600",
      margin: 0,
    },

    subText: {
      fontSize: "13px",
      color: "#94a3b8",
      margin: 0,
    },

    right: {
      textAlign: "right",
      color: "#cbd5e1",
      fontSize: "14px",
      minWidth: "120px",
    },
  };

  return (
    <div style={styles.container}>
      {/* TITLE */}
      <h2 style={styles.title}>Appointments</h2>

      {/* LIST */}
      <div style={styles.list}>
        {appointments.map((appointment, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.borderColor = "#ec4899";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor =
                "rgba(148, 163, 184, 0.15)";
            }}
          >
            {/* LEFT */}
            <div style={styles.left}>
              <h3 style={styles.patient}>
                {appointment.patient}
              </h3>
              <p style={styles.subText}>Appointment</p>
            </div>

            {/* RIGHT */}
            <div style={styles.right}>
              <p style={{ margin: 0 }}>{appointment.time}</p>
              <p style={{ margin: 0, color: "#94a3b8" }}>
                {appointment.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentList;