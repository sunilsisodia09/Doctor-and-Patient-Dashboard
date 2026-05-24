const AppointmentHistory = () => {
  const appointments = [
    {
      doctor: "Dr. Sharma",
      date: "20 June 2025",
      status: "Completed",
    },
    {
      doctor: "Dr. Alex",
      date: "22 June 2025",
      status: "Pending",
    },
  ];

  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
      <h2 className="text-3xl font-bold mb-6">
        Appointment History
      </h2>

      <div className="space-y-4">
        {appointments.map(
          (appointment, index) => (
            <div
              key={index}
              className="bg-slate-800 p-4 rounded-xl flex justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold">
                  {appointment.doctor}
                </h3>

                <p className="text-slate-400">
                  {appointment.date}
                </p>
              </div>

              <span className="bg-pink-500 px-4 py-2 rounded-full h-fit">
                {appointment.status}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AppointmentHistory;