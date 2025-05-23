// 'use client';

// import Link from 'next/link';
// import { useEffect, useState, useRef, useMemo } from 'react';
// import Image from 'next/image';
// import { menuData, mobileMenuData } from './menuData';
// import serviceData from '@/data/service_parallax.json';
// import { Menu } from '@/types/menu';
// import { Button } from '../ui/moving-border';
// import { LogoCircle, SmallLogo } from "@/components/AnimLogo/OtherAnimations";
// import { useIsMobile } from "@/hooks/useIsMobile";
// import { animated, useSpring } from "@react-spring/web";

// const Header = () => {
//   const [navbarOpen, setNavbarOpen] = useState(false);
//   const [shrink, setShrink] = useState(false);
//   const [sticky, setSticky] = useState(false);
//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const [activeCategory, setActiveCategory] = useState(serviceData[0].id);
//   const timer = useRef<NodeJS.Timeout | null>(null);

//   const isMobile = useIsMobile();

//   const handleScroll = () => {
//     const scrollTop = window.scrollY;
//     setShrink(scrollTop > 50);
//     setSticky(scrollTop >= 50);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const springProps = useSpring({
//     width: shrink ? (isMobile ? '90%' : '60%') : '100%',
//     left: shrink ? (isMobile ? '5%' : '20%') : '0%',
//     config: { duration: 200 },
//   });

//   const handleSubmenuEnter = (index: number) => {
//     if (!isMobile) {
//       if (timer.current) {
//         clearTimeout(timer.current);
//       }
//       setOpenIndex(index);
//     }
//   };

//   const handleSubmenuLeave = () => {
//     if (!isMobile) {
//       timer.current = setTimeout(() => {
//         setOpenIndex(null);
//       }, 300);
//     }
//   };

//   const closeMenu = () => {
//     setNavbarOpen(false);
//     setOpenIndex(null);
//   };

//   const renderIndustriesSubmenu = useMemo(() => {
//     const industries: Menu | undefined = menuData.find((item) => item.title === 'Industries');
//     if (!industries || !industries.submenu) return null;

//     const columns: Menu[][] = [[], [], [], []];
//     industries.submenu.forEach((item, index) => {
//       columns[index % 4].push(item);
//     });

//     return (
//         <div
//             className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 p-8 w-full min-w-[60rem] border-[.5px] dark:text-white border-gray-300 dark:border-gray-600 rounded-2xl shadow-lg bg-white dark:bg-total-black grid grid-cols-4 gap-4"
//             onMouseEnter={() => handleSubmenuEnter(openIndex as number)}
//             onMouseLeave={handleSubmenuLeave}
//         >
//           {columns.map((column, columnIndex) => (
//               <div key={columnIndex}>
//                 {column.map((item) => (
//                     <Link key={item.id} href={`${item.path}`} onClick={closeMenu}>
//                       <div className="py-2 flex items-center icon-hover hover:text-primary hover:bg-black/5 p-2 rounded-xl hover:scale-105 transition-transform duration-200">
//                         <img
//                             src={item.icon ?? ''}
//                             alt={item.title}
//                             className="w-6 h-6 mr-2"
//                         />
//                         {item.title}
//                       </div>
//                     </Link>
//                 ))}
//               </div>
//           ))}
//         </div>
//     );
//   }, [openIndex]);

//   const renderServicesSubmenu = useMemo(() => {
//     const services: Menu | undefined = menuData.find((item) => item.title === 'Services');
//     if (!services || !services.submenu) return null;

//     return (
//         <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-full min-w-[60rem] p-4 border-[.5px] dark:text-white border-gray-300 dark:border-gray-600 rounded-2xl bg-white dark:bg-total-black"
//              onMouseEnter={() => handleSubmenuEnter(openIndex as number)}
//              onMouseLeave={handleSubmenuLeave}>
//           <div className="flex">
//             <div className="w-2/6 p-8 ease-in border-r border-gray-300 dark:border-gray-600">
//               {serviceData.map((category) => (
//                   <div key={category.id}
//                        className={`cursor-pointer py-2 transition-transform duration-200 ${activeCategory === category.id ? 'rounded-xl pl-4 bg-dark/10 dark:bg-white/10 scale-105' : 'pl-4'}`}
//                        onClick={() => open(category.link, '_self')}
//                        onMouseEnter={() => setActiveCategory(category.id)}>
//                     {category.title}
//                   </div>
//               ))}
//             </div>
//             <div className="w-4/6 p-8 flex justify-between">
//               <div className="w-4/5">
//                 {serviceData.find((category) => category.id === activeCategory)?.items.map((service, index) => (
//                     <Link key={index} href={`/${service.toLowerCase().replace(/\s+/g, '-')}`} onClick={closeMenu}>
//                       <div className="py-2 hover:text-primary hover:scale-105 transition-transform duration-200">
//                         {service}
//                       </div>
//                     </Link>
//                 ))}
//               </div>
//               <div className="w-2/3">
//                 {serviceData.find((category) => category.id === activeCategory)?.image && (
//                     <Image src={`${serviceData.find((category) => category.id === activeCategory)?.image}`}
//                            width={400}
//                            height={400}
//                            objectPosition={'end'}
//                            alt="service"
//                            className="h-72 z-[-1] object-contain absolute right-0 bottom-10 transition-transform duration-200 transform scale-105" />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//     );
//   }, [activeCategory, openIndex]);

