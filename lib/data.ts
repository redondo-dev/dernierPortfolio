import { Project } from './types';

export const projects: Project[] = [
  {
    title: "Best Of Foot",
    description: "Application web pour les meilleurs footballeurs de l'histoire ",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    image: "https://res.cloudinary.com/dzyq5ko7q/image/upload/v1747561589/bestoffoot.png",
    github: "https://github.com/redondo-dev/best10",
    demo: "https://bestl0-app.vercel.app"
  },
  {
    title: "Cabinet Medical",
    description: "Application pour un cabinet médical d'esthetique avec epilation laser ",
    tech: ["React,Nextjs ,Tailwind css "],
    image: "https://res.cloudinary.com/dzyq5ko7q/image/upload/v1747561627/cabinetMedical_qr3qky.jpg",
    github: "https://github.com/redondo-dev/cabinetMedical",
    demo: "https://cabinet-medical-gray.vercel.app"
  },
  {
    title: "Caferiad",
    description: "Site vitrine pour un marque de café Marseillais",
    tech: ["React", "Next.js", "Tailwind CSS"],
    image: "https://res.cloudinary.com/dzyq5ko7q/image/upload/v1747563072/caferiad_s0ny2x.png",
    github: "https://github.com/redondo-dev/riad-cofee",
    demo: "https://riad-cofee.vercel.app"
  },
  {
    title: "Weather App",
    description: "Application météo avec géolocalisation et prévisions sur 5 jours",
    tech: ["React-native ","Expo", "OpenWeather API" ],
    image: "https://res.cloudinary.com/dzyq5ko7q/image/upload/v1747561642/meteoApp_yjtiq3.png",
    github: "https://github.com/redondo-dev/MeteoApp-",
    demo: "https://weather-app-redondo-dev.vercel.app/"
  },
  {
    title: "AMVTC13",
    description: "Site pour un chauffeur de voiture vtc Marseillais ",
    tech: ["React"],
    image: "https://res.cloudinary.com/dzyq5ko7q/image/upload/v1736706464/toyota-car_fz08h8.jpg",
    github: "https://github.com/redondo-dev/mariaVTC",
    demo: "https://amvtc13-d0249.firebaseapp.com/"
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
    image: "https://res.cloudinary.com/dzyq5ko7q/image/upload/v1747563068/anouarPortfolio_xah9zn.png",
    github: "https://github.com/redondo-dev/AnourPortfolio",
    demo: "https://portfolio-anouar.vercel.app/"
  },
  {
    title: "AMVTC refait en Next js",
    description: "Site pour un chauffeur vtc Marseillais ",
    tech: ["Next-js"],
    image: "https://res.cloudinary.com/dzyq5ko7q/image/upload/v1747563067/amvtcnext_czeyxx.png",
    github: "privé",
    demo: "https://www.marseilletaxivtc.com/"
  },
  {
    title: "Site cinema redaflix :en cours de developpement",
    description: "Recuperation d'une api cinema IMDB et ajout de register,login,logout,reservations ",
    tech: ["Angular19",'Nodejs','Express','Sql', 'docker', 'fly.io'],
    image: "https://res.cloudinary.com/dzyq5ko7q/image/upload/v1749030865/redaflix_is7wsi.png",
    github: "https://github.com/redondo-dev/cinematek_Angular",
    demo: "https://redaflix-frontend.fly.dev/"
  }
];
