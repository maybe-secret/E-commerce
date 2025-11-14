import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import { Link } from "react-router-dom";
import CountryDropDown from "./Input/CountryDropDown";
import Search from "./Input/Search";
import { LuUserRound } from "react-icons/lu";
import { IoBagOutline } from "react-icons/io5";
import Navbar from "./Navbar";
import { Mycontext } from "../App";
import { HiMenuAlt1 } from "react-icons/hi";

const Header = () => {
  const context = useContext(Mycontext);

  return (
    <div className="headerWraper border-b border-black/10 pb-2">
      <div className="top-strip bg-[#233A95] py-2 text-white">
        <div className="container">
          <p className="text-center mb-0 mt-0 text-sm">
            Due to <b>Technical Glitch</b>, orders may be processed with a
            sligth delay
          </p>
        </div>
      </div>

      <div className="header w-full h-auto py-6">
        <div className="container">
          <div className="flex items-center justify-between w-full gap-4">
            {/* menu */}
            <div className="lg:hidden block">
              <HiMenuAlt1 size={35} />
            </div>

            {/* left logo */}
            <div className="logoWrapper flex items-center flex-col gap-1">
              <Link to="/" className="block lg:hidden">
                <img src={logo2} alt="Logo" className="w-[100px]" />
              </Link>

              <Link to="/" className="hidden lg:block">
                <img src={logo} alt="Logo" className="w-[180px]" />
              </Link>
              <span className="text-left w-full text-[#9EA1AC] text-xs lg:block hidden">
                Onlice Shopping Center
              </span>
            </div>

            {/* middle search & location */}
            <div className="gap-7 items-center w-[65%] hidden lg:flex">
              {/* location dropdown */}
              {context.countryList?.length !== 0 && <CountryDropDown />}

              {/* search box */}
              <div className="w-full hidden lg:block">
                <Search />
              </div>
            </div>

            {/* right icons */}
            <div className="flex items-center gap-3">
              {/* profile */}
              <button className="h-10 w-10 hidden lg:flex border-2 border-[#F3F4F7] rounded-4xl items-center justify-center active:scale-95 transition-all duration-150 ease-in cursor-pointer hover:shadow-md">
                <LuUserRound size={20} />
              </button>

              <p className="text-xl font-money font-medium  ">$5.26</p>

              <button className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center relative">
                <IoBagOutline size={20} color="red" />
                <span className="absolute bg-red-600 h-5 w-5 rounded-full flex justify-center items-center text-white -top-1 -right-1 text-xs">
                  1
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className="w-full h-auto">
        <Navbar />
      </nav>
    </div>
  );
};

export default Header;