//   const renderMobileMenu = () => (
//       <>
//         <ul className="block">
//           {mobileMenuData.map((menuItem, index) => (
//               <li key={menuItem.id}
//                   className="group relative"
//                   onClick={() => isMobile && setOpenIndex(openIndex === index ? null : index)}>
//                 {menuItem.path ? (
//                     <Link href={menuItem.path}
//                           className={`flex py-2 text-xl text-slate-800 font-medium hover:text-primary hover:font-medium lg:mr-0 lg:inline-flex lg:px-0 lg:py-4`}
//                           onClick={closeMenu}>
//                       {menuItem.title}
//                     </Link>
//                 ) : (
//                     <>
//                       <p className="flex cursor-pointer text-xl text-slate-800 font-medium items-center justify-between py-2 group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-4">
//                         {menuItem.title}
//                         <span className="pl-3">
//                     <svg width="25" height="24" viewBox="0 0 25 24">
//                       <path fillRule="evenodd" clipRule="evenodd" d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z" fill="currentColor" />
//                     </svg>
//                   </span>
//                       </p>
//                     </>
//                 )}
//                 {isMobile && openIndex === index && (
//                     <div className="mt-4 border-t text-slate-700 border-gray-200 dark:border-gray-700 pt-4">
//                       {menuItem.submenu?.map((submenuItem) => (
//                           <Link key={submenuItem.id} href={`${submenuItem.path}`} className="block py-2" onClick={closeMenu}>
//                             {submenuItem.title}
//                           </Link>
//                       ))}
//                     </div>
//                 )}
//               </li>
//           ))}
//         </ul>
//         <Link className={"w-full mt-6 flex justify-center items-center z-[1000]"} href="/contact" onClick={closeMenu}>
//           <Button borderRadius="1.75rem" borderClassName="radial-gradient(#3AC8F7 40%, transparent 60%)" className=" px-10 py-4 text-lg rounded-full bg-total-black/80 text-white font-semibold duration-300 dark:bg-black/80 dark:text-white dark:hover:bg-dark/80">
//             Start Project
//           </Button>
//         </Link>
//       </>
//   );

