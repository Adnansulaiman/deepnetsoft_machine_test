import React from "react";

const MenuButtons = () => {
  return (
    <div className="flex justify-center items-center w-full py-8 gap-5" >
      <button className="bg-black text-white px-14 text- py-4 border-1 border-blue-600 uppercase font-bold ">
        Food
      </button>
      <button className="bg-blue-600 text-white px-14 text- py-4 border-1 border-blue-600 uppercase font-bold ">
        Drinks
      </button>
      <button className="bg-black text-white px-14 text- py-4 border-1 border-blue-600 uppercase font-bold ">
        Brunch
      </button>
    </div>
  );
};

export default MenuButtons;
