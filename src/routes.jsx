import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(
  // 유틸리티 함수
  createRoutesFromElements(
    // <Route path="/" element={<RootLayout />}>
    //   <Route index element={<Home />} />
    //   <Route path="signin" element={<SignIn />} />
    // </Route>
  )
);

export default router;
