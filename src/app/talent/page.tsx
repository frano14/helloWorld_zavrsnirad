import getSession from "@/lib/getSession";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Talent",
};

export default async function Page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/talent");
  }

  if (!user.talent) {
    redirect("/job");
  }

  return (
    <main className="mx-auto my-20">
      <p className="text-center">Talent Dashboard</p>
    </main>
  );
}
