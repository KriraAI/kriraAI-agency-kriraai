export type SiteBlog = {
  id: string;
  title: string;
  description: string;
  image: string;
  author: {
    name: string;
    image: string;
    designation: string;
  };
  content: { heading: string; paragraph: string }[];
  tags: string[];
  publishDate: string;
}