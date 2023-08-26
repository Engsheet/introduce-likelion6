import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import CharacterList from "./views/CharacterList";
import CharacterDetails from "./views/CharacterDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout displaySideMenu={true} />}>
      <Route index element={<CharacterList />} />
      <Route path="character/:dataId" element={<CharacterDetails />}></Route>
    </Route>
  )
);

export default router;
