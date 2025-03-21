import React from "react";
import Banner from "../assets/images/banner3.png";

const MenuList = () => {
  return (
    <div className="relative w-full  flex justify-center  ">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${Banner})`, opacity: 0.15 }}
      ></div>
      <div className="flex w-4/5 border-1 border-white my-20  flex-col ">
        <h1 className="text-5xl font-black uppercase text-center text-white z-10 my-12">
          Brunch Cocktails
        </h1>
        <div className="flex flex-wrap z-10 px-6  w-full mb-5 ">
            <div className="flex flex-col w-1/2 px-10 pb-5">
                <div className="flex justify-between">
                <h1 className="text-2xl uppercase">Cinnamon toast crunch</h1>
                <p className="text-2xl uppercase">$12</p>
                </div>
                <p className="text-lg opacity-40 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, magni! Cupidi, magni!</p>
            </div>
            <div className="flex flex-col w-1/2 px-10 pb-5">
                <div className="flex justify-between">
                <h1 className="text-2xl uppercase">Cinnamon toast crunch</h1>
                <p className="text-2xl uppercase">$12</p>
                </div>
                <p className="text-lg opacity-40 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, magni! Cupidi, magni!</p>
            </div>
            <div className="flex flex-col w-1/2 px-10 pb-5">
                <div className="flex justify-between">
                <h1 className="text-2xl uppercase">Cinnamon toast crunch</h1>
                <p className="text-2xl uppercase">$12</p>
                </div>
                <p className="text-lg opacity-40 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, magni! Cupidi, magni!</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
