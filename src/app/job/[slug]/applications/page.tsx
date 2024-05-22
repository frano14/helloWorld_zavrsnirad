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
    <main className="m-auto mt-[128px] px-0 xs:px-6 sc:max-w-[1200px] sc:px-0">
      <h1 className="customFont mb-8 text-[24px] xs:text-[28px] md:text-[32px]">
        Applications for your job: {job.title}
      </h1>
      {applications.map((application) => (
        <div
          key={application.id}
          className="lightBorder mb-4 flex items-start justify-between gap-24 rounded-lg bg-white p-4"
        >
          <div>
            <p className="text-[22px] font-semibold">{job.title}</p>
            <p className="text-[16px]">{application.message}</p>
          </div>
          <ApplicationForm applicationId={application.id} />
        </div>
      ))}
    </main>
  );
}
