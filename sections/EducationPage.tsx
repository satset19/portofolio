import { Timeline } from "@/components/linetime";
import Image from "next/image";
import React from "react";

export function EducationPage() {
  const educationData = [
    {
      label: "2024",
      title: "Frontend Developer",
      image: [
        "https://placecats.com/neo/2000/1500",
        "https://placecats.com/neo/2000/1500",
      ],
    },
    {
      label: "2023",
      title: "Frontend Developer",
      image: [
        "https://placecats.com/neo/2000/1500",
        "https://placecats.com/neo/2000/1500",
      ],
    },
    // {
    //   label: "2022",
    //   title: "Frontend Developer",
    //   image: [
    //     "https://placecats.com/neo/2000/1500",
    //     "https://placecats.com/neo/2000/1500",
    //   ],
    // },
    // {
    //   label: "2020",
    //   title: "Frontend Developer",
    //   image: [
    //     "https://placecats.com/neo/2000/1500",
    //     "https://placecats.com/neo/2000/1500",
    //   ],
    // },
  ].map((el) => {
    return {
      title: el.label,
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            {el.title}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {el.image.map((image) => {
              return (
                <>
                  <Image
                    src={image}
                    alt="startup template"
                    width={500}
                    height={500}
                    className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                  />
                </>
              );
            })}
          </div>
        </div>
      ),
    };
  });

  return (
    <div className="w-full">
      <Timeline data={educationData} />
    </div>
  );
}
