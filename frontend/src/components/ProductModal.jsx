import React, { useRef } from "react";
import Dialog from "@mui/material/Dialog";
import Slider from "react-slick";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Rating from "@mui/material/Rating";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { FaPlus, FaMinus, FaRegHeart } from "react-icons/fa";
import { TbArrowsUpDown } from "react-icons/tb";

const ProductModal = ({ closeProductModal }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
  };

  const settings2 = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const zoomSliderBig = useRef();
  const zoomSlider = useRef();

  const goto = (index) => {
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
  };

  return (
    <Dialog
      open={true}
      onClose={closeProductModal}
      maxWidth="md"
      fullWidth
      slotProps={{
        backdrop: { sx: { backgroundColor: "rgba(0,0,0,0.4)" } },
      }}
    >
      <div className="relative px-8 py-8" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={closeProductModal}
          className="absolute right-4 top-4 z-10 text-black/50 hover:text-red-500 transition-all duration-100 cursor-pointer"
        >
          <IoIosCloseCircleOutline size={25} />
        </button>

        {/* Product Title Area */}
        <div className="flex flex-col gap-3 py-6 border-b border-black/20">
          <p className="text-[16px] md:text-xl font-medium font-poppins">
            VNEED Cotton Blend Straight Kurta with Pant | Women Kurta Pant Set
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <p className="text-black/50 sm:border-r-2 border-black/20 pr-5">
              Brand: <span className="text-black">Welch's</span>
            </p>

            <div className="flex items-center gap-1">
              <Rating
                name="read-only"
                value={4}
                size="small"
                readOnly
                sx={{
                  "& .MuiRating-iconFilled": { color: "#FFCD00" },
                  "& .MuiRating-iconEmpty": { color: "#d0d0d0" },
                }}
              />
              <p className="text-xs text-black/50">
                10 <span>REVIEWS</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-5">
          {/* Image Section */}
          <div className="col-span-1 md:col-span-2 w-full flex flex-col justify-center">
            {/* Zoom Image */}
            <div className="relative w-full h-auto max-h-[350px] overflow-hidden border border-black/10 rounded-[15px]">
              <span className="absolute top-2 left-2 z-10 bg-[#2BBEF9] text-white text-[11px] font-semibold px-2 py-0.5 rounded-md shadow-sm">
                20% OFF
              </span>

              <Slider
                ref={zoomSliderBig}
                {...settings2}
                className="zoomSliderBig"
              >
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-full h-full flex justify-center items-center"
                  >
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={1}
                      src={
                        [
                          "https://api.spicezgold.com/download/file_1734526809409_need-printed-cotton-straight-kurtis-for-women-fancy-kurti-for-girls-regular-office-college-wear-kurta-for-ladies-kurti-pant-set-of-1-size-l-product-images-rvyi2nw7q6-0-202408011909.jpg",
                          "https://api.spicezgold.com/download/file_1734526809411_need-printed-cotton-straight-kurtis-for-women-fancy-kurti-for-girls-regular-office-college-wear-kurta-for-ladies-kurti-pant-set-of-1-size-l-product-images-rvyi2nw7q6-1-202408011909.jpg",
                          "https://api.spicezgold.com/download/file_1734526809413_need-printed-cotton-straight-kurtis-for-women-fancy-kurti-for-girls-regular-office-college-wear-kurta-for-ladies-kurti-pant-set-of-1-size-l-product-images-rvyi2nw7q6-2-202408011910.jpg",
                        ][i]
                      }
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Small Thumbnail Slider */}
            <Slider ref={zoomSlider} {...settings} className="zoomSlider mt-5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="item h-auto max-h-15">
                  <img
                    onClick={() => goto(i)}
                    src={
                      [
                        "https://api.spicezgold.com/download/file_1734526809409_need-printed-cotton-straight-kurtis-for-women-fancy-kurti-for-girls-regular-office-college-wear-kurta-for-ladies-kurti-pant-set-of-1-size-l-product-images-rvyi2nw7q6-0-202408011909.jpg",
                        "https://api.spicezgold.com/download/file_1734526809411_need-printed-cotton-straight-kurtis-for-women-fancy-kurti-for-girls-regular-office-college-wear-kurta-for-ladies-kurti-pant-set-of-1-size-l-product-images-rvyi2nw7q6-1-202408011909.jpg",
                        "https://api.spicezgold.com/download/file_1734526809413_need-printed-cotton-straight-kurtis-for-women-fancy-kurti-for-girls-regular-office-college-wear-kurta-for-ladies-kurti-pant-set-of-1-size-l-product-images-rvyi2nw7q6-2-202408011910.jpg",
                      ][i]
                    }
                    alt=""
                    className="object-cover object-top w-full h-full"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Details Section */}
          <div className="col-span-3 flex flex-col gap-4 w-full border-red-500 pl-5">
            <div className="flex items-center gap-2 mt-1">
              <span className="text-gray-400 line-through text-xl">₹499</span>
              <span className="text-2xl text-[#D51243] font-semibold">
                ₹299
              </span>
            </div>

            <span className="text-green-600 w-25 flex items-center justify-center text-sm font-medium font-poppins px-2 py-2 bg-[#E3F4E9] rounded-full">
              In Stock
            </span>

            <p className="text-xs text-black/70 font-poppins">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent
            </p>

            <div className="flex items-center gap-8 flex-row">
              <div className="flex items-center gap-4">
                <button className="p-3 rounded-full bg-gray-200 hover:bg-yellow-300 transition-all duration-100 ease-in cursor-pointer">
                  <FaMinus size={10} />
                </button>
                <span className="text-sm">1</span>
                <button className="p-3 rounded-full bg-gray-200 hover:bg-yellow-300 transition-all duration-100 ease-in cursor-pointer">
                  <FaPlus size={10} />
                </button>
              </div>

              <button className="border px-10 py-2 rounded-full text-sm text-white bg-[#1E3C97] font-poppins hover:bg-[#1E3C97]/85 transition-all duration-150 ease-in-out cursor-pointer">
                Add to cart
              </button>
            </div>

            <div className="flex gap-4 mt-5 mb-3">
              <button className="border border-black/10 font-poppins flex items-center gap-2 uppercase px-4 py-2 text-xs rounded-full text-black/60 cursor-pointer">
                <FaRegHeart size={15} />
                Add to wistList
              </button>

              <button className="uppercase font-poppins flex items-center gap-1 text-xs text-black/60 cursor-pointer">
                <TbArrowsUpDown  size={15} />
                Compare
              </button>
            </div>

            <hr className="text-black/10" />

            <div className="font-poppins flex flex-col gap-1">
              <p className="text-xs text-black/50">
                Category: <span className="text-black/70">Fashion</span>
              </p>
              <p className="text-xs text-black/50">
                Tags: <span className="text-black/70">mens, trendy</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModal;
