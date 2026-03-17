import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AuthLayout from "./components/authLayout/auth";
import AdminLayout from "./components/adminLayout/layout";
import AdminDashboard from "./pages/adminPage/daashboard";
import AdminFeatures from "./pages/adminPage/features";
import AdminOrder from "./pages/adminPage/order";
import AdminProduct from "./pages/adminPage/product";
import Shoppinglayout from "./components/shoppingLayout/layout";
import ShoppingHome from "./pages/shoppingPage/home";
import ShoppingAccount from "./pages/shoppingPage/account";
import ShoppingAccountCheckout from "./pages/shoppingPage/checkout";
import ShoppingListItems from "./pages/shoppingPage/listItems";

function App() {
  return (
    <div className="flex flex-col">
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="/auth" element={<Login />}></Route>
          <Route path="/auth" element={<Register />}></Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />}></Route>
          <Route path="features" element={<AdminFeatures />}></Route>
          <Route path="order" element={<AdminOrder />}></Route>
          <Route path="product" element={<AdminProduct />}></Route>
        </Route>
        <Route path="/shopping" element={<Shoppinglayout />}>
          <Route path="home" element={<ShoppingHome />}></Route>
          <Route path="account" element={<ShoppingAccount />}></Route>
          <Route path="checkout" element={<ShoppingAccountCheckout />}></Route>
          <Route path="list" element={<ShoppingListItems />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
