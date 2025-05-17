import { ContainerScroll } from "@/components/ui/container-scroll";
import AnimatedGradientText from "@/components/ui/animated-text";
import TextGradientHeading from "@/components/ui/gradient-text";
import { AnimationPath } from "@/components/AnimLogo/OtherAnimations";
import React from "react";

const PadScroll=()=> {
  return (
    <div className="flex flex-col bg-transparent dark:bg-total-black overflow-hidden">
      <div className={"z-10"}>
        <ContainerScroll
          titleComponent={
            <>
              <AnimatedGradientText className={"mb-8 lg:mx-auto xs:mx-8 py-3"}>
                Welcome to KriraAI - Your Ultimate IT Solution Partner! 🚀
              </AnimatedGradientText>
              <h1 className="text-4xl md:text-3xl xs:text-xl font-semibold text-black dark:text-white">
                Various Services offered by <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                <TextGradientHeading size={"text-8xl"} text={"KriraAI"} />
              </span>
              </h1>
            </>
          }
        >
          <AnimationPath
            path="/images/animations/hands.json"
            classname="mx-auto rounded-2xl object-cover w-full object-left-top"
          />
        </ContainerScroll>
      </div>
      <div
        className="absolute blur-lg top-0 left-0 right-0 z-[0] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </div>
  );
}

export default PadScroll;