
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Heart from "../../utils/images/AppbarIcons/DarkHeart.png";
import ActiveHeart from '../../utils/images/AppbarIcons/ActiveHeart.png'
import { addToWishlist, removeFromWishlist } from "../../redux/slices/WishlistSlice";

import { Link, useNavigate } from "react-router-dom";

const SearchCard = ({ id, name, image, price, description, isInWishlist, }) => {

  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();
  const wishlist = useSelector((state)=>state.wishlist)
  const loginState = useSelector((state)=> state.login)
  const navigate = useNavigate()

 
  const toggleWishlist = () => {
    const existingProduct = wishlist.find((product) => product.id === id);
    if (isInWishlist && existingProduct ) {
      dispatch(removeFromWishlist({ id }));
    } else {
      dispatch(addToWishlist({ id, name, image, price, description }));
    }
  };

  const handleToggleWishlist = () => {
    if (!loginState.login) {           
       return navigate ("/Account")      
    }
    
    const existingProduct = wishlist.find((product) => product.id === id);

    if (isAdded && existingProduct) {
      alert('This item is already on the wishlist.');
      return;
    }
    toggleWishlist(id);
    setIsAdded(true);
    // alert('Added to Wishlist');
  };


  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const displayDescription = showFullDescription
    ? description
    : description.slice(0, 81);

  return (
    <div className="bg-red p-3 rounded-lg shadow-lg mb-4 rounded-md md:rounded-lg mx-2 md:mx-0 border border-red max-w-screen-xl">
      <div className="flex flex-row md:flex-row">
        <Link to={`/${id}`}>
          <div className="md:w-1/4 bg-red">
            <img
              src={image}
              alt={name}
              className="w-full h-auto object-cover rounded-lg bg-red"
              style={{
                maxHeight: "800px",
                width: "100%",
              }}
            />
          </div>
        </Link>
        <div className="md:w-3/4 md:pl-4 flex flex-col">
          <div className="flex justify-between items-start">
            <div className="text-gray-800 text-lg font-semibold">{name}</div>
            {<img 
        src={ isAdded ? ActiveHeart: Heart}
        className={`w-5 h-5 md:w-auto md:h-auto object-cover rounded-lg cursor-pointer ${
          isAdded ? "text-red-500" : "text-gray-500"
        }`}
        onClick={handleToggleWishlist}
      />}
          </div>
          <div className="text-gray-600 text-sm mt-2">{displayDescription}</div>
          {description.length > 81 && (
            <button
              onClick={toggleDescription}
              className="text-red-600 text-sm mt-2 cursor-pointer"
            >
              {showFullDescription ? "Mostrar menos" : "..."}
            </button>
          )}
          <div className="price py-1 text-red-600 text-lg font-semibold flex flex-row items-center justify-between mt-auto">
            <div>$ {price}</div>
            <button className="button bg-red-500 text-white text-lg px-3 py-1 rounded-md">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;