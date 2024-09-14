import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import {GiShoppingBag} from "react-icons/gi"

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(true);
  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };
  return (
    <header className="fixed left-0 right-0 w-full max-padd-container flexBetween z-10 transition-all duration-300">
      {/* logo */}
      <Link to={"/"} className="bold-24">
        <h4>
          Glam<span className="text-secondary">Store</span>
        </h4>
      </Link>
      {/* navbar */}
      <div className="flexBetween gap-x-20">
        {/* navbar desktop */}
        <Navbar
          containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}
        />
        {/* navbar mobile */}
        <Navbar
          containerStyles={`${
            menuOpened
              ? "flex items-start flex-col gap-y-12 fixed top-20 right-6 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-[500ms]"
              : "flex items-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-[500ms] -right-[100%]"
          }`}
        />
        <div className="">
          {/* buttons */}
          {!menuOpened ? (
            <MdMenu
              onClick={toggleMenu}
              className="md:hidden cursor-pointer text-secondary text-2xl"
            />
          ) : (
            <MdClose
              onClick={toggleMenu}
              className="md:hidden cursor-pointer text-secondary text-2xl"
            />
          )}
        </div>
        <Link>
        <GiShoppingBag />
        </Link>
      </div>
    </header>
  );
};

export default Header;
