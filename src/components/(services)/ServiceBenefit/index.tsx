import React from 'react';
import TextGradientHeading from "@/components/ui/gradient-text";

interface Benefit {
  title: string;
}

const benefits: Benefit[] = [
  { title: 'Ideal for Real-Time Applications' },
  { title: 'Speedy Native Bindings' },
  { title: 'Swift Development & Productivity' },
  { title: 'Cost-Effective Hosting and Cloud Scalability' },
  { title: 'Rapid Minimum Viable Product (MVP) Delivery' },
  { title: 'Cross-Platform Compatibility' },
  { title: 'Abundance of Packages and Extensions' },
  { title: 'Minimal Development Cost' },
];

const BenefitsSection = () => {
  return (
    <div className="bg-total-black lg:px-36">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          <div className=" inline mt-32 text-white text-4xl font-bold p-6 items-center md:col-span-1">
            Benefits of using
            <TextGradientHeading text="Node.js technology" size={"text-4xl"} />
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-0">
            {benefits.map((benefit, index) => (
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

export default BenefitsSection;
