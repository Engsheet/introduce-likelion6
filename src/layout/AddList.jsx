import mavely from '@/assets/마동석.jpg';
import PocketBase from 'pocketbase';
import { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';

export default function AddList() {
  const [loading, setLoading] = useState(false);
  const pb = new PocketBase('https://characters-db.pockethost.io');
  const navigate = useNavigate();

  const nameRef = useRef(null);
  const nickNameRef = useRef(null);
  const detailsRef = useRef(null);
  const photoRef = useRef(null);
  const uploadPhotoRef = useRef(null);

  const handleCharacterAdd = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', nameRef.current.value);
    formData.append('nickname', nickNameRef.current.value);
    formData.append('details', detailsRef.current.value);
    formData.append('image', photoRef.current.files[0]);

    setLoading(true);

    try {
      await pb.collection('characters').create(formData);
      toast.success('등록되었습니다 🦁', {
        position: 'top-center',
        ariaProps: {
          role: 'alert',
          'aria-live': 'polite',
        },
      });

      setTimeout(() => {
        navigate('/introduce');
      }, 1000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDisplayUploadPhoto = (e) => {
    const photoFile = e.target.files[0];
    const photoUrl = URL.createObjectURL(photoFile);
    uploadPhotoRef.current.setAttribute('src', photoUrl);
  };

  return (
    <div className="border p-10 border-gray-200 rounded-3xl text-xl">
      {loading ? (
        <Spinner />
      ) : (
        <form
          className="flex flex-col gap-4"
          encType="multipart/form-data"
          onSubmit={handleCharacterAdd}
        >
          <div>
            <label className="mr-10" htmlFor="name">
              이름
            </label>
            <input
              ref={nameRef}
              className="border border-gray-200 rounded-lg p-1"
              type="text"
              name="name"
              id="name"
              placeholder="마동석"
              required
            />
          </div>
          <div>
            <label htmlFor="nickname" className="mr-6">
              닉네임
            </label>
            <input
              ref={nickNameRef}
              className="border border-gray-200 rounded-lg p-1"
              type="text"
              name="nickname"
              id="nickname"
              placeholder="신나게 터져볼래"
              required
            />
          </div>
          <div>
            <label className="mr-10" htmlFor="details">
              설명
            </label>
            <textarea
              ref={detailsRef}
              className="border border-gray-200 rounded-lg p-1 w-full"
              name="details"
              id="details"
              cols="30"
              rows="5"
              minLength={10}
              maxLength={200}
              placeholder="혼자야? 어 나 싱글이야"
              required
            ></textarea>
          </div>
          <div className="relative flex flex-col gap-2 my-4">
            <label htmlFor="photo">사진</label>
            <input
              ref={photoRef}
              onChange={handleDisplayUploadPhoto}
              className="cursor-pointer absolute w-full h-full opacity-0"
              type="file"
              name="photo"
              id="photo"
              accept="*.jpg,*.png,*.webp,*.avif"
              multiple
            />
            <div className="h-[140px] bg-[#fdf5e6] p-2 rounded-lg">
              <img
                ref={uploadPhotoRef}
                className="h-[124px] border border-slate-400/50"
                src={mavely}
                alt="마블리"
              />
            </div>
          </div>
          <div className="flex gap-10 justify-center">
            <button className="hover:font-semibold" type="submit">
              등록
            </button>
            <Link to="/introduce">
              <button className="hover:font-semibold" type="reset">
                취소
              </button>
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}
