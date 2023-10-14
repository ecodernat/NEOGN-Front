import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import imagePaths from "./imagePaths";

const AppBar = ({ theme }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const stateLogin = useSelector ((state)=>state.login)
  return (
    <div
      className={`font-general-sans w-full h-[80px] justify-around items-center inline-flex ${
        theme === "dark"
          ? "dark:bg-neutral-950 border-t border-white border-opacity-20"
          : "bg-white border-t border-black border-opacity-20"
      }`}
    >
      <div className="w-full h-[80px] border-t border-black border-opacity-20 justify-around items-center inline-flex">
        <Link to={currentPath === "/" ? "/" : "/"}>
          <div className="flex-col justify-start items-center inline-flex">
            <img
              alt="Home"
              src={
                theme === "dark" && currentPath === "/"
                  ? imagePaths.Home.inactive
                  : theme === "dark"
                  ? imagePaths.Home.dark
                  : theme !== "dark" && currentPath === "/"
                  ? imagePaths.Home.active
                  : imagePaths.Home.inactive
              }
              className="w-6 h-6"
            />
            <div
              className={` text-xs font-medium ${
                theme === "dark" && currentPath === "/"
                  ? "text-red-500"
                  : theme === "dark"
                  ? "text-gray-300"
                  : theme !== "dark" && currentPath === "/"
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              Home
            </div>
          </div>
        </Link>
        <Link to="/Cart">
          <div className="flex-col justify-start items-center inline-flex">
            <img
              alt="MyCart"
              src={
                theme === "dark" && currentPath === "/Cart"
                  ? imagePaths.Cart.inactive
                  : theme === "dark"
                  ? imagePaths.Cart.dark
                  : theme !== "dark" && currentPath === "/Cart"
                  ? imagePaths.Cart.active
                  : imagePaths.Cart.inactive
              }
              className="w-6 h-6"
            />
            <div
              className={`text-xs font-medium ${
                theme === "dark" && currentPath === "/Cart"
                  ? "text-red-500"
                  : theme === "dark"
                  ? "text-gray-400"
                  : theme !== "dark" && currentPath === "/Cart"
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              Cart
            </div>
          </div>
        </Link>
        <Link to="/Search">
          <div className="flex-col justify-start items-center inline-flex">
            <img
              alt="Search"
              src={
                theme === "dark" && currentPath === "/Search"
                  ? imagePaths.Search.inactive
                  : theme === "dark"
                  ? imagePaths.Search.dark
                  : theme !== "dark" && currentPath === "/Search"
                  ? imagePaths.Search.active
                  : imagePaths.Search.inactive
              }
              className="w-6 h-6"
            />
            <div
              className={`text-xs font-medium ${
                theme === "dark" && currentPath === "/Search"
                  ? "text-red-500"
                  : theme === "dark"
                  ? "text-gray-400"
                  : theme !== "dark" && currentPath === "/Search"
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              Search
            </div>
          </div>
        </Link>
      { stateLogin.login && <Link to="/Wishlist">
          <div className="flex-col justify-start items-center inline-flex">
            <img
              alt="Wishlist"
              src={
                theme === "dark" && currentPath === "/Wishlist"
                  ? imagePaths.Wishlist.inactive
                  : theme === "dark"
                  ? imagePaths.Wishlist.dark
                  : theme !== "dark" && currentPath === "/Wishlist"
                  ? imagePaths.Wishlist.active
                  : imagePaths.Wishlist.inactive
              }
              className="w-6 h-6"
            />
            <div
              className={`text-xs font-medium ${
                theme === "dark" && currentPath === "/Wishlist"
                  ? "text-red-500"
                  : theme === "dark"
                  ? "text-gray-400"
                  : theme !== "dark" && currentPath === "/Wishlist"
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              Wishlist
            </div>
          </div>
        </Link>
        }

        <Link to="/Account">
          <div className="flex-col justify-start items-center inline-flex">
            <img
              alt="Account"
              src={
                theme === "dark" && currentPath === "/Account"
                  ? imagePaths.Account.inactive
                  : theme === "dark"
                  ? imagePaths.Account.dark
                  : theme !== "dark" && currentPath === "/Account"
                  ? imagePaths.Account.active
                  : imagePaths.Account.inactive
              }
              className="w-6 h-6"
            />
            <div
              className={`text-xs font-medium ${
                theme === "dark" && currentPath === "/Account"
                  ? "text-red-500"
                  : theme === "dark"
                  ? "text-gray-400"
                  : theme !== "dark" && currentPath === "/Account"
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              Account
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AppBar;
