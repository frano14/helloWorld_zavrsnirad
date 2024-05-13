import getSession from "@/lib/getSession";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Talent",
};

export default async function LandingPage() {
  const session = await getSession();
  const user = session?.user;

  if (user) {
    if (user.talent) {
      redirect("/talent");
    } else {
      redirect("/job");
    }
  }

  return (
    <>
      <h1>ovo je neki landing page</h1>
    </>
  );
}
