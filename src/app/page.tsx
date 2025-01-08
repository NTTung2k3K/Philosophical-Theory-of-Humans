"use client";

import TimelineAnimation from "@/app/_components/test";
import { SiteHeader } from "@/components/ui/site-header";
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
            <h1 className="text-4xl font-bold">Welcome to Our Site</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Scroll down to explore more
            </p>
          </div>
        </section>

        <section
          id="analysis"
          className="h-screen flex items-center justify-center bg-muted/50 bg-blue-300"
        >
          <div className="container">
            <h2 className="text-3xl font-bold">Features</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Discover our amazing features
            </p>
          </div>
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

        <section
          id="development"
          className="h-screen flex items-center justify-center bg-muted/50 bg-black"
        >
          <div className="container">
            <h2 className="text-3xl font-bold">Testimonials</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              What our customers say
            </p>
          </div>
        </section>

        <section
          id="opinion"
          className="h-screen flex items-center justify-center bg-green-300"
        >
          <div className="container">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Get in touch with us
            </p>
          </div>
        </section>
        <section
          id="conclustion"
          className="h-screen flex items-center justify-center bg-orange-400 "
        >
          <div className="container">
            <h2 className="text-3xl font-bold">conclustion Us</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Get in touch with us
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
