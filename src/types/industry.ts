export type Industry = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  animation: string;
  relevance: Array<{ title: string; description: string }>;
  specialized: Array<{ title: string }>;
  trends: Array<{ title: string }>;
  why_choose: Array<{ title: string; description: string }>;
  faq: Array<{ question: string; answer: string }>;
};