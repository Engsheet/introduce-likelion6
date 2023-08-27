import lionLogo from '/src/assets/lionLogo.png';

function Home() {
  return (
    <div className="flex flex-col items-center gap-3">
      <img className="w-52" src={lionLogo} alt="" />
      <h2>프론트엔드스쿨 6기를 소개합니다 ☺️</h2>
      <p>없으신 분들은 추가해주세요</p>
    </div>
  );
}

export default Home;
