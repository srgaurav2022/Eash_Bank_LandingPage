import React from "react";
import mockups from "../images/image-mockups.png";
import bgDesk from "../images/bg-intro-desktop.svg";
import bgMob from "../images/bg-intro-mobile.svg";

const HeroPage = () => {
  return (
    <div className="h-full md:h-[70vh] w-full">
      <div className="h-full max-w-screen-lg m-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        {/* hero left */}
        <div className="text-gray-600 text-center md:text-left px-5 md:pl-5 lg:p-0 space-y-10 order-2 md:order-1 flex flex-col">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-700 ">
            Next generation digital banking
          </h1>
          <p className="md:w-96">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <p className="w-fit self-center duration-100 ease-in-out active:opacity-50 md:self-start bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 py-2 rounded-full cursor-pointer capitalize">
            request invite
          </p>
        </div>

        {/* hero right for desktop */}
        {/* for desktop */}
        <div className="hidden md:block md:order-2 relative">
          <img src={bgDesk} className="w-full" alt="" />
          <img
            src={mockups}
            className="w-full absolute -top-40 left-0"
            alt=""
          />
        </div>
        {/* for mobile */}
        <div className="order-1 md:hidden relative">
          <img src={bgMob} className="w-full" alt="" />
          <img src={mockups} className="absolute -top-20 w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
