import { MdSettings } from "react-icons/md";

function News() {
  return (
    <div className="flex flex-col gap-3 h-fit rounded-lg bg-secBg p-3 mb-2">
      <span className="text-[13px] font-bold">🔥 Available Now</span>
      <h3 className="text-[13px] font-bold ">
        How to use the new version of the admin dashboard?
      </h3>
      <span className="text-[10px] text-gray-300">
        Takes 4 minutes to learn
      </span>
      <p className="text-[10px] text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia neque
        rem veritatis doloribus nostrum. Explicabo, ab officia perspiciatis
        exercitationem
      </p>
      <button className=" bg-sky-700 rounded-lg flex items-center gap-[6px] p-2 w-fit transition-all duration-300 hover:bg-sky-500 group ">
        <MdSettings
          className=" transition-all duration-300  group-hover:rotate-[360deg] group-hover:scale-[1.3]"
          size={12}
        />
        <p className="text-[11px] tracking-wider font-medium">Watch</p>
      </button>
    </div>
  );
}
export default News;
