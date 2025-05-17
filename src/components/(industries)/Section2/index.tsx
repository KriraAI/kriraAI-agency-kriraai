import React from "react";

const Section2: React.FC<{ relevance: any[] }> = ({ relevance }) => {
  return (
    <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          {/*<p className="inline-block px-6 py-2 border-[1px] border-primary mb-4 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-teal-accent-400">*/}
          {/*  Brand new*/}
          {/*</p>*/}
        </div>
        <h2 className="max-w-lg mb-12 pb-12 font-sans xxs:text-3xl  xs:text-3xl xxs:text-center xs:text-center md:text-5xl font-bold leading-none tracking-tight text-gray-900 dark:text-slate-300 sm:text-4xl md:mx-auto lg:text-5xl">
          Relevance of IT in this Industry
        </h2>
      </div>
      <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {relevance.map((item, index) => (
          <div
            key={index}
            className="p-5 duration-300 transform bg-gradient-to-tl from-primary/10 to-transparent border border-slate-300 dark:border-slate-800 dark:hover:border-primary hover:border-primary rounded-2xl shadow-sm hover:-translate-y-2"
          >
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-slate-200 dark:bg-dark">
              <svg
                className="w-10 h-10 text-primary"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">{item.title}</h6>
            <p className="text-sm text-gray-900 dark:text-slate-400">{item.description}</p>
          </div>
        ))}
      </div>
      <div
        className="absolute z-0 blur-xl left-0 top-[0rem] h-full w-full opacity-50 bg-[url(/images/video/shape.svg)] bg-cover bg-no-repeat"
      ></div>
    </div>
  );
};

export default Section2;
