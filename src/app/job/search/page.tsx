import getSession from "@/lib/getSession";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import JobListItem from "@/components/jobssearch/JobListItem";
import JobFilterSidebar from "@/components/jobssearch/JobFilterSidebar";
import JobResults from "@/components/jobssearch/JobResult";
import { JobFilterValues } from "@/lib/validation";

interface PageProps {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
    page?: string;
  };
}

function getTitle({ q, type, location, remote }: JobFilterValues) {
  const titlePrefix = q
    ? `${q} jobs`
    : type
      ? `${type} developer jobs`
      : remote
        ? "Remote developer jobs"
        : "All developer jobs";

  const titleSuffix = location ? ` in ${location}` : "";

  return `${titlePrefix}${titleSuffix}`;
}

export function generateMetadata({
  searchParams: { q, type, location, remote },
}: PageProps): Metadata {
  return {
    title: `${getTitle({ q, type, location, remote: remote === "true" })} | helloWorld Jobs`,
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
    <div className="m-auto mt-[128px] w-full px-0 xs:px-6 sc:max-w-[1200px] sc:px-0">
      <h1 className=" m-auto mb-6 text-center text-[24px] font-semibold">
        {getTitle(filterValue)}
      </h1>
      <div className="relative flex flex-col gap-4 md:flex-row">
        <JobFilterSidebar defaultValues={filterValue} />
        <JobResults filterValues={filterValue} />
      </div>
    </div>
  );
}
