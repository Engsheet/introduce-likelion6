import { Link } from 'react-router-dom';

export default function SearchBar({ onChange }) {
  return (
    <Link to="/introduce">
      <div className="bg-gray-300 hover:bg-orange-300 text-white font-bold py-2 px-4 border-b-4 border-gray-500 hover:border-orange-500 rounded">
        {/* <label htmlFor="SearchBar" className="sr-only">
        검색
      </label>
      <input
        type="search"
        onChange={onChange}
        placeholder="검색어를 입력해주세요"
        className="bg-gray-100 rounded-3xl bg-search bg-no-repeat bg-[center_left] focus:outline-none pl-10 py-2 w-80"
      /> */}
        🔎 구경하기
      </div>
    </Link>
  );
}
