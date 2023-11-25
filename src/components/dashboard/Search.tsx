"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdSearch } from "react-icons/md";

export default function Search({ placeholder }: { placeholder: string }) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      params.set("q", e.target.value);
      params.set("page", "1");
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  };
  return (
    <div className="flex gap-3 items-center flex-col md:flex-row mt-2 md:m-0 justify-between">
      <div className=" flex items-center gap-1 bg-slate-700 rounded-md px-3 py-[6px] w-[200px] ">
        <MdSearch className="mr-2" />
        <input
          type="text"
          placeholder={placeholder}
          className="border-none focus:outline-none bg-transparent w-[150px] text-xs "
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}
