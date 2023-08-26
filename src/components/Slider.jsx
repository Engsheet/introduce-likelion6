import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../assets/건주.png';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        slidesPerGroup={3}
        modules={[Navigation]}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
      >
        <SwiperSlide
          style={{
            height: '300px',
            paddingTop: '150px',
          }}
        >
          <div className="bg-orange-400 relative p-6 rounded-2xl w-72 m-auto flex flex-col gap-3">
            <h2 className="text-3xl">김건주</h2>
            <h3>레이지덕, 가오나시</h3>
            <img
              className="w-40 m-auto absolute -top-[150px]"
              src={img}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-200">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-pink-200">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-red-200">Slide 4</SwiperSlide>
        <SwiperSlide className="bg-green-200">Slide 5</SwiperSlide>
        <SwiperSlide className="bg-cyan-300">Slide 6</SwiperSlide>
        <SwiperSlide className="bg-pink-100">Slide 7</SwiperSlide>
      </Swiper>

      <div className="text-center mt-8">
        <button className="custom-prev text-xl mr-20">&#8249; Prev</button>
        <button className="custom-next text-xl">Next &#8250;</button>
      </div>
    </>
  );
}
