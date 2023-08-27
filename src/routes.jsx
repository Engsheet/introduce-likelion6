import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import CharacterList from './views/CharacterList';
import AddList from './layout/AddList';
import RootLayout from './layout/RootLayout';
import CharacterDetails from './views/CharacterDetails';
import Home from './views/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout displaySideMenu={true} />}>
      <Route index element={<Home />} />
      <Route path="introduce" element={<CharacterList />} />
      <Route path="character/:dataId" element={<CharacterDetails />}></Route>
      <Route path="addList" element={<AddList />} />
    </Route>
  )
);

export default router;
