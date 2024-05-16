"use client";

import React, { useState } from "react";
import Image from "next/image";
import { popularTags, PopularTag } from "../../constants";
import starImg from "../../assets/images/starFull.png";

const ByCategory: React.FC = () => {
  const [talents, setTalents] = useState<boolean>(true);

  return (
    <section id="ByCategory" className="bg-light">
      <div className="m-auto w-full bg-light px-6 py-16 sc:max-w-[1200px] sc:px-0">
        <h1 className="customFont text-[34px] leading-[36px] xs:text-[46px] xs:leading-[54px] md:text-[52px]">
          Search for talents or jobs by category
        </h1>
        <p className="mb-12 text-[18px] font-normal text-dark">
          by{" "}
          <span
            className="cursor-pointer font-semibold text-blue underline"
            onClick={() => setTalents(true)}
          >
            talents
          </span>{" "}
          or{" "}
          <span
            className="cursor-pointer font-semibold text-blue underline"
            onClick={() => setTalents(false)}
          >
            jobs
          </span>
        </p>
        <div className="grid grid-cols-1 gap-x-6 gap-y-3 xs:grid-cols-2 ss:grid-cols-3 sm:grid-cols-4">
          {popularTags.map((tag: PopularTag) => (
            <div className="rounded-lg bg-white p-4" key={tag.title}>
              <h3 className="mb-4 text-[18px] font-semibold">{tag.title}</h3>
              <div className="flex items-start justify-start gap-16 pb-6">
                <div className="flex items-center justify-center gap-1">
                  <Image src={starImg} width={16} height={16} alt="star" />
                  <p className="text-dark">
                    {talents ? tag.talentsRating : tag.jobsRating}
                  </p>
                </div>
                <p className="text-dark">
                  {talents ? `${tag.talents} talents` : `${tag.jobs} jobs`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ByCategory;
