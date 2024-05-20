import getSession from "@/lib/getSession";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import search from "../../assets/images/search.png";
import HoverBlocks from "./HoverBlocks";
import one from "../../assets/images/one2.png";
import two from "../../assets/images/two2.png";
import three from "../../assets/images/three2.png";
import four from "../../assets/images/four2.png";
import search2 from "../../assets/images/search2.png";
import contract2 from "../../assets/images/contract2.png";
import like2 from "../../assets/images/like2.png";
import chat from "../../assets/images/chat.png";

export const metadata: Metadata = {
  title: "Talent",
};

export default async function Page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/talent");
  }

  if (!user.talent) {
    redirect("/job");
  }

  return (
    <>
      <div className="m-auto mb-16 w-full px-6 pt-[137px] xs:px-16 sc:max-w-[1200px] sc:px-0">
        <div className="flex w-full items-center justify-between rounded-lg bg-green p-12 text-white">
          <div className="flex max-w-[70%] flex-col items-start justify-start">
            <p className=" customFont mb-12 text-[28px] font-semibold">
              Explore the helloWorld job market, and make sure that we are the
              right choice for you
            </p>
            <button className="rounded-full bg-white px-6 py-2 font-bold text-green">
              <Link href="/howtopost">See now</Link>
            </button>
          </div>
          <div>
            <Image src={search} width={128} height={128} alt="clock" />
          </div>
        </div>
      </div>
      <section id="ByCategory" className="bg-light">
        <div className="m-auto flex w-full flex-col items-center justify-center bg-light px-6 py-16 sc:max-w-[1200px] sc:px-0">
          <h1 className="customFont mb-6 text-[26px] xs:text-[32px] md:text-[38px]">
            Advantages of helloWorld
          </h1>
          <HoverBlocks />
        </div>
      </section>
      <div className="m-auto mb-16 w-full px-6 pt-[137px] xs:px-16 sc:max-w-[1200px] sc:px-0">
        {/*  */}
        <div className="gird-cols-1 grid w-full gap-12 p-4">
          <div className="flex items-center justify-between">
            <div className="flex w-[70%] flex-col items-start justify-start gap-4">
              <div className="flex items-center justify-center gap-4 ">
                <Image src={one} width={32} height={32} alt="one" />
                <h1 className="customFont text-[22px] font-bold text-[#967bb6] xs:text-[24px] md:text-[28px]">
                  Job search
                </h1>
              </div>
              <p className="text-[16px] font-light">
                Our platform offers an intuitive and powerful search
                functionality that enables you to effortlessly browse through a
                wide array of job opportunities. Utilize our advanced filters to
                narrow down your search and pinpoint the perfect job that aligns
                with your skills, interests, and career goals.
              </p>
            </div>
            <div>
              <Image src={search2} width={128} height={128} alt="scroll" />
            </div>
          </div>
          <div className="flex flex-row-reverse items-center justify-between">
            <div className="flex w-[70%] flex-col items-start justify-start gap-4">
              <div className="flex items-center justify-center gap-4 ">
                <Image src={two} width={32} height={32} alt="one" />
                <h1 className="customFont text-[22px] font-bold text-[#91E6B3] xs:text-[24px] md:text-[28px]">
                  Personalized Recommendations{" "}
                </h1>
              </div>
              <p className="text-[16px] font-light">
                With our sophisticated algorithm, we analyze your profile,
                qualifications, and preferences to curate personalized job
                recommendations tailored exclusively to you. Say goodbye to
                endless scrolling and let us present you with the most relevant
                and exciting career opportunities suited to your unique profile.
              </p>
            </div>
            <div>
              <Image src={like2} width={128} height={128} alt="scroll" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex w-[70%] flex-col items-start justify-start gap-4">
              <div className="flex items-center justify-center gap-4 ">
                <Image src={three} width={32} height={32} alt="one" />
                <h1 className="customFont text-[22px] font-bold text-[#da70d6] xs:text-[24px] md:text-[28px]">
                  Apply for Jobs
                </h1>
              </div>
              <p className="text-[16px] font-light">
                Once you ve found your ideal job, our streamlined application
                process makes it easy for you to submit your credentials
                directly to employers. Browse through detailed job descriptions,
                assess your fit, and seamlessly apply with just a few clicks.
                Let us simplify the application journey as you take the next
                step towards your dream career.
              </p>
            </div>
            <div>
              <Image src={contract2} width={128} height={128} alt="scroll" />
            </div>
          </div>
          <div className="flex flex-row-reverse items-center justify-between">
            <div className="flex w-[70%] flex-col items-start justify-start gap-4">
              <div className="flex items-center justify-center gap-4 ">
                <Image src={four} width={32} height={32} alt="one" />
                <h1 className="customFont text-[22px] font-bold text-[#007a92] xs:text-[24px] md:text-[28px]">
                  Communication with Employers{" "}
                </h1>
              </div>
              <p className="text-[16px] font-light">
                After applying, be open to communication with employers through
                our platform. Monitor the status of your applications and
                respond to messages or requests for additional information.
              </p>
            </div>
            <div>
              <Image src={chat} width={128} height={128} alt="scroll" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
