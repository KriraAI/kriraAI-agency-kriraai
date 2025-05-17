'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import SimpleGallery from "@/components/ui/simple-gallery";
import workImages from '@/data/work.json';
import GetInTouch from "@/components/GetInTouch";

const categories = [
  'All',
  'AI Services',
  'Mobile App Development',
  'Web Development',
  'UI/UX Design',
  'E-Commerce',
  'Saas',
];


const WorkPageClient = () => {
  const searchParams = useSearchParams();
  const categoryQuery = searchParams!.get('category');

  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    if (categoryQuery && categories.includes(categoryQuery)) {
      setSelectedCategory(categoryQuery);
    }
  }, [categoryQuery]);

  const filterImages = () => {
    if (selectedCategory === 'All') {
      return Object.values(workImages).flat();
    }
    return workImages[selectedCategory] || [];
  };

  const filteredImages = filterImages();

  return (
    <div className="mt-16 px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Our Work & Projects</h1>
      <div className="md:flex md:flex-row justify-center xxs:flex-col xs:flex-col mb-0 space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 xxs:my-2 xs:my-2 rounded-full transition duration-300 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-green-700 to-sky-500 dark:text-white shadow-lg transform hover:scale-105 glassmorphism active-tab'
                : 'bg-gray-800 text-gray-500 hover:text-black dark:hover:text-white glassmorphism'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <SimpleGallery images={filteredImages} />
      <GetInTouch
        title="Let’s Collaborate"
        description="Let’s unlock the full potential of your business together. Partner with KriraAI and experience the difference firsthand. Reach out to us today, and let’s make your dreams a reality!"
        buttonText="Contact Us Now"
        buttonLink="/contact"
      />
      <div
        className="absolute top-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </div>
  );
};

export default WorkPageClient;
