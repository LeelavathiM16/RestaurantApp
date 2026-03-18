import { Navigate, Route, Routes } from "react-router";
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
// import NotFound from "./components/common/notFound";
import UnAuthPage from "./components/common/unAuthpage";
import CheckAuth from "./components/common/checkAuth";

function App() {
  const isAuthenticated = false;
  const user = {
    role: "admin",
    name: "leela",
  };
  return (
    <div className="flex flex-col">
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              user.role === "admin" ? (
                <Navigate to="admin/dashboard" />
              ) : (
                <Navigate to="shopping/home" />
              )
            ) : (
              <Navigate to="auth/login" />
            )
          }
        ></Route>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />}></Route>
          <Route path="features" element={<AdminFeatures />}></Route>
          <Route path="order" element={<AdminOrder />}></Route>
          <Route path="product" element={<AdminProduct />}></Route>
        </Route>
        <Route
          path="/shopping"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <Shoppinglayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome />}></Route>
          <Route path="account" element={<ShoppingAccount />}></Route>
          <Route path="checkout" element={<ShoppingAccountCheckout />}></Route>
          <Route path="list" element={<ShoppingListItems />}></Route>
        </Route>
        <Route path="/unAuthPage" element={<UnAuthPage />}></Route>
        {/* <Route path="*" element={<NotFound/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
