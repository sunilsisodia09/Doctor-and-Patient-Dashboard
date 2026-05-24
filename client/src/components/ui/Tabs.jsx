import { useState } from "react";

const Tabs = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] =
    useState(0);

  return (
    <div>
      <div className="flex gap-4 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() =>
              setActiveTab(index)
            }
            className={`px-5 py-2 rounded-xl transition-all ${
              activeTab === index
                ? "bg-pink-500"
                : "bg-slate-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
};

export default Tabs;