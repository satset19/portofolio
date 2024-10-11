import "../main.css";
import { ExpandableCardDemo } from "@/components/cardExpandable";
import { FlipWords } from "@/components/changeWord";

import { FloatingNav } from "@/components/stickyNavbar";
import { HeroParallax } from "@/components/paralaxStack";
import { FirstPage } from "@/sections/FirstPage";
import { WorkExperience } from "@/sections/WorkExperience";

import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

import { motion } from "framer-motion";
import Image from "next/image";
import { ContactSection } from "@/sections/ContactPage";
import { ProjectPage } from "@/sections/ProjectPage";
import { EducationPage } from "@/sections/EducationPage";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  const products = [
    {
      title: "NodeJS",
      link: "https://nodejs.org/en/download/package-manager",
      thumbnail: "https://www.ictdemy.com/images/5728/nodejs_logo.png",
    },
    {
      title: "React",
      link: "https://react.dev/",
      thumbnail:
        "https://th.bing.com/th/id/R.692adb35708d9279ca7eb56c71bfc102?rik=hNgh9iAYWQWBkw&riu=http%3a%2f%2fangular.github.io%2freact-native-renderer%2fassets%2freact.png&ehk=8iIITJSxQoapFfYG36FJh80Iaoof0dOE6HcLjoUAU1I%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      title: "Typescript",
      link: "https://www.typescriptlang.org/",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    },
    {
      title: "MongoDB",
      link: "https://www.mongodb.com/",
      thumbnail:
        "https://th.bing.com/th/id/R.0e23481b805fa66eb9ff0c177ff27030?rik=00LN9yVT3nMAyw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flogo-mongodb-png-mongodb-1600.png&ehk=YwJU48GqAzZ6V3Zlafc4pyilw%2biV5XBxEO7chpNV3M8%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      title: "NodeJS",
      link: "https://nodejs.org/en/download/package-manager",
      thumbnail: "https://www.ictdemy.com/images/5728/nodejs_logo.png",
    },
    {
      title: "PostgreSQL",
      link: "https://www.postgresql.org/",
      thumbnail:
        "https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png",
    },
    {
      title: "Tailwind",
      link: "https://tailwindcss.com/",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042",
    },
    {
      title: "ExpressJS",
      link: "https://expressjs.com/",
      thumbnail:
        "https://inapp.com/wp-content/uploads/elementor/thumbs/express-js-01-1-q05uw85vt1jqloiy5k82sfy7tgvysgt1uqld8slsbc.png",
    },
    {
      title: "VusJS",
      link: "https://vuejs.org/",
      thumbnail:
        "https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png",
    },
    {
      title: "PostgreSQL",
      link: "https://www.postgresql.org/",
      thumbnail:
        "https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png",
    },
    {
      title: "Firebase",
      link: "https://firebase.google.com/",
      thumbnail:
        "https://cdn.freebiesupply.com/logos/large/2x/firebase-1-logo-png-transparent.png",
    },
    {
      title: "GraphQL",
      link: "https://graphql.org/",
      thumbnail:
        "https://cdn.freelogovectors.net/wp-content/uploads/2021/01/graphql-logo-freelogovectors.net_.png",
    },
    {
      title: "NextJS",
      link: "https://nextjs.org/",
      thumbnail:
        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png",
    },
    {
      title: "Docker",
      link: "https://www.docker.com/",
      thumbnail:
        "https://logos-world.net/wp-content/uploads/2021/02/Docker-Emblem.png",
    },
    {
      title: "Firebase",
      link: "https://firebase.google.com/",
      thumbnail:
        "https://cdn.freebiesupply.com/logos/large/2x/firebase-1-logo-png-transparent.png",
    },
  ];

  const history = [
    {
      name: "Timkado Sejahtera Indonesia",
      title: "Frontend Developer",
      tahun: "2024-Sekarang",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghbGCYWCJLgSsRZY__uEBfVeUd290s8rDzg&s",
    },
    {
      name: "Timkado Sejahtera Indonesia",
      title: "DevOps and Testing",
      tahun: "2023-2024",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghbGCYWCJLgSsRZY__uEBfVeUd290s8rDzg&s",
    },
    {
      name: "Uniqlo",
      title: "Store Staff",
      tahun: "2019-2022",
      image: "https://cdn.freebiesupply.com/logos/thumbs/2x/uniqlo-logo.png",
    },
  ];

  const education = [
    {
      name: "Timkado Sejahtera Indonesia",
      title: "Frontend Developer",
      tahun: "2024-Sekarang",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghbGCYWCJLgSsRZY__uEBfVeUd290s8rDzg&s",
    },
    {
      name: "Timkado Sejahtera Indonesia",
      title: "DevOps and Testing",
      tahun: "2023-2024",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghbGCYWCJLgSsRZY__uEBfVeUd290s8rDzg&s",
    },
    {
      name: "Uniqlo",
      title: "Store Staff",
      tahun: "2019-2022",
      image: "https://cdn.freebiesupply.com/logos/thumbs/2x/uniqlo-logo.png",
    },
  ];

  return (
    <div className="relative w-full rounded-md bg-neutral-950">
      <FirstPage />

      <HeroParallax products={products} />

      {/* <BackgroundBeams className="w-screen h-screen" /> */}
      {/* <WorkExperience history={history} /> */}
      <WorkExperience />

      <EducationPage />
      <ProjectPage />

      <ContactSection />
      <section className="relative w-full">
        <FloatingNav navItems={navItems} />
      </section>
    </div>
  );
}
