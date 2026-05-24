import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="healthcare-home">

      {/* HERO SECTION */}

      <section className="healthcare-hero">

        {/* LEFT CONTENT */}

        <div className="healthcare-left">

          <div className="healthcare-badge">
            AI Powered Healthcare Platform
          </div>

          <h1 className="healthcare-title">
            Smart
            <span className="healthcare-gradient">
              {" "}
              Healthcare
            </span>
            <br />
            Management System
          </h1>

          <p className="healthcare-description">
            Manage doctors, patients,
            appointments, nutrition,
            medications and healthcare
            analytics in one modern
            AI-powered healthcare platform.
          </p>

          <div className="healthcare-buttons">

            <Link
              to="/login"
              className="healthcare-login-btn"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="healthcare-register-btn"
            >
              Register
            </Link>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="healthcare-image-wrapper">

          <div className="healthcare-image-glow"></div>

          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309"
            alt="Healthcare"
            className="healthcare-image"
          />

        </div>

      </section>

      {/* FEATURES SECTION */}

      <section className="healthcare-features">

        <h2 className="healthcare-section-title">
          Platform Features
        </h2>

        <div className="healthcare-feature-grid">

          {/* CARD 1 */}

          <div className="healthcare-feature-card">

            <div className="healthcare-feature-icon">
              🩺
            </div>

            <h3 className="healthcare-feature-title">
              Doctor Dashboard
            </h3>

            <p className="healthcare-feature-text">
              Doctors can manage
              appointments, reports,
              analytics and patient records
              from a smart dashboard.
            </p>

          </div>

          {/* CARD 2 */}

          <div className="healthcare-feature-card">

            <div className="healthcare-feature-icon">
              ❤️
            </div>

            <h3 className="healthcare-feature-title">
              Patient Monitoring
            </h3>

            <p className="healthcare-feature-text">
              Track vitals, nutrition,
              medications and appointment
              history in real-time.
            </p>

          </div>

          {/* CARD 3 */}

          <div className="healthcare-feature-card">

            <div className="healthcare-feature-icon">
              🤖
            </div>

            <h3 className="healthcare-feature-title">
              AI Healthcare
            </h3>

            <p className="healthcare-feature-text">
              AI-powered chatbot,
              prescription scanner and
              healthcare recommendation
              system.
            </p>

          </div>

        </div>

      </section>

      {/* STATS SECTION */}

      <section className="healthcare-stats">

        <div className="healthcare-stats-grid">

          <div className="healthcare-stat-card">
            <h2 className="healthcare-stat-number">
              500+
            </h2>

            <p className="healthcare-stat-text">
              Patients
            </p>
          </div>

          <div className="healthcare-stat-card">
            <h2 className="healthcare-stat-number">
              120+
            </h2>

            <p className="healthcare-stat-text">
              Doctors
            </p>
          </div>

          <div className="healthcare-stat-card">
            <h2 className="healthcare-stat-number">
              250+
            </h2>

            <p className="healthcare-stat-text">
              Appointments
            </p>
          </div>

          <div className="healthcare-stat-card">
            <h2 className="healthcare-stat-number">
              99%
            </h2>

            <p className="healthcare-stat-text">
              Satisfaction
            </p>
          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="healthcare-footer">

        <h2 className="healthcare-footer-title">
          Healthcare System
        </h2>

        <p className="healthcare-footer-text">
          © 2025 All Rights Reserved
        </p>

      </footer>

    </div>
  );
};

export default Home;