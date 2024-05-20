import Image from "next/image";
import message from "../../assets/images/message.png";
import click from "../../assets/images/click.png";
import rocket from "../../assets/images/rocket.png";
import scroll from "../../assets/images/scroll.png";
import one from "../../assets/images/one.png";
import two from "../../assets/images/two.png";
import three from "../../assets/images/three.png";
import four from "../../assets/images/four.png";
import search from "../../assets/images/search.png";

const HowToPost: React.FC = () => {
  return (
    <>
      <div className="px-6 py-16" id="howtopost">
        <h1 className="customFont mb-8 text-[24px] leading-[36px] opacity-75 xs:text-[28px] xs:leading-[54px] md:text-[34px]">
          How to post job?
        </h1>
        <div className="flex flex-col justify-center gap-16">
          {/* STEP 01 */}
          <div className="flex items-center justify-between">
            <div className="flex w-[70%] flex-col items-start justify-start gap-4">
              <div className="flex items-center justify-center gap-4 ">
                <Image src={one} width={32} height={32} alt="one" />
                <h1 className="customFont text-[22px] font-bold text-[#E5B531] xs:text-[24px] md:text-[28px]">
                  Job Preparation
                </h1>
              </div>
              <p className="text-[16px] font-light">
                Before initiating the job posting process, ensure all necessary
                information is readily available. This includes job description,
                qualifications, expectations, and other pertinent details.
              </p>
            </div>
            <div>
              <Image src={scroll} width={128} height={128} alt="scroll" />
            </div>
          </div>
          {/* STEP 02 */}
          <div className="flex items-center justify-between">
            <div>
              <Image src={click} width={128} height={128} alt="click" />
            </div>
            <div className="flex w-[70%] flex-col items-start justify-start gap-4">
              <div className="flex items-center justify-center gap-4 ">
                <Image src={two} width={32} height={32} alt="two" />
                <h1 className="customFont text-[22px] font-bold text-[#16a2ed] xs:text-[24px] md:text-[28px]">
                  Creating the Job Advertisement
                </h1>
              </div>
              <p className="text-[16px] font-light">
                Craft a clear and compelling job advertisement. Provide details
                about the position, responsibilities, qualifications, and any
                other essential information potential candidates should know.
              </p>
            </div>
          </div>
          {/* STEP 03 */}
          <div className="flex items-center justify-between">
            <div className="flex w-[70%] flex-col items-start justify-start gap-4">
              <div className="flex items-center justify-center gap-4 ">
                <Image src={three} width={32} height={32} alt="three" />
                <h1 className="customFont text-[22px] font-bold text-[#D03D3A] xs:text-[24px] md:text-[28px]">
                  Posting the Job Advertisement
                </h1>
              </div>
              <p className="text-[16px] font-light">
                Once the advertisement is created, publish it on relevant
                job-seeking platforms. These could include job websites, social
                media platforms, internal company job boards, or employment
                agencies.
              </p>
            </div>
            <div>
              <Image src={rocket} width={128} height={128} alt="rocket" />
            </div>
          </div>

          {/* STEP 04 */}
          <div className="flex items-center justify-between">
            <div>
              <Image src={message} width={128} height={128} alt="message" />
            </div>
            <div className="flex w-[70%] flex-col items-start justify-start gap-4">
              <div className="flex items-center justify-center gap-4 ">
                <Image src={four} width={32} height={32} alt="four" />
                <h1 className="customFont text-[22px] font-bold text-[#BBEC6C] xs:text-[24px] md:text-[28px]">
                  Responding to Applications
                </h1>
              </div>
              <p className="text-[16px] font-light">
                When applications are received, carefully review each one. Pay
                attention to qualifications, experience, and candidate
                competencies. Subsequently, contact candidates who meet the
                criteria for further selection or interviews.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 flex items-center justify-center">
          <button className="cursor-pointer rounded-full bg-blue px-8 py-3 font-semibold text-white">
            Post now
          </button>
        </div>
      </div>

      <div className="shadowAllSides my-16 flex w-full items-center justify-between rounded-lg p-12">
        <div>
          <p className=" mb-2 text-[18px] font-medium">Get started</p>
          <p className=" customFont mb-12 text-[24px] font-normal">
            If you want to see more detailed instructions
          </p>
          <button className="rounded-full bg-blue px-6 py-2 font-bold text-white hover:bg-darkerBlue">
            See now
          </button>
        </div>
        <div>
          <Image src={search} width={128} height={128} alt="search" />
        </div>
      </div>
    </>
  );
};

export default HowToPost;
