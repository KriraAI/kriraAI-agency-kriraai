import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";
import TextGradientHead1 from "@/components/ui/gradient-text-h1";


const HeroSection: React.FC<{ title: string; image:string, subtitle: string; description: string }> = ({ title,image, subtitle, description }) => {
  return (
    <div className="relative w-full xxs:max-h-fit xs:max-h-fit xxs:pt-16  xs:pt-20 md:h-screen overflow-hidden flex items-center justify-center">
      <div className="flex xxs:flex-col-reverse xs:flex-col-reverse md:flex-row w-full h-full">
        <div className="xxs:w-full xs:w-full md:w-2/4 flex flex-col justify-center p-8 md:pl-24 lg:pl-40">
          {/*<h1 className="text-6xl font-bold leading-tight mb-4">{title}</h1>*/}
          <div className="text-5xl xxs:text-2xl xs:text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <TextGradientHead1 size={"xxs:text-4xl xs:text-4xl xs:text-center md:text-start md:text-5xl pb-4 "} text={title} />
          </div>
          <h2 className="xxs:text-xl xs:text-xl xs:text-center md:text-start xs:font-medium text-text-secondary md:text-xl md:font-medium mb-4">{subtitle}</h2>
          <Link 
            className={"flex xs:justify-center md:justify-start"}
            href={"/contact"}>
            <Button
              borderRadius="1.75rem"
              borderClassName="radial-gradient(#0099cb 40%, transparent 60%)"
              className="h-12 w-max px-12 rounded-full bg-secondary/60 text-base font-semibold text-dark duration-300 dark:bg-black/80 dark:text-white dark:hover:bg-dark/80 md:grid"
            >
              Reach Out
            </Button>
          </Link>
        </div>
        <div className="xs:w-full md:w-2/4 relative flex items-center justify-center">
          <img
            src={image}
            alt="Fintech"
            className="w-auto h-full left-0 object-contain"
          />
        </div>
      </div>
      {/*<div className="absolute z-[0] w-full h-[35vh] bottom-0 bg-gradient-to-t from-white to-transparent dark:from-total-black "></div>*/}
    </div>
  );
};

export default HeroSection;