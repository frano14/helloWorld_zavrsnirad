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
    <main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      <JobPage job={job} />
      <JobApplicationForm jobId={jobId} />
    </main>
  );
}
