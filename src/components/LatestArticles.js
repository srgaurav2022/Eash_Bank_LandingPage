import React from "react";
import currency from "../images/image-currency.jpg";
import restaurant from "../images/image-restaurant.jpg";
import plane from "../images/image-plane.jpg";
import confetti from "../images/image-confetti.jpg";

const LatestArticles = () => {
  const articles = [
    {
      id: 1,
      img: currency,
      name: "By Claire Robinson",
      title: "Receive money in any currency with no fees",
      desc: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
      id: 2,
      img: restaurant,
      name: "By Wilson Hutton",
      title: "Treat yourself without worrying about money",
      desc: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
      id: 3,
      img: plane,
      name: "By Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      desc: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    },
    {
      id: 4,
      img: confetti,
      name: "By Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      desc: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    },
  ];
  return (
    <div className="w-full h-full py-20">
      <div className="h-full max-w-screen-lg m-auto">
        <h1 className="text-center lg:text-left text-4xl my-10">
          Latest Articles
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8  mx-8 my-4 lg:m-0">
          {articles.map(({ id, img, name, title, desc }) => (
            <div
              key={id}
              className="shadow-lg rounded-md overflow-hidden h-fit w-fit"
            >
              <img
                src={img}
                className="w-full lg:h-44 sm:h-64 md:h-60 duration-500 hover:scale-110 ease-in-out"
                alt={img}
              />
              <div className="px-5 md:p-3 space-y-1">
                <p className="text-xs text-gray-400">{name}</p>
                <h4 className="text-lg text-gray-700 pr-5">{title}</h4>
                <p className="text-xs text-gray-400">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;
