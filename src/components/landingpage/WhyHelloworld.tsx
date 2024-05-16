import React from "react";
import HeroImg from "../../assets/images/HeroImg.jpg";
import EnterImg from "../../assets/images/enter.png";
import PinImg from "../../assets/images/thumbtack.png";
import StarImg from "../../assets/images/features.png";
import Image from "next/image";

const WhyHelloworld: React.FC = () => {
  return (
    <section
      id="whyhelloworld"
      className="flex flex-col gap-8 pb-16 sm:flex-row"
    >
      <div className="flex w-full items-center sm:w-1/2">
        <Image
          src={HeroImg}
          className="rounded-none xs:rounded-lg"
          alt="man working on laptop"
        />
      </div>
      <div className="w-full px-2 xs:px-0 sm:w-1/2">
        <h1 className="customFont mb-6 text-[34px] leading-[36px] xs:text-[46px] xs:leading-[54px] md:text-[52px]">
          Why to choose helloworld?
        </h1>
        <div className="flex items-center justify-start gap-6 py-4">
          <Image
            src={EnterImg}
            width={16}
            height={16}
            className="ml-2"
            alt="icon"
          />
          <div className="flex flex-col gap-1">
            <h4 className="text-[18px] font-semibold">Free to join</h4>
            <p className="text-[16px] font-light text-dark">
              Register and browse professionals, explore projects, or even book
              a consultation.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-6 py-4">
          <Image
            src={PinImg}
            width={16}
            height={16}
            className="ml-2"
            alt="icon"
          />
          <div className="flex flex-col gap-1">
            <h4 className="text-[18px] font-semibold">
              Post a job and hire top talent
            </h4>
            <p className="text-[16px] font-light text-dark">
              Finding talent doesn’t have to be a chore. Post a job or we can
              search for you!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-6 py-4">
          <Image
            src={StarImg}
            width={16}
            height={16}
            className="ml-2"
            alt="icon"
          />
          <div className="flex flex-col gap-1">
            <h4 className="text-[18px] font-semibold">Work with the best</h4>
            <p className="text-[16px] font-light text-dark">
              Upwork makes it affordable to up your work and take advantage of
              low transaction rates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHelloworld;
