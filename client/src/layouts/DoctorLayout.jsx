import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import Topbar from "../components/common/Topbar";

const DoctorLayout = ({
  children,
}) => {
  return (
    <div className="flex bg-slate-950 text-white min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <Topbar />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DoctorLayout;