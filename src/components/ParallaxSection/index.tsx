// 'use client';
// import React, { useState, useEffect } from "react";
// import { useInView } from "react-intersection-observer";
// import Image from "next/image";
// import serviceData from "@/data/service_parallax.json";
// import Link from "next/link";

// const ParallaxSection: React.FC = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize(); // Set initial state
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className="relative w-full">
//       {serviceData.map((service, index) => (
//         <ParallaxSectionItem key={service.id} service={service} index={index} isMobile={isMobile} />
//       ))}
//     </div>
//   );
// };

// const ParallaxSectionItem = ({ service, index, isMobile }) => {
//   const { ref, inView } = useInView({
//     threshold: 0.5,
//     triggerOnce: true,
//   });

//   const [zIndex, setZIndex] = useState(0);

//   useEffect(() => {
//     if (inView) {
//       setZIndex(index + 1);
//     }
//   }, [inView, index]);

//   return (
//     <div
//       ref={ref}
//       className={`${
//         isMobile ? '' : 'sticky-section'
//       } w-full flex flex-col justify-center bg-white transform transition-all duration-200`}
//       style={{ zIndex }}
//     >
//       <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
//       <div className="container mx-auto lg:px-32 sm:px-4 py-16 md:py-32 flex flex-col md:flex-row items-center justify-between">
//         <div className="w-full md:w-1/2 flex justify-start mt-8 md:mt-0">
//           <Image
//             src={service.image}
//             alt={`${service.title} illustration`}
//             width={500}
//             height={300}
//             className="max-w-full object-contain h-auto"
//           />
//         </div>
//         <div className="w-full md:w-1/2 mb-8 text-center md:mb-0 md:text-left">
//         {/* check */}
//         <meta name="Best Data Science Service Company in India | Krira AI" content="Unlock data-driven success with Krira AI, the best data science service company in India offering expert analytics, consulting, and AI solutions." />
//           <Link href={service.link}>
//             <h2 className="mb-8 text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 hover:text-primary">
//               {service.title}
//             </h2>
//           </Link>
//           <ul className="m-0 mb-4 list-none space-y-6 py-8">
//             {service.items.slice(0, 7).map((item, idx) => (
//               <div key={idx}>
//                 <Link href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}>
//                   <li
//                     className="flex items-center justify-between text-lg text-gray-900 dark:text-gray-100 hover:text-primary">
//                     {item} 
//                     {/*<span className="text-lg">↗</span>*/}
//                     <img className={"text-black w-4"} src={"/images/icons/arrow.svg"} alt={"arrow"} />
//                   </li>
//                 </Link>
                
//                 <span className="mt-2 block h-px w-full rounded-full bg-gray-300 dark:bg-gray-700"></span>
//               </div>
//             ))}
//           </ul>

//           <Link href={{ pathname: '/work', query: `${service.work}` }}>
//             <button className="p-[3px] relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full" />
//               <div
//                 className="px-12 py-2 bg-total-black rounded-full relative group transition duration-200 text-white hover:bg-transparent">
//                 Explore Work
//               </div>
//             </button>
//           </Link>
//         </div>
//       </div>
//       <div
//         className="absolute xs:hidden md:hidden blur-2xl top-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
//     </div>
//   );
// };

// export default ParallaxSection;



// 'use client';
// import React, { useState, useEffect } from "react";
// import { useInView } from "react-intersection-observer";
// import Image from "next/image";
// import serviceData from "@/data/service_parallax.json";
// import Link from "next/link";

// const ParallaxSection: React.FC = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize(); // Set initial state
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className="relative w-full">
//       {serviceData.map((service, index) => (
//         <ParallaxSectionItem key={service.id} service={service} index={index} isMobile={isMobile} />
//       ))}
//     </div>
//   );
// };

// const ParallaxSectionItem = ({ service, index, isMobile }) => {
//   const { ref, inView } = useInView({
//     threshold: 0.5,
//     triggerOnce: true,
//   });

//   const [zIndex, setZIndex] = useState(0);
//   const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

//   useEffect(() => {
//     if (inView) {
//       setZIndex(index + 1);
//     }
//   }, [inView, index]);

//   const handleToggle = (idx: number) => {
//     setOpenItemIndex(prev => (prev === idx ? null : idx));
//   };

