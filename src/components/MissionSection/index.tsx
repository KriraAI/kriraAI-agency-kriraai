import React from "react";

const MissionAndVisionSection = () => {
  return (
    <div className="max-w-7xl px-6 py-16 mx-auto">
      <div className="flex flex-col items-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
        <div className="flex flex-col items-center md:w-1/2">
          <h2 className="text-4xl font-extrabold dark:text-slate-300 text-gray-800">
            Our Vision
          </h2>
          <p className="max-w-md mt-4 text-justify text-text-secondary">
            Our vision is to be the leading provider of digital solutions and services that drive business growth and
            transformation. We strive to create a world where every business has the opportunity to thrive and succeed
            in
            the digital economy.
          </p>
        </div>
        <div className="flex flex-col items-center md:w-1/2">
          <h2 className="text-4xl font-extrabold dark:text-slate-300 text-gray-800">
            Our Mission
          </h2>
          <p className="max-w-md mt-4 text-justify text-text-secondary">
            At KriraAI, our mission is to empower businesses with the tools and technology they need to succeed in the
            digital age. We are committed to helping our clients achieve their goals and realize their full potential
            through innovation, creativity, and collaboration.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissionAndVisionSection;