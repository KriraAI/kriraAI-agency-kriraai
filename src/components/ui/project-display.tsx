'use client';
import React from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import MobileSlider from "@/components/MobileSlider";
import HeroParallax from "@/components/ui/project-gallery";
import Link from "next/link"; 

const ProjectsDisplay = ({ products }: { products: { title: string; link: string; thumbnail: string; }[] }) => {
  const isMobile = useIsMobile();

  return (
    <div className="relative w-full h-full">
      {isMobile ? <MobileSlider products={products} /> : <HeroParallax products={products} />}
      <Link className={"flex justify-center py-8"} href={"/work"}>
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-full" />
          <div
            className="w-52 py-3 bg-total-black rounded-full hover:font-bold hover:text-total-black relative group transition duration-200 text-white  hover:bg-transparent">
            View all
          </div>
        </button>
      </Link>      
    </div>
  );
};

export default ProjectsDisplay;
