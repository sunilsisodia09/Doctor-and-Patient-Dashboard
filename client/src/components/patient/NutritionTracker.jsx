const NutritionTracker = () => {
  const nutrition = {
    calories: 2200,
    protein: "120g",
    water: "3L",
    carbs: "250g",
  };

  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
      <h2 className="text-3xl font-bold mb-6">
        Nutrition Tracker
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-800 p-4 rounded-xl">
          <h3 className="text-slate-400">
            Calories
          </h3>

          <p className="text-3xl font-bold text-pink-500">
            {nutrition.calories}
          </p>
        </div>

        <div className="bg-slate-800 p-4 rounded-xl">
          <h3 className="text-slate-400">
            Protein
          </h3>

          <p className="text-3xl font-bold text-pink-500">
            {nutrition.protein}
          </p>
        </div>

        <div className="bg-slate-800 p-4 rounded-xl">
          <h3 className="text-slate-400">
            Water
          </h3>

          <p className="text-3xl font-bold text-pink-500">
            {nutrition.water}
          </p>
        </div>

        <div className="bg-slate-800 p-4 rounded-xl">
          <h3 className="text-slate-400">
            Carbs
          </h3>

          <p className="text-3xl font-bold text-pink-500">
            {nutrition.carbs}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NutritionTracker;