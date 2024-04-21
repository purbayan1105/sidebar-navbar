import { Bell, ChevronDown, ChevronUp, Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [down, setDown] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const menuHandler = () => {
    if (!dropdownMenu) {
      setDropdownMenu(true);
    } else {
      setDropdownMenu(false);
    }
  };
  const dropdownHandler = () => {
    if (!down) {
      setDown(true);
    } else {
      setDown(false);
    }
  };
  return (
    <>
      <div className="h-[6vh] hidden lg:block">
        <div className="grid grid-cols-5 items-center">
          <div className="pl-5 bg-slate-800 py-2">
            <img src="/mark (1).svg" alt="" className="w-[3rem]" />
          </div>
          <div className="justify-start items-center  col-span-3 grid grid-cols-7">
            <Search stroke="gray" className="ml-24" />
            <input
              type="search"
              placeholder="Search..."
              className="col-span-6 outline-none border-none py-2 px-2"
            />
          </div>
          <div className="flex items-center gap-5 ml-5">
            <Bell />
            <div className="h-[1.5rem] w-[0.1rem] bg-slate-500"></div>
            <div className="flex items-center gap-5">
              <img
                src="/tim-cook.jpeg"
                alt=""
                className="w-[2.5rem] h-[2.5rem] rounded-full"
              />
              <div className="">Tim Cook</div>
              <div className="" onClick={dropdownHandler}>
                {down ? <ChevronDown /> : <ChevronUp />}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 w-full h-[0.09rem] bg-slate-300 hidden lg:block"></div>

      {down && (
        <div className="bg-gray-400 rounded-lg py-2 text-white font-semibold w-[160px] ms-auto absolute z-10 right-0 mt-2 select-none cursor-pointer hidden lg:block">
          <div className=" hover:bg-black px-2">Your Profile</div>
          <div className="hover:bg-black px-2">Sign Out</div>
        </div>
      )}

      {
        // NAVBAR FOR PHONE AND TABLET
      }

      <div className="grid grid-cols-3 mt-2 mx-2  lg:hidden select-none">
        <div className="" onClick={menuHandler}>
          {dropdownMenu ? (
            <X className="border-2 border-solid border-black rounded-lg w-[2rem] h-[2rem]" />
          ) : (
            <img src="/mark (1).svg" alt="" className="w-[2.5rem]" />
          )}
        </div>
        <div className="flex items-center gap-5 col-span-2">
          <Bell />
          <div className="h-[1.5rem] w-[0.1rem] bg-slate-500"></div>
          <div className="flex items-center gap-5">
            <img
              src="/tim-cook.jpeg"
              alt=""
              className="w-[2.5rem] h-[2.5rem] rounded-full"
            />
            <div className="text-sm">Tim Cook</div>
            <div className="" onClick={dropdownHandler}>
              {down ? <ChevronDown /> : <ChevronUp />}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 w-[100%] h-[0.15rem] bg-slate-300 block lg:hidden"></div>
      {dropdownMenu && (
        <div className=" bg-gray-700 absolute z-10 w-full text-lg">
          <div className="mx-5 space-y-4 text-lg text-white py-2">
            <Link href="/dashboard">
              <div
                className="font-semibold hover:bg-gray-600 px-2 py-2 rounded-md  select-none"
                onClick={menuHandler}>
                Dashboard
              </div>
            </Link>
            <Link href="/team">
              <div
                className="font-semibold hover:bg-gray-600 px-2 py-2 rounded-md  select-none"
                onClick={menuHandler}>
                Team
              </div>
            </Link>
            <Link href="/projects">
              <div
                className="font-semibold hover:bg-gray-600 px-2 py-2 rounded-md  select-none"
                onClick={menuHandler}>
                Projects
              </div>
            </Link>
            <Link href="/calendar">
              <div
                className="font-semibold hover:bg-gray-600 px-2 py-2 rounded-md  select-none"
                onClick={menuHandler}>
                Calendar
              </div>
            </Link>
            <Link href="/doc">
              <div
                className="font-semibold hover:bg-gray-600 px-2 py-2 rounded-md  select-none"
                onClick={menuHandler}>
                Documents
              </div>
            </Link>
          </div>
        </div>
      )}
      {down && (
        <div className="bg-gray-400 rounded-lg py-2 text-white font-semibold w-[140px] ms-auto absolute z-20 right-0 mt-2 select-none cursor-pointer lg:hidden mx-2">
          <div className=" hover:bg-black px-2">Your Profile</div>
          <div className="hover:bg-black px-2">Sign Out</div>
        </div>
      )}
    </>
  );
};

export default Navbar;
