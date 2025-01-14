import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import React from "react";

export default function Introduction() {
  const words = [
    {
      text: "Vì",
    },
    {
      text: "lợi",
    },
    {
      text: "ích",
    },
    {
      text: "mười",
    },
    {
      text: "năm",
    },
    {
      text: "trồng",
    },
    {
      text: "cây",
    },
  ];
  const words2 = [
    {
      text: "Vì",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "lợi",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "ích",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "trăm",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "năm",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "trồng",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "người",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
      <div className=" py-10 rounded-md text-center justify-around items-center h-screen">
        <div className="flex flex-col h-full justify-center items-center">
          <h1 className="font-departure text-4xl relative z-10 text-center h-[120px] md:h-auto leading-tight w-[60%]">
            {/* <RandomizedTextEffect text="Production ready code" /> */}
            <TypewriterEffectSmooth words={words} />
            <TypewriterEffectSmooth words={words2} />
          </h1>
          <br></br>
          <span>☘️</span>
        </div>
      </div>
    </>
  );
}
