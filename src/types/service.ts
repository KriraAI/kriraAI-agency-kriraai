export type Service = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  serviceDescription: string;
  ourWork?: string;
  details: Array<{ title: string; description: string }>;
  projects: Array<{ title: string; image: string; link: string }>;
  ourProcess?: Array<{ title: string; description: string,badge:string, image?:string }>;
  otherServices: Array<{ name: string;image:string; category: string; link: string }>;
  whyContent: Array<{ title: string; description: string }>;
  faq: Array<{ question: string; answer: string }>;
};