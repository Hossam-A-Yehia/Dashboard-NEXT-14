import Card from "@/components/dashboard/Card";
import Chart from "@/components/dashboard/Chart";
import Transaction from "@/components/dashboard/Transaction";
import News from "@/components/dashboard/rightBar/News";
import { MdSupervisedUserCircle } from "react-icons/md";

function page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 my-3">
      <div className="col-span-3  ">
        <div className="flex flex-col md:flex-row gap-2 w-full justify-between ">
          <Card
            icon={<MdSupervisedUserCircle />}
            title="Total Users"
            price={10.239}
            ratio={12}
          />
          <Card
            icon={<MdSupervisedUserCircle />}
            title="Stock"
            price={8.236}
            ratio={12}
          />
          <Card
            icon={<MdSupervisedUserCircle />}
            title="Revenue"
            price={6.642}
            ratio={8}
          />
        </div>
        <Transaction />
        <Chart />
      </div>
      <div className=" col-span-1 md:ml-2  ">
        <News />
        <News />
      </div>
    </div>
  );
}
export default page;
