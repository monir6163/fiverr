"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import TweetEmbed from "react-tweet-embed";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const tweetIds = [
  {
    id: "1756235842228494765",
    options: { theme: "dark" },
  },
  {
    id: "1760382247641756160",
    options: { theme: "dark" },
  },
  {
    id: "1761398671076217330",
    options: { theme: "dark" },
  },
  {
    id: "1762170264475914480",
    options: { theme: "dark" },
  },
];

export const SwiperLg = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {tweetIds.map((tweet, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-fit max-w-5xl justify-center ">
              <div className="w-full max-w-[550px]">
                <TweetEmbed options={tweet.options} tweetId={tweet.id} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
