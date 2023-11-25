import Image from "next/image";

function Transaction() {
  const title1 = "pending";
  const title2 = "done";
  const title3 = "cancelled";

  return (
    <div className="p-4 bg-secBg my-3">
      <h2 className="text-gray-400 mb-3">Latest Transaction</h2>
      <table className="w-full text-left ">
        <thead>
          <tr>
            <th className="text-xs font-semibold text-slate-200 ">Name</th>
            <th className="text-xs font-semibold text-slate-200 ">Status</th>
            <th className="text-xs font-semibold text-slate-200 ">Date</th>
            <th className="text-xs font-semibold text-slate-200">Amount</th>
          </tr>
        </thead>
        <tbody className="my-2">
          <tr className="text-xs border-b-[1px] border-b-gray-600 ">
            <td className="flex items-center gap-2 my-2">
              <div className="w-[30px] h-[30px] relative">
                <Image
                  src="/assets/IMG-20230618-WA0011.jpg"
                  alt="avatar"
                  className="rounded-full"
                  fill={true}
                />
              </div>
              <span>Hossam Yehia</span>
            </td>
            <td className="">
              <span className={`my-2 p-1 rounded-lg ${title1}`}>{title1}</span>
            </td>
            <td className="my-2">14.01.2024</td>
            <td className="my-2">$ 3.200</td>
          </tr>
          <tr className="text-xs border-b-[1px] border-b-gray-600 ">
            <td className="flex items-center gap-2 my-2">
              <div className="w-[30px] h-[30px] relative">
                <Image
                  src="/assets/IMG-20230618-WA0011.jpg"
                  alt="avatar"
                  className="rounded-full"
                  fill={true}
                />
              </div>
              <span>Hossam Yehia</span>
            </td>
            <td className="">
              <span className={`my-2 p-1 rounded-lg ${title2}`}>{title2}</span>
            </td>
            <td className="my-2">14.01.2024</td>
            <td className="my-2">$ 3.200</td>
          </tr>
          <tr className="text-xs border-b-[1px] border-b-gray-600 ">
            <td className="flex items-center gap-2 my-2">
              <div className="w-[30px] h-[30px] relative">
                <Image
                  src="/assets/IMG-20230618-WA0011.jpg"
                  alt="avatar"
                  className="rounded-full"
                  fill={true}
                />
              </div>
              <span>Hossam Yehia</span>
            </td>
            <td className="">
              <span className={`my-2 p-1 rounded-lg ${title3}`}>{title3}</span>
            </td>
            <td className="my-2">14.01.2024</td>
            <td className="my-2">$ 3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Transaction;
