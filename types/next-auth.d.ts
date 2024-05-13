import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: User & DefaultSession["user"];
  }

  interface User {
    role: String | null;
  }

  interface User {
    talent: Boolean | null;
  }
}
