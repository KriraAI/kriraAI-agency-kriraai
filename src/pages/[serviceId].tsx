// import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
// import ServiceDetails from 'src/components/(services)/ServiceDetails';
// import ServiceHero from 'src/components/(services)/ServiceHero';
// import ServiceChoose from 'src/components/(services)/ServiceChoose';
// import ServiceRecent from 'src/components/(services)/ServiceRecent';
// import FAQ from '@/components/FAQ';
// import mainServicesData from '@/data/main_services.json';
// import subServicesData from '@/data/sub_services.json';
// import { Service } from "@/types/service";
// import Testimonials from "@/components/Testimonials";
// import React from "react";
// import MoreFromUs from "@/components/MoreFromUs";
// import ProcessSection from "@/components/ProcessSection";
// import Head from 'next/head';

// type Params = {
//   serviceId: string;
// };

// const ServicePage = ({ service, isMainService }: InferGetStaticPropsType<typeof getStaticProps>) => {
//   if (!service) return <p>Service not found</p>;

//   return (
//     <>
//       <Head>
//         <title>{service.title} - KriraAI</title>
//          <meta name="Top AI Development Services Company | Custom AI Solutions" content="Looking for expert AI development services? Krira AI offers custom AI solutions, generative AI, and scalable platforms. Top AI services provider in India." />
//         <meta name="description" content={service.description} />
//         <meta property="og:title" content={`${service.title} - Your Company Name`} />
//         <meta property="og:description" content={service.description} />
//       </Head>
//       <div className="md:container md:mx-auto md:p-4">
//         <ServiceHero
//           title={service.title}
//           subtitle={service.subtitle}
//           description={service.description}
//           image={service.image}
//         />
//         <ServiceDetails
//           title={`Our ${service.title}`}
//           description={service.serviceDescription}
//           work={service.ourWork}
//           details={service.details}
//         />
//         <ServiceChoose serviceContent={service.whyContent} />
//         <ServiceRecent projects={service.projects} />
//         {isMainService && <ProcessSection content={service.ourProcess!} />}
//         <Testimonials />  
//         <MoreFromUs moreServices={service.otherServices} />
//         <FAQ props={service.faq} />
//       </div>
//     </>
//   );
// };

// export const getStaticPaths: GetStaticPaths<Params> = async () => {
//   const mainPaths = mainServicesData.map(service => ({
//     params: { serviceId: service.id },
//   }));

//   const subPaths = subServicesData.map(service => ({
//     params: { serviceId: service.id },
//   }));

//   const paths = [...mainPaths, ...subPaths];

//   return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps<{ service: Service; isMainService: boolean }, Params> = async ({ params }) => {
//   if (!params || !params.serviceId) {
//     return {
//       notFound: true,
//     };
//   }

//   const mainService = mainServicesData.find(service => service.id === params.serviceId);
//   const subService = subServicesData.find(service => service.id === params.serviceId);

//   const service = mainService || subService;
//   const isMainService = !!mainService;

//   if (!service) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { service, isMainService },
//   };
// };

// export default ServicePage;

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import ServiceDetails from 'src/components/(services)/ServiceDetails';
import ServiceHero from 'src/components/(services)/ServiceHero';
import ServiceChoose from 'src/components/(services)/ServiceChoose';
import ServiceRecent from 'src/components/(services)/ServiceRecent';
import FAQ from '@/components/FAQ';
import mainServicesData from '@/data/main_services.json';
import subServicesData from '@/data/sub_services.json';
import { Service } from "@/types/service";
import Testimonials from "@/components/Testimonials";
import React from "react";
import MoreFromUs from "@/components/MoreFromUs";
import ProcessSection from "@/components/ProcessSection";
import Head from 'next/head';

type Params = {
  serviceId: string;
};

