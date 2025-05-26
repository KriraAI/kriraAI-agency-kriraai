import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import ParallaxSection from "@/components/ParallaxSection";
import TechStack from "@/components/TechStack";
import HomeTestimonial from "@/components/Reviews";
import ProjectDisplayData from '@/data/project_display.json';
import FAQ from "@/components/FAQ";
import ProjectDisplay from "@/components/ui/project-display";
// export const dynamic = 'force-dynamic';
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Best AI Development Company in India | KriraAI",
  description: "Krira AI is a Best AI development company in India offering Advanced generative AI development services. Let's build the future with AI together ."
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
    },
    {
      question: " What is AI development and how can it benefit my business?",
      answer: "The development of intelligent software that can evaluate data, recognize patterns, and make decisions is known as artificial intelligence (AI) development. It assists companies in increasing productivity, cutting expenses, and automating processes."
    },
    {
      question: "Why should I choose KriraAI as my AI development company?",
      answer: "Krira AI is recognized as a Generative AI development company in India, delivering custom AI solutions with proven success in machine learning, NLP, computer vision, and generative AI."
    },
    {
      question: "What makes KriraAI one of the best AI development companies?",
      answer: "We are among the top AI development companies for startups and businesses because we provide end-to-end AI development services, cutting-edge generative AI tools, and extensive expertise in the industry."
    },
    {
      question: "What AI development services do you offer?",
      answer: "We offer a wide range of AI development services, including data science, machine learning, deep learning, computer vision, natural language processing, chatbot development, and more."
    },
     {
      question: "Do you offer generative AI development services?",
      answer: "Yes, we are experts in generative AI development services, including creating custom models and GPT and DALE models for text, images, chatbots, and creative automation."
    },
    {
      question: "Can Krira AI help build custom software for AI development?",
      answer: "Absolutely. We build custom software for AI development tailored to your business needs, including AI tools, data pipelines, and automation platforms."
    },
    {
      question: "How long does it take to develop an AI solution?",
      answer: "The development time depends on project complexity, but a typical AI development solution can take 4 to 25 days, from discovery to deployment."
    },
    {
      question: "Is Krira AI suitable for startups and small businesses?",
      answer: "Yes, we work with businesses, SMEs, and startups. Our adaptable AI development services are made to grow with your company's needs and financial constraints."
    },
    {
      question: "Do you provide support and maintenance after AI development?",
      answer: "Actually, after a project is completed, Krira AI provides regular updates, performance monitoring, and continuing support to make sure your AI system functions properly."
    },
    {
      question: "How can I get started with your AI development team?",
      answer: "Simply use our website to get in touch with us or ask for a free consultation. We'll evaluate your requirements and recommend the ideal AI development solution to achieve your objectives."
    },
  ];
  
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




