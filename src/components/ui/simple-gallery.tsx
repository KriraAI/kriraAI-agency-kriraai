"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";

const SimpleGallery = ({ images, className, }: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("h-full -mt-20 items-start min-h-screen overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-start  mx-auto gap-10 py-40 md:px-2 lg:px-6"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <div
              className={"border-[.5px] border-slate-500 hover:border-secondary hover:scale-[103%] p-2 rounded-lg shadow-md"}>
                <Image
                  src={el}
                  className="h-auto w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
              </div>
              
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <div
                className={"border-[.5px] border-slate-500 hover:border-secondary hover:scale-[103%] p-2 rounded-lg shadow-md"}>
                <Image
                  src={el}
                  className="h-auto w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleGallery;
