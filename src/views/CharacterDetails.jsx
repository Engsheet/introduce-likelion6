import Spinner from '@/components/Spinner';
import useDataDetails from '@/hooks/useDataDetails';
import { getPbImageURL } from '@/utils/getImageURL';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

export default function CharacterDetails() {
  const { dataId } = useParams();
  const { isLoading, data } = useDataDetails(dataId);

  /* -------------------------------------------------------------------------- */

  const [, setData] = useState(null);

  useEffect(() => {
    if (!isLoading && data) {
      setData({
        name: data.name,
        nickname: data.price,
        details: data.details,
        image: data.image,
      });
    }
  }, [isLoading, data]);

  /* -------------------------------------------------------------------------- */

  //
  if (isLoading) {
    return <Spinner size={120} />;
  }

  // ${setColor(dataForm.items.findIndex(item => { item.id == dataId; }))}
  if (data) {
    return (
      <div className="w-full relative h-[50vh] rounded-3xl overflow-hidden">
        <Helmet>
          <title>Like Lion FE 6th - {data.name}</title>
        </Helmet>
        <img
          className="absolute inline-block w-[45%] mx-8 px-6 py-6 z-50"
          src={getPbImageURL(data, 'image')}
          alt=""
        />
        <div className="absolute bottom-0 right-0 flex justify-end rounded-tl-3xl w-2/3 h-2/3 bg-grad-details z-0">
          <dl className="w-3/4 pl-4 pr-8 mt-12 flex flex-col gap-4">
            <dt className="text-5xl font-bold">{data.name}</dt>
            <dd className="ml-1 text-2xl font-semibold">{data.nickname}</dd>
            <dd className="ml-1 mt-6 text-base font-light">{data.details}</dd>
          </dl>
        </div>
      </div>
    );
  }
}
