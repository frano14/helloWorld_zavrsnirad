import React from "react";
import Image from "next/image";
import ForTalentImg from "../../assets/images/ForTalentImg.jpg";

const ForTalents: React.FC = () => {
  return (
    <div className="mb-16 flex h-full w-full flex-col items-start justify-center rounded-none bg-blue text-white xs:rounded-lg sm:flex-row">
      <div className="w-full sm:w-1/2">
        <Image
          src={ForTalentImg}
          className="leftImg"
          alt="people working on project"
        />
      </div>
      <div className="flex h-3/5 w-full flex-col items-start justify-between p-4 sm:h-full sm:w-1/2">
        <div className="bottomBorder pb-[30px] md:pb-[86px] lg:pb-40">
          <p className="mb-4 text-[24px] font-light md:mb-8">For talent</p>
          <h1 className="customFont text-[34px] leading-[36px] xs:text-[46px] xs:leading-[54px] md:text-[52px]">
            Find great work
          </h1>
          <p className="my-2 text-[16px] font-normal md:my-4 md:text-[18px]">
            Discover unlimited opportunities for growth and collaboration on our
            platform, and unleash your full creative potential
          </p>
        </div>
        <div className="py-2 text-[14px] md:text-[16px]">
          <div className="mb-2 grid grid-cols-2 gap-4 xs:grid-cols-3 md:mb-4 md:gap-2">
            <p>Find opportunities for every stage of your freelance career</p>
            <p>Control when, where and how you work</p>
            <p>Explore different ways to earn</p>
          </div>
          <button className="rounded-full bg-white px-6 py-2 text-blue ">
            Learn more
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default ForTalents;
