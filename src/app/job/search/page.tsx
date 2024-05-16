import getSession from "@/lib/getSession";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import JobListItem from "@/components/jobssearch/JobListItem";
import JobFilterSidebar from "@/components/jobssearch/JobFilterSidebar";
import JobResults from "@/components/jobssearch/JobResult";
import { JobFilterValues } from "@/lib/validation";

export const metadata: Metadata = {
  title: "Jobs Search",
};

interface PageProps {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
    page?: string;
  };
}

export default async function Page({
  searchParams: { q, type, location, remote },
}: PageProps) {
  const filterValue: JobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  };

  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/talent");
  }

  return (
    <div className="m-auto mt-[137px] w-full px-0 xs:px-6 sc:max-w-[1200px] sc:px-0">
      <div className="relative flex flex-col gap-4 md:flex-row">
        <JobFilterSidebar />
        <JobResults filterValues={filterValue} />
      </div>
    </div>
  );
}
