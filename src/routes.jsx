import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import CharacterList from './views/CharacterList';
import CharacterDetails from './views/CharacterDetails';
import Slider from './components/Slider';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout displaySideMenu={true} />}>
      <Route index element={<Slider />} />
      <Route path="character/:dataId" element={<CharacterDetails />}></Route>
    </Route>
  )
);

export default router;
