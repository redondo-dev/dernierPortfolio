import { Project } from './types';

export const projects: Project[] = [
  {
    title: "Best Of Foot",
    description: "Application web pour suivre les résultats et statistiques de football en temps réel",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    image: "/assets/bestoffoot.png",
    github: "https://github.com/redondo-dev/best10",
    demo: "https://bestl0-app.vercel.app"
  },
  {
    title: "Cabinet Medical",
    description: "Application pour un cabinet médical d'esthetique avec epilation laser ",
    tech: ["React,Nextjs ,Tailwind css "],
    image: "/assets/cabinetMedical.jpg",
    github: "https://github.com/redondo-dev/cabinetMedical",
    demo: "https://cabinet-medical-gray.vercel.app"
  },
  {
    title: "Caferiad",
    description: "Site vitrine pour un marque de café Marseillais",
    tech: ["React", "Next.js", "Tailwind CSS"],
    image: "/assets/caferiad.png",
    github: "https://github.com/redondo-dev/riad-cofee",
    demo: "https://riad-cofee.vercel.app"
  },
  {
    title: "Weather App",
    description: "Application météo avec géolocalisation et prévisions sur 5 jours",
    tech: ["React-native ","Expo", "OpenWeather API" ],
    image: "/assets/meteoApp.png",
    github: "https://github.com/redondo-dev/MeteoApp-",
    demo: "https://weather-app-redondo-dev.vercel.app/"
  },
  {
    title: "AMVTC13",
    description: "Site pour un chauffeur de voiture vtc Marseillais ",
    tech: ["React"],
    image: "/assets/toyota-car.jpg",
    github: "https://github.com/redondo-dev/mariaVTC",
    demo: "https://amvtc13.com"
  },
  {
    title: "panier E-commerce",
    description: "Panier avec react bootstrap et une fake api e-commerce",
    tech: ["React"],
    image: "https://cdn.pixabay.com/photo/2019/09/30/15/23/online-shopping-4516043_640.jpg",
    github: "https://github.com/redondo-dev/cart-e-commerce",
    demo: "https://panier-e-commerce-en-react.firebaseapp.com"
  },
  {
    title: "Portfolio Anouar",
    description: "Portfolio pour un etudiant en science po ",
    tech: ["Next-js"],
    image: "/assets/anouarPortfolio.png",
    github: "",
    demo: "https://portfolio-anouar.vercel.app/"
  },
  {
    title: "AMVTC refait en Next js",
    description: "Site pour un chauffeur vtc Marseillais ",
    tech: ["Next-js"],
    image: "/assets/amvtcnext.png",
    github: "",
    demo: "https://amvtc-nouveau-main.vercel.app/"
  }
];
