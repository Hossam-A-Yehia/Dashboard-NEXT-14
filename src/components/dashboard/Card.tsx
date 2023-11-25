import { MdSupervisedUserCircle } from "react-icons/md";

type CardType = {
  title: string;
  price: number;
  ratio: number;
  icon: any;
};

function Card({ title, price, ratio, icon }: CardType) {
  return (
    <div className="bg-secBg p-4 rounded-lg  w-full md:w-1/3 flex gap-3  ">
      {icon}
      <div className="flex flex-col gap-3 ">
        <span className="text-[11px]  ">{title}</span>
        <span className="font-semibold tracking-wider">{price}</span>
        <p className="text-[10px]">
          <span className={`${ratio > 10 ? "text-red-500" : "text-green-500"}`}>
            {ratio}%
          </span>{" "}
          more than previous week
        </p>
      </div>
    </div>
  );
}
export default Card;
