import React, { use, useContext, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { FiSearch } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Mycontext } from "../../App";

const CountryDropDown = () => {
  const context = useContext(Mycontext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [countryList, setCountryList] = useState([]);
  const [searchText, setSearchText] = useState("");


  const selectCountry = (index, country) => {
    setSelectedTab(index);
    setIsModalOpen(false);
    context.setSelectedCountry(country);
  }

  const clearCounty = () => {
    setSelectedTab(null);
    setIsModalOpen(false);
    context.setSelectedCountry("");
  }

  const fliterList = (e) => {
    setSearchText(e.target.value);
    const keyword = e.target.value.toLowerCase();
    

    if (keyword !== "") {
      const list = countryList.filter((item) => {
      return item.country.toLowerCase().includes(keyword);
    })
    setCountryList(list);
    } else {
      setCountryList(context.countryList);
    }

    
  }

  useEffect(() => {
    setCountryList(context.countryList)
  }, []);

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className=" py-1 px-3 countryDrop cursor-pointer min-w-[170px] h-[60px] w-[180px]  text-left justify-start hover:shadow-md shadow-xs transition-all duration-150 ease-in rounded-md border border-black/20 active:scale-95 flex "
      >
        <div className="flex flex-col justify-center px-2 gap-0.5">
          <span className="text-xs text-[rgba(0,0,0,0.4)] ">
            Your Location
          </span>
          <span className="text-sm text-[#233A95] font-medium">
            {
              context.selectedCountry !== "" ? context.selectedCountry?.length > 10 ? context.selectedCountry?.substr(0,10)+"..." : context.selectedCountry : "Select a Location"
            }
          </span>
        </div>
        <span className="ml-auto flex items-center text-[#233A95]">
          <IoIosArrowDown />
        </span>
      </button>

      {/* dialog box */}
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.4)", // lower opacity = lighter
            },
          },
        }}
      >
        <div
          className="py-8 px-5 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute z-10 right-4 top-4 text-black/50 hover:text-red-500 transition-all duration-100 cursor-pointer ease-in"
          >
            <IoIosCloseCircleOutline size={25} />
          </button>

          <h1 className="text-xl mt-1">Choose Your Delivery Location</h1>
          <p className="text-black/50">
            Enter your address and we will specify the offer for your area.
          </p>

          <div className="w-full h-[60px] bg-[#F3F4F7] rounded-sm flex items-center px-4 gap-1 mt-3">
            <input
              type="text"
              value={searchText}
              className="bg-transparent text-[16px] text-black/80 outline-none h-10 w-full"
              placeholder="Search Your Area ..."
              onChange={fliterList}
            />
            <button className="cursor-pointer">
              <FiSearch size={20} />
            </button>
          </div>

          <div className="max-h-[300px] overflow-y-scroll overflow-x-hidden mt-4">
            <ul className="countryList md:px-2">
              <li onClick={clearCounty} className="py-4 px-3 hover:bg-black/10 border-b border-black/10 flex items-center justify-between transition-all duration-150 ease-in">
                <button className="text-[16px] font-medium text-black/80">
                  Select a Locatioin
                </button>
                <span className="text-[10px] px-3 py-0.5 rounded-full border text-black/40 border-black/20">
                  Clear All
                </span>
              </li>
              {
                countryList?.length !== 0 && countryList?.map((item, index) => (
                  <li key={index} onClick={() => selectCountry(index, item.country)} className={`py-4 px-3 hover:bg-black/10 border-b border-black/10 flex items-center justify-between transition-colors duration-150 ease-in`}>
                    <button className={`text-md font-medium ${context.selectedCountry == item.country ? "text-[#233A95] font-semibold" : "text-black/80"}`}>{item.country}</button>
                    <span className={`text-[10px] px-3 py-0.5 rounded-full border ${context.selectedCountry == item.country ? "text-[#233A95] border-[#233A95]" : "text-black/40 border-black/20"}`}>
                      Min: ${(Math.random() * 150).toFixed(0)}
                    </span>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default CountryDropDown;
