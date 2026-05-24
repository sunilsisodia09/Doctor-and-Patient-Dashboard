import { useEffect, useState } from "react";

import Navbar from "../../components/common/Navbar";
import Sidebar from "../../components/common/Sidebar";

import { getMedications } from "../../api/medicationApi";

const Medications = () => {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    fetchMedications();
  }, []);

  const fetchMedications = async () => {
    try {
      const { data } = await getMedications();

      setMedications(data.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <h1 className="text-4xl font-bold mb-6">
            Medications
          </h1>

          <div className="grid grid-cols-3 gap-4">
            {medications.length > 0 ? (
              medications.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900 p-6 rounded-xl"
                >
                  <h2 className="text-2xl font-bold">
                    {item.medicineName}
                  </h2>

                  <p>{item.dosage}</p>
                </div>
              ))
            ) : (
              <p>No Medications Found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medications;