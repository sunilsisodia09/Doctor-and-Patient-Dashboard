const HealthStatus = () => {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
      <h2 className="text-3xl font-bold mb-6">
        Health Status
      </h2>

      <div className="flex flex-col items-center">
        <div className="w-36 h-36 rounded-full bg-pink-500 flex items-center justify-center text-3xl font-bold">
          85%
        </div>

        <p className="mt-6 text-xl text-slate-300">
          Overall Health Score
        </p>

        <div className="mt-6 w-full">
          <div className="flex justify-between mb-2">
            <p>Fitness</p>

            <p>80%</p>
          </div>

          <div className="bg-slate-800 h-3 rounded-full overflow-hidden">
            <div className="bg-pink-500 h-full w-[80%]"></div>
          </div>

          <div className="flex justify-between mb-2 mt-4">
            <p>Sleep</p>

            <p>90%</p>
          </div>

          <div className="bg-slate-800 h-3 rounded-full overflow-hidden">
            <div className="bg-pink-500 h-full w-[90%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthStatus;