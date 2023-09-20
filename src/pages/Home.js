import React from "react";

import logoImage from "../assets/PISTONS.png";
import a from "../assets/img/a.png";
import b from "../assets/img/b.png";
import c from "../assets/img/c.png";
import d from "../assets/img/d.png";
import e from "../assets/img/e.png";
import f from "../assets/img/f.png";
import g from "../assets/img/g.png";
import OurCarousel from "../components/OurCarousel";
import Testimonials from "../components/Testimonials";
import CurvedText from "../components/CurvedText";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="relative">
          <img src={c} width={"100%"} />
          <img
            src={logoImage}
            className="absolute bottom-11 left-1/2 -translate-x-1/2 h-5"
          />
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 mx-auto text-center w-full">
            <CurvedText/>
          </div>
        </div>
        <div className="relative">
          <img src={a} width={"100%"} />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <p className="text-white text-center mb-2">
              YOU WERE MADE TO <br />
              MAKE AN IMPACT.
            </p>
            <button className="px-5 py-1 rounded-3xl bg-white text-black whitespace-nowrap">
              SHOP PENS
            </button>
          </div>
        </div>
        <div>
          <img src={e} width={"100%"} />
        </div>
        <div className="relative">
          <img src={b} width={"100%"} />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <p className="text-center mb-2">
              MADE FOR THE BEST
              <br />
              CHANGE MAKERS.
            </p>
            <button className="px-5 py-1 rounded-3xl bg-black text-white border-4 border-[#FFECC1] whitespace-nowrap">
              SHOP BRANDS
            </button>
          </div>
        </div>
        <div>
          <img src={d} width={"100%"} />
        </div>
        <div className="relative">
          <img src={f} width={"100%"} height={"100%"} />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <p className="text-center mb-2 text-white">SAVOUR THE PRESENT.</p>
            <button className="px-5 py-1 rounded-3xl bg-white border-4 border-[#FFECC1] whitespace-nowrap">
              SHOP MONT BLANC
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={g} width={"100%"} />
        <div className="bg-black md:bg-transparent flex p-6 flex-col items-center pb-10 md:absolute md:bottom-11 md:left-1/2 md:-translate-x-1/2">
          <p className="text-center mb-2 text-white">
            WHERE QUALITY MEETS CLASS.
          </p>
          <div className="mx-auto text-center w-full">
            <CurvedText/>
          </div>
          <img src={logoImage} className="h-[20px] mt-10" />
          <button className="mt-6 px-5 py-1 rounded-3xl bg-white border-4 border-[#FFECC1] whitespace-nowrap">
            SHOP THE FALL 2023 COLLECTION
          </button>
        </div>
      </div>
      <OurCarousel />
      <Testimonials/>
    </>
  );
};

export default Home;
