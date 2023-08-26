import { Outlet } from "react-router-dom";
import Heading from "./Heading";

export default function RootLayout() {
  return (
    <>
      <Heading />
      <Outlet />
    </>
  );
}
