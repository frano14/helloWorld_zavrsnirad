import LandingPage from "@/components/pages/LandingPage";
import prisma from "@/lib/prisma";

export default async function Home() {
  return <LandingPage />;
}
