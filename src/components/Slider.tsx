import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { BreedByParams } from "../types/breed";

import "swiper/css";
import "swiper/css/pagination";

interface SliderProps {
  data: BreedByParams[];
}

const Slider = ({ data }: SliderProps) => {
  return (
    <div className="relative mb-[51px]">
      <Swiper
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        autoplay={{ delay: 5000 }}
        modules={[Pagination, Autoplay]}
        className="max-w-[668px] rounded-20 h-[166px] md:h-[377px] lg:h-[360px]"
      >
        {data.map(({ id, url, width, height }) => (
          <SwiperSlide key={id} className="!w-full">
            <img
              src={url}
              width={width}
              height={height}
              alt={id}
              className="w-full h-full object-cover rounded-20"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination" />
    </div>
  );
};

export default Slider;
