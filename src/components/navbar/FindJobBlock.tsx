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
        <div className="nv:max-w-[1400px] nv:px-0 relative m-auto mt-[81px] w-full px-[22px] text-black">
          <div className="nv:max-w-[1400px] bottomBorder fixed top-[80px] z-10 w-full bg-white py-8">
            <h3 className="customFont ml-4 text-[20px] font-semibold">
              Find a work for your skill
            </h3>
            <p className="text-blue ml-4 text-[12px]">
              We are sure that in the sea of ​​offers you will find the perfect
              one for you
            </p>
            <ul className="mt-[38px] flex w-full items-center gap-1">
              {popularTags.map((tag: Tag) => (
                <li
                  key={tag.title}
                  className="hover:bg-light hover:text-blue w-full cursor-pointer rounded-md px-4 py-2 text-[14px]"
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
