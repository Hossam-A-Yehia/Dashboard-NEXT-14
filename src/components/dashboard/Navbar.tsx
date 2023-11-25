"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

function Navbar() {
  return (
    <div className="flex flex-col md:flex-row bg-secBg justify-between items-center p-4 rounded-lg">
      <Link href="/dashboard">Dashboard</Link>
      <div className="flex gap-3 items-center flex-col md:flex-row mt-2 md:m-0">
        <div className=" flex items-center gap-1 bg-slate-700 rounded-md px-3 py-[6px] w-[200px] ">
          <MdSearch className="mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="border-none focus:outline-none bg-transparent w-[150px] text-xs "
          />
        </div>
        <div className="flex gap-6 md-gap-1">
          <MdOutlineChat className="cursor-pointer" size={20} />
          <MdNotifications className="cursor-pointer" size={20} />
          <MdPublic className="cursor-pointer" size={20} />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
