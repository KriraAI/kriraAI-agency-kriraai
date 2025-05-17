import React from 'react';
import ServiceChoose from "src/components/(services)/ServiceChoose";
import GetInTouch from "@/components/GetInTouch";
import JobApplySection from "@/components/JobApplySection";
import ZigZagGallery from "@/components/ZigZagGallery";
import SectionTitle from "@/components/Common/SectionTitle";

const CareerPage = () => {
  const career_why = [
    {
      title: "Commitment to Excellence",
      description: "At KriraAI, we strive for nothing less than excellence in everything we do. From AI & ML integration to mobile app development and beyond, our team is committed to upholding the highest standards of quality and innovation."
    },
    {
      title: "Client-Centric Culture",
      description: "Our clients are at the heart of everything we do. We believe in building strong partnerships and working collaboratively to exceed expectations. As a member of the KriraAI team, you'll have the opportunity to make a real impact and help shape the future of our clients' businesses."
    },
    {
      title: "Expert Team",
      description: "Join a team of talented professionals who are experts in their respective fields. Whether you're a seasoned developer, a creative designer, or a strategic consultant, you'll have the chance to learn and grow alongside some of the best minds in the industry."
    },
    {
      title: "Diverse Industries",
      description: "At KriraAI, we serve clients across a wide range of industries, from finance and healthcare to education and eCommerce. This means you'll have the opportunity to work on exciting projects that span diverse sectors and challenge you to think outside the box."
    },
    {
      title: "Culture of Innovation",
      description: "Innovation is in our DNA. We encourage our team members to think creatively, embrace new technologies, and push the boundaries of what's possible. If you're passionate about staying ahead of the curve and driving real change, you'll feel right at home at KriraAI.",
    },
  ];
  return (
    <>
      <div className="bg-white mt-24 dark:bg-total-black min-h-screen">
        <SectionTitle
          title="Join the KriraAI Team"
          paragraph={`At KriraAI, we are committed to fostering a culture of collaboration, innovation, and excellence. We believe in empowering our team members to reach their full potential and make a real impact in the world of technology. If you're passionate about driving change, pushing boundaries, and delivering exceptional results, we want to hear from you. Explore our current opportunities and join the KriraAI team today.`}
          center
        />
        <ZigZagGallery />
        <ServiceChoose serviceContent={career_why} />
        <JobApplySection />
      </div>
      <GetInTouch
        title="Lets Build the Future Together"
        description="At KriraAI, we believe in the power of collaboration and teamwork. Together, we can build a brighter future for our clients, our team, and our world. If you're ready to make a difference and drive real change, we want to hear from you. Contact us today to learn more about our current opportunities and how you can join the KriraAI team."
        buttonText="Contact Us Now"
        buttonLink="/contact"
      />
    </>
  );
};
export default CareerPage;
