import React, { useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import Slider from "react-slick";
import { IoClose, IoAdd, IoRemove } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { FaRegHeart } from "react-icons/fa";
import { TbArrowsLeftRight } from "react-icons/tb";
import { AiOutlineRobot } from "react-icons/ai";

// --- Constants ---
const ACCENT_COLOR_RED = "#D51243"; // Price Red
const PRIMARY_BLUE = "#1E3C97";     // Add to Cart Blue

const ProductModal = ({ closeProductModal }) => {
  // State for interactive options
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Green");

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  // Slider settings (original)
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

  // Static product data
  const product = {
    title: "VNEED Cotton Blend Straight Kurta with Pant | Women Kurta Pant Set",
    brand: "Welch's",
    rating: 4,
    reviews: 10,
    oldPrice: 499,
    currentPrice: 299,
    discount: "20% OFF",
    inStock: true,
    description:
      "Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent. This set offers a comfortable fit and a modern ethnic look.",
    category: "Fashion",
    tags: "womens, casual, trendy",
    sizes: ["S", "M", "L", "XL"],
    colors: [
        { name: "Green", hex: "#4CAF50" },
        { name: "Blue", hex: "#2196F3" },
        { name: "Red", hex: "#F44336" },
        { name: "Yellow", hex: "#FFEB3B" },
    ],
    images: [
      "https://api.spicezgold.com/download/file_1734526809409_need-printed-cotton-straight-kurtis-for-women-fancy-kurti-for-girls-regular-office-college-wear-kurta-for-ladies-kurti-pant-set-of-1-size-l-product-images-rvyi2nw7q6-0-202408011909.jpg",
      "https://api.spicezgold.com/download/file_1734526809411_need-printed-cotton-straight-kurtis-for-women-fancy-kurti-for-girls-regular-office-college-wear-kurta-for-ladies-kurti-pant-set-of-1-size-l-product-images-rvyi2nw7q6-1-202408011909.jpg",
      "https://api.spicezgold.com/download/file_1734526809413_need-printed-cotton-straight-kurtis-for-women-fancy-kurti-for-girls-regular-office-college-wear-kurta-for-ladies-kurti-pant-set-of-1-size-l-product-images-rvyi2nw7q6-2-202408011910.jpg",
    ],
  };

  const handleAITrialRoom = () => {
    // Add your AI Trial Room functionality here
    console.log("Opening AI Trial Room...");
    // This could open another modal, navigate to a different page, etc.
  };

  return (
    <Dialog
      open={true}
      onClose={closeProductModal}
      maxWidth="md"
      fullWidth
      slotProps={{
        backdrop: { sx: { backgroundColor: "rgba(0,0,0,0.5)" } },
      }}
      PaperProps={{ sx: { borderRadius: "1rem" } }}
    >
      <div 
        className="relative p-6 md:p-8 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '90vh' }}
      >
        <button
          onClick={closeProductModal}
          className="absolute right-4 top-4 z-20 text-gray-500 hover:text-red-500 transition-colors duration-150"
        >
          <IoClose size={28} />
        </button>

        {/* Title, Brand & Rating - MOVED TO TOP */}
        <div className="flex flex-col gap-3 pb-6 border-b border-gray-200 mb-6">
          <p className="text-[16px] md:text-xl font-medium font-poppins text-gray-900">
            {product.title}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <p className="text-gray-500 text-sm">
              Brand: <span className="text-gray-900 font-medium">{product.brand}</span>
            </p>

            <div className="flex items-center gap-1">
              <Rating
                name="read-only"
                value={product.rating}
                size="small"
                readOnly
                sx={{
                  "& .MuiRating-iconFilled": { color: "#FFCD00" },
                  "& .MuiRating-iconEmpty": { color: "#d0d0d0" },
                }}
              />
              <p className="text-xs text-gray-500">
                {product.reviews} <span>REVIEWS</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main Grid: Image (2/5) + Details (3/5) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          
          {/* Image Section (2/5 columns) */}
          <div className="col-span-1 md:col-span-2 w-full flex flex-col justify-center">
            {/* Zoom Image */}
            <div className="relative w-full h-auto max-h-[350px] overflow-hidden border border-black/10 rounded-[15px]">
              <span className="absolute top-2 left-2 z-10 bg-[#2BBEF9] text-white text-[11px] font-semibold px-2 py-0.5 rounded-md shadow-sm">
                {product.discount}
              </span>

              <Slider
                ref={zoomSliderBig}
                {...settings2}
                className="zoomSliderBig"
              >
                {product.images.map((src, i) => (
                  <div
                    key={i}
                    className="w-full h-full flex justify-center items-center"
                  >
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={1}
                      src={src}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Small Thumbnail Slider */}
            <Slider ref={zoomSlider} {...settings} className="zoomSlider mt-5">
              {product.images.map((src, i) => (
                <div key={i} className="item h-auto max-h-15">
                  <img
                    onClick={() => goto(i)}
                    src={src}
                    alt=""
                    className="object-cover object-top w-full h-full"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Details Section (3/5 columns) */}
          <div className="col-span-3 flex flex-col gap-4 w-full pl-0 md:pl-5">

            {/* Price and Stock Status */}
            <div className="flex items-end gap-3">
              <span className="text-3xl font-extrabold" style={{ color: ACCENT_COLOR_RED }}>
                ₹{product.currentPrice}
              </span>
              <span className="text-lg text-gray-400 line-through">
                ₹{product.oldPrice}
              </span>
              <span
                className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  product.inStock
                    ? "text-green-700 bg-green-100"
                    : "text-red-700 bg-red-100"
                } ml-auto`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            
            {/* Color and Size Selectors */}
            <div className="flex flex-col gap-4 py-2 border-b border-gray-100">
                {/* Size Selector */}
                <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                        Size: <span className="text-gray-500 font-normal">{selectedSize}</span>
                    </p>
                    <div className="flex gap-2">
                        {product.sizes.map(size => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`w-10 h-10 flex items-center justify-center text-sm rounded-md border transition-all duration-150 
                                    ${selectedSize === size 
                                        ? 'bg-gray-800 text-white border-gray-800 shadow-sm' 
                                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'}`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Color Selector */}
                <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                        Color: <span className="text-gray-500 font-normal">{selectedColor}</span>
                    </p>
                    <div className="flex gap-2">
                        {product.colors.map(color => (
                            <button
                                key={color.name}
                                onClick={() => setSelectedColor(color.name)}
                                title={color.name}
                                className={`w-6 h-6 rounded-full border-2 transition-all duration-150 
                                    ${selectedColor === color.name ? 'border-gray-900 ring-2 ring-offset-2 ring-gray-900' : 'border-gray-200 hover:border-gray-500'}`}
                                style={{ backgroundColor: color.hex }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Product Description */}
            <p className="text-sm text-gray-600">
              {product.description}
            </p>

            {/* Quantity and Add to Cart Actions */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-full">
                <button
                  onClick={decrementQuantity}
                  className={`p-3 text-gray-600 hover:bg-gray-100 rounded-l-full transition-colors duration-150 ${
                    quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={quantity === 1}
                  aria-label="Decrease quantity"
                >
                  <IoRemove size={14} />
                </button>
                <span className="px-4 text-base font-semibold text-gray-800 w-10 text-center">
                    {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="p-3 text-gray-600 hover:bg-gray-100 rounded-r-full transition-colors duration-150"
                  aria-label="Increase quantity"
                >
                  <IoAdd size={14} />
                </button>
              </div>

              <button
                className={`flex-grow px-8 py-3 rounded-full text-base font-semibold text-white transition-colors duration-200 shadow-lg hover:shadow-xl ${
                  product.inStock ? 'bg-blue-700 hover:bg-blue-800' : 'bg-gray-400 cursor-not-allowed'
                }`}
                style={{ backgroundColor: product.inStock ? PRIMARY_BLUE : undefined }}
                disabled={!product.inStock}
              >
                Add to Cart
              </button>
            </div>

            {/* Wishlist, Compare & AI Trial Room */}
            <div className="flex flex-wrap gap-4 mt-2 pb-4 border-b border-gray-100">
              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-500 transition-colors">
                <FaRegHeart size={16} />
                <span className="font-medium">Add to Wishlist</span>
              </button>

              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-500 transition-colors">
                <TbArrowsLeftRight size={16} />
                <span className="font-medium">Compare</span>
              </button>

              {/* NEW: AI Trial Room Button */}
              <button 
                onClick={handleAITrialRoom}
                className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 transition-colors bg-purple-50 hover:bg-purple-100 px-3 py-2 rounded-full border border-purple-200"
              >
                <AiOutlineRobot size={18} className="text-purple-500" />
                <span className="font-medium">AI Trial Room</span>
              </button>
            </div>

            {/* Meta Information */}
            <div className="flex flex-col gap-1 text-sm pt-2">
              <p className="text-gray-500">
                <span className="font-medium">Category:</span>{" "}
                <span className="text-gray-700">{product.category}</span>
              </p>
              <p className="text-gray-500">
                <span className="font-medium">Tags:</span>{" "}
                <span className="text-gray-700">{product.tags}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModal;