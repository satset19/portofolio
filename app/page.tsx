import { AuroraBackground } from "@/components/aurora-background";
import { BackgroundBeams } from "@/components/background-beams";
import { ExpandableCardDemo } from "@/components/expanable-card";
import { FloatingNav } from "@/components/floating-navbar";
import { HeroParallax } from "@/components/hero-parallax";
import { StickyScroll } from "@/components/sticky-scroll-reveal";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

import { motion } from "framer-motion";
import Image from "next/image";

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
  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Running out of content
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full rounded-md bg-neutral-950">
      <div className="flex h-screen flex-col items-center justify-center antialiased">
        <div className="mx-auto max-w-2xl p-4 pb-16">
          <h2 className="relative z-10 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans text-lg font-bold text-transparent md:text-7xl">
            MASIH UNDER DEVELOPMENT
          </h2>
          <h1 className="relative z-10 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans text-lg font-bold text-transparent md:text-7xl">
            SABAR YAA GESS
          </h1>
        </div>
        <p></p>
        {/* <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
          </p> */}
      </div>
      <HeroParallax products={products} />
      {/* <BackgroundBeams className="w-screen h-screen" /> */}
      <StickyScroll content={content} />
      <div className="h-full w-full items-center justify-center">
        <ExpandableCardDemo />
      </div>
      <div className="relative w-full">
        <FloatingNav navItems={navItems} />
      </div>
    </div>
  );
}
