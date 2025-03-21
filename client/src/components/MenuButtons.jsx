import React from "react";

const MenuButtons = () => {
  return (
    <div className="flex justify-center items-center w-full py-8  md:gap-5 gap-3" >
      <button className="bg-black text-white md:px-14 px-8 text- py-3 md:py-4 border-1 border-blue-600 uppercase font-bold ">
        Food
      </button>
      <button className="bg-blue-600 text-white md:px-14 px-8 text- py-3 md:py-4 border-1 border-blue-600 uppercase font-bold ">
        Drinks
      </button>
      <button className="bg-black text-white md:px-14 px-8 text- py-3 md:py-4 border-1 border-blue-600 uppercase font-bold ">
        Brunch
      </button>
    </div>
  );
};

export default MenuButtons;
