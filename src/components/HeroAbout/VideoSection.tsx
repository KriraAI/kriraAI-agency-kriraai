'use client'
import React, { useState } from "react";
import Image from "next/image";
import TextGradientHeading from "@/components/ui/gradient-text";
import ModalVideo from "react-modal-video";

function VideoSection() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex xxs:flex-col-reverse xs:flex-col-reverse md:flex-col lg:flex-row items-center justify-center py-20 px-6 max-w-5xl mx-auto">
      <div className="w-full flex justify-center">
        <section className="relative w-full z-10 md:py-20 lg:py-28">
          <div className="" data-wow-delay=".15s"
          >
            <div
              className="opacity-100 hover:opacity-70 border border-transparent hover:border-slate-300 rounded-3xl  aspect-[77/50] items-center justify-center">
              <Image className={"rounded-3xl "} src="/images/career/team5.webp" alt="video image" width={800}
                     height={800} />
              <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                <button
                  aria-label="video play button"
                  onClick={() => setOpen(true)}
                  className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                >
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    className="fill-current"
                  >
                    <path
                      d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <ModalVideo
            channel="youtube"
            autoplay={true}
            start={true}
            isOpen={isOpen}
            videoId="L61p2uyiMSo"
            onClose={() => setOpen(false)}
          />
        </section>

      </div>
      <div className="w-full lg:w-1/2 lg:pl-10 mt-10 lg:mt-0">
        <div>
          <div className="text-3xl lg:text-5xl font-bold text-center lg:text-start mt-6 mb-12">
            What{" "}
            <TextGradientHeading text="KriraAI" size="text-5xl" />
            {" "}does
          </div>
          <p className="max-w-md mx-auto lg:mx-0 mt-4 mb-12 text-justify text-text-secondary">
            We offer a wide range of services to help you achieve your business goals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;