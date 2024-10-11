"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/lampEffect";
import { FlipWords } from "@/components/changeWord";

export function FirstPage() {
  const words = ["SATRIYO", `FRONTEND-DEVELOPER`];
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Hello Everyone, {`I'm`} <br /> <FlipWords words={words} />
      </motion.h1>
    </LampContainer>
  );
}
