import React from "react";
import TextGradientHeading from "@/components/ui/gradient-text";

const Section3 : React.FC<{ specialized: any[] }> = ({ specialized }) => {
  return (
    <div className="bg-total-black lg:px-36">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          <div className=" inline mt-32 text-white xxs:text-3xl text-5xl font-bold p-6 items-center md:col-span-1">
            Specialized Services by
            <TextGradientHeading text="KriraAI" size={"text-6xl"} />
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-0">
            {specialized.map((benefit, index) => (
              <BenefitCard key={index} title={benefit.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BenefitCard: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="bg-total-black h-52 text-white p-6 flex items-center justify-center border-b-[.5px] border-l-[.5px] border-r-[.5px] border-gray-700 transition-transform transform duration-500  hover:bg-gradient-to-t hover:glassmorphism hover:from-primary hover:to-transparent">
      <h3 className="text-center text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default Section3;