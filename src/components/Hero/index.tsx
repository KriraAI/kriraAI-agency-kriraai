import Link from "next/link";
import { Button } from "../ui/moving-border";
import AnimatedGradientText from "@/components/ui/animated-text";
import TextGradientHeading from "@/components/ui/gradient-text";
import React from "react";
import { TypewriterEffect } from "@/components/ui/type-writer";

const Hero = () => {
  const tagline = "Transform your business with KriraAI, specializing in AI services, mobile app development, web development, and more.";
  const words = tagline.split(" ").map((word) => ({ text: word }));
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-transparent pb-16 pt-[120px] dark:bg-transparent md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container ">
          <div className="-mx-4  flex flex-wrap">
            <div className="w-full xxs:justify-center xxs:items-center xxs:px-0 px-4">
              <div className="mx-auto md:my-0 xs:my-10 max-w-[800px] text-center">
                <AnimatedGradientText>
                  <span
                    className={`inline p-1 text-[16px] animate-gradient bg-gradient-to-r from-[#66cc66] via-[#0099cb] to-[#000] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent `}
                  >
                    KriraAI | AI & IT Experts!
                  </span> 🚀
                </AnimatedGradientText>
                <h1
                  className="mb-5 mt-8 text-2xl font-bold leading-tight text-black dark:text-white xs:text-2xl xs:leading-tight md:text-3xl md:leading-tight">
                  Best AI Development Services For
                  <span>
                    <div className={" bg-total-black p-1 xxs:mx-4 xs:mx-6 md:mx-28 my-4 rounded-2xl"}>
                    <TextGradientHeading size={"text-6xl xxs:text-4xl md:text-5xl xs:text-4xl mb-4"}
                                         text={"Innovative IT Solutions"} />

                  </div>
                  </span>
                  & Business Success.
                </h1>
                <TypewriterEffect
                  className={"mb-6 !leading-relaxed text-dark dark:text-body-color-dark xs:text-sm md:text-lg"}
                  words={words} />
                <p className={"hidden"}>
                  {tagline}
                </p>
                <div
                  className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link href={"/services"}>
                    <button className="p-[3px] relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-full" />
                      <div
                        className="w-52 py-3 bg-total-black rounded-full hover:font-bold hover:text-total-black relative group transition duration-200 text-white  hover:bg-transparent">
                        Our Expertise
                      </div>
                    </button>
                  </Link>
                  <Link href="/contact" className=" ">
                    <Button
                      borderRadius="1.75rem"
                      borderClassName="radial-gradient(var(--sky-400) 40%, transparent 90%)"
                      className=" w-52 inline-block border border-dark/40 rounded-full bg-primary/5 px-0 py-3 text-base font-semibold text-stroke-dark duration-300 ease-in-out dark:bg-white/0 dark:text-white dark:hover:bg-dark/80"
                    >
                      Book a Call
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img
        src="/images/hero/bgw.jpg" alt="hero-bg"
        className="absolute top-0 xxs:object-fill xxs:h-screen dark:hidden md:h-screen md:object-cover w-full xs:mt-0 xs:object-fill sm:object-fill xs:h-full  transition-all " />
      <div
        className="absolute z-[0] w-full h-[30vh] bottom-0 bg-gradient-to-t from-white to-transparent dark:from-total-black "></div>
    </>
  );
};

export default Hero;
