import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const index = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-5 items-center">
        <Sidebar />
        <div className="col-span-4 flex justify-center items-center sm:relative">
          <div className="text-4xl font-semibold">Welcome To Dashboard</div>
        </div>
      </div>
    </>
  );
};

export default index;
