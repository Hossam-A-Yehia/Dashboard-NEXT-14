import { addProduct } from "@/actions/ProductsActions";
import Footer from "@/app/util/Footer";

function page() {
  return (
    <>
      <div className="p-4 my-3 w-full bg-secBg">
        <form action={addProduct} className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-20">
            <div className="flex  flex-col gap-6 w-full">
              <input
                type="text"
                name="title"
                className=" bg-mainBg p-3 focus:outline-none border-[2px] border-slate-700 placeholder:text-xs placeholder:text-slate-500 placeholder:transition-all placeholder:duration-300 focus:placeholder:px-3 focus:placeholder:text-slate-300"
                placeholder="title"
              />

              <input
                name="price"
                type="number"
                className=" bg-mainBg p-3 focus:outline-none border-[2px] border-slate-700 placeholder:text-xs placeholder:text-slate-500 placeholder:transition-all placeholder:duration-300 focus:placeholder:px-3 focus:placeholder:text-slate-300"
                placeholder="price"
              />
              <input
                name="color"
                type="text"
                className=" bg-mainBg p-3 focus:outline-none border-[2px] border-slate-700 placeholder:text-xs placeholder:text-slate-500 placeholder:transition-all placeholder:duration-300 focus:placeholder:px-3 focus:placeholder:text-slate-300"
                placeholder="color"
              />
            </div>
            <div className="flex  flex-col gap-6 w-full">
              <select
                name="category"
                className="bg-mainBg p-3 focus:outline-none border-[2px] border-slate-700 text-xs text-slate-300  px-3"
              >
                <option className=" hover:bg-red-500" disabled selected>
                  Choose a Category
                </option>
                <option value="kitchen">Kitchen</option>
                <option value="phone">Phone</option>
                <option value="computer">Computer</option>
              </select>
              <input
                name="stock"
                type="number"
                className=" bg-mainBg p-3 focus:outline-none border-[2px] border-slate-700 placeholder:text-xs placeholder:text-slate-500 placeholder:transition-all placeholder:duration-300 focus:placeholder:px-3 focus:placeholder:text-slate-300"
                placeholder="stock"
              />
              <input
                type="text"
                name="size"
                className=" bg-mainBg p-3 focus:outline-none border-[2px] border-slate-700 placeholder:text-xs placeholder:text-slate-500 placeholder:transition-all placeholder:duration-300 focus:placeholder:px-3 focus:placeholder:text-slate-300"
                placeholder="size"
              />
            </div>
          </div>
          <textarea
            name="desc"
            placeholder="Description"
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
