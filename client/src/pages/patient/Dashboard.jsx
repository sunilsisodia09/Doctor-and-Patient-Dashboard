import Navbar from "../../components/common/Navbar";
import Sidebar from "../../components/common/Sidebar";

import MedicationCard from "../../components/patient/MedicationCard";
import NutritionTracker from "../../components/patient/NutritionTracker";
import VitalsChart from "../../components/patient/VitalsChart";
import HealthStatus from "../../components/patient/HealthStatus";

const Dashboard = () => {
  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <h1 className="text-4xl font-bold mb-6">
            Patient Dashboard
          </h1>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <HealthStatus />
            <MedicationCard />
            <NutritionTracker />
            <VitalsChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;