import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import {FaRegHeart } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";
import ProductModal from "./ProductModal";

const ProductCard = ({ img }) => {
  const [showCartCount, setShowCartCount] = useState(false);
  const [cartCount, setCartCount] = useState(1);
  const [productModalOpen, setProductModalOpen] = useState(false);

  const viewProductDetails = (id) => {
    setProductModalOpen(true);
  };


  const clearCart = () => {
    setShowCartCount(false);
    setCartCount(1);
  };

  const closeProductModal = () => {
    setProductModalOpen(false);
  };


  return (
    <div className="group w-full max-w-[220px] bg-white border border-gray-200 rounded-lg p-3 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
      {/* image */}
      <div className="relative overflow-hidden rounded-md">
        <img
          src={img}
          alt="product"
          className="w-full h-[200px] object-cover object-top rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
        />

        {/* discount badge */}
        <span className="absolute top-2 left-2 bg-[#2BBEF9] text-white text-[11px] font-semibold px-2 py-0.5 rounded-md shadow-sm">
          20% OFF
        </span>

        {/* Show ditails and wishlist icons */}
        <button onClick={() => viewProductDetails(1)} className="absolute top-3 -right-1 hover:text-white hover:bg-[#233A95] border bg-white border-black/20 rounded-full p-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:right-3 transition-all duration-200 ease-in-out cursor-pointer">
          <MdOutlineZoomOutMap size={15} />
        </button>

        <button className="absolute top-13 -right-1 hover:text-white hover:bg-[#233A95] border bg-white border-black/20 rounded-full p-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:right-3 transition-all duration-400 ease-in-out cursor-pointer">
          <FaRegHeart size={15} />
        </button>
      </div>

      {/* info */}
      <div className="mt-3 flex flex-col gap-1.5">
        <p className="text-sm font-medium text-[#202435] leading-tight line-clamp-2 font-poppins">
          VNEED Cotton Blend Straight Kurta with Pant | Women Kurta Pant Set | Girls Cotton Kurti and Pant Set | Women Kurta & Palazzo Pant Set (set of 1 ) (SIZE L)
        </p>
        <span className="text-green-600 text-[13px] font-medium font-poppins">
          In Stock
        </span>

        <div className="flex items-center gap-1">
          <Rating
            name="read-only"
            value={4}
            size="small"
            readOnly
            sx={{
              "& .MuiRating-iconFilled": {
                color: "#FFCD00", // filled star color
              },
              "& .MuiRating-iconEmpty": {
                color: "#d0d0d0", // empty star color (optional)
              },
            }}
          />
          <span className="text-[12px] text-gray-500">(10)</span>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-gray-400 line-through text-sm">$9.35</span>
          <span className="text-[17px] text-red-500 font-semibold">$7.25</span>
        </div>

        {/* {showCartCount ? (
          <div className="flex items-center justify-between border border-gray-200 rounded-md mt-2 overflow-hidden">
            <button
              onClick={() => {
                if (cartCount > 1) setCartCount((prev) => prev - 1);
                else clearCart();
              }}
              className="bg-[#F4F6FA] px-3 py-2 hover:bg-gray-300 transition"
            >
              <FaMinus size={10} />
            </button>
            <span className="text-[14px] font-medium">{cartCount}</span>
            <button
              onClick={() => setCartCount((prev) => prev + 1)}
              className="bg-[#FFD814] px-3 py-2 hover:bg-[#F7CA00] transition"
            >
              <FaPlus size={10} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowCartCount(true)}
            className="mt-2 border border-[#2BBEF9] text-[#2BBEF9] text-[14px] font-medium rounded-md py-2 hover:bg-[#2BBEF9] hover:text-white transition-all duration-150"
          >
            Add to Cart
          </button>
        )} */}
      </div>

      {
        productModalOpen
        ? <ProductModal closeProductModal={closeProductModal} />
        : null
      }
    </div>
  );
};

export default ProductCard;
