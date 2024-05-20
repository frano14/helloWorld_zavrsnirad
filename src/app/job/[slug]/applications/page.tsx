import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import ApplicationForm from "./ApplicationForm";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params: { slug } }: PageProps) {
  const job = await prisma.job.findUnique({
    where: { slug },
  });

  if (!job) notFound();

  const applications = await prisma.application.findMany({
    where: {
      jobId: job.id,
    },
  });

  return (
    <main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      {applications.map((application) => (
        <div key={application.id} className="bg-light p-4">
          <p>{application.message}</p>
          <ApplicationForm applicationId={application.id} />
        </div>
      ))}
    </main>
  );
}
