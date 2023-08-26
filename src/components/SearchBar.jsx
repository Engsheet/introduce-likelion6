export default function SearchBar() {
  return (
    <div>
      <label htmlFor="SearchBar" className="sr-only">
        검색
      </label>
      <input
        type="search"
        placeholder="검색어를 입력해주세요"
        className="bg-gray-100 rounded-3xl bg-search bg-no-repeat bg-[center_left] focus:outline-none pl-10 py-2 w-80"
      />
    </div>
  );
}
