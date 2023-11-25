import { updateUser } from "@/actions/UsersActions";
import { fetchUser } from "@/lib/data";
import Image from "next/image";

async function page({ params }: { params: { id: string } }) {
  const user = await fetchUser(params.id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
      <div className=" col-span-1 md:col-span-2 lg:col-span-1 h-fit p-4 my-3 mx-auto text-center  bg-secBg w-full flex flex-col gap-3 items-center justify-center">
        <div className="w-full h-[200px] relative ">
          <Image
            src="/assets/IMG-20230618-WA0011.jpg"
            fill={true}
            alt="profile"
          />
        </div>
        <span className="text-sm text-slate-400 font-medium">
          {user.username}
        </span>
      </div>
      <form
        action={updateUser}
        className="col-span-1 md:col-span-2 lg:col-span-3  p-4 my-3 bg-secBg  flex  flex-col gap-2 w-full"
      >
        <input type="hidden" name="id" value={JSON.stringify(user._id)} />
        <label htmlFor="" className="text-[10px] text-slate-400 m-0">
          Username
        </label>
        <input
          name="username"
          type="text"
          className=" bg-mainBg p-2 focus:outline-none border-[2px] border-slate-700 placeholder:text-[10px] placeholder:text-slate-500 placeholder:transition-all placeholder:duration-300 focus:placeholder:px-3 focus:placeholder:text-slate-300"
          placeholder={user.username}
        />
        <label htmlFor="" className="text-[10px] text-slate-400 m-0">
          Email
        </label>
        <input
          name="email"
          type="text"
          className=" bg-mainBg p-2 focus:outline-none border-[2px] border-slate-700 placeholder:text-[10px] placeholder:text-slate-500 placeholder:transition-all placeholder:duration-300 focus:placeholder:px-3 focus:placeholder:text-slate-300"
          placeholder={user.email}
        />
        <label htmlFor="" className="text-[10px] text-slate-400 m-0">
          Password
        </label>
        <input
          name="password"
          type="text"
          className=" bg-mainBg p-2 focus:outline-none border-[2px] border-slate-700 placeholder:text-[10px] placeholder:text-slate-500 placeholder:transition-all placeholder:duration-300 focus:placeholder:px-3 focus:placeholder:text-slate-300"
        />
        <label htmlFor="" className="text-[10px] text-slate-400 m-0">
          Phone
        </label>
        <input
          name="phone"
          type="text"
          className=" bg-mainBg p-2 focus:outline-none border-[2px] border-slate-700 placeholder:text-[10px] placeholder:text-slate-500 placeholder:transition-all placeholder:duration-300 focus:placeholder:px-3 focus:placeholder:text-slate-300"
          placeholder={user.phone}
        />
        <label htmlFor="" className="text-[10px] text-slate-400 m-0">
          Address
        </label>
        <textarea
          name="address"
          placeholder={user.address}
          className="w-full bg-mainBg p-3 focus:outline-none border-[2px] border-slate-700 placeholder:text-[10px] placeholder:text-slate-500 placeholder:transition-all placeholder:duration-300 focus:placeholder:px-3 focus:placeholder:text-slate-300 h-[60px]"
        ></textarea>
        <label htmlFor="" className="text-[10px] text-slate-400 m-0">
          Is Admin
        </label>
        <select
          name="isAdmin"
          className="bg-mainBg p-2 focus:outline-none border-[2px] border-slate-700 text-[10px] text-slate-300 px-3"
        >
          <option value={true as any} selected={user.isAdmin}>
            Yes
          </option>
          <option value={false as any} selected={!user.isAdmin}>
            No
          </option>
        </select>
        <label htmlFor="" className="text-[10px] text-slate-400 m-0">
          Is Active
        </label>
        <select
          name="isActive"
          className="bg-mainBg p-2 focus:outline-none border-[2px] border-slate-700 text-[10px] text-slate-300 px-3"
        >
          {" "}
          <option value={true as any} selected={user.isActive}>
            Yes
          </option>
          <option value={false as any} selected={!user.isActive}>
            No
          </option>
        </select>
        <button
          type="submit"
          className="border-none bg-blue-600 transition hover:bg-blue-800 w-full text-sm font-medium tracking-widest p-3 mt-2"
        >
          Update
        </button>
      </form>
    </div>
  );
}
export default page;
