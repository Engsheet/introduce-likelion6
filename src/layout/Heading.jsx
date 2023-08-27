import AddButton from '@/components/AddButton';
import Logo from '@c/Logo';
import SearchBar from '@c/SearchBar';
import useDataList from '@/hooks/useDataList';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Heading() {
  const { data } = useDataList();
  const [search, setSearch] = useState('');

  if (data) {
    const aa = data.items.map((item) => {
      if (item.name === search) {
        console.log(item.name);
      }
    });
  }

  const getValue = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header className="flex flex-row gap-10 items-center justify-between my-16 mx-4">
      <Link to="/">
        <Logo />
      </Link>
      <SearchBar onChange={getValue} />
      <AddButton />
    </header>
  );
}
