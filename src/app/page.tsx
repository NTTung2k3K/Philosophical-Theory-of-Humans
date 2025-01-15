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
import { HeroParallaxDemo } from "./_components/hero-parallax";
import { GoogleGeminiEffectDemo } from "./_components/google-gemini-effect";
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
          <OpinionSection />
          <DevelopmentSection />
        </section>



        {/* Other Sections */}
        {/*<section
          id="development"
          className="h-screen flex items-center justify-center bg-muted/50 bg-white"
        >
          <div className="container">
            <h2 className="text-3xl font-bold">Testimonials</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              What our customers say
            </p>
          </div>
        </section>*/}
        <section id="role" className="bg-white-300">
        <TimelineDemo />
        <LampDemo />
        <TimelineAnimation />
        <HeroParallaxDemo/>
        </section>

        {/*className="h-screen flex items-center justify-center bg-muted/50 bg-white-300"*/}
        <section
          id="development"
        >
        <GoogleGeminiEffectDemo/>
        <TracingBeamDemo />
        </section>

        {/* <section id="conclusion" className="bg-black">
          <div className="my-1"></div>
          <StickyScrollRevealDemo />
          <TabsDemo />
          <SpotlightPreview />
          <HeroHighlightDemo />
          <HeroScrollDemo />
          <AnimatedTestimonialsDemo />
        </section> */}

        <section id="opinion" className="bg-black">
          <section className="text-white h-screen w-full bg-slate-950 grid place-content-center relative">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%] text-green-500">
              &quot;Vì lợi ích mười năm trồng cây, vì lợi ích trăm năm trồng
              người&quot;
            </h1>
            <br />
            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Dưới đây là quan điểm của nhóm! 👇
            </h1>
          </section>

          <ConclusionSection />
        </section>
      </main>
    </div>
  );
}
