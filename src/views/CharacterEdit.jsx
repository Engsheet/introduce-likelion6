import Spinner from '@/components/Spinner';
import useDataDetails from '@/hooks/useDataDetails';
import { useDelete } from '@/hooks/useDelete';
import useUpdate from '@/hooks/useUpdate';
import debounce from '@/utils/debounce';
import { useEffect, useId, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';

const initialFormState = {
  name: '',
  nickname: '',
  details: '',
  // image: ""
};

export default function CharacterEdit() {
  const nameId = useId();
  const nicknameId = useId();
  const detailsId = useId();

  const navigate = useNavigate();
  const { dataId } = useParams();
  const { isLoading, data } = useDataDetails(dataId);

  const [formState, setFormState] = useState(initialFormState);

  const updateCharacter = useUpdate();
  const deleteCharacter = useDelete();

  useEffect(() => {
    if (!isLoading && data) {
      setFormState({
        name: data.name,
        nickname: data.nickname,
        details: data.details,
      });
    }
  }, [isLoading, data]);

  const handleChangeInput = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const handleDebounceChangeInput = debounce(handleChangeInput, 500);

  const handleEditCharacter = (e) => {
    e.preventDefault();

    updateCharacter(dataId, formState)
      .then(() => navigate(`/character/${data.id}`))
      .catch((error) => console.error(error));
  };

  const handleDeleteCharacter = () => {
    const userConfirm = confirm('정말로 삭제하시겠어요?');

    if (userConfirm) {
      deleteCharacter(dataId)
        .then((response) => {
          console.log(response);
          navigate('/introduce');
        })
        .catch((error) => console.error(error));
    }
  };

  if (isLoading) {
    return <Spinner size={120} />;
  }

  if (data) {
    return (
      <>
        <Helmet>
          <title>Like Lion FE 6th - {formState.name}(Edit)</title>
        </Helmet>
        <div className="border p-10 border-gray-200 rounded-3xl text-xl">
          {/* <p className="absolute top-1/2 left-[38%] border-2 border-[#ffcc99] w-56"></p> */}
          <div className="relative w-full h-24">
            <h2 className="absolute -top-5 left-1/2 -translate-x-1/2 text-3xl mb-10 flex flex-col bg-white px-5">
              정보 수정
              <span className="text-xl block m-auto">{formState.name}</span>
            </h2>
            <p className="border-2 border-[#ffcc99] m-auto w-80"></p>
          </div>
          <form
            onSubmit={handleEditCharacter}
            className="flex flex-col gap-4"
            encType="multipart/form-data"
          >
            <div>
              <label htmlFor={nameId}>이름</label>
              <input
                className="ml-10 border border-gray-200 rounded-lg p-1"
                type="text"
                name="name"
                id={nameId}
                defaultValue={formState.name}
                onChange={handleDebounceChangeInput}
              />
            </div>
            <div>
              <label htmlFor={nicknameId}>닉네임</label>
              <input
                className="ml-6 border border-gray-200 rounded-lg p-1"
                type="text"
                name="nickname"
                id={nicknameId}
                defaultValue={formState.nickname}
                onChange={handleDebounceChangeInput}
              />
            </div>
            <div>
              <label htmlFor={detailsId}>설명</label>
              <textarea
                className="border border-gray-200 rounded-lg p-1 w-full"
                name="details"
                id="details"
                cols="30"
                rows="5"
                minLength={10}
                maxLength={200}
                defaultValue={formState.details}
                onChange={handleDebounceChangeInput}
                required
              ></textarea>
            </div>
            <div className="flex gap-10 justify-center">
              <button className="hover:font-semibold" type="submit">
                수정
              </button>
              <button
                className="hover:font-semibold"
                type="button"
                onClick={handleDeleteCharacter}
              >
                삭제
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
