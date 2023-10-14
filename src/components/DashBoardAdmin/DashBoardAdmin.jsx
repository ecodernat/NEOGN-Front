import SideBarAdmin from "./SideBarAdmin";
import AsideBar from "./AsideBar";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const DashBoardAdmin = () => {
  const { pathname } = useLocation();

  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      {pathname === "/" && <Navigate to="/admin" />}
      <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-neutral-950 dark:border-gray-500 fixed left-0 right-0 top-0 z-50">
        <div className="flex flex-wrap justify-start items-center">
          <SideBarAdmin />
          <div className="flex items-center">
            <form
              action="#"
              method="GET"
              className="hidden md:block md:pl-[240px]"
            >
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative md:w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
        </div>
      </nav>

      <div className="p-4 md:ml-64 h-full w-auto pt-20">
        <AsideBar />

        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardAdmin;
