import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Slider from './components/Slider';
import AddList from './layout/AddList';
import RootLayout from './layout/RootLayout';
import CharacterDetails from './views/CharacterDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout displaySideMenu={true} />}>
      <Route index element={<Slider />} />
      <Route path="character/:dataId" element={<CharacterDetails />}></Route>
      <Route path="addList" element={<AddList />} />
    </Route>
  )
);

export default router;
