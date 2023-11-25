"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

function Pagination({ count }: { count: number }) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);
  const ITEM_PAGE = 5;

  const page: any = searchParams.get("page") || 1;
  const hasPrev = ITEM_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PAGE * (parseInt(page) - 1) + ITEM_PAGE < count;

  const handlePagination = (type: string) => {
    type === "prev"
      ? params.set("page", (parseInt(page) - 1) as any)
      : params.set("page", (parseInt(page) + 1) as any);
    replace(`${pathname}?${params}`);
  };
  return (
    <div className="flex justify-between items-center m-5">
      <button
        onClick={() => handlePagination("prev")}
        disabled={!hasPrev}
        className=" group  text-xs bg-slate-700 cursor-pointer py-2 px-6 tracking-wider rounded-lg transition-all duration-300 hover:bg-slate-900 flex items-center gap-2 disabled:bg-slate-400 disabled:cursor-not-allowed"
      >
        <MdArrowBack className="transition-all duration-300 group-hover:-translate-x-2" />
        Prev
      </button>
      <button
        onClick={() => handlePagination("next")}
        disabled={!hasNext}
        className=" group  text-xs bg-slate-700 cursor-pointer py-2 px-6 tracking-wider rounded-lg transition-all duration-300 hover:bg-slate-900 flex items-center gap-2 disabled:bg-slate-400 disabled:cursor-not-allowed "
      >
        Next
        <MdArrowForward className="transition-all duration-300 group-hover:translate-x-2" />
      </button>
    </div>
  );
}
export default Pagination;
