import TextGradientHeading from "@/components/ui/gradient-text";
import MoveBorderButton from "@/components/Common/MoveBorderButton";
import React from "react";

const JobApplySection = () => {
  return (
    <div
      className="bg-gradient-to-b mt-24 from-slate-300 dark:from-dark dark:to-transparent  rounded-3xl lg:mx-24 my-4 p-8">
      <div className=" xxs:text-2xl xs:text-2xl lg:text-5xl font-bold justify-center text-center mt-6 mb-12">
        Current<br/>
        <TextGradientHeading text="Opportunities" size={" xxs:text-4xl xs:text-4xl md:text-5xl"} />
      </div>
      <div className="flex justify-center items-center">
        <p className="mt-6 md:w-1/2 text-justify xxs:w-full xs:w-full xs:mx-4 xs:mb-8  text-gray-700 dark:text-gray-400 ">
          Ready to join forces with KriraAI and help shape the future of technology? We are always on the lookout for
          talented individuals who are passionate about making a difference. Take the first step towards an exciting new
          career and apply to join the KriraAI team today.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <MoveBorderButton
          text="Apply Now"
          redirect="/contact"
        />
      </div>
    </div>
  );
}

export default JobApplySection;