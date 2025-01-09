"use client";

import AnalysisSection from "@/app/_components/analysis";
import ConclusionSection from "@/app/_components/conclusion";
import DevelopmentSection from "@/app/_components/development";
import InfinityBrand from "@/app/_components/infinity-brand";
import OpinionSection from "@/app/_components/opinion";
import TimelineAnimation from "@/app/_components/timeline";
import { SiteHeader } from "@/components/ui/site-header";
import { RandomizedTextEffect } from "@/components/ui/text-randomized";
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
              <RandomizedTextEffect text="Vì lợi ích mười năm trồng cây<br> Vì lợi ích trăm năm trồng người" />
            </div>
          </div>
        </section>

        <div className="bg-orange-500" id="welcome">
          <InfinityBrand />
        </div>

        <section id="analysis">
          <AnalysisSection />
        </section>

        <section id="role" className="  bg-yellow-300">
          <TimelineAnimation />
          <div className="container">
            <h2 className="text-3xl font-bold">Pricing</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Choose your perfect plan
            </p>
          </div>
          <div className="container">
            <h2 className="text-3xl font-bold">Pricing</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Choose your perfect plan
            </p>
          </div>
          <div className="container">
            <h2 className="text-3xl font-bold">Pricing</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Choose your perfect plan
            </p>
          </div>
          <div className="container">
            <h2 className="text-3xl font-bold">Pricing</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Choose your perfect plan
            </p>
          </div>
          <div className="container">
            <h2 className="text-3xl font-bold">Pricing</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Choose your perfect plan
            </p>
          </div>
        </section>

        <section id="development">
          <DevelopmentSection />
        </section>

        <section id="opinion">
          <OpinionSection />
        </section>
        <section id="conclusion">
          <ConclusionSection />
        </section>
      </main>
    </div>
  );
}
