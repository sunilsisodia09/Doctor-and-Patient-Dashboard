const VitalsChart = () => {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
      <h2 className="text-3xl font-bold mb-6">
        Vitals
      </h2>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <p>Heart Rate</p>

            <p>78 BPM</p>
          </div>

          <div className="bg-slate-800 h-4 rounded-full overflow-hidden">
            <div className="bg-pink-500 h-full w-[78%]"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <p>Oxygen Level</p>

            <p>96%</p>
          </div>

          <div className="bg-slate-800 h-4 rounded-full overflow-hidden">
            <div className="bg-pink-500 h-full w-[96%]"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <p>Blood Pressure</p>

            <p>120/80</p>
          </div>

          <div className="bg-slate-800 h-4 rounded-full overflow-hidden">
            <div className="bg-pink-500 h-full w-[80%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VitalsChart;