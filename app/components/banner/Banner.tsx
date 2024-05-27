"use client";
import React from "react";
import Banner1 from "../../../public/images/banner/banner-1.jpeg";
import Banner2 from "../../../public/images/banner/banner-2.jpeg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { FaArrowTrendUp } from "react-icons/fa6";

const Banner = () => {
  return (
    <>
      <section className="my-10">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative">
              <Image src={Banner1} alt="Banner-1" />
              <div className="absolute bottom-5 left-5">
                <h1 className=" text-sm md:text-5xl font-black capitalize text-white">
                  Simple & Decidedly Modern
                </h1>
                <Link
                  href={"/"}
                  className="text-sm md:text-2xl font-black capitalize text-white flex gap-2"
                >
                  Shop Now <FaArrowTrendUp />
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <Image src={Banner2} alt="Banner-2" />
              <div className="absolute bottom-5 left-5">
                <h1 className=" text-sm md:text-5xl font-black capitalize text-white">
                  Simple & Decidedly Modern
                </h1>
                <Link
                  href={"/"}
                  className="text-sm md:text-2xl font-black capitalize text-white flex gap-2"
                >
                  Shop Now <FaArrowTrendUp />
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <Image src={Banner1} alt="Banner-1" />
              <div className="absolute bottom-5 left-5">
                <h1 className=" text-sm md:text-5xl font-black capitalize text-white">
                  Simple & Decidedly Modern
                </h1>
                <Link
                  href={"/"}
                  className="text-sm md:text-2xl font-black capitalize text-white flex gap-2"
                >
                  Shop Now <FaArrowTrendUp />
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <Image src={Banner2} alt="Banner-2" />
              <div className="absolute bottom-5 left-5">
                <h1 className=" text-sm md:text-5xl font-black capitalize text-white">
                  Simple & Decidedly Modern
                </h1>
                <Link
                  href={"/"}
                  className="text-sm md:text-2xl font-black capitalize text-white flex gap-2"
                >
                  Shop Now <FaArrowTrendUp />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Banner;
