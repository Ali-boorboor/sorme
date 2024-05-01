import { memo } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Slider = memo(() => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="w-full">
        <SwiperSlide>
          <img
            src="/images/png/first-slider.png"
            alt="slider-img"
            className="rounded-3xl object-cover object-center w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/png/second-slider.png"
            alt="slider-img"
            className="rounded-3xl object-cover object-center w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/png/third-slider.png"
            alt="slider-img"
            className="rounded-3xl object-cover object-center w-full h-full"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
});

export default Slider;
