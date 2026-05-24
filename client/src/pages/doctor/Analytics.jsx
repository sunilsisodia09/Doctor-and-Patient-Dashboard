import Navbar from "../../components/common/Navbar";
import Sidebar from "../../components/common/Sidebar";

import AnalyticsChart from "../../components/doctor/AnalyticsChart";

const Analytics = () => {
  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <h1 className="text-4xl font-bold mb-6">
            Analytics
          </h1>

          <div className="grid grid-cols-2 gap-6">
            <AnalyticsChart />

            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-2xl mb-4">
                Patient Growth
              </h2>

              <div className="space-y-4">
                <div className="bg-slate-800 p-4 rounded">
                  January - 120 Patients
                </div>

                <div className="bg-slate-800 p-4 rounded">
                  February - 180 Patients
                </div>

                <div className="bg-slate-800 p-4 rounded">
                  March - 240 Patients
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-xl font-bold">
                Total Patients
              </h2>

              <p className="text-5xl font-bold mt-4">
                350
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-xl font-bold">
                Appointments
              </h2>

              <p className="text-5xl font-bold mt-4">
                85
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-xl font-bold">
                Emergency Cases
              </h2>

              <p className="text-5xl font-bold mt-4">
                12
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;