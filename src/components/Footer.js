import React from "react";
import logoImage from "../assets/PISTONS.png";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <div className="bg-[#000000] p-5 flex flex-col items-center">
      <img src={logoImage} />
      <p className="font-semibold text-white text-base mt-4">STAY CONNECTED</p>
      <div className="flex items-center gap-4 text-white mt-2">
        <AiFillFacebook style={{ fontSize: "1.2rem" }} />
        <AiFillYoutube style={{ fontSize: "1.2rem" }} />
        <FaInstagramSquare style={{ fontSize: "1.2rem" }} />
        <AiOutlineTwitter style={{ fontSize: "1.2rem" }} />
        <GoMail />
      </div>
    </div>
  );
};

export default Footer;
