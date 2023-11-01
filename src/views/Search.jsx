import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LuSettings2 } from "react-icons/lu";
import CategoriesFilter from "../components/CategoriesForFilters";
import SearchCard from "../components/Cards/SearchCard";
import FilterSortRange from "../components/FilterSortRange";
import getFilter from "../redux/actions/getFilter";
import {addToWishlist} from "../redux/slices/WishlistSlice";

const Search = () => {
  const dispatch = useDispatch();
  const productFiltered = useSelector((state) => state.filter);
  const [showFilter, setShowFilter] = useState(false);
  const [addedProducts, setAddedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const toFilter = () => {
    setShowFilter(!showFilter);
  };

  const toggleWishlist = (productId) => {
    const product = productFiltered.filterResult.results.find(
      (product) => product.id === productId
    );
    if (product) {
      if (addedProducts.some((p) => p.id === product.id)) {
        return;
      }
      dispatch(addToWishlist(product));
      setAddedProducts([...addedProducts, product]);
    }
  };

  const handleSelection = (category) => {
    setSelectCategory(category);

    // Verificar si el estado de getFilter está vacío
    if (isEmpty(getFilterState)) {
      dispatch(getFilter({ category: category }));
    }
  };

  // La función isEmpty puede ser una función personalizada que verifica si el estado está vacío
  // Por ejemplo, podrías definirla así:
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  useEffect(() => {
    // carga por default los monitores
    if(!productFiltered.filterResult.results)
    dispatch(getFilter({ category: "Monitors" }));
  }, []);

  return (
    <div className="h-full pb-32 ">
      <div className="font-jakarta-sans w-auto   flex justify-between items-center mx-1 my-6">
        <h1 className="absolute text-stone-900 text-[18px] font-bold tracking-wide pl-6">
          By Category
        </h1>
        {/* <button onClick={toFilter}>
          <LuSettings2 className="text-black-500 text-[30px] font-semibold" />
        </button> */}
                      <div className="relative w-[400px]  overflow-hidden [font-family:'Roboto-Regular',Helvetica] font-normal text-oil-11 text-[16px] tracking-[0] leading-[normal]">
                <input
                  type="checkbox"
                  className="peer absolute top-0 inset-x-80 w-10 h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className=" h-12 w-full pl-5 flex items-center">
                  <h1 className=""></h1>
                </div>
                <div className="absolute top-3 right-3  transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                <button onClick={toFilter}>
          <LuSettings2 className="text-black-500 text-[30px] font-semibold" />
        </button>
                </div>

                <div className="content bg-gray-100 rounded-[12px] overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-[400px]">
                  <div className="">
                  <FilterSortRange />
                  </div>
                </div>
              </div>
      </div>

      <div className="w-auto h-auto m-6">
        <CategoriesFilter />
      </div>
      <div className="font-jakarta-sans w-auto flex justify-between items-center mx-10 my-6">
        <h1 className="text-stone-900 text-[18px] font-bold tracking-wide">
          Products
        </h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className=" w-auto grid grid-cols-1 gap-1 justify-center mx-3 border font-bold">
          {Array.isArray(productFiltered.filterResult.results) ? (
            productFiltered.filterResult.results.map((product) => (
              <SearchCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image_url}
                description={product.description}
                smallCard={true}
                toggleWishlist={toggleWishlist}
              />
            ))
          ) : (
            <>
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default Search;
