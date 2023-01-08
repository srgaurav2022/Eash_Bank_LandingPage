import React from "react";
import online from "../images/icon-online.svg";
import budgeting from "../images/icon-budgeting.svg";
import onboarding from "../images/icon-onboarding.svg";
import api from "../images/icon-api.svg";

const Services = () => {
  const cards = [
    {
      id: 1,
      src: online,
      name: "Online banking",
      desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      id: 2,
      src: budgeting,
      name: "Simple Budgeting ",
      desc: "See exactly where your money goes each month. Receive notifications when you are close to hitting your limits.",
    },
    {
      id: 3,
      src: onboarding,
      name: "Fast Onboarding",
      desc: "We don not do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      id: 4,
      src: api,
      name: "Open API",
      desc: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];
  return (
    <div className="w-full h-full py-16 ">
      <div className="h-full max-w-screen-lg m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-center">
        {/* <div className=""> */}
        {cards.map(({ id, src, name, desc }) => (
          <div
            key={id}
            className="text-center lg:text-left px-5 lg:p-0 flex  flex-col justify-center items-center lg:items-start space-y-5"
          >
            <img src={src} className="w-fit" alt={src} />
            <h1 className="text-2xl text-gray-600">{name}</h1>
            <p className="text-md text-gray-400 font-semibold md:font-normal">
              {desc}{" "}
            </p>
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Services;
