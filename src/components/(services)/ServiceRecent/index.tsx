import React from "react";
import AnimatedGradientText from "@/components/ui/animated-text";
import Link from "next/link";
import { OurProject } from "@/types/serviceProjects";


const ServiceRecent = ({ projects }: { projects: OurProject[] }) => {
  return (
   

    <div className=" bg-gradient-to-t from-slate-200 dark:from-dark to-transparent rounded-2xl py-16 lg:px-10">
 {/* <div className="hidden">
     <section className="bottom-0 left-0 right-0 z-[-1] bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-white">
       <div className="max-w-7xl mx-auto text-center mt-10">
         <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-black">
          How We Transform AI Service Delivery
         </h2>
         <h3 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-black">Custom Model Development</h3>
         <p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">
          As a leading AI development services company, we build robust, intelligent, and scalable solutions that meet real-world challenges. Our process includes:

         </p>

         <h3 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-black">Predictive Data Insights:</h3>
         <p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">
          Transforming predictive data into insights to facilitate swift decisions
         </p>

          <h3 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-black">Natural Language Interfaces: </h3>
          <p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">
          We develop user-friendly AI tools that enhance user satisfaction and ease tasks.
         </p>

         <h3 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-black">Computer Vision Applications:  </h3>
          <p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">
          We implement visual intelligence features that enhance accuracy, safety, and monitoring.
         </p>

         <p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">
          Our solutions are again designed to last in performance and thereby adjust to new challenges as well as an evolving business landscape.
         </p>
       </div>
     </section>
   </div> */}

   {/* <div className="hidden">
    <section className="bottom-0 left-0 right-0 bg-cover bg-center bg-white">
      <div className="bottom-0 left-0 right-0 z-[-1] bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-white">
        <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-black">AI-as-a-Service</h2>
        <p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">Instead of laying down a huge infrastructure, AI as a Service (AIaaS) is the weak-rather-powerful toolbox capable of on-demand access in the cloud. Here’s how it reshapes businesses</p>
        <h3 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-black">Easy Access: <p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">We deliver enterprise-grade AI without large upfront costs.</p></h3>
        <h3 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-black">Dynamic Scaling:<p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">Our AI services scale flexibly as your needs evolve.</p></h3>
        <h3 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-black">Cost-Effective: <p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">We ensure affordability by offering managed AI solutions.</p></h3>
        <h3 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-black">Ongoing Enhancements: <p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">We take charge of maintaining and refining AI models, for you to focus highly on business.</p></h3>
        <p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">AIaaS reduces technology barriers and enables rapid deployment of intelligent capabilities, giving you the freedom to innovate confidently.</p>
      </div>
    </section>
   </div> */}
      
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