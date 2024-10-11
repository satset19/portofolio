"use client";

import { ExpandableCardDemo } from "@/components/cardExpandable";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

export function ProjectPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center center"],
  });
  const springConfig = { stiffness: 300, damping: 30, bounce: 1000 };
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, 0]),
    springConfig,
  );
  console.log(translateY);
  return (
    <section ref={ref} className="py-96">
      <motion.div className="relative left-0 top-0 mx-auto w-full max-w-7xl px-4 md:py-40">
        <motion.h1
          viewport={{ root: ref }}
          style={{ opacity: scrollYProgress, translateY }}
          className="sticky top-1 text-2xl font-bold md:text-7xl dark:text-white"
        >
          Project
        </motion.h1>
        <p className="mt-8 max-w-2xl text-base md:text-xl dark:text-neutral-200"></p>
      </motion.div>
      <motion.div style={{ opacity: scrollYProgress }}>
        <ExpandableCardDemo />
      </motion.div>
    </section>
  );
}
