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

  interface User {
    isProfileSeted: Boolean | null;
  }

  interface User {
    username: String | null;
  }

  interface User {
    worklocation: String | null;
  }

  interface User {
    experience: String | null;
  }

  interface User {
    country: String | null;
  }

  interface User {
    worktime: String | null;
  }

  interface User {
    isTalent: String | null;
  }
}
