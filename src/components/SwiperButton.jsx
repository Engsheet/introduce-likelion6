function SwiperButton({ swiperName, children }) {
  return (
    <button type="button" className={swiperName}>
      {children}
    </button>
  );
}

export default SwiperButton;
