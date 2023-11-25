import { authConfig } from "./src/app/auth.config";
import NextAuth from "next-auth";

export default NextAuth(authConfig as any).auth;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
