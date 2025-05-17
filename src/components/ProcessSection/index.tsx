'use client';
import React from "react";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing";
import TextGradientHeading from "@/components/ui/gradient-text";

interface ContentItem {
  title: string;
  description: string;
  badge: string;
  image?: string;
}

interface ProcessSectionProps {
  content: ContentItem[];
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ content }) => {
  return (
    <TracingBeam className="px-6 max-w-4xl overflow-y-clip mx-auto">
      <div className="md:text-5xl items-center lg:text-6xl xxs:text-4xl xs:text-4xl flex justify-center mt-12 font-bold text-gray-900 dark:text-white mb-0">
        Our
        <TextGradientHeading size={"md:text-5xl lg:text-6xl xxs:text-4xl xs:text-4xl ml-4"} text={"Process"} />
      </div>
      <div className="max-w-2xl xxs:px-6 xs:px-8 mx-auto antialiased mt-12 relative">
        {content.map((item, index) => (
          <div
            key={`content-${index}`}
            className={`mb-10 xxs:items-center xs:items-center min-h-[15rem] gap-x-16 flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } md:items-center`}
          >
            {item?.image && (
              <div className="w-full xxs:w-1/2 xs:w-1/2 md:w-1/2 mb-4 md:mb-0">
                <Image
                  src={item.image}
                  alt={`${item.title} thumbnail`}
                  height="1000"
                  width="1000"
                  className="rounded-lg object-cover opacity-90 mx-auto"
                />
              </div>
            )}
            <div className="w-full md:w-1/2">
              <div className="p-[3px] relative">
                <div className="absolute inset-0 bg-[#66cc66] rounded-full" />
                <h3 className="px-12 py-2 flex justify-center bg-total-black rounded-full relative group transition duration-200 text-white">
                  {item.badge}
                </h3>
              </div>
              <div className="text-sm mt-6 prose prose-sm dark:prose-invert text-center md:text-left">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

export default ProcessSection;
