'use client';
import { motion } from 'framer-motion';
import CountAnimation from "@/components/animations/count";

const AboutSection = () => {
  const stats = [
    { label: "Technologies", value: 20, unit: "+" },
    { label: "Industries", value: 30, unit: "+"},
    { label: "Years in business", value: 7, unit: "+"},
    { label: "Client Support", value: 24, unit: "/7" },
  ];


  return (
    <div className="container xs:mx-0 xs:p-0  md:mx-20 md:px-4 md:py-8">
      <div className="md:flex xxs:grid xxs:grid-cols-2 xs:grid xs:grid-cols-2 md:flex-row xs:flex-col justify-between">
        {stats.map((stat, index) => {
          const animatedValue = CountAnimation(stat.value);
          return (
            <motion.div
              key={index}
              className="xs:w-full  md:w-1/4 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-4xl font-bold mb-2">{animatedValue+stat.unit}</h3>
              <p className="text-lg xs:mb-12 md:mb-0 text-gray-700">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutSection;
