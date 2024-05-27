import getSession from "@/lib/getSession";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import BigBen from "../../assets/images/BigBen.png";
import prisma from "@/lib/prisma";
import { Banknote, Briefcase, Clock, Globe2, MapPin } from "lucide-react";
import { formatMoney, relativeDate } from "@/lib/utils";
import Badge from "@/components/jobssearch/Badge";
import companyLogoPlaceholder from "@/assets/images/company-logo-placeholder.png";
import HowToPost from "../../components/jobpage/HowToPost";

export const metadata: Metadata = {
  title: "Job",
};

export default async function Page() {
  const session = await getSession();
  const user = session?.user;
  const currentUserId = user?.id;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/talent");
  }

  if (user.talent) {
    redirect("/talent");
  }

  const jobs = await prisma.job.findMany({
    where: {
      userId: currentUserId,
    },
  });

  return (
    <div className="m-auto w-full px-6 pt-[128px] xs:px-16 sc:max-w-[1200px] sc:px-0">
      <div className="flex w-full items-center justify-between rounded-lg bg-zinc-900 p-12 text-white">
        <div className="flex max-w-[70%] flex-col items-start justify-start">
          <p className=" mb-2 text-[18px] font-medium">Post a job NOW</p>
          <p className=" customFont mb-12 text-[24px] font-normal">
            helloWorld is the fastest way to find great talent. Dont waste time,
            set up a job now
          </p>
          <button className="rounded-full bg-white px-6 py-2 font-bold text-black">
            <Link href="#howtopost">See How</Link>
          </button>
        </div>
        <div>
          <Image src={BigBen} width={128} height={128} alt="clock" />
        </div>
      </div>
      <section className="my-16">
        <div className="flex items-center justify-between">
          <h1 className="customFont mb-8 text-[24px] leading-[36px] xs:text-[28px] xs:leading-[54px] md:text-[34px]">
            Your jobs
          </h1>
          <button className="mb-8 hidden rounded-full bg-blue px-8 py-3 text-white hover:bg-darkerBlue sm:flex">
            <Link href="/job/new">Post a job</Link>
          </button>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {jobs.map((job) => (
            <Link key={job.id} href={`/job/${job.slug}/applications`}>
              <article className="flex h-full flex-col gap-3 rounded-lg border p-5 hover:bg-muted/60">
                <Image
                  src={job.companyLogoUrl || companyLogoPlaceholder}
                  alt={`${job.companyName} logo`}
                  width={100}
                  height={100}
                  className="self-center rounded-lg"
                />
                <div className="flex-grow space-y-6">
                  <div>
                    <h2 className="text-xl font-medium">{job.title}</h2>
                    <p className="text-muted-foreground">{job.companyName}</p>
                  </div>
                  <div className="text-muted-foreground">
                    <p className="flex items-center gap-1.5">
                      <MapPin size={16} className="shrink-0" />
                      {job.locationType}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Globe2 size={16} className="shrink-0" />
                      {job.location || "Worldwide"}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Banknote size={16} className="shrink-0" />
                      {formatMoney(job.salary)}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 flex-col items-end justify-between">
                  <Badge>{job.type}</Badge>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock size={16} />
                    {relativeDate(job.createdAt)}
                  </span>
                </div>
              </article>
            </Link>
          ))}
          {jobs.length === 0 && (
            <p className="m-auto text-center">No jobs found.</p>
          )}
        </div>
      </section>
      <HowToPost />
    </div>
  );
}