const ServicePage = ({ service, isMainService }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!service) return <p>Service not found</p>;

  return (
    <>
      <Head>
        <title>{service.metaTitle || `${service.title} - KriraAI`}</title>
  <meta name="description" content={service.metaDescription || service.description} />
  {/* <meta name="keywords" content={service.keywords || ''} /> */}
  <meta property="og:title" content={service.metaTitle || `${service.title} - KriraAI`} />
  <meta property="og:description" content={service.metaDescription || service.description} />
  <meta property="og:image" content={service.image} />
  <meta property="og:url" content={`https://kriraai.com/services/${service.id}`} />
      </Head>
      <div className="md:container md:mx-auto md:p-4">
        <ServiceHero
          title={service.title}
          subtitle={service.subtitle}
          description={service.description}
          image={service.image}
        />
        <ServiceDetails
          title={`Our ${service.title}`}
          description={service.serviceDescription}
          work={service.ourWork}
          details={service.details}
        />
        <ServiceChoose serviceContent={service.whyContent} />
        <ServiceRecent projects={service.projects} />
        {isMainService && <ProcessSection content={service.ourProcess!} />}
        <Testimonials />  
        <MoreFromUs moreServices={service.otherServices} />
        <FAQ props={service.faq} />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const mainPaths = mainServicesData.map(service => ({
    params: { serviceId: service.id },
  }));

  const subPaths = subServicesData.map(service => ({
    params: { serviceId: service.id },
  }));

  const paths = [...mainPaths, ...subPaths];

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ service: Service; isMainService: boolean }, Params> = async ({ params }) => {
  if (!params || !params.serviceId) {
    return {
      notFound: true,
    };
  }

  const mainService = mainServicesData.find(service => service.id === params.serviceId);
  const subService = subServicesData.find(service => service.id === params.serviceId);

  const service = mainService || subService;
  const isMainService = !!mainService;

  if (!service) {
    return {
      notFound: true,
    };
  }

  return {
    props: { service, isMainService },
  };
};

export default ServicePage;


// import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
// import ServiceDetails from 'src/components/(services)/ServiceDetails';
// import ServiceHero from 'src/components/(services)/ServiceHero';
// import ServiceChoose from 'src/components/(services)/ServiceChoose';
// import ServiceRecent from 'src/components/(services)/ServiceRecent';
// import FAQ from '@/components/FAQ';
// import mainServicesData from '@/data/main_services.json';
// import subServicesData from '@/data/sub_services.json';
// import { Service } from "@/types/service";
// import Testimonials from "@/components/Testimonials";
// import MoreFromUs from "@/components/MoreFromUs";
// import ProcessSection from "@/components/ProcessSection";
// import Head from 'next/head';
// import React from "react";

// type Params = {
//   serviceId: string;
// };

// const ServicePage = ({ service, isMainService }: InferGetStaticPropsType<typeof getStaticProps>) => {
//   if (!service) return <p>Service not found</p>;

//   return (
//     <>
//       <Head>
//         <title>{service.metaTitle || `${service.title} - KriraAI`}</title>
//         <meta name="description" content={service.metaDescription || service.description} />
//         {/* <meta name="keywords" content={service.keywords || ''} /> */}
//         <meta property="og:title" content={service.metaTitle || `${service.title} - KriraAI`} />
//         <meta property="og:description" content={service.metaDescription || service.description} />
//         <meta property="og:image" content={service.image} />
//         <meta property="og:url" content={`https://kriraai.com/services/${service.id}`} />
//       </Head>
//       <div className="md:container md:mx-auto md:p-4">
//         <ServiceHero
//           title={service.title}
//           subtitle={service.subtitle}
//           description={service.description}
//           image={service.image}
//         />
//         <ServiceDetails
//           title={`Our ${service.title}`}
//           description={service.serviceDescription}
//           work={service.ourWork}
//           details={service.details}
//         />
//         <ServiceChoose serviceContent={service.whyContent} />
//         <ServiceRecent projects={service.projects} />
//         {isMainService && service.ourProcess && (
//           <ProcessSection content={service.ourProcess} />
//         )}
//         <Testimonials />  
//         <MoreFromUs moreServices={service.otherServices} />
//         {service.faq && <FAQ props={service.faq} />}
//       </div>
//     </>
//   );
// };

// export const getStaticPaths: GetStaticPaths<Params> = async () => {
//   // Ensure ids are strings
//   const mainPaths = mainServicesData.map(service => ({
//     params: { serviceId: service.id.toString() },
//   }));

//   const subPaths = subServicesData.map(service => ({
//     params: { serviceId: service.id.toString() },
//   }));

//   const paths = [...mainPaths, ...subPaths];

//   return { paths, fallback: false }; // or fallback: 'blocking' if preferred
// };

// export const getStaticProps: GetStaticProps<{ service: Service; isMainService: boolean }, Params> = async ({ params }) => {
//   if (!params?.serviceId) {
//     return { notFound: true };
//   }

//   const mainService = mainServicesData.find(service => service.id.toString() === params.serviceId);
//   const subService = subServicesData.find(service => service.id.toString() === params.serviceId);

//   const service = mainService || subService;
//   const isMainService = !!mainService;

//   if (!service) {
//     return { notFound: true };
//   }

//   return {
//     props: { service, isMainService },
//   };
// };

// export default ServicePage;

// import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
// import ServiceDetails from 'src/components/(services)/ServiceDetails';
// import ServiceHero from 'src/components/(services)/ServiceHero';
// import ServiceChoose from 'src/components/(services)/ServiceChoose';
// import ServiceRecent from 'src/components/(services)/ServiceRecent';
// import FAQ from '@/components/FAQ';
// import mainServicesData from '@/data/main_services.json';
// import subServicesData from '@/data/sub_services.json';
// import { Service } from "@/types/service";
// import Testimonials from "@/components/Testimonials";
// import React from "react";
// import MoreFromUs from "@/components/MoreFromUs";
// import ProcessSection from "@/components/ProcessSection";
// import Head from 'next/head';

// type Params = {
//   serviceId: string;
// };

// const ServicePage = ({ service, isMainService }: InferGetStaticPropsType<typeof getStaticProps>) => {
//   if (!service) return <p>Service not found</p>;

//   return (
//     <>
//       <Head>
//         <title>{service.title} - KriraAI</title>
//          <meta name="Top AI Development Services Company | Custom AI Solutions" content="Looking for expert AI development services? Krira AI offers custom AI solutions, generative AI, and scalable platforms. Top AI services provider in India." />
//         <meta name="description" content={service.description} />
//         <meta property="og:title" content={`${service.title} - KriraAI`} />
//         <meta property="og:description" content={service.description} />
//       </Head>
//       <div className="md:container md:mx-auto md:p-4">
//         <ServiceHero
//           title={service.title}
//           subtitle={service.subtitle}
//           description={service.description}
//           image={service.image}
//         />
//         <ServiceDetails
//           title={`Our ${service.title}`}
//           description={service.serviceDescription}
//           work={service.ourWork}
//           details={service.details}
//         />
//         <ServiceChoose serviceContent={service.whyContent} />
//         <ServiceRecent projects={service.projects} />
//         {isMainService && <ProcessSection content={service.ourProcess!} />}
//         <Testimonials />  
//         <MoreFromUs moreServices={service.otherServices} />
//         <FAQ props={service.faq} />
//       </div>
//     </>
//   );
// };

// export const getStaticPaths: GetStaticPaths<Params> = async () => {
//   const mainPaths = mainServicesData.map(service => ({
//     params: { serviceId: service.id },
//   }));

//   const subPaths = subServicesData.map(service => ({
//     params: { serviceId: service.id },
//   }));

//   const paths = [...mainPaths, ...subPaths];

//   return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps<{ service: Service; isMainService: boolean }, Params> = async ({ params }) => {
//   if (!params || !params.serviceId) {
//     return {
//       notFound: true,
//     };
//   }

//   const mainService = mainServicesData.find(service => service.id === params.serviceId);
//   const subService = subServicesData.find(service => service.id === params.serviceId);

//   const service = mainService || subService;
//   const isMainService = !!mainService;

//   if (!service) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { service, isMainService },
//   };
// };

// export default ServicePage;