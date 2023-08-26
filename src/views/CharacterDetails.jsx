import useDataDetails from "@/hooks/useDataDetails";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

export default function CharacterDetails() {
  // const { dataId } = useParams();
  // const { isLoading, data } = useDataDetails(dataId);

  return (
    <>
      <Helmet>
        <title>Like Lion FE 6th - </title>
      </Helmet>
      <dl className="grid grid-rows-3 grid-cols-2 mt-5 bg-gradient-to-tr from-orange-500 to-white text-white rounded-tl-3xl w-4/5 h-[500px]">
        <dt className="text-3xl font-bold">슬비쌤</dt>
        <dd>
          <img src="/" alt="슬비쌤 이미지" />
        </dd>
        <dd>슬빛</dd>
        <dd>올바르고 의미있는 구조 설계, 놀랍고 재미있는 레이아웃, 멋진 스타일링을 가르쳐주신 6기의 빛!</dd>
      </dl>
    </>
  );
}
