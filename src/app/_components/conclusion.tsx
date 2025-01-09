/* eslint-disable */

"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ProgressSlider,
  SliderBtnGroup,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from "@/components/ui/progress-slider";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Home } from "lucide-react";

const items = [
  {
    icon: <Home />,
    title: "Bridge",
    desc: "A breathtaking view of a city illuminated by countless lights, showcasing the vibrant and bustling nightlife.",
    sliderName: "bbridge",
  },
  {
    icon: <Home />,
    title: "Mountains View",
    desc: "A serene lake reflecting the surrounding mountains and trees, creating a mirror-like surface.",
    sliderName: "bmountains",
  },
  {
    icon: <Home />,
    title: "Autumn",
    desc: "A picturesque path winding through a dense forest adorned with vibrant autumn foliage.",
    sliderName: "bautumn",
  },
  {
    icon: <Home />,
    title: "Foggy",
    sliderName: "bfoggy",
    desc: "A stunning foggy view over the forest, with the sun casting a golden glow across the forest.",
  },
];

export default function ConclusionSection() {
  const isMobile = useMediaQuery("(min-width: 640px)");

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Chạy khi phần tử ít nhất 50% xuất hiện
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <ProgressSlider
        vertical={isMobile ? true : false}
        fastDuration={300}
        duration={4000}
        activeSlider={isVisible ? "bbridge" : ""} // Khi phần tử xuất hiện mới chạy
        className="sm:flex "
      >
        <SliderBtnGroup className="sm:relative absolute bottom-0 lg:w-[28rem] sm:w-96 w-full z-10 sm:flex sm:flex-col grid grid-cols-2 sm:h-[500px] h-fit sm:dark:bg-black sm:bg-white dark:bg-black/80 bg-white/80 backdrop-blur-md overflow-hidden ">
          {items.map((item, index) => (
            <SliderBtn
              key={index}
              value={item?.sliderName}
              className="text-left p-3 sm:border-b border sm:pl-5 sm:pb-0 pb-6 sm:flex-1"
              progressBarClass="left-0 sm:top-0 bottom-0 dark:bg-white bg-black sm:w-3 sm:h-full h-4 before:h-full before:w-4 before:"
            >
              <h2 className="relative px-4 rounded w-fit dark:bg-blue-500 bg-black text-white mb-2">
                {item.title}
              </h2>
              <p className="text-sm font-medium dark:text-slate-200 text-slate-900 line-clamp-2">
                {item.desc}
              </p>
            </SliderBtn>
          ))}
        </SliderBtnGroup>
        <SliderContent className="w-full">
          {items.map((item, index) => (
            <SliderWrapper
              className="h-full"
              key={index}
              value={item?.sliderName}
            >
              <Image
                className=" h-[500px] object-cover"
                src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop"
                width={1900}
                height={1080}
                alt={item.desc}
              />
            </SliderWrapper>
          ))}
        </SliderContent>
      </ProgressSlider>
    </div>
  );
}
