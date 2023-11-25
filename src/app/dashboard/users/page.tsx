import { deleteUser } from "@/actions/UsersActions";
import Footer from "@/app/util/Footer";
import Pagination from "@/components/dashboard/Pagination";
import Search from "@/components/dashboard/Search";
import { fetchUsers } from "@/lib/data";
import { users } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { MdSearch } from "react-icons/md";

async function page({
  searchParams,
}: {
  searchParams: { q: string; page: number };
}) {
  const q = searchParams.q || "";
  const page = searchParams.page || 1;
  const { users, count }: any = await fetchUsers(q, page);

  return (
    <>
      <div className="p-4 my-3 w-full bg-secBg">
        <div className="flex gap-3 items-center flex-col md:flex-row mt-2 md:m-0 justify-between">
          <Search placeholder="Search for a user" />
          <Link
            href="/dashboard/users/add"
            className=" bg-sky-700 rounded-lg flex items-center gap-[6px] p-2 w-fit transition-all duration-300 hover:bg-sky-500 group "
          >
            <p className="text-[11px] tracking-wider font-medium">Add new</p>
          </Link>
        </div>
        <table className="w-full text-left mt-3 ">
          <thead className="md:table-header-group hidden">
            <tr>
              <th className="text-sm font-semibold text-slate-200 ">Name</th>
              <th className="text-sm font-semibold text-slate-200 ">Email</th>
              <th className="text-sm font-semibold text-slate-200 ">
                Created at
              </th>
              <th className="text-sm font-semibold text-slate-200">Role</th>
              <th className="text-sm font-semibold text-slate-200">Action</th>
            </tr>
          </thead>
          <tbody className="my-2">
            {users?.map((user: users) => (
              <tr
                key={user._id}
                className="text-xs flex flex-col items-center justify-center border-[1px] border-sky-700 rounded md:table-row md:border-none mb-3 "
              >
                <td className="flex items-center gap-2 my-2">
                  <div className="w-[30px] h-[30px] relative">
                    <Image
                      src={
                        user.img ? user.img : "/assets/IMG-20230618-WA0011.jpg"
                      }
                      alt="avatar"
                      className="rounded-full"
                      fill={true}
                    />
                  </div>
                  <span>{user.username}</span>
                </td>
                <td className="">{user.email}</td>
                <td className="my-2">Oct 30 2023</td>
                <td className="my-2">{user.isAdmin ? "Admin" : "Client"}</td>
                <td className="my-2">{user.isActive ? "Active" : "Passive"}</td>
                <td className="my-2 flex items-center gap-2">
                  <Link
                    href={`/dashboard/users/${user._id}`}
                    className="text-[11px] tracking-wider font-medium p-[6px] bg-lime-800 hover:bg-lime-600 transition-all duration-300 rounded "
                  >
                    View
                  </Link>
                  <form action={deleteUser}>
                    <input
                      type="hidden"
                      name="id"
                      value={JSON.stringify(user._id)}
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
        <Pagination count={count} />
      </div>
      <Footer />
    </>
  );
}
export default page;