//   return (
//       <animated.header style={springProps} className={`header fixed left-0 top-0 z-40 flex items-center rounded-full transition-all duration-500 ease-in xs:mx-0 xs:mt-3 xs:p-0 lg:mx-0 lg:my-2 lg:p-0
//       ${sticky ? "z-[9999] bg-gradient-to-b from-white/80 bg-opacity-50 xxs:mt-1 backdrop-blur-md border-[.5px] border-slate-300 lg:m-0 xs:w-[90%] xs:p-1 lg:p-0 dark:from-gray-dark/90 to-primary/15 dark:!bg-opacity-40 dark:shadow-sticky-dark" : " xxs:mt-1 bg-transparent"}`}>
//         <div className={`md:w-full xxs:px-2 xxs:pb-2 lg:pb-0 xxs:w-full xxs:mt-3 xs:w-screen xl:container md:container xs:mx-2 md:m-auto ${shrink ? "justify-center" : "justify-between"} flex items-center`}>
//           <div className="relative m-0 p-0 flex w-full items-center justify-center">
//             <div className="w-60 flex justify-center items-center">
//               {shrink ? (
//                   <div className="w-full  xxs:mt-1 xs:my-1 xxs:py-4 xs:py-2 sm:py-4 transition-opacity  px-0 inline-block">
//                     <Link className={"absolute -translate-x-1/2 xs:-mt-[0.2rem] lg:mt-0 lg:left-8 md:-mt-[1.6rem] left-[1rem]"} href="/">
//                       <LogoCircle />
//                     </Link>
//                   </div>
//               ) : (
//                   <div>
//                     <Link className={"flex -ml-20 xs:mt-2 lg:mt-0 justify-center items-center "} href="/">
//                       <SmallLogo />
//                       <Image className={'absolute block w-20 ml-[7.5rem] pl-0 xs:-mt-1 lg:pl-[0.05rem] lg:mt-0 sm:-mt-1 h-7 dark:hidden'} width={100} height={70} src={'/images/logo/logo-xl.svg'} alt={'kriraAI_logo'} />
//                     </Link>
//                   </div>
//               )}
//             </div>
//             <div className="flex w-full items-center justify-center px-4">
//               <div>
//                 <button onClick={() => setNavbarOpen(!navbarOpen)} id="navbarToggler" aria-label="Mobile Menu"
//                         className={`absolute right-0 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[4px] lg:hidden ${shrink? '':'bg-black rounded-full pr-4 mt-1 mr-3' }`}>
//                   <span className={`relative my-1.5 block h-[0.2rem] w-[20px] rounded-full bg-primary transition-all duration-300 dark:bg-white ${navbarOpen ? ' top-[7px] rotate-45' : ''}`} />
//                   <span className={`relative left-2 my-1.5 block h-[0.2rem] rounded-full w-[20px] bg-secondary transition-all duration-300 dark:bg-white ${navbarOpen ? 'opacity-0' : ''}`} />
//                   <span className={`relative my-1.5 block h-[0.2rem] w-[20px] rounded-full bg-primary transition-all duration-300 dark:bg-white ${navbarOpen ? ' top-[-8px] -rotate-45' : ''}`} />
//                 </button>
//                 <div>
//                   <nav id="navbarCollapse" className={`navbar absolute xs:mt-6 md:mt-0 sm:-pr-10 right-0 z-30 w-full rounded-xl border-[1px] border-slate-400 bg-white px-6 py-4 duration-300 dark:border-gray-600 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen ? 'visibility top-full opacity-100' : 'invisible top-[120%] opacity-0'}`}>
//                     {isMobile ? renderMobileMenu() : (
//                         <ul className="block lg:flex lg:space-x-12">
//                           {menuData.map((menuItem, index) => (
//                               <li key={menuItem.id} className="group relative" onMouseEnter={() => handleSubmenuEnter(index)} onMouseLeave={handleSubmenuLeave} onClick={() => isMobile && setOpenIndex(openIndex === index ? null : index)}>
//                                 {menuItem.path ? (
//                                     <Link href={menuItem.path} className={`flex py-2 text-base hover:scale-105 hover:text-primary hover:font-medium lg:mr-0 lg:inline-flex lg:px-0 lg:py-4`} onClick={closeMenu}>
//                                       {menuItem.title}
//                                     </Link>
//                                 ) : (
//                                     <>
//                                       <p className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-4">
//                                         <Link href={"/services"}>
//                                           {menuItem.title}
//                                         </Link>
//                                         <span className="pl-3">
//                                   <svg width="25" height="24" viewBox="0 0 25 24">
//                                     <path fillRule="evenodd" clipRule="evenodd" d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z" fill="#66" />
//                                   </svg>
//                                 </span>
//                                       </p>
//                                       {!isMobile && openIndex === index && menuItem.title === 'Industries' && renderIndustriesSubmenu}
//                                       {!isMobile && openIndex === index && menuItem.title === 'Services' && renderServicesSubmenu}
//                                     </>
//                                 )}
//                                 {isMobile && openIndex === index && (
//                                     <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
//                                       {menuItem.submenu?.map((submenuItem) => (
//                                           <Link key={submenuItem.id} href={`${submenuItem.path}`} className="block py-2" onClick={closeMenu}>
//                                             {submenuItem.title}
//                                           </Link>
//                                       ))}
//                                     </div>
//                                 )}
//                               </li>
//                           ))}
//                         </ul>
//                     )}
//                   </nav>
//                 </div>
//               </div>
//             </div>
//             {!isMobile && (
//                 <div className="flex items-center justify-end lg:pr-0">
//                   <Link
//                       onClick={closeMenu}
//                       href="/contact">
//                     <Button borderRadius="1.75rem"
//                             borderClassName="radial-gradient(#3AC8F7 40%, transparent 60%)"
//                             className={`w-max rounded-full 
//                         ${shrink? 'bg-total-black/80 text-white' : 'text-dark bg-total-black/5'}
//                         px-4 py-2 text-base font-semibold duration-300 dark:bg-black/80 dark:text-white dark:hover:bg-dark/80 xs:hidden sm:hidden md:hidden lg:grid`}>
//                       Start Project
//                     </Button>
//                   </Link>
//                 </div>
//             )}
//           </div>
//         </div>
//       </animated.header>
//   );
// };

