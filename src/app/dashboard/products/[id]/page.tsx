import { updateProduct } from "@/actions/ProductsActions";
import { fetchProduct } from "@/lib/data";
import { connectDb } from "@/lib/db";
import Image from "next/image";

async function page({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div className=" col-span-1 h-fit p-4 my-3  bg-secBg w-full flex flex-col gap-3 items-center justify-center">
        <div className="w-full h-[200px] relative ">
          <Image
            src={product.img ? product.img : "/assets/IMG-20230618-WA0011.jpg"}
            fill={true}
            alt="profile"
          />
        </div>
        <span className="text-sm text-slate-400 font-medium">
          {product.title}
        </span>
      </div>
      <form
        action={updateProduct}
        className="col-span-1 lg:col-span-3 p-4 my-3 bg-secBg  flex  flex-col gap-2 w-full"
      >
        <input type="hidden" name="id" value={JSON.stringify(product._id)} />
        <label htmlFor="" className="text-[10px] text-slate-400 m-0">
          Title
        </label>
        <input
          name="title"
          type="text"
          className=" bg-mainBg p-2 focus:outline-none border-[2px] border-slate-700 placeholder:text-[10px] placeholder:text-slate-500 placeholder:transition-all placeholder:duration-300 focus:placeholder:px-3 focus:placeholder:text-slate-300"
          placeholder={product.title}
        />
        <label htmlFor="" className="text-[10px] text-slate-400 m-0">
          Price
        </label>
        <input
          name="price"
          type="number"
          className=" bg-mainBg p-2 focus:outline-none border-[2px] border-slate-700 placeholder:text-[10px] placeholder:text-slate-500 placeholder:transition-all placeholder:duration-300 focus:placeholder:px-3 focus:placeholder:text-slate-300"
          placeholder={product.price + "$"}
        />
        <label htmlFor="" className="text-[10px] text-slate-400 m-0">
          stock
        </label>
        <input
          name="stock"
          placeholder={product.stock}
          type="number"
          className=" bg-mainBg p-2 focus:outline-none border-[2px] border-slate-700 placeholder:text-[10px] placeholder:text-slate-500 placeholder:transition-all placeholder:duration-300 focus:placeholder:px-3 focus:placeholder:text-slate-300"
        />
        <label htmlFor="" className="text-[10px] text-slate-400 m-0">
          Color
        </label>
        <input
          name="color"
          type="text"
          className=" bg-mainBg p-2 focus:outline-none border-[2px] border-slate-700 placeholder:text-[10px] placeholder:text-slate-500 placeholder:transition-all placeholder:duration-300 focus:placeholder:px-3 focus:placeholder:text-slate-300"
          placeholder={product.color}
        />
        <label htmlFor="" className="text-[10px] text-slate-400 m-0">
          Size
        </label>
        <input
          name="size"
          type="text"
          className=" bg-mainBg p-2 focus:outline-none border-[2px] border-slate-700 placeholder:text-[10px] placeholder:text-slate-500 placeholder:transition-all placeholder:duration-300 focus:placeholder:px-3 focus:placeholder:text-slate-300"
          placeholder={product.size}
        />

        <label htmlFor="" className="text-[10px] text-slate-400 m-0">
          Category
        </label>
        <select
          name="category"
          className="bg-mainBg p-3 focus:outline-none border-[2px] border-slate-700 text-xs text-slate-300  px-3"
        >
          <option selected={product.category === "kitchen"} value="kitchen">
            Kitchen
          </option>
          <option selected={product.category === "phone"} value="phone">
            Phone
          </option>
          <option selected={product.category === "computer"} value="computer">
            Computer
          </option>
        </select>
        <label htmlFor="" className="text-[10px] text-slate-400 m-0">
          Description
        </label>
        <textarea
          name="desc"
          placeholder={product.desc}
          className="w-full bg-mainBg p-3 focus:outline-none border-[2px] border-slate-700 placeholder:text-[10px] placeholder:text-slate-500 placeholder:transition-all placeholder:duration-300 focus:placeholder:px-3 focus:placeholder:text-slate-300 h-[80px]"
        ></textarea>
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
