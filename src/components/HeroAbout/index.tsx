import Image from "next/image";
import TextGradientHeading from "@/components/ui/gradient-text";
import VideoSection from "@/components/HeroAbout/VideoSection";
import { HelloAnim } from "@/components/AnimLogo/OtherAnimations";


const HeroAbout = () => {
  return (
    <>
      <section className="relative md:mb-0 xs:mb-12 xs:pt-24 z-10 md:pt-20 lg:pt-28 overflow-x-clip">
        <div className="container">
          <h1
            className=" xxs:text-3xl xxs:flex xxs:flex-col xs:text-3xl md:text-6xl mb-4 xs:flex xs:flex-col md:flex  justify-center items-center font-extrabold text-slate-800 dark:text-slate-300">
            <HelloAnim />
            Welcome to
            <div className="flex justify-center  items-center text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              <TextGradientHeading size={"xs:text-8xl md:text-9xl"} text={"KriraAI"} />
            </div>
          </h1>

          <div className="-mx-4 flex flex-wrap">
          </div>
        </div>
        <img
          // width={800}
          // height={800}
          alt={"hero"}
          src={"/images/hero/about.svg"}
          className={" md:-mt-16 md:scale-[100%] xxs:scale-[200%] xs:scale-[200%] object-contain xxs:top-[80rem] xxs:mt-20 xs:top-[80rem] xs:mt-20 w-full h-auto"}
        />
      </section>
      {/*<div*/}
      {/*  className="absolute  w-full h-[30vh] bottom-0 bg-gradient-to-t from-white to-transparent dark:from-total-black "></div>*/}

      <VideoSection />
    </>
  );
};


export default HeroAbout;