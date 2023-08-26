import Logo from '@c/Logo';
import MenuButton from '@c/MenuButton';
import SearchBar from '@c/SearchBar';

export default function Heading() {
  return (
    <header className="flex flex-row gap-10 items-center justify-between mb-8">
      <Logo />
      <SearchBar />
      <MenuButton />
    </header>
  );
}
