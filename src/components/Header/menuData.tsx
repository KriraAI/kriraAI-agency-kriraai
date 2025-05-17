import { Menu } from "@/types/menu";
import serviceData from "@/data/sub_services.json";

export const menuData: Menu[] = [
  {
    id: 2,
    title: "Work",
    path: "/work",
    newTab: false
  },
  {
    id: 99,
    title: "Services",
    newTab: false,
    // path: "/services",
    submenu: serviceData.map((service, index) => ({
      id: service.id,
      title: service.title,
      path: `/${service.id}`,
      newTab: false,
      submenu: service.details.map((detail, detailIndex) => ({
        id: detailIndex + 1,
        title: detail.title,
        path: `/${service.id}/${detail.title.toLowerCase().replace(/\s+/g, "-")}`,
        newTab: false
      }))
    }))
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false
  },
  {
    id: 98,
    title: "Industries",
    newTab: false,
    submenu: [
      { id: 1, title: "Finance ", icon: "/images/icons/industries/finance.svg", path: "/industries/finance-solutions", newTab: false },
      { id: 2, title: "Biotech ",icon: "/images/icons/industries/biotech.svg", path: "/industries/biotech-solutions",  newTab: false  },
      { id: 3, title: "Ecommerce ", icon: "/images/icons/industries/ecommerce.svg",path: "/industries/ecommerce-solutions", newTab: false   },
      { id: 4, title: "Agriculture ", icon: "/images/icons/industries/agriculture.svg",path: "/industries/agriculture-solutions",  newTab: false  },
      { id: 5, title: "Education ", icon: "/images/icons/industries/education.svg",path: "/industries/education-solutions", newTab: false   },
      { id: 6, title: "Energy ", icon: "/images/icons/industries/energy.svg",path: "/industries/energy-solutions", newTab: false   },
      { id: 7, title: "Government ", icon: "/images/icons/industries/Goverment.svg",path: "/industries/government-solutions",  newTab: false  },
      { id: 8, title: "Food & Beverage ",icon: "/images/icons/industries/food.svg", path: "/industries/food-beverage-solutions",  newTab: false  },
      { id: 9, title: "Logistics Supply Chain ",icon: "/images/icons/industries/logistic-supply.svg", path: "/industries/logistics-supply-chain-solutions", newTab: false   },
      { id: 10, title: "Healthcare ", icon: "/images/icons/industries/healthcare.svg",path: "/industries/healthcare-solutions",  newTab: false  },
      { id: 11, title: "Social Media ",icon: "/images/icons/industries/social-media.svg", path: "/industries/social-media-solutions",  newTab: false  },
      { id: 12, title: "Marketing ", icon: "/images/icons/industries/marketing.svg",path: "/industries/marketing-solutions",  newTab: false  },
      { id: 13, title: "SaaS ", icon: "/images/icons/industries/saas.svg",path: "/industries/saas-solutions",  newTab: false  },
      { id: 14, title: "Security ", icon: "/images/icons/industries/security.svg",path: "/industries/security-solutions",  newTab: false  },
      { id: 15, title: "Manufacturing ", icon: "/images/icons/industries/manufacturing.svg",path: "/industries/manufacturing-solutions", newTab: false   },
      { id: 16, title: "Retail ", icon: "/images/icons/industries/retail.svg",path: "/industries/retail-solutions",   newTab: false },
      { id: 17, title: "Travel Tourism ", icon: "/images/icons/industries/travel.svg",path: "/industries/travel-tourism-solutions", newTab: false   },
      { id: 18, title: "Utilities ", icon: "/images/icons/industries/utilities.svg",path: "/industries/utilities-solutions",  newTab: false  },
      { id: 19, title: "Transportation Logistics ",icon: "/images/icons/industries/delivery-truck.svg",path: "/industries/transportation-logistics-solutions", newTab: false  },
      { id: 20, title: "Telecommunications ", icon: "/images/icons/industries/radio-tower.svg",path: "/industries/telecommunications-solutions", newTab: false   },
      { id: 21, title: "Sports & Fitness ", icon: "/images/icons/industries/fitness.svg",path: "/industries/sports-fitness-solutions", newTab: false   }
    ]
  }
];

export const mobileMenuData: Menu[] = [
  {
    id: 2,
    title: "Work",
    path: "/work",
    newTab: false
  },
  {
    id: 97,
    title: "Services",
    newTab: false,
    submenu: [
      { id: 1, title: "AI Services ", path: "/ai-services", newTab: false },
      { id: 2, title: "Web Development ", path: "/web-development", newTab: false },
      { id: 3, title: "Mobile Development ", path: "/mobile-app-development", newTab: false },
      { id: 4, title: "Cloud Services ", path: "/cloud-services", newTab: false },
      { id: 5, title: "Data Analytics ", path: "/data-analytics", newTab: false },
      { id: 6, title: "UI/UX Design ", path: "/ui-ux-design", newTab: false },
      { id: 7, title: "Branding ", path: "/branding", newTab: false },
      { id: 8, title: "Custom Software ", path: "/custom-software", newTab: false },
      { id: 9, title: "Tech Consult ", path: "/tech-consultancy", newTab: false }
    ]
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false
  },
  {
    id:6,
    title: "Career",
    path: "/career",
    newTab: false
  },
  {
    id: 98,
    title: "Industries",
    newTab: false,
    submenu: [
      { id: 1, title: "Finance ", path: "/industries/finance-solutions", newTab: false },
      { id: 2, title: "Biotech ", path: "/industries/biotech-solutions", newTab: false },
      { id: 3, title: "Ecommerce ", path: "/industries/ecommerce-solutions", newTab: false },
      { id: 4, title: "Agriculture ", path: "/industries/agriculture-solutions", newTab: false },
      { id: 5, title: "Education ", path: "/industries/education-solutions", newTab: false },
      { id: 6, title: "Energy ", path: "/industries/energy-solutions", newTab: false },
      { id: 7, title: "Government ", path: "/industries/government-solutions", newTab: false },
      { id: 8, title: "Food & Beverage ", path: "/industries/food-beverage-solutions", newTab: false },
      { id: 9, title: "Logistics Supply Chain ", path: "/industries/logistics-supply-chain-solutions", newTab: false },
      { id: 10, title: "Healthcare ", path: "/industries/healthcare-solutions", newTab: false }
    ]
  }

];
