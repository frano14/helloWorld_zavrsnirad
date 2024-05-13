import React from "react";
import { popularTags } from "@/constants";

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
        <div className="nv:max-w-[1400px] nv:px-0 relative m-auto mt-[80px] w-full px-[22px] text-black">
          <div className="nv:max-w-[1400px] bottomBorder fixed z-10 m-auto flex w-full gap-8 bg-white py-4">
            {/* Left side */}
            <div className="borderRight flex w-[60%] flex-col gap-4 pr-4">
              <div className="hover:bg-light flex flex-col gap-3 p-6">
                <p className="text-[16px] font-medium">
                  Post a job and hire one of many talents
                </p>
                <p className="text-blue cursor-pointer text-[14px]">
                  Talent marketplace
                </p>
              </div>
              <div className="hover:bg-light  flex flex-col gap-3 p-6">
                <p className="text-[16px] font-medium">
                  Take a look at the talents we recommend
                </p>
                <p className="text-blue cursor-pointer text-[14px]">
                  Recommended talents
                </p>
              </div>
            </div>
            {/* Right side */}
            <div className="flex  w-full items-start gap-28">
              <div className="flex flex-col items-start gap-4">
                <h3 className="customFont font-bold text-[16]">
                  Talent Markeplace
                </h3>
                <p className="text-[12px]">
                  Find the perfect talent just for you, and don't wait a second.
                </p>
                <p className="text-blue cursor-pointer text-[14px] underline">
                  Talent marketplace
                </p>
              </div>
              <ul className="mt-[28px] flex w-full flex-col gap-1">
                {popularTags.map((tag: Tag) => (
                  <li
                    key={tag.title}
                    className="hover:bg-light hover:text-blue w-full cursor-pointer rounded-full px-4 py-2 text-[14px]"
                  >
                    {tag.title}
                  </li>
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