// export default Header;
'use client';

import Link from 'next/link';
import { useEffect, useState, useRef, useMemo } from 'react';
import Image from 'next/image';
import { menuData, mobileMenuData } from './menuData';
import serviceData from '@/data/service_parallax.json';
import { Menu } from '@/types/menu';
import { Button } from '../ui/moving-border';
import { LogoCircle, SmallLogo } from "@/components/AnimLogo/OtherAnimations";
import { useIsMobile } from "@/hooks/useIsMobile";
import { animated, useSpring } from "@react-spring/web";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState(serviceData[0].id);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const isMobile = useIsMobile();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setShrink(scrollTop > 50);
    setSticky(scrollTop >= 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const springProps = useSpring({
    width: shrink ? (isMobile ? '90%' : '60%') : '100%',
    left: shrink ? (isMobile ? '5%' : '20%') : '0%',
    config: { duration: 200 },
  });

  const handleSubmenuEnter = (index: number) => {
    if (!isMobile) {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      setOpenIndex(index);
    }
  };

  const handleSubmenuLeave = () => {
    if (!isMobile) {
      timer.current = setTimeout(() => {
        setOpenIndex(null);
      }, 300);
    }
  };

  const closeMenu = () => {
    setNavbarOpen(false);
    setOpenIndex(null);
  };
  
  const openItem = (url: string) => {
    window.open(url, '_self');
    closeMenu();
  }

  const renderIndustriesSubmenu = useMemo(() => {
    const industries: Menu | undefined = menuData.find((item) => item.title === 'Industries');
    if (!industries || !industries.submenu) return null;

    const columns: Menu[][] = [[], [], [], []];
    industries.submenu.forEach((item, index) => {
      columns[index % 4].push(item);
    });

    return (
        <div
            className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 p-8 w-full min-w-[60rem] border-[.5px] dark:text-white border-gray-300 dark:border-gray-600 rounded-2xl shadow-lg bg-white dark:bg-total-black grid grid-cols-4 gap-4"
            onMouseEnter={() => handleSubmenuEnter(openIndex as number)}
            onMouseLeave={handleSubmenuLeave}
        >
          {columns.map((column, columnIndex) => (
              <div key={columnIndex}>
                {column.map((item) => (
                    <Link key={item.id} href={`${item.path}`}
                          onClick={()=>openItem(
                                `${item.path}`
                          )}
                    >
                      <div className="py-2 flex items-center icon-hover hover:text-primary hover:bg-black/5 p-2 rounded-xl hover:scale-105 transition-transform duration-200">
                        <img
                            src={item.icon ?? ''}
                            alt={item.title}
                            className="w-6 h-6 mr-2"
                        />
                        {item.title}
                      </div>
                    </Link>
                ))}
              </div>
          ))}
        </div>
    );
  }, [openIndex]);

  const renderServicesSubmenu = useMemo(() => {
    const services: Menu | undefined = menuData.find((item) => item.title === 'Services');
    if (!services || !services.submenu) return null;

    return (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-full min-w-[60rem] p-4 border-[.5px] dark:text-white border-gray-300 dark:border-gray-600 rounded-2xl bg-white dark:bg-total-black"
             onMouseEnter={() => handleSubmenuEnter(openIndex as number)}
             onMouseLeave={handleSubmenuLeave}>
          <div className="flex">
            <div className="w-2/6 p-8 ease-in border-r border-gray-300 dark:border-gray-600">
              {serviceData.map((category) => (
                  <div key={category.id}
                       className={`cursor-pointer py-2 transition-transform duration-200 ${activeCategory === category.id ? 'rounded-xl pl-4 bg-dark/10 dark:bg-white/10 scale-105' : 'pl-4'}`}
                       onClick={() => open(category.link, '_self')}
                       onMouseEnter={() => setActiveCategory(category.id)}>
                    {category.title}
                  </div>
              ))}
            </div>
            <div className="w-4/6 p-8 flex justify-between">
              <div className="w-4/5">
                {serviceData.find((category) => category.id === activeCategory)?.items.map((service, index) => (
                    <Link
                        key={index} href={`/${service.toLowerCase().replace(/\s+/g, '-')}-company`} 
                        onClick={()=>openItem(
                            `/${service.toLowerCase().replace(/\s+/g, '-')}-company`
                        )}
                    >
                      <div className="py-2 hover:text-primary hover:scale-105 transition-transform duration-200">
                        {service}
                      </div>
                    </Link>
                ))}
              </div>
              <div className="w-2/3">
                {serviceData.find((category) => category.id === activeCategory)?.image && (
                    <Image src={`${serviceData.find((category) => category.id === activeCategory)?.image}`}
                           width={400}
                           height={400}
                           objectPosition={'end'}
                           alt="service"
                           className="h-72 z-[-1] object-contain absolute right-0 bottom-10 transition-transform duration-200 transform scale-105" />
                )}
              </div>
            </div>
          </div>
        </div>
    );
  }, [activeCategory, openIndex]);

  const renderMobileMenu = () => (
      <>
        <ul className="block">
          {mobileMenuData.map((menuItem, index) => (
              <li key={menuItem.id}
                  className="group relative"
                  onClick={() => isMobile && setOpenIndex(openIndex === index ? null : index)}>
                {menuItem.path ? (
                    <Link href={menuItem.path}
                          className={`flex py-2 text-xl text-slate-800 font-medium hover:text-primary hover:font-medium lg:mr-0 lg:inline-flex lg:px-0 lg:py-4`}
                          onClick={closeMenu}>
                      {menuItem.title}
                    </Link>
                ) : (
                    <>
                      <p className="flex cursor-pointer text-xl text-slate-800 font-medium items-center justify-between py-2 group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-4">
                        {menuItem.title}
                        <span className="pl-3">
                    <svg width="25" height="24" viewBox="0 0 25 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z" fill="currentColor" />
                    </svg>
                  </span>
                      </p>
                    </>
                )}
                {isMobile && openIndex === index && (
                    <div className="mt-4 border-t text-slate-700 border-gray-200 dark:border-gray-700 pt-4">
                      {menuItem.submenu?.map((submenuItem) => (
                          <Link key={submenuItem.id} href={`${submenuItem.path}`} className="block py-2" onClick={closeMenu}>
                            {submenuItem.title}
                          </Link>
                      ))}
                    </div>
                )}
              </li>
          ))}
        </ul>
        <Link className={"w-full mt-6 flex justify-center items-center z-[1000]"} href="/contact" onClick={closeMenu}>
          <Button borderRadius="1.75rem" borderClassName="radial-gradient(#3AC8F7 40%, transparent 60%)" className=" px-10 py-4 text-lg rounded-full bg-total-black/80 text-white font-semibold duration-300 dark:bg-black/80 dark:text-white dark:hover:bg-dark/80">
            Start Project
          </Button>
        </Link>
      </>
  );

  return (
      <animated.header style={springProps} className={`header fixed left-0 top-0 z-40 flex items-center rounded-full transition-all duration-500 ease-in xs:mx-0 xs:mt-3 xs:p-0 lg:mx-0 lg:my-2 lg:p-0
      ${sticky ? "z-[9999] bg-gradient-to-b from-white/80 bg-opacity-50 xxs:mt-1 backdrop-blur-md border-[.5px] border-slate-300 lg:m-0 xs:w-[90%] xs:p-1 lg:p-0 dark:from-gray-dark/90 to-primary/15 dark:!bg-opacity-40 dark:shadow-sticky-dark" : " xxs:mt-1 bg-transparent"}`}>
        <div className={`md:w-full xxs:px-2 xxs:pb-2 lg:pb-0 xxs:w-full xxs:mt-3 xs:w-screen xl:container md:container xs:mx-2 md:m-auto ${shrink ? "justify-center" : "justify-between"} flex items-center`}>
          <div className="relative m-0 p-0 flex w-full items-center justify-center">
            <div className="w-60 flex justify-center items-center">
              {shrink ? (
                  <div className="w-full  xxs:mt-1 xs:my-1 xxs:py-4 xs:py-2 sm:py-4 transition-opacity  px-0 inline-block">
                    <Link className={"absolute -translate-x-1/2 xxs:-mt-[0.2rem] xs:-mt-[0.2rem] lg:mt-0 lg:left-8 md:-mt-[1.6rem] left-[1.4rem]"} href="/">
                      <LogoCircle />
                    </Link>
                  </div>
              ) : (
                  <div>
                    <Link className={"flex -ml-20 xs:mt-2 lg:mt-0 justify-center items-center "} href="/">
                      <SmallLogo />
                      <Image className={'absolute block w-20 ml-[7.5rem] pl-0 xs:-mt-1 lg:pl-[0.05rem] lg:mt-0 sm:-mt-1 h-7 dark:hidden'} width={100} height={70} src={'/images/logo/logo-xl.svg'} alt={'kriraAI_logo'} />
                    </Link>
                  </div>
              )}
            </div>
            <div className="flex w-full items-center justify-center px-4">
              <div>
                <button onClick={() => setNavbarOpen(!navbarOpen)} id="navbarToggler" aria-label="Mobile Menu"
                        className={`absolute right-0 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[4px] lg:hidden ${shrink? '':'bg-black rounded-full pr-4 mt-1 mr-3' }`}>
                  <span className={`relative my-1.5 block h-[0.2rem] w-[20px] rounded-full bg-primary transition-all duration-300 dark:bg-white ${navbarOpen ? ' top-[7px] rotate-45' : ''}`} />
                  <span className={`relative left-2 my-1.5 block h-[0.2rem] rounded-full w-[20px] bg-secondary transition-all duration-300 dark:bg-white ${navbarOpen ? 'opacity-0' : ''}`} />
                  <span className={`relative my-1.5 block h-[0.2rem] w-[20px] rounded-full bg-primary transition-all duration-300 dark:bg-white ${navbarOpen ? ' top-[-8px] -rotate-45' : ''}`} />
                </button>
                <div>
                  {/*mobile scroll bar max-h-[75vh] overflow-y-auto*/}
                  <nav id="navbarCollapse" className={`navbar absolute xxs:mt-6 xs:mt-6 md:mt-0 sm:-pr-10 right-0 z-30 w-full rounded-xl border-[1px] border-slate-400 bg-white px-6 py-4 duration-300 dark:border-gray-600 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen ? 'visibility top-full opacity-100' : 'invisible top-[120%] opacity-0'}`}>
                    {isMobile ? renderMobileMenu() : (
                        <ul className="block lg:flex lg:space-x-12">
                          {menuData.map((menuItem, index) => (
                              <li key={menuItem.id} className="group relative" onMouseEnter={() => handleSubmenuEnter(index)} onMouseLeave={handleSubmenuLeave} onClick={() => isMobile && setOpenIndex(openIndex === index ? null : index)}>
                                {menuItem.title === 'Industries' ? (
                                    <span className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-4">
        {menuItem.title}
                                      <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z" fill="currentColor" />
        </svg>
      </span>
                                ) : menuItem.title === 'Services' ? (
                                    <Link 
                                        href="/services"
                                        className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-4">
                                      {menuItem.title}
                                      <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z" fill="currentColor" />
                                      </svg>
                                    </Link>
                                ) : (
                                    <Link href={`${menuItem.path}`} className={`flex py-2 text-base hover:scale-105 hover:text-primary hover:font-medium lg:mr-0 lg:inline-flex lg:px-0 lg:py-4`} onClick={closeMenu}>
                                      {menuItem.title}
                                    </Link>
                                )}
                                {!isMobile && openIndex === index && menuItem.title === 'Industries' && renderIndustriesSubmenu}
                                {!isMobile && openIndex === index && menuItem.title === 'Services' && renderServicesSubmenu}
                                {isMobile && openIndex === index && (
                                    <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                                      {menuItem.submenu?.map((submenuItem) => (
                                          <Link key={submenuItem.id} href={`${submenuItem.path}`} className="block py-2" onClick={closeMenu}>
                                            {submenuItem.title}
                                          </Link>
                                      ))}
                                    </div>
                                )}
                              </li>
                          ))}
                        </ul>
                    )}
                  </nav>
                </div>
              </div>
            </div>
            {!isMobile && (
                <div className="flex items-center justify-end lg:pr-0">
                  <Link
                      onClick={closeMenu}
                      href="/contact">
                    <Button borderRadius="1.75rem"
                            borderClassName="radial-gradient(#3AC8F7 40%, transparent 60%)"
                            className={`w-max rounded-full 
                        ${shrink ? 'bg-total-black/80 text-white' : 'text-dark bg-total-black/5'}
                        px-4 py-2 text-base font-semibold duration-300 dark:bg-black/80 dark:text-white dark:hover:bg-dark/80 xs:hidden sm:hidden md:hidden lg:grid`}>
                      Start Project
                    </Button>
                  </Link>
                </div>
            )}
          </div>
        </div>
      </animated.header>
  );
};

export default Header;
