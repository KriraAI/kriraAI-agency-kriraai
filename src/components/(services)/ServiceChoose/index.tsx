"use client";
import React from "react";
import Image from "next/image";
import StickyScroll from "@/components/ui/sticky-reveal";
import TextGradientHeading from "@/components/ui/gradient-text";
import { whyContent } from "@/types/serviceProjects";

const StickyScrollRevealDemo = ({serviceContent} : { serviceContent : whyContent[]}) => {
  return (
    < >
      <div className="md:text-5xl items-center xxs:text-3xl lg:text-6xl xs:text-4xl flex justify-center mt-12 font-bold text-gray-900 dark:text-white mb-8">
        Why Choose
        <TextGradientHeading size={"md:text-5xl ml-4 pt-6 lg:text-6xl xs:text-4xl pb-8"} text={" KriraAI"} />
      </div>
      <StickyScroll content={serviceContent} />
    </>
  );
}

export default StickyScrollRevealDemo;