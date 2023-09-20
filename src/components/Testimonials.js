import React, { useState } from "react";
import { TESTIMONIALS } from "../constants";

const Testimonials = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-12 px-8">
      <h2 className="text-xl md:text-[36px] font-bold mb-10 text-center">
        TESTIMONIALS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {TESTIMONIALS?.map((item) => (
          <div
            className="[perspective:1000px] group h-[277px] w-[277px]"
            key={item.name}
          >
            <div className="relative transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] h-full w-full">
              <div className="h-full w-full absolute rounded-2xl overflow-hidden">
                <img
                  src={item?.image}  
                />
                <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white">
                  {item.name}
                </h2>
              </div>
              <div className="h-full w-full absolute bg-black [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden flex items-center">
                <p className="text-white text-[13px] p-6">
                    {item.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
