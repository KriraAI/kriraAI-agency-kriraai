import ServiceChoose from "src/components/(services)/ServiceChoose";
import industryData from "@/data/industries.json";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { Industry } from "@/types/industry";
import GetInTouch from "@/components/GetInTouch";
import HeroSection from "@/components/(industries)/HeroSection";
import Section2 from "@/components/(industries)/Section2";
import Section3 from "@/components/(industries)/Section3";
import Section4 from "@/components/(industries)/Section4";
import FAQ from "@/components/FAQ";
import React from "react";
import AnimationReuse from "@/components/AnimationReuse";
import Head from "next/head";

type Params = {
  industryId: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = industryData.map(industry => ({
    params: { industryId: industry.id }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ industry: Industry }, Params> = async ({ params }) => {
  if (!params || !params.industryId) {
    return {
      notFound: true
    };
  }

  const industry = industryData.find(industry => industry.id === params.industryId);

  if (!industry) {
    return {
      notFound: true
    };
  }

  return {
    props: { industry }
  };
};

const IndustryPage = ({ industry }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!industry) return <p>Industry not found</p>;

  return (
    <>
      <Head>
        <title>{industry.title} - KriraAI</title>
        <meta name="description" content={industry.description} />
        <meta property="og:title" content={`${industry.title} - Your Company Name`} />
        <meta property="og:description" content={industry.description} />
      </Head>
      <div>
        <HeroSection title={industry.title}
                     image={industry.image}
                     subtitle={industry.subtitle}
                     description={industry.description} />
        <Section2 relevance={industry.relevance} />
        <Section3 specialized={industry.specialized} />
        <Section4 trends={industry.trends} />
        <div className="md:container mb-16">
          <ServiceChoose serviceContent={industry.why_choose} />
        </div>
        <AnimationReuse animationPath={industry.animation}
                        heading={"Services We Provide"}
                        content={"Our team is made up of highly skilled professionals,\n" +
                          "who are passionate about their work and are committed to delivering the best results for our clients."}
                        buttonText={"Our Expertise"}
                        buttonLink={"/services"}
        />
        <FAQ props={industry.faq} />
        <GetInTouch
          title="Let's create something wonderful and meaningful together."
          description="Do not wait for tomorrow; let's start building your future today. Get in touch with KriraAI and unlock a world of possibilities for your business. Your digital journey begins here - with KriraAI, where innovation knows no bounds. 🌟"
          buttonText="Contact Us Now"
          buttonLink="/contact"
        />
      </div>
    </>
  );
};

export default IndustryPage;
