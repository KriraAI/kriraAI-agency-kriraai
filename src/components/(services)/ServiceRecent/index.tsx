import React from "react";
import AnimatedGradientText from "@/components/ui/animated-text";
import Link from "next/link";
import { OurProject } from "@/types/serviceProjects";


const ServiceRecent = ({ projects }: { projects: OurProject[] }) => {
  return (
    <div className=" bg-gradient-to-t from-slate-200 dark:from-dark to-transparent rounded-2xl py-16 lg:px-10">
      <div className="container mx-auto">
        <div className="text-center flex md:flex-row xs:flex-col xxs:flex-col  justify-between mb-8">
          <h2 className="xs:text-4xl xxs:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">
            Our Recent Projects
          </h2>
          <Link href="/work">
            <AnimatedGradientText>
              <span
                className={`w-32 inline px-0 py-1 text-base font-extrabold animate-gradient bg-gradient-to-r from-[#66cc66] via-[#0099cb] to-[#000] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent `}
              >View All
              </span>
            </AnimatedGradientText>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index}
                 className="w-full 2xl:w-[38rem] lg:w-[32rem] border-[.5px] border-slate-500 hover:border-secondary hover:scale-[103%] p-3 rounded-lg shadow-md">
              <img src={project.image} alt={project.title} className="w-5xl h-auto object-contain rounded-md mb-4" />
              {/*<h3 className="text-lg font-bold text-gray-900 dark:text-white">{project.title}</h3>*/}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceRecent;