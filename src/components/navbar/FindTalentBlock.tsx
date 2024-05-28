import React from "react";
import { popularTags } from "@/constants";
import Link from "next/link";

interface Tag {
  title: string;
}

interface Props {
  status: boolean;
}

const FindTalentBlock: React.FC<Props> = ({ status }) => {
  return (
    <>
      {status ? (
        <div className="relative z-[999] m-auto w-full px-[22px] nv:max-w-[1400px] nv:px-0">
          <div className="bottomBorder whiteBg fixed top-[73px] z-10 m-auto flex w-full gap-8 py-4 nv:max-w-[1400px]">
            {/* Left side */}
            <div className="borderRight flex w-[60%] flex-col gap-4 pr-4">
              <div className="flex flex-col gap-3 p-6 hover:bg-light hover:text-black">
                <p className="text-[16px] font-medium">
                  Post a job and hire one of many talents
                </p>
                <Link href="/talent/search">
                  <p className="cursor-pointer text-[14px] text-blue">
                    Talent marketplace
                  </p>
                </Link>
              </div>
              <div className="flex  flex-col gap-3 p-6 hover:bg-light hover:text-black">
                <p className="text-[16px] font-medium">
                  Take a look at the talents we recommend
                </p>
                <Link href="/talent/search">
                  <p className="cursor-pointer text-[14px] text-blue">
                    Recommended talents
                  </p>
                </Link>
              </div>
            </div>
            {/* Right side */}
            <div className="flex  w-full items-start gap-28">
              <div className="flex flex-col items-start gap-4">
                <h3 className="customFont font-bold text-[16]">
                  Talent Markeplace
                </h3>
                <p className="whitecolor text-[12px]">
                  Find the perfect talent just for you, and dont wait a second.
                </p>
                <Link href="/talent/search">
                  <p className="cursor-pointer text-[14px] text-blue underline">
                    Talent marketplace
                  </p>
                </Link>
              </div>
              <ul className="mt-[28px] flex w-full flex-col gap-1">
                {popularTags.map((tag: Tag) => (
                  <Link href="/talent/search" key={tag.title}>
                    <li className="w-full cursor-pointer rounded-full px-4 py-2 text-[14px] hover:bg-light hover:text-blue">
                      {tag.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FindTalentBlock;
