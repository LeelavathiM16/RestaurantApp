import { Outlet } from "react-router";
import ShoppingHeader from "./header";

function Shoppinglayout() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <ShoppingHeader />
      <div className="flex flex-col w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Shoppinglayout;
