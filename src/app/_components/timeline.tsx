"use client";

import React, { useRef } from "react";
{
  /*import { Github } from "lucide-react";*/
}
import { TimelineContent } from "@/components/ui/framer-timeline";
import Image from "next/image";

function TimelineAnimation() {
  {
    /*const aboutRef = useRef<HTMLDivElement | null>(null);*/
  } // Explicit type for aboutRef
  const heroRef = useRef<HTMLDivElement | null>(null); // Explicit type for heroRef

  return (
    <>
      <section
        className="sm:grid grid-cols-2 gap-10 h-[550px] pt-10 px-4"
        ref={heroRef}
      >
        <TimelineContent animationNum={0} timelineRef={heroRef}>
          <Image
            src="/assets/image/Vai_Tro/KetNoi/anh2.jpg"
            className="w-full h-96  object-cover rounded-md "
            alt=""
            width={500}
            height={500}
          />
        </TimelineContent>
        <div className="space-y-2">
          {" "}
          <TimelineContent animationNum={1} timelineRef={heroRef}>
            <h3 className="font-bold text-2xl">Tóm lại</h3>
            <br />
            <p className="text-xl leading-[200%]">
              - Từ những vai trò trên, có thể thấy rằng con người không chỉ là
              người thực hiện các mục tiêu phát triển mà còn là nguồn lực tạo ra
              mục tiêu đó 💯.
            </p>
            <br />
            <p className="text-xl leading-[200%]">
              - Một xã hội có thể phát triển bền vững hay không phụ thuộc vào
              việc từng cá nhân có được trao cơ hội, điều kiện để phát triển
              toàn diện về trí tuệ, đạo đức và tinh thần.
            </p>
          </TimelineContent>
        </div>
      </section>
      {/*<section ref={aboutRef} className="sm:grid grid-cols-2 gap-10 pb-10 px-4">
        <div className="space-y-2">
          {" "}
          <TimelineContent animationNum={2} timelineRef={aboutRef}>
            <p className="text-xl leading-[350%]">
            <p/>
          </TimelineContent>
        </div>
        <TimelineContent animationNum={0} timelineRef={aboutRef}>
          <Image
            src="/assets/image/Vai_Tro/KetNoi/anh2.jpg"
            className="w-full h-96  object-cover rounded-md "
            alt=""
            width={500}
            height={500}
          />
        </TimelineContent>
      </section>*/}
    </>
  );
}

export default TimelineAnimation;
