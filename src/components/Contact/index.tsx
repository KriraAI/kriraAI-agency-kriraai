import ContactForm from "@/components/ContactForm";
import { AnimationPath } from "@/components/AnimLogo/OtherAnimations";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="md:container xxs:py-12 xxs:mx-6 xs:py-12 xs:mx-6 md:py-0 lg:mx-40 lg:my-16">
        <div className="-mx-4 flex xxs:flex-col xs:flex-col lg:flex-row md:flex-wrap">
          <div className="w-full px-4 lg:w-7/12 ">
            <div
              className="mb-12 rounded-xl bg-gradient-to-b from-slate-200 to-white dark:from-dark dark:to-total-black px-8 py-11 shadow-three sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Contact Us
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <ContactForm />
            </div>
          </div>
          <div className="w-full mt-12 mb-8 px-4 lg:w-5/12 ">
            <div
              className="animate_top w-screen md:w-2/5 md:p-7.5 lg:w-[66%] xl:pt-15"
            >
              <AnimationPath
                classname={"mb-10 xxs:w-10/12 xs:w-10/12 md:w-full"}
                path="/images/animations/contact.json"
              />
              <div className=" w-full mb-7">
                <h3 className="mb-4 text-xl text-metatitle3 font-medium text-black dark:text-white">
                  Our Loaction
                </h3>
                <p className="text-slate-500 md:m-0 xxs:mr-12 xs:mr-12">434, Creation plaza, Bombay market road, Surat, India 395010</p>
              </div>
              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 text-xl font-medium text-black dark:text-white">
                  Email Address
                </h3>
                <p className="text-slate-500">
                  <a href="mailto:info@kriraai.com" target="_blank">info@kriraai.com</a>
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-xl text-metatitle3 font-medium text-black dark:text-white">
                  Phone Number
                </h4>
                <p className="text-slate-500">
                  <a href="tel:+919879576875">+91 9879576875</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
