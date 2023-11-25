"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    id: 1,
    name: "Sun",
    visit: 100,
    click: 90,
  },
  {
    id: 2,
    name: "Mon",
    visit: 200,
    click: 150,
  },
  {
    id: 3,
    name: "Tue",
    visit: 190,
    click: 180,
  },
  {
    id: 4,
    name: "Wed",
    visit: 340,
    click: 230,
  },
  {
    id: 5,
    name: "Thu",
    visit: 400,
    click: 250,
  },
  {
    id: 6,
    name: "Fri",
    visit: 550,
    click: 280,
  },
  {
    id: 7,
    name: "Sat",
    visit: 200,
    click: 400,
  },
];
//  default function Chart() {
//   return (
//     <div className="p-4 bg-secBg my-3 w-full">
//       <h1 className="text-gray-400 mb-3">Weekly Recap</h1>
//       <ResponsiveContainer height="100%" width="100%">
//         <LineChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis domain={[0, 5]} tickCount={6} />
//           <Tooltip />
//           <Legend />
//           <Line
//             type="monotone"
//             dataKey="visit"
//             stroke="#8884d8"
//             activeDot={{ r: 8 }}
//           />
//           <Line type="monotone" dataKey="click" stroke="#82ca9d" />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

export default function Chart() {
  return (
    <div className="p-4 bg-secBg my-3 w-full">
      <h1 className="text-gray-400 mb-3">Weekly Recap</h1>
      {/* <ResponsiveContainer width="100%" height="90%"> */}
      <LineChart
        width={500}
        height={300}
        className="char"
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
        <Legend />
        <Line
          type="monotone"
          dataKey="visit"
          stroke="#8884d8"
          strokeDasharray="5 5"
        />
        <Line
          type="monotone"
          dataKey="click"
          stroke="#82ca9d"
          strokeDasharray="3 4 5 2"
        />
      </LineChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
}
