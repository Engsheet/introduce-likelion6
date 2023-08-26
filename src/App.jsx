import Heading from '@l/Heading';
import Slider from './components/Slider';
import IntroduceList from './layout/IntroduceList';

function App() {
  return (
    <>
      <div className="max-w-[1024px] h-fit transform translate-x-1/2 -translate-y-1/2 absolute top-1/2">
        <Heading />
        <IntroduceList />
        <Slider />
      </div>
    </>
  );
}

export default App;
