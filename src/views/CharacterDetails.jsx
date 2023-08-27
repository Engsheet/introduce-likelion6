import Spinner from '@/components/Spinner';
import useDataDetails from '@/hooks/useDataDetails';
import { getPbImageURL } from '@/utils/getImageURL';
import { useState } from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

export default function CharacterDetails() {
  const { dataId } = useParams();
  const { isLoading, data } = useDataDetails(dataId);

  /* -------------------------------------------------------------------------- */

  const [dataForm, setDataForm] = useState(null);

  useEffect(() => {
    if (!isLoading && data) {
      setDataForm({
        name: data.name,
        nickname: data.price,
        details: data.details,
        image: data.image,
      });
    }
  }, [isLoading, data]);

  /* -------------------------------------------------------------------------- */

  if (isLoading) {
    return <Spinner size={120} />;
  }

  if (data) {
    return (
      <div className="w-full h-[calc(100vh-27px)] relative">
        <Helmet>
          <title>Like Lion FE 6th - {data.name}</title>
        </Helmet>
        <div className="bottom-0 right-0 flex basis-auto bg-gradient-to-tr from-orange-500 from-40% to-red-300 text-white rounded-tl-3xl w-3/4 h-2/3">
          <img
            className="relative w-1/2 pl-6 pr-6 object-contain bottom-1/4 mx-auto"
            src={getPbImageURL(data, 'image')}
            alt=""
          />
          <dl className="w-1/2 pl-4 pr-8 mt-5 flex flex-col gap-4">
            <dt className="text-5xl font-bold text-amber-100">{data.name}</dt>
            <dd className="ml-1 text-2xl font-semibold">{data.nickname}</dd>
            <dd className="ml-1 mt-6 text-base font-light">{data.details}</dd>
          </dl>
        </div>
      </div>
    );
  }
}
