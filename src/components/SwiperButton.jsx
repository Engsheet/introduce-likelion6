import { useSwiper } from 'swiper/react';

function SwiperButton({ swiperName, children }) {
  const swiper = useSwiper();

  return (
    <button
      type="button"
      className={`text-xl hover:font-semibold ${swiperName} disabled:text-white`}
    >
      {children}
    </button>
  );
}

export default SwiperButton;
