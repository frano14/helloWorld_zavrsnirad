import React from "react";
import Image from "next/image";
import HeroImg from "../../assets/images/HeroImg.jpg";

const Hero: React.FC = () => {
  return (
    <section
      id="Hero"
      className="flex flex-col items-start justify-between gap-8 rounded-none bg-blue p-4 text-white xs:rounded-lg sm:flex-row sm:gap-2 sm:p-9"
    >
      <div className="min-w-[40%]">
        <h1 className="customFont text-[34px] leading-[36px] xs:text-[46px] xs:leading-[54px] md:text-[52px]">
          The fastest way
          <br /> to meet top talent
        </h1>
        <p className="pb-4 pt-2 text-[16px] font-light ss:pb-8 ss:pt-4 md:pb-16 md:text-[18px]">
          post a job today and start working tomorrow
        </p>
        <button className="rounded-full bg-white px-6 py-2 text-blue ">
          Start now
        </button>
      </div>
      <div>
        <Image
          src={HeroImg}
          alt="Man working on laptop"
          className="rounded-none xs:rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
