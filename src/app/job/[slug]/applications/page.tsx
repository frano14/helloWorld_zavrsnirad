import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import ApplicationForm from "./ApplicationForm";
import Image from "next/image";
import arrow from "../../../../assets/images/arrowDown512.png";
import AllApplications from "./AllApplications";

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

  const unApplications = applications.filter(
    (apl) => apl.status === "unspecified",
  );
  const approvedApplications = applications.filter(
    (apl) => apl.status === "approved",
  );
  const rejectedApplications = applications.filter(
    (apl) => apl.status === "rejected",
  );

  return (
    <main className="m-auto mt-[128px] px-0 xs:px-6 sc:max-w-[1200px] sc:px-0">
      <h1 className="customFont mb-2 text-[24px] xs:text-[28px] md:text-[32px]">
        Applications for your job: {job.title}
      </h1>
      <h2 className="mb-8 text-[18px] text-dark">
        You have {unApplications.length} undecided applications
      </h2>
      {unApplications.length === 0 ? (
        <p className="my-8 text-center text-[20px]">
          Your currently do not have undecided applications...
        </p>
      ) : (
        unApplications.map((application) => (
          <div
            key={application.id}
            className="lightBorder mb-4 flex items-start justify-between gap-24 rounded-lg bg-white p-4"
          >
            <div>
              <p className="mb-4 text-[22px] font-semibold">{job.title}</p>
              <p className="text-[16px]">{application.message}</p>
            </div>
            <ApplicationForm applicationId={application.id} />
          </div>
        ))
      )}
      <AllApplications
        approvedApplications={approvedApplications}
        rejectedApplications={rejectedApplications}
        job={job}
      />

      {/* <h1 className="customFont mb-2 text-[18px] xs:text-[20px] md:text-[22px]">
        <div className="mb-8 flex items-center justify-start gap-1">
          <p>Show all applications </p>
          <Image src={arrow} alt="arrow" width={24} height={24} />
        </div>
      </h1>
      {
        <div>
          <p className="mb-2 text-[20px] text-lime-600">
            Approved applications
          </p>
          {approvedApplications.map((application) => (
            <div
              key={application.id}
              className="greenBorder mb-4 flex items-start justify-between gap-24 rounded-lg bg-lime-50 p-4"
            >
              <div>
                <p className="mb-4 text-[22px] font-semibold">{job.title}</p>
                <p className="text-[16px]">{application.message}</p>
              </div>
              <div className="bg-lime-600 px-4 py-1 text-white">Approved</div>
            </div>
          ))}
          <p className="mb-2 text-[20px] text-red-600">Approved applications</p>
          {approvedApplications.map((application) => (
            <div
              key={application.id}
              className="redBorder mb-4 flex items-start justify-between gap-24 rounded-lg bg-red-50 p-4"
            >
              <div>
                <p className="mb-4 text-[22px] font-semibold">{job.title}</p>
                <p className="text-[16px]">{application.message}</p>
              </div>
              <div className="bg-red-600 px-4 py-1 text-white">Rejected</div>
            </div>
          ))}
        </div>
      } */}
    </main>
  );
}
