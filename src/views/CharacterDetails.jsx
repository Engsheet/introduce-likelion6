import Spinner from "@/components/Spinner";
import useDataDetails from "@/hooks/useDataDetails";
import { getPbImageURL } from "@/utils/getImageURL";
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

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
      <>
        <Helmet>
          <title>Like Lion FE 6th - {data.name}</title>
        </Helmet>
        <div className="flex bg-gradient-to-tr from-orange-500 to-white text-white rounded-tl-3xl w-4/5 h-[500px]">
          <img className="h-[160px] object-cover mx-auto" src={getPbImageURL(data, "image")} alt="" />
          <div>
            <dl className="flex flex-col mt-5">
              <dt className="text-3xl font-bold">{data.name}</dt>
              <dd>{data.nickname}</dd>
              <dd>{data.details}</dd>
            </dl>
          </div>
        </div>
      </>
    );
  }
}
