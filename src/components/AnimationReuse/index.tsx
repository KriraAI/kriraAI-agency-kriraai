'use client';
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/moving-border";

const Lottie = dynamic(() => import("@lottielab/lottie-player/react"), {
  ssr: false,
});

interface CompanySectionProps {
  animationPath: string;
  heading: string;
  content: string;
  buttonText: string;
  buttonLink: string;
}

const CompanySection: React.FC<CompanySectionProps> = ({
                                                         animationPath,
                                                         heading,
                                                         content,
                                                         buttonText,
                                                         buttonLink
                                                       }) => {
  return (
    <div className="flex xxs:mb-0 xs:mb-0 xxs:flex xxs:flex-col xs:flex xs:flex-col md:flex-row md:px-20 h-auto justify-center items-center">
      <Lottie
        className="h-[32rem]"
        src={animationPath}
        autoplay
      />
      <div className="flex  xxs:w-full xs:w-full md:w-1/2 md:px-20 flex-col justify-center items-center md:items-end">
        <h2 className="xxs:text-3xl  xs:text-3xl md:text-5xl text-center md:text-end font-extrabold dark:text-slate-300 text-gray-800 md:mt-6">
          {heading}
        </h2>
        <p className="text-lg xxs:px-6 xs:px-6 md:px-0 text-justify md:text-end py-10 text-gray-500 dark:text-gray-400">
          {content}
        </p>
        <Link className="flex justify-center md:justify-end" href={buttonLink}>
          <Button
            borderRadius="1.75rem"
            borderClassName="radial-gradient(#0099cb 40%, transparent 60%)"
            className="h-12 w-max rounded-full bg-secondary/60 px-8 text-base font-semibold text-dark duration-300 dark:bg-black/80 dark:text-white dark:hover:bg-dark/80"
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CompanySection;
