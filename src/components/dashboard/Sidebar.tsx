import Image from "next/image";
import { menuItems } from "./MenuItems";
import { link } from "fs";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="flex flex-col">
      {/* USER INFO */}
      <div className="flex gap-2 mb-4">
        <div className="w-[40px] h-[40px] relative">
          <Image
            src="/assets/IMG-20230618-WA0011.jpg"
            alt="avatar"
            className="rounded-full"
            fill={true}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm">admin</span>
          <span className="text-gray-500 text-xs">Administrator</span>
        </div>
      </div>
      {/* MENUI ITEMS */}
      <ul>
        {menuItems.map((cat) => (
          <li className="flex flex-col my-2" key={cat.title}>
            <span className="text-xs mb-2 font-semibold">{cat.title}</span>
            {cat.list.map((item) => (
              <Link
                key={item.title}
                className="ml-2 p-3 flex gap-2 items-center text-sm transition-all duration-300 hover:bg-slate-700 "
                href={item.path}
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Sidebar;
