import React from "react";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

const Section4: React.FC<{ trends: any[] }> = ({ trends }) => {
  return (
    <section className="px-4 xxs:px-6 py-20 mx-auto  max-w-7xl">
      <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-32 gap-x-10 lg:gap-x-24">
        <div>
          <h2
            className="mb-6 text-6xl font-extrabold leading-tight tracking-tight text-center dark:text-white text-black sm:text-left md:text-4xl lg:text-7xl">
            Trends & Innovations
          </h2>
          <p className="mb-6 text-lg text-justify text-text-secondary sm:text-left md:text-xl">
            Lets put our heads together to
            build a successful partnership to benefit both your customers and your business.</p>
          {/*<a href={"/contact"}>*/}
          {/*  <Button*/}
          {/*    borderRadius="1.75rem"*/}
          {/*    borderClassName="radial-gradient(#66cc66 10%, transparent 60%)"*/}
          {/*    className="h-12 w-max rounded-full bg-black px-5 text-base font-semibold text-white duration-300 dark:bg-black/80 dark:text-white dark:hover:bg-dark/80 xs:hidden lg:grid"*/}
          {/*  >*/}
          {/*    Become a Partner*/}
          {/*  </Button>*/}
          {/*</a>*/}
          <div>
            <Link href={"/contact"}>
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-full" />
                <div
                  className="w-52 py-3 bg-total-black rounded-full hover:font-bold hover:text-total-black relative group transition duration-200 text-white  hover:bg-transparent">
                  Become a Partner
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col flex-grow space-y-5">
          {trends.map((item, index) => (
            <div className="flex items-start" key={index}>
              <svg className="md mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 16C13.8023 15.9999 13.609 15.9412 13.4446 15.8314C13.2802 15.7215 13.152 15.5653 13.0764 15.3826C13.0007 15.1999 12.9809 14.9989 13.0194 14.8049C13.058 14.611 13.1532 14.4328 13.293 14.293L20.293 7.29296C20.4811 7.10825 20.7345 7.00529 20.9982 7.00648C21.2618 7.00767 21.5142 7.11292 21.7007 7.29933C21.8871 7.48574 21.9923 7.73822 21.9935 8.00183C21.9947 8.26545 21.8917 8.51887 21.707 8.70696L14.707 15.707C14.6143 15.8 14.5041 15.8737 14.3828 15.924C14.2614 15.9743 14.1314 16.0001 14 16ZM3.00003 17C2.80228 16.9999 2.60898 16.9412 2.44457 16.8314C2.28016 16.7215 2.15202 16.5653 2.07635 16.3826C2.00068 16.1999 1.98088 15.9989 2.01945 15.8049C2.05802 15.611 2.15322 15.4328 2.29303 15.293L8.29303 9.29296C8.48112 9.10825 8.73454 9.00529 8.99816 9.00648C9.26177 9.00767 9.51425 9.11292 9.70066 9.29933C9.88706 9.48574 9.99231 9.73822 9.99351 10.0018C9.9947 10.2654 9.89174 10.5189 9.70703 10.707L3.70703 16.707C3.6143 16.8 3.5041 16.8737 3.38277 16.924C3.26144 16.9743 3.13137 17.0001 3.00003 17Z"
                  fill="#0099CB" />
                <path
                  d="M14.0001 16C13.8687 16.0001 13.7387 15.9743 13.6173 15.924C13.496 15.8737 13.3858 15.8 13.2931 15.707L8.29308 10.707C8.10837 10.5189 8.00541 10.2654 8.0066 10.0018C8.0078 9.73822 8.11305 9.48574 8.29945 9.29933C8.48586 9.11292 8.73834 9.00767 9.00195 9.00648C9.26557 9.00529 9.51899 9.10825 9.70708 9.29296L14.7071 14.293C14.8469 14.4328 14.9421 14.611 14.9807 14.8049C15.0192 14.9989 14.9994 15.1999 14.9238 15.3826C14.8481 15.5653 14.7199 15.7215 14.5555 15.8314C14.3911 15.9412 14.1978 15.9999 14.0001 16Z"
                  fill="#0099CB" />
              </svg>
              <p className="text-lg dark:text-slate-200 font-medium text-text-secondary">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;