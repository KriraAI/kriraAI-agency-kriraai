import TextGradientHeading from "@/components/ui/gradient-text";
import React from "react";
import { FAQProps } from "@/types/serviceProjects";


const FAQ = ({props}: {props:FAQProps[]}) => {
  return (
    <div className="bg-gradient-to-b mt-24 from-slate-200 dark:from-dark dark:to-transparent  rounded-3xl lg:mx-24 my-4 p-8">
      <div className="xxs:text-2xl xs:text-2xl lg:text-5xl font-bold justify-center text-center mt-6 mb-12">
        Frequently Asked<br/> 
        <TextGradientHeading text="Questions" size={"md:text-5xl xxs:text-4xl xs:text-4xl"} />
      </div>
      <div className="md:mx-40 mb-12 xxs:mx-0 xs:mx-0 divide-y dark:divide-gray-600 divide-gray-300 rounded-xl border border-slate-400/[0.4] dark:border-gray-700">
        {props.map((faq, index) => (
          <div key={index} className="p-6">
            <details className="group" >
              <summary
                className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-800 dark:text-slate-300">
                <h2 className="md:text-xl xs:text-md font-medium">
                  {faq.question}
                </h2>
                <span className="relative size-6 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-body-color xxs:text-sm xs:text-sm md:text-base dark:text-gray-400 ">
                {faq.answer}
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;