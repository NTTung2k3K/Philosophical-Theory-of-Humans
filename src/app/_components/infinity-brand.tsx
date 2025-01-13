// https://cruip.com/create-an-infinite-horizontal-scroll-animation-with-tailwind-css/
import Image from "next/image";
import React from "react";

function InfinityBrand() {
  return (
    <>
      <div className="w-full text-5xl py-8  inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ">
        <ul className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <a
              target="_blank"
              href="https://daihoc.fpt.edu.vn/"
              className="border bg-primary  text-primary-foreground text-2xl  sm:grid hidden place-content-center  p-2   rounded-md"
            >
              <Image
                alt="FPT University"
                src="/assets/image/logo-fpt.jpg"
                height={100}
                width={100}
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="/"
              className="border bg-primary  text-primary-foreground text-2xl  sm:grid hidden place-content-center  p-2   rounded-md"
            >
              <Image
                alt="FPT University"
                src="/assets/image/logo.jpg"
                height={100}
                width={100}
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="/"
              className="border bg-primary  text-primary-foreground text-2xl  sm:grid hidden place-content-center  p-2   rounded-md"
            >
              <Image
                alt="FPT University"
                src="/assets/image/sponsor.jpg"
                height={100}
                width={100}
              />
            </a>
          </li>
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          <li>
            <a
              target="_blank"
              href="https://daihoc.fpt.edu.vn/"
              className="border bg-primary  text-primary-foreground text-2xl  sm:grid hidden place-content-center  p-2   rounded-md"
            >
              <Image
                alt="FPT University"
                src="/assets/image/logo-fpt.jpg"
                height={100}
                width={100}
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="/"
              className="border bg-primary  text-primary-foreground text-2xl  sm:grid hidden place-content-center  p-2   rounded-md"
            >
              <Image
                alt="FPT University"
                src="/assets/image/logo.jpg"
                height={100}
                width={100}
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="/"
              className="border bg-primary  text-primary-foreground text-2xl  sm:grid hidden place-content-center  p-2   rounded-md"
            >
              <Image
                alt="FPT University"
                src="/assets/image/sponsor.jpg"
                height={100}
                width={100}
              />
            </a>
          </li>
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          <li>
            <a
              target="_blank"
              href="https://daihoc.fpt.edu.vn/"
              className="border bg-primary  text-primary-foreground text-2xl  sm:grid hidden place-content-center  p-2   rounded-md"
            >
              <Image
                alt="FPT University"
                src="/assets/image/logo-fpt.jpg"
                height={100}
                width={100}
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="/"
              className="border bg-primary  text-primary-foreground text-2xl  sm:grid hidden place-content-center  p-2   rounded-md"
            >
              <Image
                alt="FPT University"
                src="/assets/image/logo.jpg"
                height={100}
                width={100}
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="/"
              className="border bg-primary  text-primary-foreground text-2xl  sm:grid hidden place-content-center  p-2   rounded-md"
            >
              <Image
                alt="FPT University"
                src="/assets/image/sponsor.jpg"
                height={100}
                width={100}
              />
            </a>
          </li>
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          <li>
            <a
              target="_blank"
              href="https://daihoc.fpt.edu.vn/"
              className="border bg-primary  text-primary-foreground text-2xl  sm:grid hidden place-content-center  p-2   rounded-md"
            >
              <Image
                alt="FPT University"
                src="/assets/image/logo-fpt.jpg"
                height={100}
                width={100}
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="/"
              className="border bg-primary  text-primary-foreground text-2xl  sm:grid hidden place-content-center  p-2   rounded-md"
            >
              <Image
                alt="FPT University"
                src="/assets/image/logo.jpg"
                height={100}
                width={100}
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="/"
              className="border bg-primary  text-primary-foreground text-2xl  sm:grid hidden place-content-center  p-2   rounded-md"
            >
              <Image
                alt="FPT University"
                src="/assets/image/sponsor.jpg"
                height={100}
                width={100}
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default InfinityBrand;
