"use server";

import { connectDb } from "@/lib/db";
import User from "@/models/User";
import { users } from "@/types/type";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData: any) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    const hashedPass = await bcrypt.hash(password, 10);
    await connectDb();
    const newUser = new User({
      username,
      email,
      password: hashedPass,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await newUser.save();
  } catch (err: any) {
    throw new Error(err);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData: any) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectDb();
    await User.findByIdAndDelete(JSON.parse(id));
  } catch (err: any) {
    throw new Error(err);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData: any) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    await connectDb();
    const updateFields: any = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(JSON.parse(id), updateFields);
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
