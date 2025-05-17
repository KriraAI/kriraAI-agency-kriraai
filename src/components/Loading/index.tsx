'use client';
import React, { useEffect, useState } from 'react';
import { AnimationPath } from "@/components/AnimLogo/OtherAnimations";

const Loading = ({ position }: { position: string }) => {
  const isCenter = position === "center";
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('safari') && !ua.includes('chrome')) {
      setIsSafari(true);
    }
  }, []);

  const animationClass = isCenter
    ? "absolute top-1/2 left-1/2 h-16 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out"
    : isSafari
      ? "absolute safari-fix h-8 md:h-9 lg:h-10 transition-all duration-700 ease-in-out"
      : "absolute top-4 left-4 md:top-6 md:left-6 lg:top-6 lg:ml-20 h-8 md:h-8 lg:h-8 transition-all duration-700 ease-in-out";

  return (
    <div
      className={`absolute flex items-center justify-center top-0 left-0 w-full h-full z-auto
       ${isCenter ? "bg-white dark:bg-total-black" : "bg-opacity-0"} 
       transition-all duration-300 ease-in`}
    >
      <AnimationPath
        classname={animationClass}
        path="/images/animations/anima.json"
      />
    </div>
  );
};

export default Loading;
