'use client';
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import TextGradientHeading from "@/components/ui/gradient-text";
import AnimLogo from "@/components/AnimLogo";

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <footer className="relative xxs:mt-12 xs:mt-12 z-10 bg-white lg:px-32 pt-16 dark:bg-gray-dark md:pt-20 lg:pt-28">
        <div className="container ">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:mt-20 xxs:w-full xs:w-full md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 justify-center xxs:w-full xs:w-full md:max-w-[360px] lg:mb-16">
                <div className={"xxs:pb-20 xs:pb-20 md:pb-0"}>
                  <AnimLogo />
                </div>
                <div className={"xxs:pt-0 xs:pt-0 md:pt-20"}>
                  <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                    Trusted Partner for Innovative IT Solutions & Business Success.
                  </p>
                  <div className="flex items-center">
                    <a
                      href="https://www.facebook.com/people/Kriraai/61557460204334/"
                      aria-label="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://x.com/KriraAI"
                      aria-label="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/kriraai/"
                      aria-label="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        className="fill-current"
                      >
                        <path
                          d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                      </svg>
                    </a>
                    <a
                      href="https://wa.me/+919879576875"
                      aria-label="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body-color mx-6 duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <svg width="18"
                           height="18"
                           viewBox="0 0 24 24"
                           fill="none"
                           className="fill-current"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="m15.271 13.21c.578.185 1.078.416 1.543.7l-.031-.018c.529.235.986.51 1.403.833l-.015-.011c.02.061.032.13.032.203 0 .011 0 .021-.001.032v-.001c-.015.429-.11.832-.271 1.199l.008-.021c-.231.463-.616.82-1.087 1.01l-.014.005c-.459.243-1.001.393-1.576.411h-.006c-1.1-.146-2.094-.484-2.988-.982l.043.022c-1.022-.468-1.895-1.083-2.636-1.829l-.001-.001c-.824-.857-1.579-1.795-2.248-2.794l-.047-.074c-.636-.829-1.041-1.866-1.1-2.995l-.001-.013v-.124c.032-.975.468-1.843 1.144-2.447l.003-.003c.207-.206.491-.335.805-.341h.001c.101.003.198.011.292.025l-.013-.002c.087.013.188.021.292.023h.003c.019-.002.04-.003.062-.003.13 0 .251.039.352.105l-.002-.001c.107.118.189.261.238.418l.002.008q.124.31.512 1.364c.135.314.267.701.373 1.099l.014.063c-.076.361-.268.668-.533.889l-.003.002q-.535.566-.535.72c.004.088.034.168.081.234l-.001-.001c.405.829.936 1.533 1.576 2.119l.005.005c.675.609 1.446 1.132 2.282 1.54l.059.026c.097.063.213.103.339.109h.002q.233 0 .838-.752t.804-.752zm-3.147 8.216h.022c1.357 0 2.647-.285 3.814-.799l-.061.024c2.356-.994 4.193-2.831 5.163-5.124l.024-.063c.49-1.113.775-2.411.775-3.775s-.285-2.662-.799-3.837l.024.062c-.994-2.356-2.831-4.193-5.124-5.163l-.063-.024c-1.113-.49-2.411-.775-3.775-.775s-2.662.285-3.837.799l.062-.024c-2.356.994-4.193 2.831-5.163 5.124l-.024.063c-.49 1.117-.775 2.419-.775 3.787 0 2.141.698 4.12 1.879 5.72l-.019-.026-1.225 3.613 3.752-1.194c1.49 1.01 3.327 1.612 5.305 1.612h.047zm0-21.426h.033c1.628 0 3.176.342 4.575.959l-.073-.029c2.825 1.197 5.028 3.4 6.196 6.149l.029.076c.588 1.337.93 2.896.93 4.535s-.342 3.198-.959 4.609l.029-.074c-1.197 2.825-3.4 5.028-6.149 6.196l-.076.029c-1.327.588-2.875.93-4.503.93-.011 0-.023 0-.034 0h.002c-.016 0-.034 0-.053 0-2.059 0-3.992-.541-5.664-1.488l.057.03-6.465 2.078 2.109-6.279c-1.051-1.714-1.674-3.789-1.674-6.01 0-1.646.342-3.212.959-4.631l-.029.075c1.197-2.825 3.4-5.028 6.149-6.196l.076-.029c1.327-.588 2.875-.93 4.503-.93h.033-.002z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/kriraai?igsh=MTQ2ZGFjdGhwanl5ZQ=="
                      aria-label="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <svg width="18"
                           height="18"
                           viewBox="0 0 24 24"
                           fill="none"
                           className="fill-current"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12,9.52A2.48,2.48,0,1,0,14.48,12,2.48,2.48,0,0,0,12,9.52Zm9.93-2.45a6.53,6.53,0,0,0-.42-2.26,4,4,0,0,0-2.32-2.32,6.53,6.53,0,0,0-2.26-.42C15.64,2,15.26,2,12,2s-3.64,0-4.93.07a6.53,6.53,0,0,0-2.26.42A4,4,0,0,0,2.49,4.81a6.53,6.53,0,0,0-.42,2.26C2,8.36,2,8.74,2,12s0,3.64.07,4.93a6.86,6.86,0,0,0,.42,2.27,3.94,3.94,0,0,0,.91,1.4,3.89,3.89,0,0,0,1.41.91,6.53,6.53,0,0,0,2.26.42C8.36,22,8.74,22,12,22s3.64,0,4.93-.07a6.53,6.53,0,0,0,2.26-.42,3.89,3.89,0,0,0,1.41-.91,3.94,3.94,0,0,0,.91-1.4,6.6,6.6,0,0,0,.42-2.27C22,15.64,22,15.26,22,12S22,8.36,21.93,7.07Zm-2.54,8A5.73,5.73,0,0,1,19,16.87,3.86,3.86,0,0,1,16.87,19a5.73,5.73,0,0,1-1.81.35c-.79,0-1,0-3.06,0s-2.27,0-3.06,0A5.73,5.73,0,0,1,7.13,19a3.51,3.51,0,0,1-1.31-.86A3.51,3.51,0,0,1,5,16.87a5.49,5.49,0,0,1-.34-1.81c0-.79,0-1,0-3.06s0-2.27,0-3.06A5.49,5.49,0,0,1,5,7.13a3.51,3.51,0,0,1,.86-1.31A3.59,3.59,0,0,1,7.13,5a5.73,5.73,0,0,1,1.81-.35h0c.79,0,1,0,3.06,0s2.27,0,3.06,0A5.73,5.73,0,0,1,16.87,5a3.51,3.51,0,0,1,1.31.86A3.51,3.51,0,0,1,19,7.13a5.73,5.73,0,0,1,.35,1.81c0,.79,0,1,0,3.06S19.42,14.27,19.39,15.06Zm-1.6-7.44a2.38,2.38,0,0,0-1.41-1.41A4,4,0,0,0,15,6c-.78,0-1,0-3,0s-2.22,0-3,0a4,4,0,0,0-1.38.26A2.38,2.38,0,0,0,6.21,7.62,4.27,4.27,0,0,0,6,9c0,.78,0,1,0,3s0,2.22,0,3a4.27,4.27,0,0,0,.26,1.38,2.38,2.38,0,0,0,1.41,1.41A4.27,4.27,0,0,0,9,18.05H9c.78,0,1,0,3,0s2.22,0,3,0a4,4,0,0,0,1.38-.26,2.38,2.38,0,0,0,1.41-1.41A4,4,0,0,0,18.05,15c0-.78,0-1,0-3s0-2.22,0-3A3.78,3.78,0,0,0,17.79,7.62ZM12,15.82A3.81,3.81,0,0,1,8.19,12h0A3.82,3.82,0,1,1,12,15.82Zm4-6.89a.9.9,0,0,1,0-1.79h0a.9.9,0,0,1,0,1.79Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Section */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-2 lg:mb-16">
                <div className="flex justify-between items-center cursor-pointer lg:cursor-default"
                     onClick={() => toggleSection("company")}>
                  <h2 className="mb-6 text-xl xs:text-lg font-medium text-black dark:text-white">
                    Company
                  </h2>
                  <span className="lg:hidden">
                    {openSection === "company" ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                <ul
                  className={`transition-all ${openSection === "company" ? "max-h-full" : "max-h-0 overflow-hidden lg:max-h-full lg:overflow-visible"}`}>
                  <li>
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/work"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Our Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/career"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Terms of Use
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services Section */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-2 lg:mb-16">
                <div className="flex justify-between items-center cursor-pointer lg:cursor-default"
                     onClick={() => toggleSection("services")}>
                  <h2 className="mb-6 text-xl xs:text-lg font-medium  text-black dark:text-white">
                    Services
                  </h2>
                  <span className="lg:hidden">
                    {openSection === "services" ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                <ul
                  className={`transition-all ${openSection === "services" ? "max-h-full" : "max-h-0 overflow-hidden lg:max-h-full lg:overflow-visible"}`}>
                  <li>
                    <Link
                      href="/ai-services-company"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      AI services-company
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/web-development"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mobile-app-development"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Mobile Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cloud-services"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Cloud Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/data-analytics"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Data Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ui-ux-design"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/branding"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Branding
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/custom-software"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Custom Software
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tech-consultancy"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Tech Consult
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Industries Section */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-2 lg:mb-16">
                <div className="flex justify-between items-center cursor-pointer lg:cursor-default"
                     onClick={() => toggleSection("industries")}>
                  <h2 className="mb-6 text-xl xs:text-lg font-medium text-black dark:text-white">
                    Industries
                  </h2>
                  <span className="lg:hidden">
                    {openSection === "industries" ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                <ul
                  className={`transition-all ${openSection === "industries" ? "max-h-full" : "max-h-0 overflow-hidden lg:max-h-full lg:overflow-visible"}`}>
                  <li>
                  <Link
                      href="/industries/finance-solutions"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Finance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/healthcare-solutions"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Healthcare
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/healthcare-solutions"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Hospitality
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/manufacturing-solutions"
                          className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                      Manufacturing
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/education-solutions"
                          className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/retail-solutions"
                          className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                      Retail
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/telecommunications-solutions"
                          className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                      Telecommunications
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/social-media-solutions"
                          className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                      Social Media
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/ecommerce-solutions"
                          className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                      Ecommerce
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="h-px w-full bg-gradient-to-r from-transparent via-[#959CB183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-3">
            <span className="flex justify-center items-end">
              <p className="text-center font-light text-base text-body-color dark:text-grey">All Rights Reserved © 2024 by {" "}</p>
              <TextGradientHeading size={"text-center font-bold text-base text-body-color text-md"}
                                   text={"‎ KriraAI"} />
            </span>
          </div>
        </div>
        <div
          className="absolute blur-xl scale-y-[-1] bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>

        </footer>
    </>
  );
};

export default Footer;
