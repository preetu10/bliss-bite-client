/* eslint-disable react/no-unescaped-entities */

import { Swiper, SwiperSlide } from "swiper/react";

 
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";
const Banner = () => {
    return (
        <div className="px-2">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3500 }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper rounded-xl mt-3 mb-10"
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen shadow-[#715329] shadow-2xl"
            style={{
              backgroundImage:
                "url(banner1.jpg)",
            }}
          >
            <div className="hero-overlay "></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-extrabold">Share Your Surplus</h1>
                <p className="mb-5 font-semibold text-xl">
                Help reduce food waste by sharing your extra food with those in need.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen shadow-[#715329] shadow-2xl"
            style={{
              backgroundImage:
                "url(banner2.jpg)",
            }}
          >
            <div className="hero-overlay "></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-extrabold">Discover Local Donations</h1>
                <p className="mb-5 font-semibold text-xl">
                Find surplus food available in your area and make use of fresh, donated items.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen shadow-[#715329] shadow-2xl"
            style={{
              backgroundImage:
                "url(banner3.jpg)",
            }}
          >
            <div className="hero-overlay "></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-extrabold">Join the Community</h1>
                <p className="mb-5 font-semibold text-xl">
                Connect with fellow food savers and be part of a movement towards sustainability.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Banner;