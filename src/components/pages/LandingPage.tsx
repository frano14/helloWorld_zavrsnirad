import getSession from "@/lib/getSession";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import Hero from "../landingpage/Hero";
import ByCategory from "../landingpage/ByCategory";
import ForClients from "../landingpage/ForClients";
import ForTalents from "../landingpage/ForTalents";
import WhyHelloworld from "../landingpage/WhyHelloworld";

export const metadata: Metadata = {
  title: "Talent",
};

export default async function LandingPage() {
  const session = await getSession();
  const user = session?.user;

  if (user) {
    if (user.isTalent) {
      redirect("/talent");
    } else {
      redirect("/job");
    }
  }

  return (
    <>
      <div className="m-auto mt-16 w-full px-0 py-16 xs:px-6 sc:max-w-[1200px] sc:px-0">
        <Hero />
      </div>
      <ByCategory />
      <div className="m-auto w-full px-0 py-16 xs:px-6 sc:max-w-[1200px] sc:px-0">
        <WhyHelloworld />
        <ForClients />
      </div>
      <div className="m-auto mt-0 w-full px-0 xs:px-6 sc:max-w-[1200px] sc:px-0">
        <ForTalents />
      </div>
    </>
  );
}
