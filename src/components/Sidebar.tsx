import { Calendar, File, FolderClosed, Home, Users } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <div className="bg-slate-800  space-y-5 mt-[-1px] px-5 py-5 h-[100dvh] hidden lg:block">
        <div className="flex items-cente gap-4 text-gray-400 hover:bg-slate-500 hover:text-white pl-2 py-2 rounded-md cursor-pointer">
          <Home />
          <Link href="/dashboard">
            <div className="font-semibold ">Dashboard</div>
          </Link>
        </div>
        <div className="flex items-cente gap-4 text-gray-400 hover:bg-slate-500 hover:text-white pl-2 py-2 rounded-md cursor-pointer">
          <Users />
          <Link href="/team">
            <div className="font-semibold">Team</div>
          </Link>
        </div>
        <div className="flex items-cente gap-4 text-gray-400 hover:bg-slate-500 hover:text-white pl-2 py-2 rounded-md cursor-pointer">
          <FolderClosed />
          <Link href="/projects">
            <div className="font-semibold">Projects</div>
          </Link>
        </div>
        <div className="flex items-cente gap-4 text-gray-400 hover:bg-slate-500 hover:text-white pl-2 py-2 rounded-md cursor-pointer">
          <Calendar />
          <Link href="/calendar">
            <div className="font-semibold">Calendar</div>
          </Link>
        </div>
        <div className="flex items-cente gap-4 text-gray-400 hover:bg-slate-500 hover:text-white pl-2 py-2 rounded-md cursor-pointer">
          <File />
          <Link href="/doc">
            <div className="font-semibold">Documents</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
