import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/moving-border";
import { AnimationPath } from "@/components/AnimLogo/OtherAnimations";


const CompanySection = () => {
  return (
    <div className={"flex xxs:mb-0 xs:mb-0 xxs:flex xxs:flex-col  xs:flex xs:flex-col md:flex-row md:px-20 h-auto justify-center items-start "}>
      <div
        className={"flex xs:w-full md:w-1/2 md:px-20 flex-col justify-between"}>
        <h2
          className="xxs:text-4xl xs:text-4xl md:text-5xl md:text-end xxs:text-center xs:text-center font-extrabold dark:text-slate-300 text-gray-800 md:mt-6">
          Services <br />We Provide
        </h2>
        <p className="text-lg xxs:px-6 xs:px-6 md:px-0 xxs:text-justify xs:text-justify md:text-end py-10 text-gray-500 dark:text-gray-400">
          Our team is made up of highly skilled professionals,
          who are passionate about their work and are committed to delivering the best results for our clients.
        </p>
        <Link
          className={"flex md:justify-end xxs:justify-center  xs:justify-center"}
          href={"/services"}>
          <Button
            borderRadius="1.75rem"
            borderClassName="radial-gradient(#0099cb 40%, transparent 60%)"
            className="h-12 w-max rounded-full bg-secondary/60 px-8 text-base font-semibold text-dark duration-300 dark:bg-black/80 dark:text-white dark:hover:bg-dark/80 md:grid"
          >
            Our Expertise
          </Button>
        </Link>
      </div>
      <AnimationPath
        classname="h-[32rem] "
        path="/images/animations/contact-2.json"
      />
    </div>
  );
}

export default CompanySection;