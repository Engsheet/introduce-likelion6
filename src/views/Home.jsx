import { Helmet } from 'react-helmet-async';
import lionLogo from '/src/assets/lionLogo.png';

function Home() {
  return (
    <div className="flex flex-col items-center gap-3 border p-20 border-gray-200 rounded-3xl">
      <Helmet>
        <title>Like Lion FE 6th</title>
      </Helmet>
      <img className="w-60 bg-transparent" src={lionLogo} alt="" />
      <h2 className="text-2xl">프론트엔드스쿨 6기를 소개합니다 ☺️</h2>
      <p>없으신 분들은 추가해주세요</p>
    </div>
  );
}

export default Home;
