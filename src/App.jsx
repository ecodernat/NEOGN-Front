import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AuthProvider } from "./components/Account/Context/AuthContext";

import AppBar from "./components/AppBar/AppBar";
import Home from "./views/Home";
import Cart from "./views/Cart";
import Search from "./views/Search";
import Wishlist from "./views/Wishlist";
import Account from "./views/Account";
import TopBar from "./components/TopBar/TopBar";
import Detail from "./views/Detail";
import Categories from "./views/Categories";
import AboutUs from "./views/AboutUs";
import DashBoardAdmin from "./components/DashBoardAdmin/DashBoardAdmin";
import EditedProduct from "./components/DashBoardAdmin/EditedProduct";
import ManageStock from "./components/DashBoardAdmin/ManageStock";
import ManageUser from "./components/DashBoardAdmin/ManageUser";
import ProductsToModify from "./components/DashBoardAdmin/ProductToModify";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import PurchaseHistory from "./components/DashBoardAdmin/PurchaseHistory";
import ContactUs from "./views/ContactUs";
import SignUp from "./components/Account/SignUp";
import EditProfile from "./components/DashboardUser/EditProfile";
import OrderHistory from "./components/DashboardUser/OrderHistory";
import WishlistAccount from "./components/DashboardUser/WishlistAccount";
import OrderDetails from "./components/DashboardUser/Orders/OrderDetails"

const App = () => {
  const [theme, setTheme] = useState("light");
  const [Desktop, setDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      setDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const location = useLocation();

  const isTopBarHidden =
    location.pathname === "/Account" ||
    location.pathname.startsWith("/Account/EditProfile") ||
    location.pathname.startsWith("/Account/Orders") ||
    location.pathname.startsWith("/Account/Wishlist") ||
    location.pathname.startsWith("/Account/SignUp");

  return (
    <AuthProvider>
      <div>
        {!isTopBarHidden && <TopBar />}
        <Routes>
          {/* Dashboard Admin */}
          <Route path="/admin" element={<DashBoardAdmin />}>
            <Route path="purchaseHistory" element={<PurchaseHistory />} />
            <Route path="createProduct" element={<CreateProduct />} />
            <Route path="productsToModify" element={<ProductsToModify />} />
            <Route path="productsTomodify/:id" element={<EditedProduct />} />
            <Route path="manageStock" element={<ManageStock />} />
            <Route path="manageUser" element={<ManageUser />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route
            path="/Account"
            element={<Account handleThemeSwitch={handleThemeSwitch} />}
          />
          <Route path="/Account/SignUp" element={<SignUp />} />
          {/* Dashboard User */}
          <Route path="/Account/EditProfile" element={<EditProfile />} />
          <Route path="/Account/Orders" element={<OrderHistory />} />
          <Route path="/Account/Orders/:id" element={<OrderDetails />} />
          <Route path="/Account/Wishlist" element={<WishlistAccount />} />
        </Routes>
        <div
          className={` fixed bottom-0 left-0 w-full z-[1000] ${
            Desktop ? "hidden" : ""
          }`}
        >
          <AppBar theme={theme} />
        </div>
      </div>
      <style>
        {`
          .kommunicate-custom-iframe {
            bottom: 80px ; /* Ajusta este valor según tu preferencia */
          }
        `}
      </style>
    </AuthProvider>
  );
};

export default App;
