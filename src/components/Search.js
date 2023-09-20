import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Search = ({ open, handleClose }) => {
  return (
    <div
      className={`w-full max-w-[calc(100vw-32px)] bg-white sm:max-w-[390px] h-[70px] fixed top-[64px] right-4 px-8 ${
        open ? "flex" : "hidden"
      } justify-center items-center gap-4 z-40`}
    >
      <button onClick={handleClose}>
        <AiOutlineClose className="absolute top-0 right-0 text-xl" />
      </button>
      <input className="rounded-3xl border border-black w-full px-4" />
      <button className="uppercase text-white bg-black px-5 rounded-3xl">
        Search
      </button>
    </div>
  );
};

export default Search;
