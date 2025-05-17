import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "@/data/brands.json";
import Link from "next/link";
import AnimatedGradientText from "@/components/ui/animated-text";
import React from "react";

const Brands = () => {
  return (
    <>
      <section className="py-2 pb-12 w-full bg-gradient-to-b from-transparent dark:to-total-black">
        <div className="relative  container mx-auto py-8">
          <AnimatedGradientText className={"bg-transparent backdrop-blur-xl"}>
                  <span
                    className={`inline xs:text-md xs:text-center md:text-xl p-0.5 animate-gradient bg-gradient-to-r from-[#0099cb] via-[#0099cb] to-[#000] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent `}
                  >
                    100+ PROJECTS DELIVERED TO 50+ CLIENTS
                  </span>
          </AnimatedGradientText>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="slider">
            <div className="brand-container">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
              {brandsData.map((brand) => (
                <SingleBrand key={`${brand.id}-duplicate`} brand={brand} />
              ))}
            </div>
          </div>
        </div>

      </section>
      </>
);
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="single-brand">
      <Link
        href={""}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative block h-9 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} fill className="block dark:hidden object-contain" />
      </Link>
    </div>
  );
};
