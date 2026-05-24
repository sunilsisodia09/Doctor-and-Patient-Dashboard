const MedicationCard = () => {
  const medicines = [
    {
      name: "Paracetamol",
      dosage: "500mg",
      time: "Morning",
    },
    {
      name: "Vitamin D",
      dosage: "1 Tablet",
      time: "Night",
    },
  ];

  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
      <h2 className="text-3xl font-bold mb-6">
        Medications
      </h2>

      <div className="space-y-4">
        {medicines.map((medicine, index) => (
          <div
            key={index}
            className="bg-slate-800 p-4 rounded-xl"
          >
            <h3 className="text-xl font-semibold text-pink-500">
              {medicine.name}
            </h3>

            <p className="text-slate-300">
              Dosage: {medicine.dosage}
            </p>

            <p className="text-slate-400">
              Time: {medicine.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicationCard;