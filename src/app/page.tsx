import LandingPage from "@/components/pages/LandingPage";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <main className="flex flex-col items-center gap-6 px-3 py-10">
      <LandingPage />
    </main>
  );
}
