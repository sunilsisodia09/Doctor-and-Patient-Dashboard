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
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <h1 className="text-4xl font-bold mb-6">
            Nutrition Tracker
          </h1>

          <div className="grid grid-cols-3 gap-4">
            {nutrition.length > 0 ? (
              nutrition.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900 p-6 rounded-xl"
                >
                  <h2 className="text-2xl">
                    Calories
                  </h2>

                  <p>{item.calories}</p>

                  <h2 className="text-2xl mt-4">
                    Protein
                  </h2>

                  <p>{item.protein}</p>
                </div>
              ))
            ) : (
              <p>No Nutrition Data</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;