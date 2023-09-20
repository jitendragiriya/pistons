import React, { useEffect, useRef, useState } from "react";
import logoImage from "../assets/PISTONS 2.png";
import { BsCart3 } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { IoMenuSharp } from "react-icons/io5";
import Search from "./Search";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const navigations = [
  { path: "/", title: "new" },
  { path: "/", title: "brands" },
  { path: "/", title: "Collections" },
  { path: "/", title: "Accesories" },
  { path: "/about", title: "About" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const toggleSearch = () => setOpen(!open);

  const toggleHamburger = () => setHamburger(!hamburger);
  const ref = useRef();

  function handleClickOutside(event) {
    //if modal is open than close modal (setValue(false))
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
      setHamburger(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="z-50 bg-[#FFFFFF] sticky top-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-[54px] ">
          <div className="pl-3">
            <img src={logoImage} />
          </div>
          <div
            ref={hamburger ? ref : null}
            className={`w-full flex flex-col md:flex-row md:items-center md:justify-center absolute md:relative top-[54px] md:top-0 font-bold duration-150 bg-white overflow-hidden shadow-md md:shadow-none ${
              hamburger ? "h-[220px] md:h-fit" : "h-0 md:h-fit"
            }`}
          >
            {navigations?.map((navv) => (
              <Link
                to={navv.path}
                key={navv.title}
                className="m-6 my-2 capitalize"
                onClick={(e) => {
                  if (navv.path === "/about") {
                    e.preventDefault();
                    window.scrollTo({
                      top: document.querySelector(".aboutus").offsetTop,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {navv.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4 pr-3">
            <BsCart3 style={{ fontSize: "1.2rem" }} />
            <button onClick={toggleSearch}>
              <BiSearch style={{ fontSize: "1.3rem" }} />
            </button>
            <button onClick={toggleHamburger} className="md:hidden">
              {hamburger ? (
                <AiOutlineClose style={{ fontSize: "1.5rem" }} />
              ) : (
                <IoMenuSharp style={{ fontSize: "1.5rem" }} />
              )}
            </button>
          </div>
        </div>
      </header>
      <div ref={open ? ref : null}>
        <Search open={open} handleClose={toggleSearch} />
      </div>
    </>
  );
};

export default Header;
