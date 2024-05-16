"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import pen from "../../assets/images/penG.png";
import contract from "../../assets/images/contract.png";
import headphones from "../../assets/images/headphones.png";
import ForClientImg1 from "../../assets/images/ForClientImg1.jpeg";
import ForClientImg2 from "../../assets/images/ForClientImg2.jpeg";

const getWindowWidth = (): number => {
  return window.innerWidth;
};

const ForClients: React.FC = () => {
  const [screenW, setScreenW] = useState<boolean>(true);
  const [windowWidth, setWindowWidth] = useState<number>(getWindowWidth());

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener("resize", handleResize);
    if (windowWidth < 870) {
      setScreenW(false);
    } else {
      setScreenW(true);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="flex flex-col gap-12 rounded-none bg-green text-white xs:rounded-lg sm:flex-row sm:gap-1">
      <div className="w-full p-2 xs:p-4 sm:w-7/12 sm:p-8 md:w-2/3">
        <p className="mb-8 text-[24px] font-light">For clients</p>
        <h1 className="customFont text-[34px] leading-[36px] xs:text-[46px] xs:leading-[54px] md:text-[52px]">
          This is how
          <br />
          <span className="text-lightGreen">
            good companies <br />
            find good talents.
          </span>
        </h1>
        <p className="my-8 text-[18px] font-medium md:text-[20px]">
          Work with the largest network of independent professionals
          <br /> and get things done—from quick turnarounds to big
          transformations.
        </p>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-1">
            <Image src={pen} width={20} height={20} alt="icon" />
            <p className="text-[16px] md:text-[18px]">
              Access expert talent to fill your skill gaps
            </p>
          </li>
          <li className="flex items-center gap-1">
            <Image src={contract} width={20} height={20} alt="icon" />
            <p className="text-[16px] md:text-[18px]">
              Post a job and hire a pro
            </p>
          </li>
          <li className="flex items-center gap-1">
            <Image src={headphones} width={20} height={20} alt="icon" />
            <p className="text-[16px] md:text-[18px]">
              Partner with Helloworld for end-to-end support
            </p>
          </li>
        </ul>
        <button className="mt-6 w-auto rounded-full bg-white px-8 py-3 text-green">
          Learn more
        </button>
      </div>
      <div className="flex w-full items-center sm:w-5/12 md:w-1/3">
        <Image
          src={screenW ? ForClientImg1 : ForClientImg2}
          className="rightImg h-full"
          alt="couple working at home"
        />
      </div>
    </div>
  );
};

export default ForClients;
