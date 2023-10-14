
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Heart from "../../utils/images/AppbarIcons/IconoDelete.gif";

import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../redux/slices/WishlistSlice";

const WishlistCard = ({ id, name, image, price, description,isInWishlist,toggleWishlist  }) => {
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
            <img
              src={Heart}
              className={`w-5 h-5 md:w-auto md:h-auto object-cover rounded-lg cursor-pointer ${
                isInWishlist ? "text-red-500" : "text-gray-500"
              }`}
              onClick={() => removeCard(id)}
            />
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

export default WishlistCard;