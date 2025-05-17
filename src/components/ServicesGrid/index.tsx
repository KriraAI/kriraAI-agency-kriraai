import TextGradientHeading from "@/components/ui/gradient-text";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import React from "react";

const Skeleton: React.FC<{ path: string }> = ({ path }) => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-slate-300 dark:from-total-black dark:to-black to-neutral-100">
    <img className="w-full" src={path} alt="ai_service" />
  </div>
);

const items = [
  {
    title: "AI/ML Integration",
    link: "/ai-services",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton path={"/images/service/ai_services.svg"} />
  },
  {
    title: "Mobile App Development",
    link: "/mobile-app-development",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton path={"/images/service/mobile.svg"} />
  },
  {
    title: "Web Development",
    link: "/web-development",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton path={"/images/service/web_dev.svg"} />
  },
  {
    title: "Data & Analytics",
    link: "/data-analytics",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton path={"/images/service/data_analysis.svg"} />
  },
  {
    title: "UI/UX Design",
    link: "/ui-ux-design",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton path={"/images/service/uiux.svg"} />
  },
  {
    title: "Custom Software Development",
    link: "/custom-software",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton path={"/images/service/custom_dev.svg"} />
  },
  {
    title: "Branding",
    link: "/branding",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton path={"/images/service/branding.svg"} />
  },
  {
    title: "Cloud Services",
    link: "/cloud-services",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton path={"/images/service/cloud_service.svg"} />
  },
  {
    title: "Tech Consulting",
    link: "/tech-consulting",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton path={"/images/service/tech_consult.svg"} />
  }
];

const ServicesGrid =()=> {
  return (
    <>
      <div className=" flex dark:text-white text-5xl font-bold justify-center items-center md:col-span-1">
        Our
        <TextGradientHeading text="Expertise" size={"text-5xl mb-1 ml-4"} />
      </div>
      <BentoGrid className="max-w-4xl p-10 mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            link={item.link}
            title={item.title}
            description={item.description}
            header={item.header}
            className={i === 3 || i === 6 || i === 7 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </>
  );
}

export default ServicesGrid;
