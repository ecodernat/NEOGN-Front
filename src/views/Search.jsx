import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LuSettings2 } from "react-icons/lu";
import CategoriesFilter from "../components/CategoriesForFilters";
import SearchCard from "../components/Cards/SearchCard";
import FilterSortRange from "../components/FilterSortRange";
import fetchProducts from "../redux/actions/getProducts";
import getFilter from "../redux/actions/getFilter";
import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/slices/WishlistSlice";

const Search = () => {
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.category);
  const productFiltered = useSelector((state) => state.filter);
  const loginState = useSelector((state) => state.login);

  const [showFilter, setShowFilter] = useState(false);
  const [addedProducts, setAddedProducts] = useState([]);

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

  useEffect(() => {
    if (!productFiltered.filterResult.results) {
      dispatch(getFilter({ category: "Monitors" }));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="font-jakarta-sans flex-grow w-auto flex justify-between items-center mx-10 my-6">
        <h1 className="text-stone-900 text-[18px] font-bold tracking-wide">
          By Category
        </h1>
        <button onClick={toFilter}>
          <LuSettings2 className="text-black-500 text-[30px] font-semibold" />
        </button>
      </div>
      {showFilter && <FilterSortRange />}
      <div className="w-auto h-auto m-6">
        <CategoriesFilter />
      </div>
      <div className="font-jakarta-sans w-auto flex justify-between items-center mx-10 my-6">
        <h1 className="text-stone-900 text-[18px] font-bold tracking-wide">
          Products
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-1 justify-center mx-3 border font-bold flex-grow">
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
  );
};

export default Search;
