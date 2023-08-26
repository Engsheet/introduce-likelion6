import { useSwiper } from 'swiper/react';

function SwiperButton({ swiperName, children, onClick }) {
  const swiper = useSwiper();

  return (
    <button type="button" className={swiperName} onClick={onClick}>
      {children}
    </button>
  );
}

export default SwiperButton;
