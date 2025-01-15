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
    title: "🎨 Con người là chủ thể sáng tạo",
    desc: 'Con người không chỉ là đối tượng tiếp thu, mà là chủ thể tạo ra giá trị. Việc "trồng người" là sự đầu tư vào trí tuệ, phẩm chất và năng lực để giúp họ có thể đóng góp cho sự phát triển xã hội lâu dài.',
    sliderName: "Con người là chủ thể sáng tạo",
    src: "/assets/image/conclusion1.jpg",
  },
  {
    icon: <Home />,
    title: "🚀 Vai trò quyết định của con người đối với sự phát triển xã hội",
    desc: "Con người là động lực chính trong các tiến bộ về khoa học, công nghệ và văn hóa. Một xã hội thịnh vượng không thể thiếu con người được phát triển đầy đủ về năng lực và đạo đức.",
    sliderName: "Vai trò quyết định của con người đối với sự phát triển xã hội",
    src: "/assets/image/conclusion2.jpg",
  },
  {
    icon: <Home />,
    title: "🌱 Phát triển con người trong thời đại mới",
    desc: "Đầu tư giáo dục, khuyến khích sáng tạo, và xây dựng môi trường lành mạnh là nền tảng giúp con người phát triển toàn diện, thúc đẩy xã hội bền vững.",
    sliderName: "Phát triển con người trong thời đại mới",
    src: "/assets/image/conclusion3.jpg",
  },
  {
    icon: <Home />,
    title: "🌍 Con người và sự phát triển bền vững",
    sliderName: "Con người và sự phát triển bền vững",
    desc: "Con người là yếu tố quyết định trong việc bảo vệ môi trường và thúc đẩy công bằng xã hội, góp phần xây dựng một thế giới công bằng và bền vững.",
    src: "/assets/image/conclusion5.jpg",
  },
  // {
  //   icon: <Home />,
  //   title: "🔑 Tổng kết",
  //   sliderName: "Tổng kết",
  //   desc: 'Tóm lại, "trồng người" không chỉ mang lại lợi ích ngay lập tức mà còn tạo dựng nền tảng cho sự thịnh vượng lâu dài, góp phần xây dựng một xã hội vững mạnh và bền vững trong tương lai.',
  //   src: "/assets/image/conclusion4.jpg",
  // },
];

export default function ConclusionSection() {
  const isMobile = useMediaQuery("(min-width: 640px)");

  const [isVisible, setIsVisible] = useState(false);
  const [activeSlider, setActiveSlider] = useState(items[0].sliderName); // Mặc định là slider đầu tiên
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          setActiveSlider(items[0].sliderName); // Khi phần tử xuất hiện, kích hoạt slider đầu tiên
        } else {
          setIsVisible(false);
        }
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
    <div
      ref={sectionRef}
      className="w-full h-[95vh] bg-slate-950 overflow-hidden"
    >
      <ProgressSlider
        vertical={isMobile ? true : false}
        fastDuration={300}
        duration={4000}
        activeSlider={activeSlider} // Truyền state activeSlider
        className="flex h-full"
      >
        <SliderBtnGroup className="relative w-3/6 z-10 flex flex-col h-full bg-slate-950 backdrop-blur-md overflow-hidden">
          {items.map((item, index) => (
            <SliderBtn
              key={index}
              value={item?.sliderName}
              className="text-left p-6 border-b flex-1"
              progressBarClass="left-0 top-0 bg-white w-3 h-full before:h-full before:w-4 before:bg-white"
              // Không cần onClick nữa vì tự động kích hoạt khi cuộn đến
            >
              <h2 className="relative px-4 py-2 rounded w-fit bg-white text-black mb-4 text-xl font-bold">
                {item.title}
              </h2>
              <p className="text-base font-medium text-slate-200 line-clamp-2">
                {item.desc}
              </p>
            </SliderBtn>
          ))}
        </SliderBtnGroup>

        <SliderContent className="w-3/6 flex flex-col h-full">
          {items.map((item, index) => (
            <SliderWrapper
              className="h-full w-full"
              key={index}
              value={item?.sliderName}
            >
              <Image
                className="h-full w-full object-cover"
                src={item?.src}
                width={1900}
                height={1080}
                alt={item.sliderName}
              />
            </SliderWrapper>
          ))}
        </SliderContent>
      </ProgressSlider>
    </div>
  );
}
