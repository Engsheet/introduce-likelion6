export default function Logo() {
  return (
    <div className="flex items-center gap-5 justify-center pt-12 pb-5 border-b-8 border-[#ffcc99]">
      <img
        className="w-10 bg-transparent"
        src="./../../public/logo.svg"
        alt=""
      />
      <h1 className="bg-transparent flex flex-col text-center text-2xl">
        LikeLion FrontEndSchool 6th
        <span className="text-5xl bg-transparent">INTRODUCE</span>
      </h1>
    </div>
  );
}
