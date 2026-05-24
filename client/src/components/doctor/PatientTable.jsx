const PatientTable = () => {
  const patients = [
    {
      name: "John Doe",
      age: 25,
      disease: "Fever",
      status: "Stable",
    },
    {
      name: "Alex",
      age: 30,
      disease: "Diabetes",
      status: "Critical",
    },
  ];

  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
      <h2 className="text-3xl font-bold mb-6">
        Patient Records
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-4">
                Name
              </th>

              <th className="text-left py-4">
                Age
              </th>

              <th className="text-left py-4">
                Disease
              </th>

              <th className="text-left py-4">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {patients.map((patient, index) => (
              <tr
                key={index}
                className="border-b border-slate-800"
              >
                <td className="py-4">
                  {patient.name}
                </td>

                <td className="py-4">
                  {patient.age}
                </td>

                <td className="py-4">
                  {patient.disease}
                </td>

                <td className="py-4">
                  <span className="bg-pink-500 px-3 py-1 rounded-full">
                    {patient.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientTable;