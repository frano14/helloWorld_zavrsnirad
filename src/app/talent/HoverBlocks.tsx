"use client";

import React, { useState } from "react";
import { blocks } from "@/constants";

const HoverBlocks: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className=" flex h-72 flex-col overflow-hidden md:flex-row">
      {blocks.map((block, index) => (
        <div
          key={index}
          className={`relative h-full flex-shrink-0 ${index === activeIndex ? "w-64" : "w-16"} transition-all duration-300 hover:w-64 ${block.color} mx-1 cursor-pointer rounded-r-lg`}
          onMouseEnter={() => setActiveIndex(index)}
        >
          <div
            className={`absolute inset-0 flex items-center justify-center p-4 text-center text-white ${index === activeIndex ? "block" : "hidden"}`}
          >
            <div className="text-white">
              <p className="mb-4 text-[18px] font-semibold">{block.title}</p>
              <p className="text-[14px]">{block.p}</p>
            </div>
          </div>
          <div
            className={`absolute left-2 top-2 text-2xl font-bold text-white ${index !== activeIndex ? "block" : "hidden"}`}
          >
            {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverBlocks;