//   return (
//     <div
//       ref={ref}
//       className={`${
//         isMobile ? '' : 'sticky-section'
//       } w-full flex flex-col justify-center bg-white transform transition-all duration-200`}
//       style={{ zIndex }}
//     >
//       <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
//       <div className="container mx-auto lg:px-32 sm:px-4 py-16 md:py-32 flex flex-col md:flex-row items-center justify-between">
//         <div className="w-full md:w-1/2 flex justify-start mt-8 md:mt-0">
//           <Image
//             src={service.image}
//             alt={`${service.title} illustration`}
//             width={500}
//             height={300}
//             className="max-w-full object-contain h-auto"
//           />
//         </div>

//         <div className="w-full md:w-1/2 mb-8 text-center md:mb-0 md:text-left">
//           {/* SEO meta */}
//           <meta name="Best Data Science Service Company in India | Krira AI" content="Unlock data-driven success with Krira AI, the best data science service company in India offering expert analytics, consulting, and AI solutions." />

//           <Link href={service.link}>
//             <h2 className="mb-8 text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 hover:text-primary">
//               {service.title}
//             </h2>
//           </Link>

//           <ul className="m-0 mb-4 list-none space-y-6 py-8">
//             {service.items.slice(0, 7).map((item, idx) => (
//               <div key={idx} className="mb-4">
//                 <div
//                   onClick={() => handleToggle(idx)}
//                   className="cursor-pointer flex items-center justify-between text-lg text-gray-900 dark:text-gray-100 hover:text-primary"
//                 >
//                   {item}
//                   <img className="w-4 ml-2" src="/images/icons/arrow.svg" alt="arrow" />
//                 </div>
//                 <span className="mt-2 block h-px w-full rounded-full bg-gray-300 dark:bg-gray-700"></span>

//                 {openItemIndex === idx && (
//                   <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//                     <p>
//                       {/* Replace with actual description from JSON if available */}
//                       {`This is a short description about ${item}.`}
//                     </p>
//                     <Link
//                       href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
//                       className="text-blue-600 hover:underline text-sm inline-block mt-2"
//                     >
//                       Visit Page ↗
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </ul>

//           <Link href={{ pathname: '/work', query: `${service.work}` }}>
//             <button className="p-[3px] relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full" />
//               <div className="px-12 py-2 bg-total-black rounded-full relative group transition duration-200 text-white hover:bg-transparent">
//                 Explore Work
//               </div>
//             </button>
//           </Link>
//         </div>
//       </div>

//       <div className="absolute xs:hidden md:hidden blur-2xl top-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
//     </div>
//   );
// };

// export default ParallaxSection;

// 'use client';
// import React, { useState, useEffect } from "react";
// import { useInView } from "react-intersection-observer";
// import Image from "next/image";
// import serviceData from "@/data/service_parallax.json";
// import Link from "next/link";

// const ParallaxSection: React.FC = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize(); // Set initial state
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className="relative w-full">
//       {serviceData.map((service, index) => (
//         <ParallaxSectionItem
//           key={service.id}
//           service={service}
//           index={index}
//           isMobile={isMobile}
//         />
//       ))}
//     </div>
//   );
// };

// const ParallaxSectionItem = ({ service, index, isMobile }) => {
//   const { ref, inView } = useInView({
//     threshold: 0.5,
//     triggerOnce: true,
//   });

//   const [zIndex, setZIndex] = useState(0);
//   const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

//   useEffect(() => {
//     if (inView) {
//       setZIndex(index + 1);
//     }
//   }, [inView, index]);

//   const handleToggle = (idx: number) => {
//     setOpenItemIndex((prev) => (prev === idx ? null : idx));
//   };

//   return (
//     <div
//       ref={ref}
//       className={`${
//         isMobile ? "" : "sticky-section"
//       } w-full flex flex-col justify-center bg-white transform transition-all duration-200`}
//       style={{ zIndex }}
//     >
//       <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
//       <div className="container mx-auto lg:px-32 sm:px-4 py-16 md:py-32 flex flex-col md:flex-row items-center justify-between">
//         <div className="w-full md:w-1/2 flex justify-start mt-8 md:mt-0">
//           <Image
//             src={service.image}
//             alt={`${service.title} illustration`}
//             width={500}
//             height={300}
//             className="max-w-full object-contain h-auto"
//           />
//         </div>

//         <div className="w-full md:w-1/2 mb-8 text-center md:mb-0 md:text-left">
//           <meta
//             name="Best Data Science Service Company in India | Krira AI"
//             content="Unlock data-driven success with Krira AI, the best data science service company in India offering expert analytics, consulting, and AI solutions."
//           />

//           <Link href={service.link}>
//             <h2 className="mb-8 text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 hover:text-primary">
//               {service.title}
//             </h2>
//           </Link>

