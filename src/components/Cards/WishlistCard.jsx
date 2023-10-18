
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Heart from "../../utils/images/AppbarIcons/IconoDelete.gif";

import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../redux/slices/WishlistSlice";
import { addToCart } from "../../redux/slices/CartSlice";
import  toast  from "react-hot-toast";



const WishlistCard = ({ id, name, image, price, description, isInWishlist, toggleWishlist  }) => {
  
  const dispatch = useDispatch();
  const [showFullDescription, setShowFullDescription] = useState(false);



  const removeCard = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist({ id }));

    } else {
      dispatch(addToWishlist({ id, name, image, price, description }));
    }
  };


  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleAddToCart = () => {
    const productData = {
      id,
      name,
      price,
      image,
      description,
    };
    toast.success("Added to cart successfully ");

    console.log(productData);
    dispatch(addToCart(productData));
  };

  const descriptionText = description.length > 31 ? (
    showFullDescription ? description : `${description.slice(0, 31)} ...`
  ) : description;


  return (
    <div className="bg-red p-3 rounded-lg shadow-lg mb-4 rounded-md md:rounded-lg mx-1 md:mx-0 border border-red max-w-screen-xl">
      <div className="flex flex-row md:flex-row">
        <Link to={`/${id}`} className="md:w-1/3" >
            <img
              src={image}
              alt={name}
              className="w-full h-auto object-cover rounded-lg text-center"
              style={{ maxHeight: "140px", background: "#fceaea", padding: "4px" }}
            />
          
        </Link>
        
        <div className="md:w-2/3 md:pl-2 flex flex-col">
          <div className="flex justify-between items-start  mb-4">
            <div className="text-gray-800 text-lg font-semibold" style={{ marginLeft: "22px" }} >{name}</div>
            <img
              src={Heart}
              className={`w-5 h-5 md:w-auto md:h-auto object-cover rounded-lg cursor-pointer ${
                isInWishlist ? "text-red-500" : "text-gray-500"
              }`}
              onClick={() => removeCard(id)}
            />
          </div>
          <Link to={`/${id}`} >
          <div className="text-gray-600 text-sm mt-2" style={{ fontFamily: "Roboto" }}>{descriptionText}</div>
          {description.length > 31 && (
            <div className="flex items-center justify-center">
              
          </div>
          )}
          </Link>
          <div className="flex items-center justify-between mt-auto">
          <div className="text-red-600 text-lg font-semibold" style={{ marginLeft: "12px" }}>$ {price}</div>
            <button onClick={handleAddToCart} 
              className="button bg-red-500 text-white text-lg px-3 py-1 rounded-md">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;