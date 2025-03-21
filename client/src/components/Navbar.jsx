import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { IoMdMenu,IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="md:flex hidden bg-[#121618] w-full h-28  justify-between items-center px-32">
        <div className="flex items-center gap-">
          <img src={Logo} className="w-24 h-24" alt="Deepnetsoft logo" />
          <p className="uppercase text-white text-3xl max-w-40 font-semibold">
            <span className="text-[#0796EF]">deep </span> net{" "}
            <span className="opacity-50">soft</span>
          </p>
        </div>
        <ul className="flex justify-center  text-white gap-8 text-lg uppercase font-medium">
          <li>Home</li>
          <li className="text-[#0796EF]">Menu</li>
          <li>Make a reservation</li>
          <li>Contact us</li>
        </ul>
      </div>
      {!menuOpen && (
        <div className="flex relative md:hidden bg-[#121618] w-full h-16  justify-between items-center px-5">
        <div className="flex justify-center w-full">
          <img
            src={Logo}
            alt="deepnet soft logo"
            className="w-14 h-14 absolute ml-5 z-10"
          />
        </div>
        <div className="flex justify-end">
          <IoMdMenu onClick={handleMenu} className="text-3xl cursor-pointer" />
        </div>
      </div>
      )}
      
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#121618] flex flex-col items-center text-center pt-24 z-50">
        <IoMdClose 
          className="absolute top-6 right-6 text-4xl text-white cursor-pointer" 
          onClick={handleMenu} 
        />
        <ul className="flex flex-col gap-5 text-white text-xl uppercase font-medium">
          <li >Home</li>
          <li className="text-[#0796EF]">Menu</li>
          <li >Make a reservation</li>
          <li >Contact us</li>
        </ul>
      </div>
     
      
      )}
    </>
  );
};

export default Navbar;
