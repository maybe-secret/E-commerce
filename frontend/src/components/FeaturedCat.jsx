import React from "react";
import { featured_icons } from "../assets/data";

const FeaturedCat = () => {
  return (
    <div className="w-full mt-3 mb-7">
      <div className="container flex flex-col gap-3">
        <div className="info flex flex-col items-start ">
          <p className="text-[20px] font-inter">FEATURED CATEGORIES</p>
          <p className="text-sm text-black/40">
            Find your favorites from our top featured categories today.
          </p>
        </div>

        <div className="category flex items-center justify-around gap-5 overflow-x-auto overflow-y-visible  py-3">
          {featured_icons.map((item, index) => (
            <div className="flex flex-col gap-3" key={index}>
              <div
                className={`img w-20 sm:w-25 border p-5 rounded-full transition-all duration-200 ease-in hover:scale-105`}
                style={{
                  backgroundColor: item.color,
                  borderColor: item.border,
                  '--hover-shadow': `0 2px 15px ${item.border}`
                }}
              >
                <img src={item.icon} className="" alt="" />
              </div>

              <p className="w-full flex items-center justify-center text-[18px] text-black/70">
                {item.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCat;
