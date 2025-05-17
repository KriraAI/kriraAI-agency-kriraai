'use client';
import { Vortex } from "@/components/ui/vortex";
import { Button } from "@/components/ui/moving-border";
import React from "react";
import Link from "next/link";

const GetInTouch = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div className="w-[calc(100%-4rem)] xxs:mx-0 xs:mx-0 xxs:w-full xs:w-full mx-auto rounded-md h-[70vh] overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={200}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl xxs:text-3xl xs:text-3xl md:text-6xl font-bold text-center">
          {title}
        </h2>
        <p className="text-slate-300 mb-12 text-sm xxs:max-w-64  xs:max-w-64 md:text-lg md:max-w-xl mt-6 text-center">
          {description}
        </p>
        <Link className="z-[1000]" href={buttonLink}>
          <Button
            borderRadius="1.75rem"
            borderClassName="radial-gradient(#66cc66 10%, transparent 60%)"
            className="h-12 w-max rounded-full bg-black px-5 text-base font-semibold text-white duration-300 dark:bg-black/80 dark:text-white dark:hover:bg-dark/80 lg:grid"
          >
            {buttonText}
          </Button>
        </Link>
        <div className="absolute z-[0] w-full h-[25vh] bottom-0 bg-gradient-to-t to-transparent from-total-black"></div>
      </Vortex>
    </div>
  );
};

export default GetInTouch;