"use client";
import React from "react";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export const Banner = ({ title, teks }) => {
  return (
    <section className="relative overflow-hidden h-[500px] p-[-10px]">
      <Parallax className="absolute inset-0" speed={-10} tagouter="figure">
        <Image src="/background-suitmedia.png" alt="Banner" width={1000} height={1000} loading="lazy" className="w-full h-full object-cover" />
      </Parallax>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto pt-28 px-6 py-20 text-center">
          <Parallax speed={10}>
            <h1 className="text-4xl font-bold text-white pb-4">{title}</h1>
            <p className="text-xl text-white">{teks}</p>
          </Parallax>
        </div>
      </div>
    </section>
  );
};
