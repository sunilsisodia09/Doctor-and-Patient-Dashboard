import { useEffect, useState } from "react";

import Navbar from "../../components/common/Navbar";
import Sidebar from "../../components/common/Sidebar";

import { getNutrition } from "../../api/nutritionApi";

const Nutrition = () => {
  const [nutrition, setNutrition] = useState([]);

  useEffect(() => {
    fetchNutrition();
  }, []);

  const fetchNutrition = async () => {
    try {
      const { data } = await getNutrition();

      setNutrition(data.data || []);
    } catch (error) {
      console.log(error);
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
            Nutrition Tracker
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {nutrition.length > 0 ? (
              nutrition.map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#0f172a",
                    padding: "24px",
                    borderRadius: "16px",
                    border: "1px solid #1e293b",
                    boxShadow:
                      "0 4px 10px rgba(0,0,0,0.3)",
                    transition: "0.3s",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "28px",
                      fontWeight: "600",
                      marginBottom: "10px",
                      color: "#38bdf8",
                    }}
                  >
                    Calories
                  </h2>

                  <p
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    {item.calories}
                  </p>

                  <h2
                    style={{
                      fontSize: "28px",
                      fontWeight: "600",
                      marginTop: "20px",
                      marginBottom: "10px",
                      color: "#4ade80",
                    }}
                  >
                    Protein
                  </h2>

                  <p
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    {item.protein}
                  </p>
                </div>
              ))
            ) : (
              <p
                style={{
                  fontSize: "20px",
                  color: "#cbd5e1",
                }}
              >
                No Nutrition Data
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;