import { useSwiper } from 'swiper/react';

function SwiperButton({ swiperName, children }) {
  const swiper = useSwiper();

  return (
    <button type="button" className={swiperName}>
      {children}
    </button>
  );
}

export default SwiperButton;
