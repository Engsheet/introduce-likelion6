import useDataList from '@/hooks/useDataList';
import { getPbImageURL } from '@/utils/getImageURL';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperButton from './SwiperButton';

export default function Slider() {
  const { data } = useDataList();

  const arr = [
    'bg-grad1',
    'bg-grad2',
    'bg-grad3',
    'bg-grad4',
    'bg-grad5',
    'bg-grad6',
  ];

  function randomColor() {
    const random = Math.round(Math.random() * 5);

    return arr[random];
  }

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
          style={{
            border: '1px solid 	#DCDCDC',
            padding: '60px',
            borderRadius: '30px',
          }}
        >
          {data.items.map((item) => (
            <SwiperSlide
              key={item.id}
              style={{
                paddingTop: '200px',
              }}
            >
              <Link to={`/character/${item.id}`}>
                <div
                  className={`relative p-7 rounded-2xl m-auto flex flex-col gap-3 ${randomColor()}`}
                >
                  <h2 className="text-3xl font-bold">{item.name}</h2>
                  <h3 className="text-xl font-semibold">{item.nickname}</h3>
                  <img
                    className={`absolute left-1/2 top-4 -translate-x-1/2 -translate-y-full h-40 px-3`}
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
