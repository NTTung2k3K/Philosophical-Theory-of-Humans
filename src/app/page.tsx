"use client";

import AnalysisSection from "@/app/_components/analysis";
import ConclusionSection from "@/app/_components/conclusion";
import DevelopmentSection from "@/app/_components/development";
import InfinityBrand from "@/app/_components/infinity-brand";
import Introduction from "@/app/_components/introduction";
import OpinionSection from "@/app/_components/opinion";
import TimelineAnimation from "@/app/_components/timeline";
import { TimelineDemo } from "@/app/_components/timeline-2";
import LinearCard from "@/components/ui/linear-card";
import { SiteHeader } from "@/components/ui/site-header";
import ImageHover from "@/components/ui/tailwind-hover-accordion";
import { JSX } from "react";

export default function HorizontalScroll(): JSX.Element {
  return (
    <div className="relative">
      <SiteHeader />
      <main>
        <section
          id="welcome"
          className="h-screen flex items-center justify-center tex bg-background bg-red-300"
        >
          <div className="container">
            <div className="text-center">
              <Introduction />
              {/* <RandomizedTextEffect text="Vì lợi ích mười năm trồng cây<br> Vì lợi ích trăm năm trồng người" /> */}
            </div>
          </div>
        </section>

        <div className="bg-orange-500" id="welcome">
          <InfinityBrand />
        </div>

        <section id="analysis">
          <AnalysisSection />
        </section>

        {/* Section 3: Trồng Người */}
        <section id="role" className="bg-yellow-300">
          <TimelineAnimation />
          <div className="container">
            <h2 className="text-3xl font-bold">
              Trồng Người và Phát Triển Xã Hội
            </h2>

            <h3 className="text-2xl font-bold mt-6">Dẫn Chứng Thực Tế</h3>

            <h3 className="text-2xl font-bold mt-6">
              Vai Trò Của Con Người Trong Sự Phát Triển Xã Hội
            </h3>
          </div>
        </section>

        {/* Other Sections */}
        <section
          id="development"
          className="h-screen flex items-center justify-center bg-muted/50 bg-white"
        >
          <div className="container">
            <h2 className="text-3xl font-bold">Testimonials</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              What our customers say
            </p>
          </div>
        </section>

        <section id="opinion">
          <DevelopmentSection />
          <TimelineDemo />
          <OpinionSection />
          <ImageHover />
          <LinearCard />
        </section>

        <section id="conclusion">
          <ConclusionSection />
        </section>
      </main>
    </div>
  );
}
