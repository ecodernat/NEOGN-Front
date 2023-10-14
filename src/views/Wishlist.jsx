
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link} from "react-router-dom";
import Back from "../utils/images/BasicIcons/BackIcon.png";
import { removeFromWishlist } from "../redux/slices/WishlistSlice";
import WishlistCard from "../components/Cards/WishlistCard";

const Wishlist = () => {

    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.wishlist);
    const loginState = useSelector((state)=> state.login)
    console.log("login state", loginState);
  
    const handleRemoveFromWishlist = (productId) => {
      dispatch(removeFromWishlist({ id: productId }));
      alert('Item removed');
    };
    
    
    if (!loginState.login) {
      
      return (
        <Link to="/Account/SignUp">Go to SignUp</Link>
      );
    }

  return (
    <div>
      <div className="flex flex-row gap-3 px-4 mb-8 mt-8 font-general-sans">
        <Link to={"/"}>
          <img src={Back} className="w-[30px] h-[30px]" alt="Back" />
        </Link>
        <p className="font-general-sans">Wishlist</p>
      </div>
      <div className="w-full flex justify-center items-center">
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
            <p>You still do not have products on Wishlist.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;