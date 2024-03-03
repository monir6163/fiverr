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
    id: "1752390435304087886",
    options: { theme: "dark" },
  },
  {
    id: "1763663651674734849",
    options: { theme: "dark" },
  },
  {
    id: "1763663901466501371",
    options: { theme: "dark" },
  },
  {
    id: "1763319115442159634",
    options: { theme: "dark" },
  },
  {
    id: "1681843994186387457",
    options: { theme: "dark" },
  },
  {
    id: "1677828720290086913",
    options: { theme: "dark" },
  },
];

export const SwiperLg = () => {
  const tweetEmbedOptions = { theme: "dark" };
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        loop={true}
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
            <div className="flex max-w-5xl justify-center ">
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
