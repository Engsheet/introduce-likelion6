import MenuBar from '@/components/MenuBar';
import Logo from '@c/Logo';
import { Link } from 'react-router-dom';
import add from '../assets/add.svg';
import search from '../assets/search.svg';

export default function Heading() {
  return (
    <header>
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex flex-row gap-10 items-center justify-between my-6">
        <MenuBar link="/introduce" imgsrc={search}>
          구경하기
        </MenuBar>
        <MenuBar link="/addList" imgsrc={add}>
          추가하기
        </MenuBar>
      </div>
    </header>
  );
}
