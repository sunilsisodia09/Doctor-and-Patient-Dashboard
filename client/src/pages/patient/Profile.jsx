import React from "react";
import Navbar from "../../components/common/Navbar";
import Sidebar from "../../components/common/Sidebar";

const Profile = () => {
  const styles = {
    layout: {
      display: "flex",
      minHeight: "100vh",
      background: "#020617",
      color: "#fff",
      fontFamily: "Poppins, sans-serif",
    },

    main: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },

    content: {
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    card: {
      background: "#0f172a",
      padding: "28px",
      borderRadius: "18px",
      width: "100%",
      maxWidth: "420px",
      border: "1px solid rgba(148, 163, 184, 0.15)",
      boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
      boxSizing: "border-box",
    },

    profileTop: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "24px",
    },

    avatar: {
      width: "110px",
      height: "110px",
      borderRadius: "50%",
      marginBottom: "14px",
      border: "3px solid #ec4899",
      objectFit: "cover",
    },

    name: {
      fontSize: "22px",
      fontWeight: "700",
      margin: 0,
    },

    email: {
      fontSize: "14px",
      color: "#94a3b8",
      marginTop: "4px",
    },

    infoBox: {
      marginTop: "18px",
      display: "flex",
      flexDirection: "column",
      gap: "14px",
    },

    label: {
      fontSize: "14px",
      color: "#94a3b8",
      margin: 0,
    },

    value: {
      fontSize: "16px",
      fontWeight: "600",
      margin: 0,
      color: "#ffffff",
    },
  };

  return (
    <div style={styles.layout}>
      <Sidebar />

      <div style={styles.main}>
        <Navbar />

        <div style={styles.content}>
          <div style={styles.card}>
            {/* PROFILE TOP */}
            <div style={styles.profileTop}>
              <img
                src="https://i.pravatar.cc/150"
                alt="profile"
                style={styles.avatar}
              />

              <h1 style={styles.name}>John Doe</h1>
              <p style={styles.email}>john@gmail.com</p>
            </div>

            {/* INFO */}
            <div style={styles.infoBox}>
              <div>
                <p style={styles.label}>Age</p>
                <p style={styles.value}>25</p>
              </div>

              <div>
                <p style={styles.label}>Blood Group</p>
                <p style={styles.value}>O+</p>
              </div>

              <div>
                <p style={styles.label}>Gender</p>
                <p style={styles.value}>Male</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;