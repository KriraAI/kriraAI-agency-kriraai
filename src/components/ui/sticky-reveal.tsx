"use client";

import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const StickyScroll = ({
                        content,
                        contentClassName,
                      }: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
  });
  const cardLength = content.length;

  const cardsBreakpoints = content.map((_, index) => (index + 0.5) / cardLength);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const closestBreakpointIndex = cardsBreakpoints.reduce(
        (acc, breakpoint, index) => {
          const distance = Math.abs(latest - breakpoint);
          if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
            return index;
          }
          return acc;
        },
        0
      );
      setActiveCard(closestBreakpointIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress, cardsBreakpoints]);

  const linearGradients = [
    "linear-gradient(to bottom right, var(--sky-500), var(--green-500))",
    "linear-gradient(to bottom right, var(--green-500), var(--sky-500))",
  ];

  return (
    <motion.div
      className="relative h-[30rem] bg-gradient-to-b from-slate-300 dark:from-dark rounded-2xl to-white dark:to-total-black  duration-300 transition-all overflow-y-scroll flex justify-evenly md:space-x-20 lg:space-x-20 px-1"
      ref={ref}
    >
      <div className="relative items-start">
        <div className="max-w-fit pt-20 px-10">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-3xl font-bold text-slate-800 dark:text-slate-300"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-md font-medium text-justify max-w-md text-slate-700 dark:text-slate-300 mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div className="sticky top-20 h-60 flex flex-col xxs:hidden xs:hidden sm:hidden md:hidden lg:block ">
        {content.map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: activeCard === index ? 1 : 0, rotateX: activeCard === index ? 0 : -90 }}
            transition={{ duration: 0.5 }}
            className="absolute right-2 text-[12rem] font-bold text-transparent bg-clip-text"
            style={{
              backgroundImage: linearGradients[index % linearGradients.length],
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default StickyScroll;
