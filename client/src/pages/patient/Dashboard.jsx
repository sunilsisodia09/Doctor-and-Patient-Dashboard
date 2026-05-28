import Navbar from "../../components/common/Navbar";
import Sidebar from "../../components/common/Sidebar";

const Dashboard = () => {
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
            Patient Dashboard
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {/* Health Status Card */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, #0f172a, #1e293b)",
                padding: "24px",
                borderRadius: "20px",
                border: "1px solid #334155",
                boxShadow:
                  "0px 4px 12px rgba(0,0,0,0.4)",
                transition: "0.3s ease",
              }}
            >
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: "600",
                  marginBottom: "20px",
                  color: "#38bdf8",
                }}
              >
                Health Status
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#1e293b",
                    padding: "14px",
                    borderRadius: "12px",
                  }}
                >
                  <p style={{ fontSize: "16px" }}>
                    Heart Rate
                  </p>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    76 bpm
                  </h3>
                </div>

                <div
                  style={{
                    backgroundColor: "#1e293b",
                    padding: "14px",
                    borderRadius: "12px",
                  }}
                >
                  <p style={{ fontSize: "16px" }}>
                    Blood Pressure
                  </p>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    120/80
                  </h3>
                </div>
              </div>
            </div>

            {/* Medication Card */}
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
                  fontWeight: "600",
                  marginBottom: "20px",
                  color: "#f472b6",
                }}
              >
                Medications
              </h2>

              <div
                style={{
                  backgroundColor: "#1e293b",
                  padding: "14px",
                  borderRadius: "12px",
                  marginBottom: "12px",
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    marginBottom: "6px",
                  }}
                >
                  Paracetamol
                </h3>

                <p>500mg - Morning</p>
              </div>

              <div
                style={{
                  backgroundColor: "#1e293b",
                  padding: "14px",
                  borderRadius: "12px",
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    marginBottom: "6px",
                  }}
                >
                  Vitamin D
                </h3>

                <p>1 Tablet - Night</p>
              </div>
            </div>

            {/* Nutrition Tracker */}
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
                  fontWeight: "600",
                  marginBottom: "20px",
                  color: "#4ade80",
                }}
              >
                Nutrition
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#1e293b",
                    padding: "14px",
                    borderRadius: "12px",
                  }}
                >
                  <p>Calories</p>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    2200 kcal
                  </h3>
                </div>

                <div
                  style={{
                    backgroundColor: "#1e293b",
                    padding: "14px",
                    borderRadius: "12px",
                  }}
                >
                  <p>Protein Intake</p>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    95g
                  </h3>
                </div>
              </div>
            </div>

            {/* Vitals Chart */}
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
                  fontWeight: "600",
                  marginBottom: "20px",
                  color: "#facc15",
                }}
              >
                Vitals Overview
              </h2>

              <div
                style={{
                  height: "220px",
                  backgroundColor: "#1e293b",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  color: "#cbd5e1",
                }}
              >
                Chart Data Here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;