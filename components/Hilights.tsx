import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { highlights } from "@/data";

const Hilights = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading mb-4">Highlights</h1>
      <div className="flex flex-col items-center lg:mt-8">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards
            items={highlights}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Hilights;
