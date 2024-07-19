"use client";
import { PinContainer } from "@/components/3d-pin";
import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

function WorkExperience({
  history,
}: {
  history: { tahun: string; title: string; name: string; image: string }[];
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, [scrollYProgress]);

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 100], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.001], [0.001, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [10, -100], [0, 10]),
    springConfig,
  );

  return (
    <section ref={ref}>
      <motion.div
        style={{
          //   rotateX,
          //   rotateZ,
          y: translateY,
          //   opacity,
        }}
        className="relative left-0 top-0 mx-auto mt-20 w-full max-w-7xl px-4 py-20 md:py-40"
      >
        <h1 className="text-2xl font-bold md:text-7xl dark:text-white">
          Work Experience
        </h1>
        <p className="mt-8 max-w-2xl text-base md:text-xl dark:text-neutral-200"></p>
      </motion.div>
      <div className="mb-40 flex h-full flex-wrap justify-center">
        {history.map((el) => {
          return (
            <>
              <PinContainer title={el.tahun}>
                <div className="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2">
                  <h3 className="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100">
                    {el.title}
                  </h3>
                  <div className="!m-0 !p-0 text-base font-normal">
                    <span className="text-slate-500">{el.name}</span>
                  </div>
                  <Image
                    src={el.image}
                    alt="Image"
                    width={500} // Adjust the width as needed
                    height={500} // Adjust the height as needed
                    className="mt-4 flex h-20 w-full flex-1 rounded-lg"
                  />
                  {/* <image className="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
                </div>
              </PinContainer>
            </>
          );
        })}
      </div>
    </section>
  );
}

export default WorkExperience;
