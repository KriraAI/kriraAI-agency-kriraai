import React from 'react';
import Link from "next/link";
import { otherServices } from "@/types/serviceProjects";

const MoreFromUs = ({moreServices}: {moreServices:otherServices[]}) =>{
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Other Expertise</h2>
        <div className="grid grid-cols-1 xxs:grid-cols-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {moreServices.map((service, index) => (
            <Link key={index} href={`${service.link}`}>
              <div
                key={index}
                className="border border-gray-200 rounded-lg py-12 text-center hover:border-primary hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold rounded-full px-4 py-1">
                  {service.category}
                </span>
                </div>
                <img src={service.image} alt={service.name} className="mx-auto xxs:px-10 xs:px-10 mb-4 lg:px-16" />
                <h3 className="text-xl font-semibold">{service.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreFromUs;
