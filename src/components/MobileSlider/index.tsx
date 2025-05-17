'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const MobileSlider = ({ products }: { products: { title: string; link: string; thumbnail: string; }[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % products.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [products.length]);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? products.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % products.length);
  };

  return (
    <div className="mobile-slider relative overflow-hidden">
      <h2 className="text-center text-3xl font-bold mb-8">Our Projects</h2>
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {products.map((product, index) => (
          <div key={product.title} className="w-full flex-shrink-0 p-4 flex flex-col items-center">
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={product.thumbnail}
                  layout="fill"
                  className="object-contain object-center"
                  alt={product.title}
                />
              </div>
              <h3 className="text-center mt-4 text-xl font-medium">{product.title}</h3>
          </div>
        ))}
      </div>
      <div className={"flex justify-between py-16"}>
        <button onClick={goToPreviousSlide}
                className=" absolute left-6 top-3/4 transform -translate-y-1/2 bg-secondary bg-opacity-50 text-dark w-16 p-2 rounded-full">❮
        </button>
        <button onClick={goToNextSlide}
                className="absolute right-6 top-3/4 transform -translate-y-1/2 bg-secondary bg-opacity-50 text-dark w-16 p-2 rounded-full">❯
        </button>

      </div>
    </div>
  );
};

export default MobileSlider;
