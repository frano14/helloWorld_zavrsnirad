import JobPage from "@/components/pages/JobPage";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import JobApplicationForm from "./JobApplicationForm";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params: { slug } }: PageProps) {
  const job = await prisma.job.findUnique({
    where: { slug },
  });
  if (!job) notFound();
  const jobId = job.id;

  return (
    <main className="m-auto mt-[128px] flex w-full flex-col items-start px-0 xs:px-6 sc:max-w-[1200px] sc:px-0">
      <h1 className="customFont text-[24px] xs:text-[26px]  md:text-[28px]">
        Please fill out your application for {job.title}
      </h1>
      <JobApplicationForm jobId={jobId} />
    </main>
  );
}
