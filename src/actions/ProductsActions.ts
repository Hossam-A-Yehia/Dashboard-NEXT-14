"use server";

import { connectDb } from "@/lib/db";
import Product from "@/models/Product";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addProduct = async (formData: any) => {
  const { title, desc, price, stock, img, color, size, category } =
    Object.fromEntries(formData);
  try {
    await connectDb();
    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      img,
      color,
      size,
      category,
    });
    await newProduct.save();
  } catch (err: any) {
    throw new Error(err);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData: any) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectDb();
    await Product.findByIdAndDelete(JSON.parse(id));
  } catch (err) {
    throw new Error("Failed To Delete Product !");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData: any) => {
  const { id, title, desc, price, stock, img, color, size, category } =
    Object.fromEntries(formData);

  try {
    await connectDb();
    const updateFields: any = {
      title,
      desc,
      price,
      stock,
      img,
      color,
      size,
      category,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(JSON.parse(id), updateFields);
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
