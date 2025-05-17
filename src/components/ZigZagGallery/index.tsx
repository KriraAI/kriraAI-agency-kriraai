'use client';
import { motion } from "framer-motion";
import React from "react";

const images = [
  "/images/career/team1.jpg",
  "/images/career/team2.jpg",
  "/images/career/team3.jpg",
  "/images/career/team4.jpg",
];

const ImageGallery = () => {
  return (
    <div className="flex justify-center overflow-x-clip mt-20 items-center bg-white dark:bg-total-black">
      <div className="flex space-x-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`w-64 h-64 overflow-hidden rounded-lg shadow-lg transform ${
              index % 2 === 0 ? 'translate-y-6' : '-translate-y-6'
            } hover:scale-110`}
          >
            <img src={image} alt={`Placeholder ${index}`} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;