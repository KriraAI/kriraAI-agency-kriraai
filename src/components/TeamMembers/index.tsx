'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from "@/components/ui/moving-border";

const teamMembers = [
  {
    name: 'Divyang Mandani',
    position: 'Founder',
    image: '/images/team/person-1.jpg',
    bio: 'Divyang Mandani is a visionary leader ' +
      'with a passion for leveraging advanced AI and IT solutions to drive business success.'+
      'With a proven track record in innovation and digital transformation, he is dedicated to supporting businesses with customized,'+
      'high-impact technology strategies.',
  }
];

const TeamSection = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <div className="container mt-12 md:flex xxs:flex xxs:flex-col-reverse xs:flex xs:flex-col-reverse  md:flex-row justify-center items-center">
      <div
        className="lg:px-32 xxs:px-8 xs:px-8 md:justify-center xxs:justify-start xs:justify-start flex items-center py-16 ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group perspective"
            onMouseEnter={() => setFlippedIndex(index)}
            onMouseLeave={() => setFlippedIndex(null)}
          >
            <motion.div
              className={`relative xxs:w-[290px] xs:w-[320px] md:w-[460px] xxs:h-[25rem] xs:h-[25rem] md:h-[30rem] bg-white rounded-3xl  transform-style-3d transition-transform duration-700 ${
                flippedIndex === index ? 'rotate-y-180' : ''
              }`}
            >
              <div
                className="absolute w-full pt-12 rounded-3xl dark:bg-total-black h-full border border-gray-300 dark:border-gray-600 backface-hidden p-4 flex flex-col justify-center items-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="rounded-3xl object-fill "
                  width={296}
                  height={296}
                />
                <h3 className="text-2xl font-bold mt-6 mb-2">{member.name}</h3>
                <p className="text-md text-text-secondary">{member.position}</p>
              </div>
              <div
                className="absolute w-full h-full bg-white dark:bg-total-black border border-gray-300 dark:border-gray-600 rounded-3xl p-4 transform rotate-y-180 backface-hidden">
                {/*<h3 className="text-xl font-bold mb-2">{member.name}</h3>*/}
                {/*<p className="text-sm text-gray-600 mb-4">{member.position}</p>*/}
                <p className="text-sm mt-16 mb-20 text-text-secondary">{member.bio}</p>
                <div className="flex justify-center">
                 <a href="https://www.linkedin.com/in/divyang-mandani-699877243" target="_blank" rel="noopener noreferrer">
                <Button
                 borderRadius="1.75rem"
                 borderClassName="radial-gradient(#66cc66 10%, transparent 60%)"
                  className="h-12 w-max rounded-full bg-[#0099cb] px-5 text-base font-semibold text-white duration-300 dark:bg-black/80 dark:text-white dark:hover:bg-dark/80 lg:grid"
                 >
                 LinkedIn Profile
              </Button>
               </a>
                </div>

                {/* <div className="flex justify-center">
                  
                  <Button
                    borderRadius="1.75rem"
                    borderClassName="radial-gradient(#66cc66 10%, transparent 60%)"
                    
                    className="h-12 w-max rounded-full bg-[#0099cb] px-5 text-base font-semibold text-white duration-300 dark:bg-black/80 dark:text-white dark:hover:bg-dark/80 lg:grid"
                  >
                    LinkedIn Profile
                  </Button>
                </div> */}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      <div className={"max-w-lg xxs:m-0 xs:m-0 md:mr-12 "}>
        <h2 className="xxs:text-4xl xs:text-4xl md:text-5xl md:text-start xs:text-center xxs:text-center font-extrabold dark:text-slate-300 text-gray-800 md:mt-6">
          Meet our <br />Founder
        </h2>
        <p className="max-w-md text-justify mt-8 text-text-secondary">
          Our team is made up of highly skilled professionals,
          who are passionate about their work and are committed to delivering the best results for our clients.
          They are the backbone of our company and are the reason for our success. We are proud to have them on our
          team.
        </p>
      </div>
    </div>
  );
};

export default TeamSection;
