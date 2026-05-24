import Navbar from "../../components/common/Navbar";
import Sidebar from "../../components/common/Sidebar";

import DashboardCards from "../../components/doctor/DashboardCards";
import AppointmentList from "../../components/doctor/AppointmentList";
import RecentPatients from "../../components/doctor/RecentPatients";
import Notifications from "../../components/doctor/Notifications";

const Dashboard = () => {
  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <h1 className="text-4xl font-bold mb-6">
            Doctor Dashboard
          </h1>

          <DashboardCards />

          <div className="grid grid-cols-2 gap-6 mt-6">
            <AppointmentList />
            <RecentPatients />
          </div>

          <div className="mt-6">
            <Notifications />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;