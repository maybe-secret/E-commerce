import React from "react";
import Dialog from "@mui/material/Dialog";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Rating from "@mui/material/Rating";

const ProductModal = ({ closeProductModal }) => {
  return (
    <>
      <Dialog
        open={true}
        onClose={() => closeProductModal()}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.4)", // lower opacity = lighter
            },
          },
        }}
      >
        <div
          className="py-8 px-8 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => closeProductModal()}
            className="absolute z-10 right-4 top-4 text-black/50 hover:text-red-500 transition-all duration-100 cursor-pointer ease-in"
          >
            <IoIosCloseCircleOutline size={25} />
          </button>

          {/* Product Title */}
          <div className="border-b border-black/20 py-6 flex flex-col gap-3">
            <p className="text-[16px] md:text-xl font-medium font-poppins">
              VNEED Cotton Blend Straight Kurta with Pant | Women Kurta Pant Set
              | Girls Cotton Kurti and Pant Set | Women Kurta & Palazzo Pant Set
              (set of 1 ) (SIZE L)
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center ">
              <p className="text-black/50 sm:border-r-2 border-black/20 pr-5">
                Brands: <span className="text-black">Welch's</span>
              </p>

              <div className="flex gap-1">
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
                <p className="text-xs text-black/50">10 <span>REVIEWS</span></p>
              </div>
            </div>
          </div>

          {/* Product details */}
          <div className="grid grid-cols-2 gap-2">
            {/* Image sections */}
            <div className="border border-black w-full">

            </div>

            {/* Details section */}
            <div className="border border-red-500 w-full">

            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModal;
