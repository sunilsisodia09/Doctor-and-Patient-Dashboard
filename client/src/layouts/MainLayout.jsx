import Navbar from "../components/common/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="p-6">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;