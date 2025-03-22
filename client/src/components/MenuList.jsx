import React from "react";
import Banner from "../assets/images/banner3.png";

const MenuList = ({data}) => {
    console.log("Props", data)
  return (
    <div className="relative w-full md:px-0 px-4  flex justify-center  ">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${Banner})`, opacity: 0.15 }}
      ></div>
      <div className="flex md:w-4/5 w-full border-1 border-white md:my-20 my-10  flex-col ">
        <h1
          className="md:text-5xl text-4xl font-black uppercase text-center text-white z-10 md:my-12 my-8 
    max-w-xs sm:max-w-none mx-auto break-words"
        >
          {data?.name}
        </h1>
        <div className="flex flex-wrap z-10 md:px-6 px-4  w-full md:mb-5 mb-16 ">
            { data?.items?.map((item) => (
                <div className="flex flex-col md:w-1/2 w-full md:px-10 pb-5">
                <div className="flex justify-between">
                  <h1 className="md:text-2xl text-lg font-semibold uppercase">
                    {item.name}
                  </h1>
                  <p className="md:text-2xl text-lg uppercase font-semibold">{item.price}</p>
                </div>
                <p className="md:text-lg text-sm opacity-40 ">{item.description}</p>
              </div>
            )) }
            
          
        </div>
      </div>
    </div>
  );
};

export default MenuList;
