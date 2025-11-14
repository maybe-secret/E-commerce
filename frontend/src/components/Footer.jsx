import React from "react";
import { CiMail } from "react-icons/ci";
import { FaBoxOpen } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { TbCoinRupee } from "react-icons/tb";
import { footer_data } from "../assets/data";
import { Link } from "react-router-dom";
import coupon from "../assets/coupon.png"

const Footer = () => {
  return (
    <div className="w-full">
      {/* News letter section */}
      <div className="discountAdd bg-[#233A95] mt-10">
        <div className="container flex flex-col lg:flex-row items-center justify-between">
          <div className="flex flex-col gap-5 w-full px-2 sm:px-6 pt-10 lg:p-0 lg:w-[40%]">
            <div className="flex flex-col gap-">
              <p className="text-white text-xl">
                $20 discount for your first order
              </p>
              <p className="text-white text-3xl">
                Join our newsletter and get...
              </p>
            </div>

            <p className="text-white/40">
              Join our email subscription now to get updates<br></br>
              <span>on promotions and coupons.</span>
            </p>

            <div className="bg-white flex items-center py-2 px-2 gap-0.5 rounded-lg mt-0 lg:mt-3">
              {/* icon */}
              <CiMail size={40} className="text-black/50 ml-3" />

              <input type="text" className="w-full p-3 outline-none text-xl" />

              <button className="text-sm text-white px-7 py-4 rounded-md bg-[#233A95]">
                Subscribe
              </button>
            </div>
          </div>

          <img
          src={coupon}
            className="pt-10 lg:pt-20"
            alt=""
          />
        </div>
      </div>

      {/* Footer links */}
      <div className="bg-[#F7F8FD]">
        <div className="container">
          {/* Features section */}
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 border-b border-black/10 py-6">
            <div className="flex items-center justify-center gap-5 border-r border-black/20 ">
              <FaBoxOpen size={25} />
              Safe fast & delivery
            </div>
            <div className="flex items-center justify-center gap-5 border-r border-black/20">
              <TbTruckDelivery size={25} />
              Free delivery for order over $70
            </div>
            <div className="flex items-center justify-center gap-5 border-r border-black/20">
              <RiDiscountPercentLine size={25} />
              Daily Mega Discounts
            </div>
            <div className="flex items-center justify-center gap-5 ">
              <TbCoinRupee size={25} />
              Best price on the market
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 py-20 gap-5">
            {footer_data.map((item, index) => (
              <div key={index} className="flex flex-col items-start gap-6">
                <p className="text-sm font-inter font-semibold">{item.title}</p>
                <ul className="flex flex-col gap-3">
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        to="/"
                        className="font-poppins text-black/40 text-sm"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Copyright section */}
      <div>
        <div className="container">
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
