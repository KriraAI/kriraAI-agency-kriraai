// import { Brand } from "@/types/brand";
// import Image from "next/image";
// import brandsData from "@/data/brands.json";
// import Link from "next/link";
// import AnimatedGradientText from "@/components/ui/animated-text";
// import React from "react";

// const Brands = () => {
//   return (
//     <>
//       <section className="py-2 pb-12 w-full bg-gradient-to-b from-transparent dark:to-total-black">
//         <div className="relative  container mx-auto py-8">
//           <AnimatedGradientText className={"bg-transparent backdrop-blur-xl"}>
//                   <span
//                     className={`inline xs:text-md xs:text-center md:text-xl p-0.5 animate-gradient bg-gradient-to-r from-[#0099cb] via-[#0099cb] to-[#000] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent `}
//                   >
//                     100+ PROJECTS DELIVERED TO 50+ CLIENTS
//                   </span>
//           </AnimatedGradientText>
//         </div>
//         <div className="relative w-full overflow-hidden">
//           <div className="slider">
//             <div className="brand-container">
//               {brandsData.map((brand) => (
//                 <SingleBrand key={brand.id} brand={brand} />
//               ))}
//               {brandsData.map((brand) => (
//                 <SingleBrand key={`${brand.id}-duplicate`} brand={brand} />
//               ))}
//             </div>
//           </div>
//         </div>
        
//         {/* 
//                 <div className= "mt-40">        
//                <section className=" bottom-0 left-0 right-0 z-[-1] bg-[url(/images/video/shape.svg)] bg-cover background-size: cover; bg-center bg-white ">
//           <div className="max-w-7xl mx-auto text-center mt-10">
//             <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-black">
//              KriraAI – Leading AI Development Company in India
//             </h2>
//             <p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">
//               Welcome to KriraAI, a trusted AI development company delivering intelligent solutions for startups, enterprises, and global brands. As one of the best AI development companies in India,  We focus on creating customized AI software, integrating Advanced technologies like machine learning, deep learning, and generative AI to solve real-world problems.
        
//             </p>
//              <p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">
//              KriraAI is the perfect AI development partner whether you need to scale innovation, improve customer experiences, or automate processes.
        
//             </p>
            
//           </div>
//         </section>
//         </div> */}
        
        
                
        
//       </section>
//       </>
// );
// };

// export default Brands;

// const SingleBrand = ({ brand }: { brand: Brand }) => {
//   const { href, image, name } = brand;

//   return (
//     <div className="single-brand">
//       <Link
//         href={""}
//         target="_blank"
//         rel="nofollow noreferrer"
//         className="relative block h-9 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
//       >
//         <Image src={image} alt={name} fill className="block dark:hidden object-contain" />
//       </Link>
//     </div>
//   );
// };
import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "@/data/brands.json";
import Link from "next/link";
import AnimatedGradientText from "@/components/ui/animated-text";
import React from "react";

const Brands = () => {
  return (
    <>
      <section className="py-2 pb-12 w-full bg-gradient-to-b from-transparent dark:to-total-black">
        <div className="relative container mx-auto py-8">
          <AnimatedGradientText className={"bg-transparent backdrop-blur-xl"}>
            <span
              className={`inline xs:text-md xs:text-center md:text-xl p-0.5 animate-gradient bg-gradient-to-r from-[#0099cb] via-[#0099cb] to-[#000] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent `}
            >
              100+ PROJECTS DELIVERED TO 50+ CLIENTS
            </span>
          </AnimatedGradientText>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="slider">
            <div className="brand-container">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
              {brandsData.map((brand) => (
                <SingleBrand key={`${brand.id}-duplicate`} brand={brand} />
              ))}
            </div>
          </div>
        </div>

           
           <div className="hidden">
     <section className="bottom-0 left-0 right-0 z-[-1] bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-white">
       <div className="max-w-7xl mx-auto text-center mt-10">
         <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-black">
           KriraAI – Leading AI Development Company in India
         </h2>
         <p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">
           Welcome to KriraAI, a trusted AI development company delivering intelligent solutions for startups, enterprises, and global brands. As one of the best AI development companies in India, we focus on creating customized AI software, integrating advanced technologies like machine learning, deep learning, and generative AI to solve real-world problems.
         </p>
         <p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">
           KriraAI is the perfect AI development partner whether you need to scale innovation, improve customer experiences, or automate processes.
         </p>
       </div>
     </section>
   </div>

   <div className="hidden">
    <section className="bottom-0 left-0 right-0 bg-cover bg-center bg-white">
      <div className="max-w-7xl mx-auto text-center mt-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-black">Empowering Startups and Businesses with Complete Tech Solutions</h1>
        <p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">KriraAI is a leading AI and IT solutions provider dedicated to empowering startups and enterprises through advanced, results-driven technology. We specialize in advanced machine learning, natural language processing, computer vision, predictive analytics, and intelligent automation, delivering practical AI development and bespoke software engineering services. KriraAI is built on the foundation of technical excellence and strategic insight, we serve as your trusted technology partner, offering end-to-end solutions tailored to your unique objectives that accelerates innovation and meets IT standards.</p>
      </div>

      <div className="hidden">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-blak">Who We Are</h1>
        <p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">KriraAI is an AI and IT service provider firm, dedicated to enhancing the technological capabilities of startups and businesses. We manage your technology needs, so you can focus on advancing growth and innovation. From user-centric UI/UX design and dynamic web and mobile app development to strategic branding and custom software engineering, we lay the technical foundation for your vision.</p>
        <p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">At KriraAI, we believe technology should empower rather than complicate. Our AI expertise includes machine learning, data analytics, natural language processing, and intelligent automation, streamlined operations, and unique digital experiences that would engage your audience.</p>
        <p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">With a portfolio of over 50 successful partnerships, KriraAI is recognized among the best AI development companies. Our software for ai development can simplify complex challenges into immaculate, and efficient technologies that meet your business objectives.</p>
        <p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">We invest steadily in research and development to evolve with industry trends and maintain a client-first mindset. For us, quality and reliability come standard, and competitive pricing never compromises our standards.</p>
        <p className="text-lg sm:text-xl leading-relaxed mb-8 text-black">Trust KriraAI to turn your ideas into actionable solutions, backed by a team that combines deep technical expertise with strategic insight to keep your business competitive in today’s fast-evolving digital landscape.</p>
      </div>
    </section>
   </div>
   


      </section>
    </>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="single-brand">
      <Link
        href={href || ""}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative block h-9 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} fill className="block dark:hidden object-contain" />
      </Link>
    </div>
  );
};

