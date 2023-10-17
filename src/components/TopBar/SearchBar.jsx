import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";



const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const products = useSelector((state) => state.products.products);
  const [showSearch, setShowSearch] = useState(false);

  const searcher = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
    setShowSearch(searchTerm !== "");
  };

  const filteredProducts = products.filter((product) => {
    const productName = product.name.toLowerCase();
    return productName.includes(search);
  });

  const toggleMenu = () => {
    setIsFocused(!isFocused);
    setSearch("");
    setShowSearch(false);
  };

  const handleClose = () => {
    setIsFocused(false);
    setSearch("");
    setShowSearch(false);
  };

  return (
    <div className="lg:flex lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 48 48"
        className="mr-4 text-gray-600 cursor-pointer hover:text-blue-600 backdrop-blur-md "
        onClick={toggleMenu}
      >
        <path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z" />
      </svg>
      

      {isFocused && (
        <div className="fixed top-0 left-10 w-full h-full bg-gray-200 z-50 translate-x-0 ">
          <div className="absolute top-0 right-12 h-full bg-gray-200 w-96 shadow-lg">
            <div className={`relative w-full ml-1  z-900${isFocused ? " bg-zinc-90" : ""}`}>
              <div className="w-full p-7 flex items-center justify-between">
                <div className="flex items-center">
                <button
                  className="mr-2 text-gray-600 cursor-pointer hover:text-blue-600 "
                  onClick={handleClose}
                >
                 <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 48 48 ">
                 <path d="M24 6l-18 18 18 18 2.83-2.83-15.17-15.17 15.17-15.17z"/>
                 
                 </svg>
                </button>
                  <input
                    type="text"
                    className="mt-0 z-300 bg-transparent rounded-full border border-black border-opacity-100 flex-1 text-gray-500 focus:outline-none focus:border-blue-100 focus:ring px-14 transition focus:border-black focus:ring-black duration-300 ease-in-out focus:ring-blue-250 ease-in-out shadow-sm ring ring-blue-200 shadow-md"
                    placeholder="Search anything"
                    value={search}
                    onChange={searcher}
                  />
                  
                </div>
                
              </div>

              {showSearch && search !== "" && (
                <ul className="absolute z-40 w-full bg-white border border-gray-200 shadow-lg rounded-md mt-2">
                  {filteredProducts.length === 0 ? (
                    <li className="py-2 px-4 text-red-500 bg-gray-200">Product not found!</li>
                  ) : (
                    filteredProducts.map((product) => (
                      <li
                        key={product.id}
                        className="py-2 px-4 hover:bg-gray-100 flex items-center"
                      >
                        <NavLink to={`/detail/${product.id}`} className="flex items-center w-full">
                          <img
                            src={product.image_url[0]}
                            className="w-12 h-12 object-contain rounded"
                            alt=""
                          />
                          <p className="ml-4 text-gray-800 truncate w-[calc(100% - 60px)]">
                            {product.name}
                          </p>
                        </NavLink>
                      </li>
                    ))
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default SearchBar;
