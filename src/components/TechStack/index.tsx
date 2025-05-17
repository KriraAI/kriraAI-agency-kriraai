"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import techStackItems from './techData';

const TABS = [
  { label: 'Front End', id: 'Front End' },
  { label: 'Backend', id: 'Backend' },
  { label: 'CMS', id: 'CMS' },
  { label: 'Data analysis', id: 'Data analysis' },
  { label: 'Database', id: 'Database' },
  { label: 'Cloud', id: 'Cloud' },
  { label: 'Project management', id: 'Project management' },
];

const TechStack = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  const filteredTechStackItems = techStackItems.filter(item => item.category === activeTab);

  return (
    <div className="relative w-full pt-16 my-8 lg:mb-20 dark:bg-total-black">
      <h2 className="my-8 md:text-5xl xs:text-2xl text-center text-slate-700 dark:text-slate-300 font-extrabold">Our Tech Stack</h2>

      <div className="flex flex-wrap justify-center mb-8 space-x-2 sm:space-x-4">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-2 sm:px-4  xs:my-2 py-2 rounded-full relative text-body-color transition duration-300 ${
              activeTab === tab.id ? "bg-gradient-to-r from-secondary to-primary text-shade dark:text-white transform hover:scale-105 glassmorphism active-tab" : "hover:text-gray-800 dark:hover:text-white glassmorphism"
            }`}
          >
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="flex justify-center flex-wrap gap-4 sm:gap-8">
        {filteredTechStackItems.map((tech, index) => (
          <TechCard key={index} tech={tech} />
        ))}
      </div>
    </div>
  );
};

const TechCard = ({ tech }: { tech: { name: string; category: string; imageUrl: string; } }) => {
  return (
    <div
      className="relative w-32 h-28 sm:w-40 sm:h-32 rounded-3xl flex flex-col items-center justify-center dark:text-white p-4 transition-transform transform hover:scale-110">
      <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4">
        <Image src={tech.imageUrl} alt={tech.name} width={48} height={48} />
      </div>
      <p className="text-center text-sm sm:text-base">{tech.name}</p>
    </div>
  );
};

export default TechStack;

