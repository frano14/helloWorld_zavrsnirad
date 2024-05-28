import JobListItem from "@/components/jobssearch/JobListItem";
import prisma from "@/lib/prisma";
import getSession from "@/lib/getSession";
import Link from "next/link";

export default async function AdminPage() {
  const unapprovedJobs = await prisma.job.findMany({
    where: { approved: false },
  });

  const session = await getSession();
  const user = session?.user;

  return (
    <main className="m-auto mt-[128px] w-full px-0 xs:px-6 sc:max-w-[1200px] sc:px-0">
      <h1 className="customFont mb-12 text-center text-[24px] font-semibold">
        {user?.name}, welcome back to the admin dashboard!
      </h1>
      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">Unapproved jobs:</h2>
        {unapprovedJobs.map((job) => (
          <Link key={job.id} href={`/admin/jobs/${job.slug}`} className="block">
            <JobListItem job={job} />
          </Link>
        ))}
        {unapprovedJobs.length === 0 && (
          <p className="text-muted-foreground">
            You currently do not have any unapproved jobs
          </p>
        )}
      </section>
    </main>
  );
}
