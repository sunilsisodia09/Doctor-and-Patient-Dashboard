import Navbar from "../../components/common/Navbar";
import Sidebar from "../../components/common/Sidebar";

const Reports = () => {
  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <h1 className="text-4xl font-bold mb-6">
            Medical Reports
          </h1>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-3">
                Blood Test
              </h2>

              <p className="text-slate-400">
                Patient Blood Report
              </p>

              <button className="mt-4 bg-pink-500 px-4 py-2 rounded-lg">
                View Report
              </button>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-3">
                ECG Report
              </h2>

              <p className="text-slate-400">
                Heart Health Analysis
              </p>

              <button className="mt-4 bg-pink-500 px-4 py-2 rounded-lg">
                View Report
              </button>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-3">
                MRI Scan
              </h2>

              <p className="text-slate-400">
                Brain Scan Details
              </p>

              <button className="mt-4 bg-pink-500 px-4 py-2 rounded-lg">
                View Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;