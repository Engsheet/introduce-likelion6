import Spinner from '@/components/Spinner';
import useDataList from '@/hooks/useDataList';
import { getPbImageURL } from '@/utils/getImageURL';
import { Link } from 'react-router-dom';

export default function CharacterList() {
  const { isLoading, data } = useDataList();

  if (isLoading) {
    return <Spinner size={160} />;
  }

  if (data) {
    return (
      <>
        <div>
          <h1 className="text-indigo-950 text-2xl mb-5">Characters</h1>
          <ul className="grid grid-cols-3">
            {data.items.map((item) => (
              <li key={item.id} className="justify-self-center">
                <Link to={`/character/${item.id}`}>
                  <figure>
                    <img
                      className="h-[160px] object-cover mx-auto"
                      src={getPbImageURL(item, 'image')}
                      alt=""
                    />
                    <figcaption className="flex flex-col gap-1 items-center mt-2">
                      <span>
                        {item.name}({item.nickname})
                      </span>
                    </figcaption>
                  </figure>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
