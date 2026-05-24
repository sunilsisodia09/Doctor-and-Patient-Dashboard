import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  /* ================= STYLES ================= */

  const sidebarStyle = {
    width: "260px",
    minHeight: "100vh",
    background: "#0f172a",
    borderRight: "1px solid rgba(148,163,184,0.15)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  };

  const titleStyle = {
    fontSize: "26px",
    fontWeight: "800",
    color: "#ec4899",
    marginBottom: "30px",
  };

  const linkBase = {
    display: "block",
    padding: "12px 14px",
    marginBottom: "10px",
    borderRadius: "12px",
    textDecoration: "none",
    background: "#1e293b",
    color: "#cbd5e1",
    fontSize: "15px",
    fontWeight: "500",
    transition: "0.3s ease",
  };

  const linkHover = {
    background: "#ec4899",
    color: "#fff",
    transform: "translateX(4px)",
  };

  const activeStyle = {
    background: "#ec4899",
    color: "#fff",
  };

  return (
    <div style={sidebarStyle}>
      <h2 style={titleStyle}>Dashboard</h2>

      {/* DOCTOR LINKS */}
      {user?.role === "doctor" && (
        <>
          {[
            ["/doctor/dashboard", "Dashboard"],
            ["/doctor/patients", "Patients"],
            ["/doctor/appointments", "Appointments"],
            ["/doctor/reports", "Reports"],
            ["/doctor/analytics", "Analytics"],
          ].map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) =>
                isActive ? { ...linkBase, ...activeStyle } : linkBase
              }
              onMouseEnter={(e) =>
                Object.assign(e.target.style, linkHover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.target.style, linkBase)
              }
            >
              {label}
            </NavLink>
          ))}
        </>
      )}

      {/* PATIENT LINKS */}
      {user?.role === "patient" && (
        <>
          {[
            ["/patient/dashboard", "Dashboard"],
            ["/patient/medications", "Medications"],
            ["/patient/nutrition", "Nutrition"],
            ["/patient/vitals", "Vitals"],
            ["/patient/appointments", "Appointments"],
            ["/patient/profile", "Profile"],
          ].map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) =>
                isActive ? { ...linkBase, ...activeStyle } : linkBase
              }
              onMouseEnter={(e) =>
                Object.assign(e.target.style, linkHover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.target.style, linkBase)
              }
            >
              {label}
            </NavLink>
          ))}
        </>
      )}
    </div>
  );
};

export default Sidebar;