import Contact from "@/components/Contact";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us | KriraAI",
  description: "Know more about KriraAI and how we can help you. Contact us for more information.",
};

const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
