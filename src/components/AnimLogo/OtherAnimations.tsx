'use client';
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("@lottielab/lottie-player/react"), {
  ssr: false,
});

export const AnimationPath = ({classname,path}) => {
  return (
    <Lottie
      className={classname}
      src={path}
    />
  );
}

export const HelloAnim = () => {
  return (
    <Lottie
      className="lg:w-32 xxs:w-56 xs:w-56"
      autoplay
      src="/images/animations/hello2.json"
    />
  );
}

export const LogoCircle = () => {
  return (
    <Lottie
      className={`md:h-10 xxs:h-9 xxs:-mt-8 xs:h-9 w-30 mx-0 p-0 mt-1 md:-ml-2 xs:ml-0  inline-block`}
      src="/images/animations/anima.json"
      autoplay
    />
  );
}

export const SmallLogo = () => {
  return (
    <Lottie className={`h-8 md:mt-1 lg:mt-1`} src="/images/animations/anima.json" autoplay />
  );
}