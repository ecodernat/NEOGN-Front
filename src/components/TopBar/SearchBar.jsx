import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Lupa from "../../utils/images/BasicIcons/Lupa.png"

const SearchBar = ({ onFocusChange }) => {
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const products = useSelector((state) => state.products.products);

  const searcher = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
    setShowSearch(searchTerm !== "")
  };

  const filteredProducts = products.filter((product) => {
    const productName = product.name.toLowerCase();
    return productName.includes(search);
  })

  useEffect(() => {
    setShowSearch(isFocused && search !== "");
    onFocusChange(isFocused);
  }, [isFocused, search, onFocusChange]);

  const handleAlert = () => {
    if (filteredProducts.length === 0) {
      alert("Product not found!");
    } else {
      setIsFocused(!isFocused);
      setSearch("");
    }
  };

  return (
    <div
      className={`relative w-full lg:w-[1000px] ml-2 pr-2 z-900${
        isFocused ? " bg-zinc-80" : ""
      }`}
      onBlur={() => setIsFocused(false)}
    >
      <div className="w-full p-2 flex items-center justify-end">
        <input
          type="text"
          className={`placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search  ${
            isFocused ? " ring ring-blue-200 shadow-md" : "hidden"
          }`} 
          placeholder="Search..."
          value={search}
          onChange={searcher}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
           <img
          src={Lupa}
          alt="Icono de búsqueda"
          width="30"      
          height="30"
          className="mr-2 cursor-pointer"
          onClick={handleAlert}
        />  
      </div>
      {showSearch && search !== ""  && (
        <ul className="absolute z-40 w-full bg-white border border-gray-200 shadow-lg rounded-md mt-2">
          {filteredProducts.length === 0 ? (
            <li className="py-2 px-4 text-red-500">Product not found!</li>
          ) : (
            filteredProducts.map((product) => (
              <li
                key={product.id}
                className="py-2 px-4 hover:bg-gray-100 flex items-center"
              >
                 <NavLink
                  to={`/detail/${product.id}`}
                  className="flex items-center w-full"
                >
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
  );
};

export default SearchBar;
