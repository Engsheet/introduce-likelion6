import { Link } from 'react-router-dom';

export default function MenuBar({ link, imgsrc, children }) {
  return (
    <Link to={link}>
      <div className="flex items-center font-bold py-1 px-7 border border-gray-500 rounded-3xl hover:bg-[#fdf5e6] hover:border-[#fdf5e6]">
        <img src={imgsrc} alt={children} />
        <p>{children}</p>
      </div>
    </Link>
  );
}