//           <ul className="m-0 mb-4 list-none space-y-6 py-8">
//             {service.items.slice(0, 7).map((item, idx) => {
//               return (
//                 <div key={idx} className="mb-4">
//                   <div
//                     onClick={() => handleToggle(idx)}
//                     className="cursor-pointer flex items-center justify-between text-lg text-gray-900 dark:text-gray-100 hover:text-primary"
//                   >
//                     {item.name}
//                     <img
//                       className="w-4 ml-2"
//                       src="/images/icons/arrow.svg"
//                       alt="arrow" />
//                   </div>
//                   <span className="mt-2 block h-px w-full rounded-full bg-gray-300 dark:bg-gray-700"></span>

//                   {openItemIndex === idx && (
//                     <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//                       <p>{item.description}</p>
//                       <Link
//                         href={`/${item.name
//                           .toLowerCase()
//                           .replace(/\s+/g, "-")}-company`}
//                         className="text-blue-600 hover:underline text-sm inline-block mt-2"
//                       >
//                         Visit Page ↗
//                       </Link>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </ul>

//           <Link href={{ pathname: "/work", query: `${service.work}` }}>
//             <button className="p-[3px] relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full" />
//               <div className="px-12 py-2 bg-total-black rounded-full relative group transition duration-200 text-white hover:bg-transparent">
//                 Explore Work
//               </div>
//             </button>
//           </Link>
//         </div>
//       </div>

//       <div className="absolute xs:hidden md:hidden blur-2xl top-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
//     </div>
//   );
// };

// export default ParallaxSection;



'use client';
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import serviceData from "@/data/service_parallax.json";
import Link from "next/link";

const ParallaxSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full">
      {serviceData.map((service, index) => (
        <ParallaxSectionItem
          key={service.id}
          service={service}
          index={index}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
};

const ParallaxSectionItem = ({ service, index, isMobile }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [zIndex, setZIndex] = useState(0);
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  useEffect(() => {
    if (inView) {
      setZIndex(index + 1);
    }
  }, [inView, index]);

  const handleToggle = (idx: number) => {
    setOpenItemIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div
      ref={ref}
      className={`${
        isMobile ? "" : "sticky-section"
      } w-full flex flex-col justify-center bg-white transform transition-all duration-200`}
      style={{ zIndex }}
    >
      <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
      <div className="container mx-auto lg:px-32 sm:px-4 py-16 md:py-32 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 flex justify-start mt-8 md:mt-0">
          <Image
            src={service.image}
            alt={`${service.title} illustration`}
            width={500}
            height={300}
            className="max-w-full object-contain h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 mb-8 text-center md:mb-0 md:text-left">
          <meta
            name="Best Data Science Service Company in India | Krira AI"
            content="Unlock data-driven success with Krira AI, the best data science service company in India offering expert analytics, consulting, and AI solutions."
          />

          <Link href={service.link}>
            <h2 className="mb-8 text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 hover:text-primary">
              {service.title}
            </h2>
          </Link>

          <ul className="m-0 mb-4 list-none space-y-6 py-8">
            {service.items.slice(0, 7).map((item, idx) => {
              const itemLink = `/${item.name.toLowerCase().replace(/\s+/g, "-")}-company`;
              return (
                <div key={idx} className="mb-4">
                  <div className="flex items-center justify-between text-lg text-gray-900 dark:text-gray-100">
                    <span
                      onClick={() => handleToggle(idx)}
                      className="cursor-pointer hover:text-primary"
                    >
                      {item.name}
                    </span>
                    <Link href={itemLink} className="ml-2">
                      <Image
                        src="/images/icons/arrow.svg"
                        alt="arrow"
                        width={16}
                        height={16}
                        className="w-4"
                      />
                    </Link>
                  </div>
                  <span className="mt-2 block h-px w-full rounded-full bg-gray-300 dark:bg-gray-700"></span>

                  {openItemIndex === idx && (
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      <p>{item.description}</p>
                      {/* <Link
                        href={itemLink}
                        className="text-blue-600 hover:underline text-sm inline-block mt-2"
                      >
                        Visit Page ↗
                      </Link> */}
                    </div>
                  )}
                </div>
              );
            })}  
          </ul>

          <Link href={{ pathname: "/work", query: `${service.work}` }}>
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full" />
              <div className="px-12 py-2 bg-total-black rounded-full relative group transition duration-200 text-white hover:bg-transparent">
                Explore Work
              </div>
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute xs:hidden md:hidden blur-2xl top-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </div>
  );
};

export default ParallaxSection;
