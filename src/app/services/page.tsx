// import React from "react";
// import ServiceChoose from "src/components/(services)/ServiceChoose";
// import ProcessSection from "@/components/ProcessSection";
// import PadScroll from "@/components/PadScroll";
// import ServicesGrid from "@/components/ServicesGrid";
// import GetInTouch from "@/components/GetInTouch";
// import ServiceTrends from "@/components/ServiceTrends";

// const ServicesPage = () => {
//   const why_choose = [
//     {
//       title: "Dedicated to Excellence",
//       description:
//         "We uphold the highest standards of quality in every project we undertake. Our commitment to excellence ensures that you receive the best solutions possible."
//     },
//     {
//       title: "Client-Centric Approach",
//       description:
//         "Your success is our priority. We work closely with you to understand your needs and deliver solutions that drive your business forward."
//     },
//     {
//       title: "Expert Team",
//       description:
//         "Our team consists of skilled professionals with expertise in diverse domains. We bring a wealth of knowledge and experience to every project."
//     },
//     {
//       title: "Proven Track Record",
//       description:
//         "We have a history of successful outcomes. Our portfolio of satisfied clients speaks to our ability to deliver results."
//     },
//     {
//       title: "Transparent Communication",
//       description:
//         "We believe in clear and open communication. Throughout the project, we keep you informed and involved, ensuring there are no surprises."
//     },
//     {
//       title: "Tailored Solutions",
//       description:
//         "Every solution we provide is customized to meet your unique needs. We don’t believe in one-size-fits-all; we believe in solutions that fit perfectly."
//     }
//   ];
//   const trends = [
//     { title: "Finance", linkTo: "/industries/finance-solutions" },
//     { title: "Healthcare", linkTo: "/industries/healthcare-solutions" },
//     { title: "Hospitality", linkTo: "/industries/healthcare-solutions"  },
//     { title: "Manufacturing", linkTo: "/industries/manufacturing-solutions" },
//     { title: "Education", linkTo: "/industries/education-solutions" },
//     { title: "Retail", linkTo: "/industries/retail-solutions" },
//     { title: "Communication", linkTo: "/industries/telecommunications-solutions" },
//     { title: "Social Media", linkTo: "/industries/social-media-solutions" },
//     { title: "eCommerce", linkTo: "/industries/ecommerce-solutions" }
//   ];
//   const service_process =  [
//       {
//         "title": "Workshop",
//         "description": "We start by understanding your goals and objectives. Through a series of workshops, we gather all the\n        necessary information to ensure we’re aligned with your vision.",
//         "badge": "Workshop",
//         "image": "/images/process/process1.svg"
//       },
//       {
//         "title": "Design",
//         "description": "Our design team creates wireframes and mockups to visualize the user experience and interface. We iterate\n        on the designs based on your feedback and requirements.",
//         "badge": "Design",
//         "image": "/images/process/process2.svg"
//       },
//       {
//         "title": "Development",
//         "description": "Our development team brings the designs to life, building the AI solution using the latest technologies and\n        best practices. We ensure the solution is scalable, secure, and performant.",
//         "badge": "Development",
//         "image": "/images/process/process3.svg"
//       },
//       {
//         "title": "Testing",
//         "description": "We rigorously test the AI solution to ensure it meets your requirements and performs as expected. We\n        conduct various tests, including functional, performance, and security testing.",
//         "badge": "Testing",
//         "image": "/images/process/process4.svg"
//       },
//       {
//         "title": "Deployment",
//         "description": "Once the AI solution is tested and approved, we deploy it to your production environment. We provide\n        support and maintenance to ensure the solution runs smoothly and efficiently.",
//         "badge": "Deployment",
//         "image": "/images/process/process5.svg"
//       }
//     ];
//   return (
//     <div className="bg-slate-200 dark:bg-total-black min-h-screen">
//       <PadScroll />
//       <ServicesGrid />
//       <ServiceTrends trends={trends} />
//       <div className={"lg:px-20"}>
//         <ServiceChoose serviceContent={why_choose} />
//       </div>
//       <ProcessSection content={service_process} />
//       <GetInTouch
//         title="Let’s Collaborate"
//         description="Let’s unlock the full potential of your business together. Partner with KriraAI and experience the difference firsthand. Reach out to us today, and let’s make your dreams a reality!"
//         buttonText="Contact Us Now"
//         buttonLink="/contact"
//       />
//     </div>
//   );
// };

// export default ServicesPage;

// app/services/page.tsx
import React from "react";
import ServiceChoose from "@/components/(services)/ServiceChoose";
import ProcessSection from "@/components/ProcessSection";
import PadScroll from "@/components/PadScroll";
import ServicesGrid from "@/components/ServicesGrid";
import GetInTouch from "@/components/GetInTouch";
import ServiceTrends from "@/components/ServiceTrends";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | KriraAI",
  description: "Know more about KriraAI and how we can help you. Contact us for more information.",
};

const ServicesPage = () => {
  const why_choose = [
    {
      title: "Dedicated to Excellence",
      description: "We uphold the highest standards of quality in every project we undertake..."
    },
    {
      title: "Client-Centric Approach",
      description: "Your success is our priority. We work closely with you..."
    },
    {
      title: "Expert Team",
      description: "Our team consists of skilled professionals..."
    },
    {
      title: "Proven Track Record",
      description: "We have a history of successful outcomes..."
    },
    {
      title: "Transparent Communication",
      description: "We believe in clear and open communication..."
    },
    {
      title: "Tailored Solutions",
      description: "Every solution we provide is customized..."
    },
  ];

  const trends = [
    { title: "Finance", linkTo: "/industries/finance-tech-solutions" },
    { title: "Ecommerce", linkTo: "/industries/ecommerce-solutions" },
    { title: "Healthcare", linkTo: "/industries/healthcare-tech-solutions" },
    { title: "Education", linkTo: "/industries/education-tech-solutions" },
    { title: "SaaS", linkTo: "/industries/SaaS-solutions" },
    { title: "Manufacturing", linkTo: "/industries/manufacturing-tech-solutions" },
    { title: "Retail", linkTo: "/industries/retail-tech-solutions" },
    { title: "Food & Beverage", linkTo: "/industries/food-beverage-tech-solutions" },
    { title: "Security", linkTo: "/industries/security-solutions" },
  ];

  const service_process = [
    {
      title: "Workshop",
      description: "We start by understanding your goals and objectives...",
      badge: "Workshop",
      image: "/images/process/process1.svg",
    },
    {
      title: "Design",
      description: "Our design team creates wireframes and mockups...",
      badge: "Design",
      image: "/images/process/process2.svg",
    },
    {
      title: "Development",
      description: "Our development team brings the designs to life...",
      badge: "Development",
      image: "/images/process/process3.svg",
    },
    {
      title: "Testing",
      description: "We rigorously test the AI solution to ensure it meets your requirements...",
      badge: "Testing",
      image: "/images/process/process4.svg",
    },
    {
      title: "Deployment",
      description: "Once tested and approved, we deploy to production...",
      badge: "Deployment",
      image: "/images/process/process5.svg",
    },
  ];

  return (
    <div className="bg-slate-200 dark:bg-total-black min-h-screen">
      <PadScroll />
      <ServicesGrid />
      <ServiceTrends trends={trends} />
      <div className="lg:px-20">
        <ServiceChoose serviceContent={why_choose} />
      </div>
      <ProcessSection content={service_process} />
      <GetInTouch
        title="Let’s Collaborate"
        description="Let’s unlock the full potential of your business together..."
        buttonText="Contact Us Now"
        buttonLink="/contact"
      />
    </div>
  );
};

export default ServicesPage;
