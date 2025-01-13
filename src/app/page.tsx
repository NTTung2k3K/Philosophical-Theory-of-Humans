"use client";

import AnalysisSection from "@/app/_components/analysis";
import { AnimatedTestimonialsDemo } from "@/app/_components/animated-testimonials";
import ConclusionSection from "@/app/_components/conclusion";
import DevelopmentSection from "@/app/_components/development";
import { HeroHighlightDemo } from "@/app/_components/highlight-text";
import InfinityBrand from "@/app/_components/infinity-brand";
import Introduction from "@/app/_components/introduction";
import LazyVideo from "@/app/_components/lazy-video";
import OpinionSection from "@/app/_components/opinion";
import { HeroScrollDemo } from "@/app/_components/scroll-animation";
import { StickyScrollRevealDemo } from "@/app/_components/sticky-scroll";
import { TabsDemo } from "@/app/_components/tabs";
import { TextGenerateEffectDemo } from "@/app/_components/text-generate-effect";
import { SpotlightPreview } from "@/app/_components/text-spoilight";
import TimelineAnimation from "@/app/_components/timeline";
import { TimelineDemo } from "@/app/_components/timeline-2";
import { TracingBeamDemo } from "@/app/_components/tracing-beam";
import WelcomeSection from "@/app/_components/welcome-section";
import LampDemo from "@/components/ui/lamp";
import LinearCard from "@/components/ui/linear-card";
import { SiteHeader } from "@/components/ui/site-header";
import ImageHover from "@/components/ui/tailwind-hover-accordion";
import { JSX } from "react";
export default function HorizontalScroll(): JSX.Element {
  return (
    <div className="relative">
      <SiteHeader />
      {/* <FloatingDockDemo /> */}

      <main>
        <section
          id="welcome-header"
          className="h-screen flex items-center justify-center  bg-black relative overflow-hidden"
        >
          <LazyVideo
            src="/assets/videos/main.mp4"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="container relative z-10">
            <div className="text-center">
              <WelcomeSection />
            </div>
          </div>
        </section>
        <section id="welcome-header">
          <div className="bg-black">
            <InfinityBrand />
          </div>
        </section>

        <div
          id="welcome-content"
          className="bg-black text-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/image/main-sentence.jpg')`,
            backgroundSize: "cover",
            height: "100vh",
            backgroundPosition: "center",
            filter: "brightness(90%)",
          }}
        >
          <Introduction />
        </div>
        <section id="analysis">
          <AnalysisSection />
          <DevelopmentSection />
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
          <TimelineDemo />
          <OpinionSection />
          <ImageHover />
          <LinearCard />
          <TextGenerateEffectDemo />
        </section>

        <section id="conclusion" className="bg-black">
          <TracingBeamDemo />
          <div className="my-1"></div>
          <StickyScrollRevealDemo />
          <TabsDemo />
          <LampDemo />
          <SpotlightPreview />
          <HeroHighlightDemo />
          <HeroScrollDemo />
          <AnimatedTestimonialsDemo />
          <ConclusionSection />
        </section>
      </main>
    </div>
  );
}
