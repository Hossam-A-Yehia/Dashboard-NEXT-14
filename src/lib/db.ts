import mongoose from "mongoose";

export const connectDb = async () => {
  const connection: any = {};
  try {
    if (connection.isConnection) return;
    const db = await mongoose.connect(process.env.MONGO_SECRET as string);
    connection.isConnection = db.connections[0].readyState;
    console.log("SUCCESS CONNTECT");
  } catch (err) {
    console.log("Faild Connect Datebase");
  }
};
