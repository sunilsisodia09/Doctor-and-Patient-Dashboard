import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  /* ================= STYLES ================= */

  const navStyle = {
    background: "#0f172a",
    borderBottom: "1px solid rgba(148,163,184,0.15)",
    padding: "14px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const logoStyle = {
    fontSize: "26px",
    fontWeight: "800",
    color: "#ec4899",
    letterSpacing: "0.5px",
  };

  const rightBox = {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    flexWrap: "wrap",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#cbd5e1",
    fontSize: "15px",
    transition: "0.3s",
  };

  const linkHover = {
    color: "#ec4899",
  };

  const userStyle = {
    color: "#cbd5e1",
    fontSize: "15px",
    fontWeight: "500",
  };

  const buttonStyle = {
    background: "#ec4899",
    border: "none",
    padding: "10px 16px",
    borderRadius: "10px",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s ease",
  };

  const buttonHover = {
    background: "#db2777",
    transform: "translateY(-2px)",
  };

  return (
    <nav style={navStyle}>
      {/* LOGO */}
      <h1 style={logoStyle}>Healthcare</h1>

      {/* LINKS */}
      <div style={rightBox}>
        <Link
          to="/"
          style={linkStyle}
          onMouseEnter={(e) =>
            Object.assign(e.target.style, linkHover)
          }
          onMouseLeave={(e) =>
            Object.assign(e.target.style, {
              color: "#cbd5e1",
            })
          }
        >
          Home
        </Link>

        <Link
          to="/patient/profile"
          style={linkStyle}
          onMouseEnter={(e) =>
            Object.assign(e.target.style, linkHover)
          }
          onMouseLeave={(e) =>
            Object.assign(e.target.style, {
              color: "#cbd5e1",
            })
          }
        >
          Profile
        </Link>

        {/* USER */}
        <div style={userStyle}>{user?.name || "Guest"}</div>

        {/* LOGOUT */}
        <button
          style={buttonStyle}
          onClick={logoutHandler}
          onMouseEnter={(e) =>
            Object.assign(e.target.style, buttonHover)
          }
          onMouseLeave={(e) =>
            Object.assign(e.target.style, {
              background: "#ec4899",
              transform: "translateY(0px)",
            })
          }
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;