
import { HoverEffect } from "@/components/ui/card-hover";
import TextGradientHeading from "@/components/ui/gradient-text";
import React from "react";

const AboutSectionOne = () => {
  const features = [
    {
      title: "Innovative Solutions",
      description: "From AI-driven insights to immersive user experiences, we craft solutions that not only meet your needs but also anticipate your future challenges.",
      link: "/",
    },
    {
      title: "Strategic Collaboration",
      description: "We're not just vendors; we're partners in your success story. Our collaborative approach ensures that we understand your business inside-out.",
      link: "/",
    },
    {
      title: "Elite Talent",
      description: "Our team isn't just skilled; they're visionaries. With a passion for innovation and a knack for problem-solving.",
      link: "/",
    },
    {
      title: "Client-Centric Experience",
      description: "Your journey with KriraAI isn't just about results; it's about the experience.",
      link: "/",
    },
  ];
  return (
    <div className="max-w-6xl xs:flex-col  md:flex md:flex-row mx-auto px-8 xs:space-x-0 md:space-x-8">
      <div className={"xs:w-full md:w-1/3 flex items-center"}>
        <div>
          <div className="  md:text-5xl xxs:text-3xl xs:text-3xl font-bold justify-center xs:text-center md:text-end mt-6 md:mb-12">
            Why
            <TextGradientHeading text="KriraAI" size={"text-5xl"} />
            Stands Out
          </div>
          <p className="max-w-md xxs:mt-6 xs:mt-6 md:mt-4 xs:mb-2 md:mb-12 text-justify text-text-secondary">
            From AI-driven insights to immersive user experiences, we craft solutions that not only meet your needs but
            also anticipate your future challenges.
          </p>
        </div>
      </div>
      <div className={"xs:w-fit md:w-2/3"}><HoverEffect items={features} /></div>
    </div>
  );
};


export default AboutSectionOne;
