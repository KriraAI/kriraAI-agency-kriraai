import React from "react";
import Image from "next/image";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import StatSection from "@/components/Stats";
import TeamSection from "@/components/TeamMembers";
import HeroAbout from "src/components/HeroAbout";
import CompanySection from "@/components/CompanySection";
import GetInTouch from "@/components/GetInTouch";
import MissionAndVisionSection from "@/components/MissionSection";
import { AnimationPath } from "@/components/AnimLogo/OtherAnimations";
import SecondaryButton from "@/components/Common/SecondaryButton";

const AboutPage = () => {
  return (
    <>
      <HeroAbout />
      <MissionAndVisionSection />
      <AboutSectionOne />
      <div className={"flex xs:mt-12 justify-center"}> 
        <StatSection />
      </div>
      <Section4 />
      <Section5 />
      <TeamSection />
      <CompanySection />
      <GetInTouch
        title={"Ready to Write Your Success Story?"}
        description={"Do not wait for tomorrow; lets start building your future today. Get in touch with KriraAI and unlock a world of possibilities for your business. Your digital journey begins here - with KriraAI, where innovation knows no bounds. 🌟"}
        buttonText={"Contact Us Now"}
        buttonLink={"/contact"}
      />
    </>
  );
};

const Section4 = () => {
  return (
    <div className="max-w-5xl px-6 xs:py-0 md:py-16 mx-auto">
      <div className="items-center w-full xs:flex-col-reverse xs:flex md:flex-row md:space-x-6">
        <div className="xs:w-full lg:w-1/3 md:w-1/2">
          <div className="flex items-center justify-center">
            <div className="max-w-md">
              <AnimationPath
                classname="w-full h-96"
                path="/images/animations/business2.json"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 mt-8 p-8 rounded-2xl md:mt-0 md:w-1/2 relative z-10">
          <h2 className="lg:text-4xl font-extrabold md:text-3xl xxs:text-3xl xs:text-3xl dark:text-slate-300 text-gray-800">
            Transform Your Business,<br /> Future-Proof Your Success
          </h2>
          <p className="max-w-md mt-4 mb-12 text-justify text-text-secondary">
            In todays ever-evolving digital landscape, your business needs more than just technology - it needs
            transformation. Whether you are a startup looking to disrupt the market or an enterprise aiming to stay
            ahead of the curve, KriraAI is your go-to partner for innovation and growth.
          </p>
          <SecondaryButton text="View our Services" redirect="/services" />
        </div>
      </div>
    </div>
  );
}
const Section5 = () => {
  return (
    <div className="overflow-clip max-w-5xl px-6 py-16 mx-auto space-y-8 md:flex md:items-center md:space-y-0">
      <div className="xs:w-full xs:px-6 md:w-2/3">
        <div className="hidden md:flex md:items-center md:space-x-10">
          <Image
            className="object-cover object-center rounded-md shadow w-72 h-72"
            src="/images/career/team1.jpg"
            alt="image4"
            width={288}
            height={288}
          />
          <Image
            className="object-cover object-center w-64 rounded-md mb-8 h-96"
            src="/images/career/team3.jpg"
            alt="image5"
            width={256}
            height={384}
          />
        </div>
        <h2 className="xxs:text-3xl xs:text-3xl md:text-5xl font-extrabold dark:text-slate-300 text-gray-800 md:mt-6">
          Lets Redefine <br />Possibilities,
          Together </h2>
        <p className="max-w-lg mt-8 text-justify text-text-secondary">
          The future is now, and its waiting for you to seize it. Partner with KriraAI and embark on a journey of
          digital transformation, innovation, and unparalleled success.
        </p>
      </div>
      <div className="md:w-1/3">
        <Image
          className="object-cover xxs:h-[50%] object-center w-full rounded-md shadow"
          style={{ height: "700px" }}
          src="/images/career/team2.jpg"
          alt="image6"
          width={634}
          height={700}
        />
      </div>
      <div className="absolute blur-lg top-[450vh] left-0 right-0 z-[0] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>

    </div>
  );
}

export default AboutPage;
