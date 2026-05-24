import Navbar from "../../components/common/Navbar";
import Sidebar from "../../components/common/Sidebar";

import AppointmentList from "../../components/doctor/AppointmentList";

const Appointments = () => {
  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <div className="flex justify-between mb-6">
            <h1 className="text-4xl font-bold">
              Appointments
            </h1>

            <button className="bg-pink-500 px-4 py-2 rounded-lg">
              Create Appointment
            </button>
          </div>

          <AppointmentList />
        </div>
      </div>
    </div>
  );
};

export default Appointments;