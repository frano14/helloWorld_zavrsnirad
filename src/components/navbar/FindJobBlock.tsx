import { popularTags } from "@/constants";
import React, { FC } from "react";

interface Tag {
  title: string;
}

interface FindWorkBlockProps {
  status: boolean;
}

const FindWorkBlock: FC<FindWorkBlockProps> = ({ status }) => {
  return (
    <>
      {status ? (
        <div className="relative z-[999] m-auto w-full px-[22px] nv:max-w-[1400px] nv:px-0">
          <div className="bottomBorder whiteBg fixed top-[73px] z-10 w-full py-8 nv:max-w-[1400px]">
            <h3 className="customFont ml-4 text-[20px] font-semibold">
              Find a work for your skill
            </h3>
            <p className="ml-4 text-[12px] text-blue">
              We are sure that in the sea of ​​offers you will find the perfect
              one for you
            </p>
            <ul className="mt-[38px] flex w-full items-center gap-1">
              {popularTags.map((tag: Tag) => (
                <li
                  key={tag.title}
                  className="w-full cursor-pointer rounded-md px-4 py-2 text-[14px] hover:bg-light hover:text-blue"
                >
                  {tag.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FindWorkBlock;
