import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { LuMail } from "react-icons/lu";
import Logo from "../assets/images/logo.png";
import { CiTwitter } from "react-icons/ci";
import { TbBrandFacebook } from "react-icons/tb";
import { CiYoutube } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-black  w-full h-">
      <div className="flex   justify-center pt-20 pb-16 gap-5 ">
        <div className="flex flex-col justify-center items-center border border-white rounded-xl py-5  w-1/4 ">
          <h2 className="uppercase font-semibold text-lg text-[#0796EF] pb-3">
            Connect with us
          </h2>
          <p className="flex items-center gap-3 ">
            {" "}
            <GiRotaryPhone className="text-lg text-[#c5a059]" />
            <span className="opacity-50">+91 9567843340</span>
          </p>
          <p className="flex items-center gap-3">
            <LuMail className="text-[#c5a059]" />
            <span className="opacity-50">info@deepnetsoft.com</span>
          </p>
        </div>
        <div className="relative flex flex-col justify-center items-center border border-white rounded-xl py-5 w-1/4 ">
          <img src={Logo} className=" absolute -top-13 w-24 h-24" alt="" />
          <p className="uppercase text-white text-3xl mt-6 font-semibold">
            <span className="text-[#0796EF]">deep </span> net{" "}
            <span className="opacity-50">soft</span>
          </p>
          <ul className="flex items-center mt-3 gap-2 opacity-50">
            <li><TbBrandFacebook /></li>
            <li><CiTwitter /></li>
            <li><CiYoutube /></li>
            <li><IoLogoInstagram /></li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center border border-white rounded-xl py-5 w-1/4 ">
          <h2 className="uppercase font-semibold text-lg text-[#0796EF] pb-3">
            Find us
          </h2>
          <p className="flex items-start gap-5">
            {" "}
            <CiLocationOn className="text-lg text-[#c5a059]" />
            <span className="opacity-50 max-w-52">First floor, Geo infopark, Infopark EXPY,Kakkanad</span>
          </p>
          
        </div>
      </div>
      <div className="flex bg-[#1f1f1f] w-full h-12 justify-center items-center">
        <div className="w-4/5 flex justify-between items-center">
        <p className=" opacity-50 ">&copy; 2024 Deepnetsoft Solutions. All rights reserved.</p>
        <div className="flex gap-5">
            <p className=" opacity-50">Terms & Conditions</p>
            <p className=" opacity-50">Privacy Policy</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
