import Navbar from "../../components/common/Navbar";
import Sidebar from "../../components/common/Sidebar";

const Vitals = () => {
  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <h1 className="text-4xl font-bold mb-6">
            Patient Vitals
          </h1>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-2xl mb-4">
                Heart Rate
              </h2>

              <p className="text-5xl font-bold">
                78 BPM
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h2 className="text-2xl mb-4">
                Blood Pressure
              </h2>

              <p className="text-5xl font-bold">
                120/80
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vitals;