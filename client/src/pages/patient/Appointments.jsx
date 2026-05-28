import { useState } from "react";

import Navbar from "../../components/common/Navbar";
import Sidebar from "../../components/common/Sidebar";

const Vitals = () => {
  const [selectedDoctor, setSelectedDoctor] =
    useState("Dr. Sharma");

  const [selectedDate, setSelectedDate] =
    useState("");

  const [selectedTime, setSelectedTime] =
    useState("");

  const handleAppointment = () => {
    if (
      selectedDoctor &&
      selectedDate &&
      selectedTime
    ) {
      alert(
        `Appointment Booked with ${selectedDoctor} on ${selectedDate} at ${selectedTime}`
      );
    } else {
      alert("Please select all appointment details");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#020617",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <Navbar />

        <div
          style={{
            padding: "24px",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "700",
              marginBottom: "24px",
            }}
          >
            Patient Vitals & Appointment
          </h1>

          {/* Vitals Section */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              marginBottom: "30px",
            }}
          >
            {/* Heart Rate */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, #0f172a, #1e293b)",
                padding: "24px",
                borderRadius: "20px",
                border: "1px solid #334155",
                boxShadow:
                  "0px 4px 12px rgba(0,0,0,0.4)",
              }}
            >
              <h2
                style={{
                  fontSize: "28px",
                  marginBottom: "18px",
                  color: "#38bdf8",
                }}
              >
                Heart Rate
              </h2>

              <p
                style={{
                  fontSize: "52px",
                  fontWeight: "700",
                }}
              >
                78 BPM
              </p>
            </div>

            {/* Blood Pressure */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, #0f172a, #1e293b)",
                padding: "24px",
                borderRadius: "20px",
                border: "1px solid #334155",
                boxShadow:
                  "0px 4px 12px rgba(0,0,0,0.4)",
              }}
            >
              <h2
                style={{
                  fontSize: "28px",
                  marginBottom: "18px",
                  color: "#4ade80",
                }}
              >
                Blood Pressure
              </h2>

              <p
                style={{
                  fontSize: "52px",
                  fontWeight: "700",
                }}
              >
                120/80
              </p>
            </div>
          </div>

          {/* Appointment Section */}
          <div
            style={{
              background:
                "linear-gradient(135deg, #0f172a, #1e293b)",
              padding: "30px",
              borderRadius: "24px",
              border: "1px solid #334155",
              boxShadow:
                "0px 4px 14px rgba(0,0,0,0.4)",
            }}
          >
            <h2
              style={{
                fontSize: "34px",
                fontWeight: "700",
                marginBottom: "24px",
                color: "#facc15",
              }}
            >
              Book Appointment
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
              }}
            >
              {/* Doctor Select */}
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    fontSize: "18px",
                  }}
                >
                  Select Doctor
                </label>

                <select
                  value={selectedDoctor}
                  onChange={(e) =>
                    setSelectedDoctor(e.target.value)
                  }
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "12px",
                    border: "1px solid #475569",
                    backgroundColor: "#1e293b",
                    color: "white",
                    fontSize: "16px",
                    outline: "none",
                  }}
                >
                  <option>Dr. Sharma</option>
                  <option>Dr. Mehta</option>
                  <option>Dr. Verma</option>
                  <option>Dr. Singh</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    fontSize: "18px",
                  }}
                >
                  Select Date
                </label>

                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) =>
                    setSelectedDate(e.target.value)
                  }
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "12px",
                    border: "1px solid #475569",
                    backgroundColor: "#1e293b",
                    color: "white",
                    fontSize: "16px",
                    outline: "none",
                  }}
                />
              </div>

              {/* Time */}
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    fontSize: "18px",
                  }}
                >
                  Select Time
                </label>

                <select
                  value={selectedTime}
                  onChange={(e) =>
                    setSelectedTime(e.target.value)
                  }
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "12px",
                    border: "1px solid #475569",
                    backgroundColor: "#1e293b",
                    color: "white",
                    fontSize: "16px",
                    outline: "none",
                  }}
                >
                  <option value="">
                    Choose Time
                  </option>

                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>12:30 PM</option>
                  <option>02:00 PM</option>
                  <option>04:00 PM</option>
                </select>
              </div>
            </div>

            {/* Doctor Timing Info */}
            <div
              style={{
                marginTop: "24px",
                backgroundColor: "#1e293b",
                padding: "18px",
                borderRadius: "14px",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  marginBottom: "12px",
                  color: "#38bdf8",
                }}
              >
                Doctor Availability
              </h3>

              <p
                style={{
                  fontSize: "18px",
                  marginBottom: "8px",
                }}
              >
                Monday - Friday : 10:00 AM to
                05:00 PM
              </p>

              <p
                style={{
                  fontSize: "18px",
                }}
              >
                Saturday : 10:00 AM to 02:00 PM
              </p>
            </div>

            {/* Button */}
            <button
              onClick={handleAppointment}
              style={{
                marginTop: "28px",
                width: "100%",
                padding: "16px",
                background:
                  "linear-gradient(90deg, #3b82f6, #06b6d4)",
                border: "none",
                borderRadius: "14px",
                color: "white",
                fontSize: "20px",
                fontWeight: "700",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vitals;