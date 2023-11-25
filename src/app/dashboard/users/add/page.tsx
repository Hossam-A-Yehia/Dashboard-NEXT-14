import { addUser } from "@/actions/UsersActions";
import Footer from "@/app/util/Footer";

function page() {
  return (
    <>
      <div className="p-4 my-3 w-full bg-secBg">
        <form action={addUser} className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-20">
            <div className="flex  flex-col gap-6 w-full">
              <input
                name="username"
                type="text"
                className=" bg-mainBg p-3 focus:outline-none border-[2px] border-slate-700 placeholder:text-xs placeholder:text-slate-500 placeholder:transition-all placeholder:duration-300 focus:placeholder:px-3 focus:placeholder:text-slate-300"
                placeholder="username"
              />
              <input
                name="password"
                type="password"
                className=" bg-mainBg p-3 focus:outline-none border-[2px] border-slate-700 placeholder:text-xs placeholder:text-slate-500 placeholder:transition-all placeholder:duration-300 focus:placeholder:px-3 focus:placeholder:text-slate-300"
                placeholder="password"
              />
              <select
                name="isAdmin"
                className="bg-mainBg p-3 focus:outline-none border-[2px] border-slate-700 text-xs text-slate-300 px-3"
              >
                <option className=" hover:bg-red-500" disabled selected>
                  Is Admin
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="flex  flex-col gap-6 w-full">
              <input
                name="email"
                type="text"
                className=" bg-mainBg p-3 focus:outline-none border-[2px] border-slate-700 placeholder:text-xs placeholder:text-slate-500 placeholder:transition-all placeholder:duration-300 focus:placeholder:px-3 focus:placeholder:text-slate-300"
                placeholder="email"
              />
              <input
                name="phone"
                type="text"
                className=" bg-mainBg p-3 focus:outline-none border-[2px] border-slate-700 placeholder:text-xs placeholder:text-slate-500 placeholder:transition-all placeholder:duration-300 focus:placeholder:px-3 focus:placeholder:text-slate-300"
                placeholder="phone"
              />
              <select
                name="isActive"
                className="bg-mainBg p-3 focus:outline-none border-[2px] border-slate-700 text-xs text-slate-300  px-3"
              >
                <option className=" hover:bg-red-500" disabled selected>
                  Is Active
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <textarea
            name="address"
            placeholder="address"
            className="w-full bg-mainBg p-3 focus:outline-none border-[2px] border-slate-700 placeholder:text-xs placeholder:text-slate-500 placeholder:transition-all placeholder:duration-300 focus:placeholder:px-3 focus:placeholder:text-slate-300 h-[150px]"
          ></textarea>
          <button
            type="submit"
            className="border-none bg-blue-600 transition hover:bg-blue-800 w-full text-sm font-medium tracking-widest p-3"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
export default page;
