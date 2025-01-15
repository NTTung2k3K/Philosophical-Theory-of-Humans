"use client";

import { AudioPlayer } from "@/components/ui/music-button";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import AccessCount from "@/app/_components/access-count";
const navigation = [
  {
    id: "welcome",
    label: "Giới thiệu",
    hrefs: [
      "#welcome-header",
      // , "#welcome-content"
    ], // Nhiều id cho "welcome"
  },
  {
    id: "analysis",
    label: "Phân tích",
    hrefs: ["#analysis"],
  },
  {
    id: "role",
    label: "Vai trò",
    hrefs: ["#role"],
  },
  {
    id: "development",
    label: "Phát triển",
    hrefs: ["#development"],
  },
  {
    id: "opinion",
    label: "Quan điểm",
    hrefs: ["#opinion"],
  },
  // {
  //   id: "conclusion",
  //   label: "Kết luận",
  //   hrefs: ["#conclusion"],
  // },
];

export function SiteHeader() {
  const activeId = useScrollSpy(
    navigation.flatMap((item) => item.hrefs) // Gộp tất cả `href` thành một mảng duy nhất
  );
  console.log(activeId);

  return (
    <header className="sticky top-0 z-50 w-full bg-black shadow-sm">
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <div className="flex h-16 items-center align-baseline justify-around gap-4">
          <div className=" h-10 w-10 items-center justify-center rounded-full bg-navy-blue mx-12">
            <Link
              href="/"
              className="flex  items-center justify-center space-x-2  text-green-500"
            >
              <Image
                className="w-15 h-10"
                width={100}
                alt="Logo"
                height={100}
                src="/assets/image/logo.jpg"
              />
              <span className="font-bold">Dominators</span>
            </Link>
          </div>

          <nav className="flex items-center gap-2 overflow-x-auto">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.hrefs[0]} // Sử dụng id đầu tiên để cuộn
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-colors whitespace-nowrap",
                  activeId && item.hrefs.includes(`#${activeId}`)
                    ? "bg-[#2C3E50] text-white"
                    : "text-gray-600 hover:text-gray-900"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.querySelector(item.hrefs[0]);
                  if (targetElement) {
                    const headerHeight = 64; // Chiều cao header (h-16)
                    const elementPosition =
                      targetElement.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.scrollY - headerHeight + 2;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-around space-x-3 text-sm">
              <AudioPlayer audioSrc="/music/main.mp3" />
              {/* <MoveLeftIcon className="text-white italic" size={24} />
              <span className="ml-2 text-white italic">Music here</span> */}
            </div>
          </nav>

          <div className="">
            <AccessCount />
          </div>
        </div>
      </div>
    </header>
  );
}
