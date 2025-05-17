'use client';
import Link from "next/link";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import "@/styles/index.css";

const Lottie = dynamic(() => import("@lottielab/lottie-player/react"), {
  ssr: false,
});

const AnimLogo = () => {
  return (
    <div className={"absolute flex flex-col justify-center items-center "}>
      <Lottie
        className="absolute xxs:-top-16  xs:-top-16 md:-top-16 md:left-20 xxs:left-[5rem] xs:left-[5rem] h-[4.5rem] transform -translate-x-1/2"
        src="/images/animations/anima.json"
        autoplay
      />
      <Link href="/" className="mb-4 -mt-1 inline-block">
        <Image
            src="/images/logo/logo-xl.svg"
            alt="logo"
            className="w-1/2"
            width={90}
            height={20}
          />
      </Link>
    </div>
  );
}

export default AnimLogo;