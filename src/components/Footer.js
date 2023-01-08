import React from "react";
import logo from "../images/logo-white.svg";
import facebook from "../images/icon-facebook.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="w-full h-full py-10 bg-gray-800 text-gray-300">
      <div className="max-w-screen-lg m-auto h-full grid grid-cols-1  md:grid-cols-4 items-center justify-center md:justify-between text-center md:text-start">
        <div className="space-y-10 flex flex-col items-center">
          <img src={logo} alt="" />
          <div className="flex space-x-3">
            <img src={facebook} alt="" />
            <img src={youtube} alt="" />
            <img src={twitter} alt="" />
            <img src={pinterest} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
        <div className="space-y-2 pt-5 md:p-0">
          <div>About Us</div>
          <div>contact</div>
          <div>blog</div>
        </div>
        <div className="space-y-2 pb-5 md:p-0">
          <div>Careers</div>
          <div>Support</div>
          <div>Privacy Policy</div>
        </div>
        <div className="space-y-6 flex flex-col items-center md:items-end">
          <p className="w-fit self-center lg:self-end md:mr-10 lg:m-0 bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 py-2 rounded-full cursor-pointer capitalize duration-100 ease-in-out active:opacity-50 hover:opacity-50 ">
            request invite
          </p>
          <div className="">&copy; Easybook. All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
