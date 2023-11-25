import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDb } from "@/lib/db";
import bcrypt from "bcrypt";
import User from "@/models/User";
import { authConfig } from "./auth.config";

const login = async (credentials: any) => {
  try {
    await connectDb();
    const user = await User.findOne({ username: credentials.username });
    if (!user) throw new Error("User not found");
    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPasswordCorrect) throw new Error("Password not correct");
    return user;
  } catch (err: any) {
    console.log(err);
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials): Promise<any> {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
});
