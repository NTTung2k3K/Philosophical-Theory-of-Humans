"use client";

import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navigation = [
  {
    id: "welcome",
    label: "Giới thiệu",
    href: "#welcome",
  },
  {
    id: "analysis",
    label: "Phân tích",
    href: "#analysis",
  },
  {
    id: "role",
    label: "Vai trò",
    href: "#role",
  },
  {
    id: "development",
    label: "Phát triển",
    href: "#development",
  },
  {
    id: "opinion",
    label: "Quan điểm",
    href: "#opinion",
  },
  {
    id: "conclustion",
    label: "Kết luận",
    href: "#conclustion",
  },
];

export function SiteHeader() {
  const activeId = useScrollSpy(navigation.map((item) => `#${item.id}`));

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <div className="flex h-16 items-center align-baseline justify-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-blue mx-12">
            <Link href="/" className="text-red-500">
              Dominators
            </Link>
          </div>

          <nav className="flex  items-center gap-2 overflow-x-auto">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-colors whitespace-nowrap",
                  activeId === item.id
                    ? "bg-[#2C3E50] text-white"
                    : "text-gray-600 hover:text-gray-900"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
