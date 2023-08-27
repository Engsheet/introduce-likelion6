import { Outlet } from "react-router-dom";
import Heading from "./Heading";

export default function RootLayout() {
  return (
    <div className="max-w-screen-lg m-auto">
      <Heading />
      <Outlet />
    </div>
  );
}
