import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { category_list } from "../assets/data";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <div className="container flex items-center justify-between overflow-x-auto lg:overflow-visible">
        {/* all categories */}
        <div className="category relative group hidden lg:block">
          <button
            onClick={toggleDropdown}
            className="text-md px-3 py-2 justify-between items-center gap-2 rounded-4xl font-medium bg-[#2BBEF9] text-white lg:flex hidden cursor-pointer"
          >
            <IoMenu size={20} />
            <span className="">ALL CATEGORIES</span>
            <IoIosArrowUp
              size={18}
              className={`transition-transform duration-300 ${
                dropdownOpen ? "rotate-180" : "rotate-90"
              }`}
            />
          </button>

            <ul
              className={`sidebarnav z-50 group ${
                dropdownOpen
                  ? "h-auto visible opacity-100"
                  : "h-0 opacity-0 invisible"
              } transition-discrete duration-200 ease-in-out border border-black/10 absolute w-full top-[122%] left-0 flex flex-col bg-white py-5`}
            >
              {category_list.map((item, index) => (
                <li key={index} className="static group/item py-2 px-5">
                  <Link
                    to=""
                    key={index}
                    className="text-gray-700 group-hover/item:text-[#2BBEF9] p-0.5 flex justify-between items-center
                    "
                  >
                    {item.name}
                    <FaAngleRight className={`${item.submenu?.length > 0 ? "block" : "hidden"}`} />
                  </Link>

                  {/* Submenu for sidebar */}
                {item.submenu && (
                  <div className="absolute left-[120%] group-hover/item:left-[98%] border border-black/20 top-0 h-full ml-1 bg-white p-3 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 ease-in-out min-w-[150px] z-50">
                    {item.submenu.map((subitem, subindex) => (
                      <Link
                        key={subindex}
                        to="/"
                        className="block px-3 py-1 text-sm text-gray-700 hover:text-[#2BBEF9] whitespace-nowrap"
                      >
                        {subitem}
                      </Link>
                    ))}
                  </div>
                )}
                </li>
              ))}
            </ul>
        </div>

        {/* category list */}
        <div className="list ">
          <ul className="flex items-center gap-7">
            {category_list.map((category, index) => (
              <li
                key={index}
                className="relative px-5 py-2 rounded-full hover:bg-[#F0FAFF] transition-all duration-250 ease-out cursor-pointer group"
              >
                <Link
                  to={category.link || "#"}
                  className="text-[15px] text-black/60 font-semibold w-full group-hover:text-[#2BBEF9] transition-all duration-150 ease-out"
                >
                  {category.name}
                </Link>
                <div className="absolute lg:block hidden top-[150%] group-hover:top-full left-0 mt-2 bg-white shadow-md rounded-t-sm rounded-b-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-50">
                  <Link
                    to="/"
                    className="block px-3 py-1 text-sm text-gray-700 hover:text-[#2BBEF9]"
                  >
                    clothing
                  </Link>
                  {category_list[index].submenu &&
                    category_list[index].submenu.map((subitem, subindex) => (
                      <Link
                        to="/"
                        key={subindex}
                        className="block px-3 py-1 text-sm text-gray-700 hover:text-[#2BBEF9]"
                      >
                        {subitem}
                      </Link>
                    ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
