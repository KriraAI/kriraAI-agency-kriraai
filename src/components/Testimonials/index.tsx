import React, { useState, useEffect } from 'react';
import testimonialsData from '@/data/testimonials.json';
import { Testimonial } from "@/types/testimonial";

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials: Testimonial[] = testimonialsData as Testimonial[];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToNextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3).concat(
    testimonials.slice(0, Math.max(0, currentIndex + 3 - testimonials.length))
  );

  return (
    <div className="my-10 md:my-24 container mx-auto flex xxs:flex-col xs:flex-col md:flex-row overflow-hidden">
      <div className="relative w-full md:h-full xxs:h-40 xxs:rounded-t-2xl xs:rounded-t-2xl md:rounded-t-none md:rounded-l-2xl py-2 md:py-24 bg-gradient-to-br from-primary/70 to-secondary/70 md:w-1/2 flex flex-col items-center justify-center">
        <div className="absolute top-0 left-0 z-10 grid-indigo w-16 h-16 md:w-40 md:h-40 md:ml-20 md:mt-24"></div>
        <div className="relative text-2xl md:text-5xl py-2 px-6 md:py-6 md:px-1 md:w-64 md:mx-auto text-dark font-extrabold leading-tight tracking-tight mb-0 z-20">
          <span className="md:block">What Our</span>
          <span className="md-block">{" "} Customers</span>
          <span className="block">Are Saying!</span>
        </div>
        <div className="absolute right-0 bottom-0 mr-4 mb-4 flex">
          <button
            className="rounded-l-full border-r bg-gray-100 text-gray-500 focus:outline-none hover:text-primary font-bold w-12 h-10"
            onClick={goToPrevTestimonial}
          >
            &#8592;
          </button>
          <button
            className="rounded-r-full bg-gray-100 text-gray-500 focus:outline-none hover:text-primary font-bold w-12 h-10"
            onClick={goToNextTestimonial}
          >
            &#8594;
          </button>
        </div>
      </div>
      <div className="bg-slate-200 xs:rounded-b-2xl md:rounded-b-none md:rounded-r-2xl dark:bg-total-black md:w-1/2">
        <div className="flex flex-col h-full relative">
          <div className="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary fill-current w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24">
              <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
            </svg>
          </div>
          <div className="h-full relative z-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={currentIndex === index ? 'block' : 'hidden'}>
                <p className="text-text-secondary md:mt-12 dark:text-slate-400 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-lg xs:text-md md:text-lg">
                  {testimonial.review}
                </p>
              </div>
            ))}
          </div>
          <div className="flex my-4 justify-center items-center">
            {visibleTestimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex((currentIndex + index) % testimonials.length)}
                className={`text-center font-bold focus:outline-none focus:shadow-outline inline-block rounded-full mx-2 ${
                  currentIndex === (currentIndex + index) % testimonials.length
                    ? 'h-16 w-16 opacity-100 bg-secondary text-white'
                    : 'h-12 w-12 opacity-50 bg-secondary/30 dark:text-slate-200 text-text-secondary'
                }`}
              >
                {testimonial.initials}
              </button>
            ))}
          </div>
          <div className="flex justify-center px-6 pt-2 pb-6 md:py-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={currentIndex === index ? 'block text-center' : 'hidden'}>
                <h2 className="text-sm md:text-base font-bold text-text-primary dark:text-slate-300 leading-tight">{testimonial.user}</h2>
                <small className="text-text-secondary text-xs md:text-sm truncate">{testimonial.position}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
