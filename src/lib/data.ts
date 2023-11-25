import User from "@/models/User";
import { connectDb } from "./db";
import Product from "@/models/Product";

export const fetchUsers = async (q: string, page: any) => {
  const reqex = new RegExp(q, "i");
  const ITEM__PAGE = 5;

  try {
    await connectDb();
    const count = await User.find().count();
    const users = await User.find({ username: { $regex: reqex } })
      .limit(ITEM__PAGE)
      .skip(ITEM__PAGE * (page - 1));
    return { users, count };
  } catch (err) {
    console.log(err);
  }
};
export const fetchUser = async (id: string) => {
  try {
    await connectDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
  }
};

export const fetchProducts = async (q: string, page: any) => {
  const reqex = new RegExp(q, "i");
  const ITEM__PAGE = 5;

  try {
    await connectDb();

    const count = await Product.find().count();

    const products = await Product.find({ title: { $regex: reqex } })
      .limit(ITEM__PAGE)
      .skip(ITEM__PAGE * (page - 1));
    return { products, count };
  } catch (error) {
    console.log(error);
  }
};

export const fetchProduct = async (id: string) => {
  try {
    await connectDb();

    const product = await Product.findById(id);

    return product;
  } catch (error) {
    console.log(error);
  }
};
