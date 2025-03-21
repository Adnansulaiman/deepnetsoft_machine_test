import React from "react";
import Logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <div className="bg-[#121618] w-full h-28 flex justify-between items-center px-32">
      <div className="flex items-center gap-">
        <img src={Logo} className="w-24 h-24" alt="Deepnetsoft logo" />
        <p className="uppercase text-white text-3xl max-w-40 font-semibold">
          <span className="text-[#0796EF]">
            deep </span> net <span className="opacity-50">soft</span>
          
        </p>
      </div>
      <ul className="flex justify-center  text-white gap-8 text-lg uppercase font-medium">
        <li>Home</li>
        <li className="text-[#0796EF]">Menu</li>
        <li>Make a reservation</li>
        <li>Contact us</li>
      </ul>
    </div>
  );
};

export default Navbar;
