import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const SideBarAdmin = () => {
  const [open, setOpen] = useState(false);
  const [isMobileWidth, setIsMobileWidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileWidth(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobileWidth && (
        <div className="bg-none py-1">
          <button className="ml-4" onClick={() => setOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <div
            className={`${
              !open && "hidden"
            } bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}
            onClick={() => setOpen(false)}
          ></div>

          <div
            className={`${
              open ? "w-80" : "w-0"
            } bg-white min-h-screen fixed top-0 left-0 transition-all duration-300`}
          >
            <div className={`${!open && "hidden"} pt-3`}>
              {/* toggle button */}

              <button
                className="ml-4 text-gray-500 mb-14"
                onClick={() => setOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* toggle button */}

              {/* menu */}
              <ul className="space-y-2 px-4">
                <li>
                  <NavLink
                    to="purchaseHistory"
                    className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <img
                      className="w-[30px] h-[30px]"
                      src="https://cdn-icons-png.flaticon.com/512/411/411745.png"
                    />
                    <span className="ml-3">Purchase History</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="createProduct"
                    className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <img
                      className="w-[30px] h-[30px]"
                      src="https://cdn-icons-png.flaticon.com/512/5258/5258076.png"
                    />
                    <span className="ml-3">Create Product</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="productsToModify"
                    className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <img
                      className="w-[30px] h-[30px]"
                      src="https://cdn-icons-png.flaticon.com/512/683/683139.png"
                    />
                    <span className="ml-3">Modify Product</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="manageStock"
                    className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <img
                      className="w-[30px] h-[30px]"
                      src="https://cdn-icons-png.flaticon.com/512/5164/5164023.png"
                    />
                    <span className="ml-3">Manage Stock</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="manageUser"
                    className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <img
                      className="w-[30px] h-[30px]"
                      src="https://cdn-icons-png.flaticon.com/512/166/166256.png"
                    />
                    <span className="ml-3">Manage User</span>
                  </NavLink>
                </li>
              </ul>
              {/* menu */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBarAdmin;
