'use client';

import React from 'react';
import { HeroSectionProps } from "@/types/serviceProjects";
import { TypewriterEffect } from "@/components/ui/type-writer";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import TextGradientHead1 from "@/components/ui/gradient-text-h1";

const ServiceHero: React.FC<HeroSectionProps> = ({ title, subtitle, description, image }) => {
  const descWords = subtitle.split(" ").map((word) => {
    return {
      text: word,
    };
  });

  return (
    <div className="container mx-auto py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-12">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 space-y-6 md:ml-20 md:space-y-8 mt-8 md:mt-0 text-center md:text-left">
          <div className="">
            <TextGradientHead1 size="xxs:text-3xl xs:text-4xl md:pb-4 md:text-4xl" text={title + " Company"} />
          </div>
          <div className="text-lg font-bold text-gray-700 dark:text-gray-300">
            <TypewriterEffect
              className="text-lg font-bold text-slate-200 dark:text-gray-300"
              words={descWords}
            />
          </div>
          <Link href="/contact" className="flex justify-center xs:pt-24 md:pt-0 md:justify-start">
            <Button
              borderRadius="1.75rem"
              borderClassName="radial-gradient(var(--green-400) 40%, transparent 60%)"
              className="w-52 rounded-full bg-primary/10 px-0 py-3 text-base font-extrabold text-stroke-dark duration-300 ease-in-out dark:bg-white/0 dark:text-white dark:hover:bg-dark/80"
            >
              Contact Us
            </Button>
          </Link>
        </div>
        <div className="w-full xs:w-screen md:w-4/5 flex justify-center md:justify-end">
          <img src={image} alt={title} className="w-full max-w-4xl md:max-w-7xl" />
        </div>
      </div>

    <div className="hidden">
     <section className="bottom-0 left-0 right-0 z-[-1] bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-white">
       <div className="max-w-7xl mx-auto text-center mt-10">
         <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-black">
           Advancing Businesses Through Intelligent AI Development Solutions

         </h2>
         <p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">
          KriraAI delivers AI development services that drive business transformation. A highly professional technological team with deep knowledge in machine learning, natural language processing, and predictive analytics, enables clients to realize the full scope of artificial intelligence. Our approach is simple yet highly result-oriented. We nurture to be acclaimed as one of the best AI services in India. 

         </p>
         <p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">
           We have already worked with over 50 global organizations, introducing generative AI services that support growth and operational resilience. Our uniqueness is embedded in the very notion of quality and precision: that is, working with crystal clarity about the clients' needs to produce top-notch AI solutions. 

         </p>
          <p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">
          We have a team of highly skilled professionals working on AI solutions to generate the utmost impact. Our dedication to consistent performance and agile responsiveness places us at the forefront of AI service providers in India and in international markets. The inclusive client base at KriraAI depicts our uniform contribution to the AI industry and builds a faith among the new ones. 

         </p>
       </div>
     </section>
   </div>
    </div>
  );
};

export default ServiceHero;
