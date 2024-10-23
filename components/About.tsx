import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { aboutItems } from "@/data";

const About = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {aboutItems.map((item) => (
          <BentoGridItem
            key={item.title}
            id={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            img={item.img}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default About;
