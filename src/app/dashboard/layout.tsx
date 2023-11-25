import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className=" flex-1 bg-secBg p-[20px] h-screen sticky top-0 left-0 ">
        <Sidebar />
      </div>
      <div className="flex-[4] m-3">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
export default RootLayout;
