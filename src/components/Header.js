import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

const Header = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "contact" },
    { id: 4, link: "blog" },
    { id: 5, link: "careers" },
  ];
  return (
    <div className="w-full h-16 bg-white fixed z-[4] ">
      <div className="h-full max-w-screen-lg m-auto flex justify-between items-center capitalize px-4 lg:p-0">
        <div>
          <img src={logo} alt="" />
        </div>
        <ul className="hidden md:flex justify-between items-center space-x-6 text-gray-500 ">
          {links.map(({ id, link }) => (
            <li key={id}>
              <Link className="hover:text-black pb-2  hover:border-b-2 hover:border-green-500 active:border-green-500">
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <div className="hidden md:block bg-gradient-to-r from-green-400 duration-100 ease-in-out active:opacity-50  to-cyan-400 text-white px-4 py-1 rounded-full cursor-pointer">
            request invite
          </div>
        </div>
        <div onClick={() => setNav(!nav)} className="md:hidden">
          {nav ? <img src={close} alt="" /> : <img src={hamburger} alt="" />}
        </div>
        {/* mobile  */}
        {nav && (
          <ul className=" h-[30vh] flex flex-col justify-between items-center py-5 text-gray-500 md:hidden w-[92vw] m-auto fixed top-20  bg-white z-40 rounded-md shadow-xl">
            {links.map(({ id, link }) => (
              <li key={id}>
                <Link
                  onClick={() => setNav(!nav)}
                  className="hover:text-black font-semibold text-xl hover:border-b-2 hover:border-green-500 active:border-green-500"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
