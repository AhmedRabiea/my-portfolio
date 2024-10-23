import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ShimmerButton from "./ui/ShimmerButton";
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full  h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 w-full">
            Building Scalable and Interactive Web Applications
          </p>
          <TextGenerateEffect
            words="Transforming Concepts Into Seamless User Experience"
            className="Uppercase text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-sm md:text-lg lg:text-2xl text-center tracking-wider mb-4">
            I&apos;m a React.js and Next.js developer focused on building fast,
            responsive web applications. Let&apos;s bring your ideas to life
            with clean, modern code.
          </p>
          <ShimmerButton
            title="Show My Work"
            icon={<MdArrowOutward />}
            position="right"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
