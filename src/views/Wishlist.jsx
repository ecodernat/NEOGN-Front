import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Back from "../utils/images/BasicIcons/backIcon.png";
import WishlistCard from "../components/Cards/WishlistCard";
import { removeFromWishlist } from "../redux/slices/userSlice";


const Wishlist = () => {
  const dispatch = useDispatch();

  const user = useSelector ((state)=>state.user)
  const wishlist = user.wishlist
  
  
  
  const handleRemoveFromWishlist = (productId) => {
    console.log("id", productId, id)
    dispatch(removeFromWishlist({ id }));
    alert("Item removed");
  };

  if (!user.id) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center mt-[-100px] gap-6">
      <h1 className="text-[24px] font-semibold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white flex justify-center">
        Welcome to your Wishlist! 😊
      </h1>
      <p className="text-gray-900 dark:text-white text-center">
        To start saving your favorite products, please log in.
      </p>
      <Link to="/Account">
        <button className="text-white bg-heroColor hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-full text-base px-4 py-2 text-center dark:bg-primary-600 dark:hover-bg-primary-700 dark:focus:ring-primary-800">
          Go to Login
        </button>
      </Link>
    </div>
        )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-row gap-3 px-4 mb-8 mt-8 font-general-sans">
        <Link to={"/"}>
          <img src={Back} className="w-[30px] h-[30px]" alt="Back" />
        </Link>
        <p className="font-general-sans">Wishlist</p>
      </div>
      <div className=" w-full flex flex-grow justify-center items-center">
        <div className="w-auto h-0 grid grid-cols-1 gap-1 justify-center mx-3 border font-bold">
          {wishlist.length > 0 ? (
            wishlist.map((product) => (
              <WishlistCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
                isInWishlist={true}
                toggleWishlist={handleRemoveFromWishlist}
              />
            ))
          ) : (
            <p>You still do not have products in your Wishlist.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
