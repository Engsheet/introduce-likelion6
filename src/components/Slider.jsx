import useDataList from '@/hooks/useDataList';
import { getPbImageURL } from '@/utils/getImageURL';
import { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperButton from './SwiperButton';

export default function Slider() {
  const { data } = useDataList();
  const [bgColor, setBgColor] = useState(null);
  const [random, setRandom] = useState(1);

  const arr = [1, 2, 3, 4, 5, 6];

  useLayoutEffect(() => {
    const handleRandomBackground = () => {
      setRandom(Number(parseInt(Math.random() * 6) + 1));

      return `bg-grad${random}`;
    };

    const randomBg = handleRandomBackground();
    setBgColor(randomBg);
  }, []);

  if (data) {
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
          {data.items.map((item) => (
            <SwiperSlide
              key={item.id}
              style={{
                height: '300px',
                paddingTop: '150px',
              }}
            >
              <Link to={`/character/${item.id}`}>
                <div
                  className={`relative p-6 rounded-2xl w-72 m-auto flex flex-col gap-3 ${bgColor}`}
                >
                  <h2 className="text-4xl">{item.name}</h2>
                  <h3>{item.nickname}</h3>
                  <img
                    className={`absolute left-1/2 top-6 -translate-x-1/2 -translate-y-full h-40`}
                    src={getPbImageURL(item, 'image')}
                    alt={item.name}
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-8">
          <SwiperButton swiperName="custom-prev mr-20">
            &#8249; Prev
          </SwiperButton>
          <SwiperButton swiperName="custom-next">Next &#8250;</SwiperButton>
        </div>
      </>
    );
  }
}
