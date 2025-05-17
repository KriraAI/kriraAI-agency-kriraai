export type OurProject= {
  title: string;
  image: string;
  link: string;
};

export type whyContent = {
  title: string;
  description: string;
};

export type ServiceDetailsProps = {
  title: string;
  description: string;
  work?: string;
  details: { title: string; description: string }[];
};

export type HeroSectionProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

export type otherServices = {
  name: string;
  image: string;
  category: string;
  link: string;
};

export type FAQProps = {
  question: string;
  answer: string;
}