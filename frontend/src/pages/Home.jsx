import React from "react";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import sideImg from "../assets/sideimg.jpg";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Slider from "react-slick";
import ProductCard from "../components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import FeaturedCat from "../components/FeaturedCat";
import ban2 from ".././assets/ban2.png";
import { img } from "../assets/data";
import ban5 from "../assets/ban5.png";
import ban3 from "../assets/ban3.png";
import ban4 from "../assets/ban4.png";
import MobileNav from "../components/MobileNav";
import Footer from "../components/Footer";

const Home = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="">
      {/* <div className="mobilenav fixed bottom-0 left-0 w-full z-50 lg:hidden">
        <MobileNav />
      </div> */}

      <Header />
      <HomeBanner />

      <FeaturedCat />

      <div className="homeProducts w-full mt-3 overflow-visible">
        <div className="mx-auto max-w-[1320px] px-4 flex lg:flex-row flex-col-reverse overflow-visible items-start lg:justify-between">
          <div className="addvertisement lg:w-[23%] w-full flex flex-col gap-7 sticky top-5 self-start">
            {/* side banner img */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src={sideImg}
                className="w-full object-cover"
                alt="Ad Banner"
              />
            </div>

            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src={ban2}
                className="w-full object-cover"
                alt="Ad Banner 2"
              />
            </div>
          </div>

          <div className="lg:w-[75%] w-full flex flex-col gap-6">
            {/* Best seller section */}
            <div className="titles flex items-center justify-between w-full">
              <div className="info flex flex-col items-start ">
                <p className="text-[20px] font-inter">BEST SELLERS</p>
                <p className="text-sm text-black/40">
                  Do not miss the current offers until the end of March.
                </p>
              </div>

              <button className="border border-black/20 py-1 px-5 rounded-4xl text-black/30 hover:text-black/40 flex items-center justify-between gap-2 group hover:border-black/30 transition-all duration-150 ease-in cursor-pointer">
                View All
                <MdOutlineArrowRightAlt
                  size={25}
                  className="text-black/20 group-hover:text-black/30"
                />
              </button>
            </div>

            {/* Products */}
            <div className="productsRow w-full relative">
              <div className="hidden lg:block">
                {/* Custom Prev Button */}
                <div
                  ref={prevRef}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 cursor-pointer transition
                [&.swiper-button-disabled]:opacity-40 [&.swiper-button-disabled]:cursor-not-allowed"
                >
                  <MdArrowBackIos size={20} className="text-black" />
                </div>

                {/* Custom Next Button */}
                <div
                  ref={nextRef}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 cursor-pointer transition
                [&.swiper-button-disabled]:opacity-40 [&.swiper-button-disabled]:cursor-not-allowed"
                >
                  <MdArrowForwardIos size={20} className="text-black" />
                </div>

                <Swiper
                  modules={[Navigation]}
                  spaceBetween={0}
                  slidesPerView={4}
                  onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }}
                >
                  {img.map((item, index) => (
                    <SwiperSlide className="py-2">
                      <ProductCard img={item.img} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory lg:hidden">
                {img.map((img, index) => (
                  <div
                    key={index}
                    className="min-w-[200px] py-2 sm:min-w-[200px] md:min-w-[200px] lg:min-w-[250px] snap-start"
                  >
                    <ProductCard img={img.img} />
                  </div>
                ))}
              </div>
            </div>

            {/* Advertisement */}
            <div className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.005]">
              <img
                src={ban5}
                className="w-full object-cover"
                alt="Mid-section promotion"
              />
            </div>

            {/* Best seller section */}
            <div className="titles flex items-center justify-between w-full">
              <div className="info flex flex-col items-start ">
                <p className="text-[20px] font-inter">NEW PRODUCTS</p>
                <p className="text-sm text-black/40">
                  Do not miss the current offers until the end of March.
                </p>
              </div>

              <button className="border border-black/20 py-1 px-5 rounded-4xl text-black/30 hover:text-black/40 flex items-center justify-between gap-2 group hover:border-black/30 transition-all duration-150 ease-in cursor-pointer">
                View All
                <MdOutlineArrowRightAlt
                  size={25}
                  className="text-black/20 group-hover:text-black/30"
                />
              </button>
            </div>

            {/* Products */}
            {/* mobile */}
            <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory lg:hidden">
              {img.map((img, index) => (
                <div
                  key={index}
                  className="min-w-[200px] sm:min-w-[200px] md:min-w-[200px] lg:min-w-[250px] snap-start"
                >
                  <ProductCard img={img.img} />
                </div>
              ))}
            </div>

            {/* Laptop & Desktop (grid view) */}
            <div className="hidden lg:grid grid-cols-4 xl:grid-cols-4 gap-4 ">
              {img.map((item, index) => (
                <ProductCard key={index} img={item.img} />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <img
                src={ban3}
                className="w-full sm:w-[49%] h-auto rounded-lg object-cover"
                alt=""
              />
              <img
                src={ban4}
                className="w-full sm:w-[49%] h-auto rounded-lg object-cover"
                alt=""
              />
            </div>

            {/* Launch product */}
            <div></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
