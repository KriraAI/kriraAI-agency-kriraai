import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import ParallaxSection from "@/components/ParallaxSection";
import TechStack from "@/components/TechStack";
import { Metadata } from "next";
import HomeTestimonial from "@/components/Reviews";
import ProjectDisplayData from '@/data/project_display.json';
import FAQ from "@/components/FAQ";
import ProjectDisplay from "@/components/ui/project-display";

export const metadata: Metadata = {
  title: "Best AI Development Company in India | Krira AI",
  description: "Krira AI is a Best AI development company in India offering cutting-edge generative AI development services. Let's build the future with AI together ."
};

export default function Home() {
  const faq = [
    {
      question: "What is KriraAI, and what services do you offer?",
      answer: "KriraAI is a comprehensive IT solutions provider offering services such as AI, mobile app development, web development, data and analytics, UI/UX design, branding, custom software development, cloud services, and tech consultancy."
    },
    {
      question: "How do I get in touch with KriraAI for a consultation?",
      answer: "You can contact us via our website's contact form, email us at [your email], or call us at [your phone number]. We are also available on social media platforms."
    },
    {
      question: "What industries does KriraAI specialize in?",
      answer: "We serve a variety of industries including healthcare, finance, retail, manufacturing, and education. Our solutions are tailored to meet the specific needs of each industry."
    },
    {
      question: "What makes KriraAI different from other IT service providers?",
      answer: "KriraAI stands out due to our commitment to client success, a client-centric approach, an expert team, a proven track record, transparent communication, and customized solutions tailored to each client's unique needs."
    },
    {
      question: "How can I ensure that KriraAI's solutions will meet my business needs?",
      answer: "We work closely with you to understand your specific requirements and goals. Our team of experts develops tailored solutions to ensure they align perfectly with your"
    }];
  
  return (
    <>
      <ScrollUp />
      <Hero />
      <Brands />
      <ParallaxSection />
      <ProjectDisplay products={ProjectDisplayData} />
      <TechStack />
      <HomeTestimonial />
      <FAQ props={faq} />
    </>
  );
}


