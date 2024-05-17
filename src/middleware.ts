/* import { authMiddleware } from "@clerk/nextjs";
 */
import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({});

export const config = {
  matcher: ["/(admin)(.*)"],
};
