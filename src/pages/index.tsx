import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const index = () => {
  return (
    <>
      <Navbar />
      <div className="w-[20%]">
        <Sidebar />
      </div>
    </>
  );
};

export default index;
