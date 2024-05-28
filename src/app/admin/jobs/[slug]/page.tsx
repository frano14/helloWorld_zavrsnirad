import JobPage from "@/components/pages/JobPage";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import AdminSidebar from "./AdminSidebar";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params: { slug } }: PageProps) {
  const job = await prisma.job.findUnique({
    where: { slug },
  });

  if (!job) notFound();

  return (
    <main className="m-auto mt-[128px] w-full px-0 xs:px-6 sc:max-w-[1200px] sc:px-0">
      <JobPage job={job} />
      <AdminSidebar job={job} />
    </main>
  );
}
