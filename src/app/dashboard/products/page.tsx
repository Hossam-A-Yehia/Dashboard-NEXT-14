import { deleteProduct } from "@/actions/ProductsActions";
import Footer from "@/app/util/Footer";
import Search from "@/components/dashboard/Search";
import { fetchProducts } from "@/lib/data";
import { ProductsType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { MdSearch } from "react-icons/md";

async function page({
  searchParams,
}: {
  searchParams: { q: string; page: any };
}) {
  const q = searchParams.q || "";
  const page = searchParams.q || 1;

  const { products, count }: any = await fetchProducts(q, page);

  return (
    <>
      <div className="p-4 my-3 w-full bg-secBg">
        <div className="flex gap-3 items-center flex-col md:flex-row mt-2 md:m-0 justify-between">
          <Search placeholder="Search for a product" />
          <Link
            href="/dashboard/products/add"
            className=" bg-sky-700 rounded-lg flex items-center gap-[6px] p-2 w-fit transition-all duration-300 hover:bg-sky-500 group "
          >
            <p className="text-[11px] tracking-wider font-medium">Add new</p>
          </Link>
        </div>
        <table className="w-full text-left mt-3 overflow-x-scroll  ">
          <thead className="md:table-header-group hidden">
            <tr>
              <th className="text-sm font-semibold text-slate-200 ">Title</th>
              <th className="text-sm font-semibold text-slate-200  md:hidden lg:table-cell ">
                Description
              </th>
              <th className="text-sm font-semibold text-slate-200 ">Price</th>
              <th className="text-sm font-semibold text-slate-200">
                Created at
              </th>
              <th className="text-sm font-semibold text-slate-200">Stock</th>
              <th className="text-sm font-semibold text-slate-200">Action</th>
            </tr>
          </thead>
          <tbody className="my-2">
            {products?.map((item: ProductsType) => (
              <tr
                key={item._id}
                className="text-xs flex flex-col items-center justify-center border-[1px] border-sky-700 rounded md:table-row md:border-none mb-3 "
              >
                <td className="flex items-center gap-2 my-3">
                  <div className="w-[30px] h-[30px] relative">
                    <Image
                      src="/assets/IMG-20230618-WA0011.jpg"
                      alt="avatar"
                      className="rounded-full"
                      fill={true}
                    />
                  </div>
                  <span>{item.title}</span>
                </td>
                <td className="sm:table-cell md:hidden lg:table-cell text-center md:text-left">
                  {item.desc}
                </td>
                <td className="my-2">${item.price}</td>
                <td className="my-2">
                  {item.createdAt.toString().slice(4, 15)}
                </td>
                <td className="my-2">{item.stock}</td>
                <td className="my-4 flex items-center gap-2">
                  <Link
                    href={`/dashboard/products/${item._id}`}
                    className="text-[11px] tracking-wider font-medium p-[6px] bg-lime-800 hover:bg-lime-600 transition-all duration-300 rounded "
                  >
                    View
                  </Link>
                  <form action={deleteProduct}>
                    <input
                      type="hidden"
                      name="id"
                      value={JSON.stringify(item._id)}
                    />
                    <button
                      type="submit"
                      className="text-[11px] tracking-wider font-medium p-[6px] bg-rose-700 hover:bg-rose-500 transition-all duration-300 rounded"
                    >
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}
export default page;
