import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules

import { Navigation } from "swiper/modules";
import {
  CameraIcon,
  ChevronLeft,
  ChevronRight,
  GamepadIcon,
  HardDrive,
  HeadphonesIcon,
  Laptop,
  SmartphoneIcon,
  TvIcon,
  WatchIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Computers",
    img: <Laptop className="size-7 md:size-9 lg:size-10 text-primary" />,
  },
  {
    name: "Smartphones",
    img: (
      <SmartphoneIcon className="size-7 md:size-9 lg:size-10 text-primary" />
    ),
  },
  {
    name: "Headphones",
    img: (
      <HeadphonesIcon className="size-7 md:size-9 lg:size-10 text-primary" />
    ),
  },
  {
    name: "TVs",
    img: <TvIcon className="size-7 md:size-9 lg:size-10 text-primary" />,
  },
  {
    name: "Gamings",
    img: <GamepadIcon className="size-7 md:size-9 lg:size-10 text-primary" />,
  },
  {
    name: "Cameras",
    img: <CameraIcon className="size-7 md:size-9 lg:size-10 text-primary" />,
  },
  {
    name: "Watches",
    img: <WatchIcon className="size-7 md:size-9 lg:size-10 text-primary" />,
  },
  {
    name: "Storages",
    img: <HardDrive className="size-7 md:size-9 lg:size-10 text-primary" />,
  },
];

export default function Category() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavButtons = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
    <>
      <div className="flex items-center justify-between gap-1 my-2">
        <h4 className="py-2 text-2xl font-bold text-primary">Categories</h4>
        <div>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`mr-2 p-2 text-white  rounded-full bg-primary cursor-pointer transition duration-300 ${
              isBeginning ? "opacity-50 " : ""
            }`}
            disabled={isBeginning}
          >
            <ChevronLeft className="size-3 md:size-5" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`p-2 text-white  rounded-full bg-primary cursor-pointer transition duration-300 ${
              isEnd ? "opacity-50 " : ""
            }`}
            disabled={isEnd}
          >
            <ChevronRight className="size-3 md:size-5" />
          </button>
        </div>
      </div>

      <div className="py-2 category">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            320: { slidesPerView: 3, slidesPerGroup: 2 },
            640: { slidesPerView: 4, slidesPerGroup: 2 },
            1024: { slidesPerView: 6, slidesPerGroup: 3 },
            1280: { slidesPerView: 7, slidesPerGroup: 4 },
          }}
          spaceBetween={10}
          modules={[Navigation]}
          navigation={true}
          className=" mySwiper"
          onSlideChange={(swiper) => updateNavButtons(swiper)}
        >
          {categories.map((category, index) => {
            return (
              <SwiperSlide className="border rounded-md" key={index}>
                <Link
                  to={`/products?category=${category.name}`}
                  className="w-full"
                >
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center px-1 py-6"
                  >
                    <span className="">{category.img}</span>
                    <span className="text-[12px] md:text-base text-center">
                      {category.name}
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
