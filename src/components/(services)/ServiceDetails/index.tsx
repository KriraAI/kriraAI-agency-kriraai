'use client';

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ServiceDetailsProps } from "@/types/serviceProjects";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";
import HoverColorBtn from "@/components/Common/HoverColorBtn";


interface Detail {
  title: string;
  description: string;
  work?: string; // Optional work attribute
  link?: string; // Optional link attribute
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ title,work, description, details }) => {
  const isMobile = useIsMobile();

  return (
    <>
      <div className="xs:px-8 xxs:px-6 md:container xs:pt-12 xs:mb-4 md:py-16 md:mb-20">
        <div className="mx-auto flex flex-col lg:gap-20 lg:px-24 md:flex-row">
          <div className=" xs:w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 md:sticky top-60 h-full flex items-center">
            <div>
              <h2 className="xs:text-3xl md:text-5xl font-bold text-text-primary xs:text-center md:text-start dark:text-white mb-4">{title}</h2>
              <p className="text-gray-700 xs:mt-6 md:mt-16 text-wrap text-justify dark:text-gray-300 mb-12">{description}</p>
              {/*<Link */}
              {/*  className={"flex xs:justify-center md:justify-start items-center"}*/}
              {/*  href={{ pathname: '/work', query: `${work}` }}*/}
              {/*>*/}
              {/*  <button className="p-[3px] relative">*/}
              {/*    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full" />*/}
              {/*    <div*/}
              {/*      className="xs:px-24 xs:py-3 md:px-12 md:py-2 bg-total-black rounded-full relative group transition duration-200 text-white hover:bg-transparent">*/}
              {/*      Explore Work*/}
              {/*    </div>*/}
              {/*  </button>*/}
              {/*</Link>*/}
              <HoverColorBtn text={"Explore Work"} redirect={'/work'} query={work} />
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 relative">
            {isMobile ? (
              <ServiceDetailsSlider details={details.slice(0, 9)} />
            ) : (
              <div className="space-y-8">
                {details.slice(0, 9).map((detail, index) => (
                  <ServiceDetailCard key={index} detail={detail} index={index} />
                ))}
              </div>
            )}
          </div>
          <div
            className="absolute scale-x-[-1] blur-sm top-[50rem] opacity-50 left-0 right-0 z-[0] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover xs:hidden bg-center bg-no-repeat"></div>
        </div>
      </div>
    </>
  );
};

const ServiceDetailsSlider: React.FC<{ details: { title: string; description: string }[] }> = ({ details }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % details.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [details.length]);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? details.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % details.length);
  };

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500"
             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {details.map((detail, index) => (
            <div key={index} className="w-full flex-shrink-0 p-4">
              <ServiceDetailCard detail={detail} index={index} />
            </div>
          ))}
        </div>
      </div>
      <div className={"relative z-50 flex items-center justify-between pt-10 bottom-0"}>
        <button onClick={goToPreviousSlide}
                className=" left-2 top-1/2 transform -translate-y-1/2 bg-primary bg-opacity-80 text-white w-20 p-2 rounded-full">❮
        </button>
        <button onClick={goToNextSlide}
                className=" right-2 top-1/2 transform -translate-y-1/2 bg-secondary bg-opacity-80 text-white w-20 p-2 rounded-full">❯
        </button>

      </div>
    </>
  );
};

const ServiceDetailCard: React.FC<{ detail: Detail; index: number }> = ({ detail, index }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });

  const [zIndex, setZIndex] = useState(0);

  useEffect(() => {
    if (inView) {
      setZIndex(index + 1);
    }
  }, [inView, index]);

  return (
    <div
      ref={ref}
      className="bg-gradient-to-b overflow-clip from-slate-300 to-white dark:to-total-black dark:from-dark h-64 p-6 border-[.5px] border-gray-400 dark:border-gray-600 rounded-3xl transition-opacity duration-200"
      style={{ zIndex, position: inView ? 'sticky' : 'static', top: `calc(12rem + ${index * 40}px)` }}
    >
      {detail.link ? (
        <a href={detail.link} target="_blank" rel="noopener noreferrer">
          <h3 className="text-2xl font-bold text-gray-900 mt-4 hover:text-primary dark:text-white mb-4">{detail.title}</h3>
        </a>
      ) : (
        <h3 className="text-2xl font-bold text-gray-900 mt-4 dark:text-white mb-4">{detail.title}</h3>
      )}
      <p className="text-gray-700 md:line-clamp-4 lg:line-clamp-5 text-justify dark:text-gray-300">{detail.description}</p>
    </div>
  );
};


// const ServiceDetailCard: React.FC<{ detail: { title: string; description: string }; index: number }> = ({ detail, index }) => {
//   const { ref, inView } = useInView({
//     threshold: 0,
//     triggerOnce: true
//   });
//
//   const [zIndex, setZIndex] = useState(0);
//
//   useEffect(() => {
//     if (inView) {
//       setZIndex(index + 1);
//     }
//   }, [inView, index]);
//
//   return (
//     <div
//       ref={ref}
//       className="bg-gradient-to-b overflow-clip from-slate-300 to-white dark:to-total-black dark:from-dark h-64 p-6 border-[.5px] border-gray-400 dark:border-gray-600 rounded-3xl transition-opacity duration-200"
//       style={{ zIndex, position: inView ? 'sticky' : 'static', top: `calc(12rem + ${index * 40}px)` }}
//     >
//       <h3 className="text-2xl font-bold text-gray-900 mt-4 dark:text-white mb-4">{detail.title}</h3>
//       <p className="text-gray-700 md:line-clamp-4 lg:line-clamp-5 text-justify dark:text-gray-300">{detail.description}</p>
//     </div>
//   );
// };

export default ServiceDetails;
