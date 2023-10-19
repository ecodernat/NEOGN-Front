import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import  toast  from "react-hot-toast";
import { addToCart } from "../../redux/slices/CartSlice";
import { addToWishlist, removeFromWishlist } from "../../redux/slices/userSlice";
import Heart from "../../utils/images/AppbarIcons/DarkHeart.png";
import activeHeart from '../../utils/images/AppbarIcons/ActiveHeart.png'

const SearchCard = ({ id, name, image, price, description, isInWishlist }) => {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const user = useSelector((state)=>state.user);
  const wishlist = user.wishlist;
  const [showFullDescription, setShowFullDescription] = useState(false);
  const loginState = useSelector((state)=> state.login)
  const navigate = useNavigate()
  
  const existingProduct = wishlist.find((product) => product.id === id);
  useEffect(() => {
   
    setIsAdded(existingProduct ? true : false);
  }, [wishlist, id]);


  
  
  const toggleWishlist = () => {
    const existingProduct = wishlist.find((product) => product.id === id);
    if (existingProduct) {
      dispatch(removeFromWishlist({ id }));
    } else {
      dispatch(addToWishlist({ id, name, image, price, description }));
    }
  };

  const handleToggleWishlist = () => {
    
    if (!user.id) {
      return navigate("/Account");
    }    
    toggleWishlist(id);    
    setIsAdded(!isAdded);
    
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


  

  const displayDescription = showFullDescription ? description : description.slice(0, 31);
  const descriptionText = description.length > 31 ? (
    showFullDescription ? description : `${description.slice(0, 31)}...`
  ) : description;

  return (
    <div className="bg-red p-3 rounded-lg shadow-lg mb-4 rounded-md md:rounded-lg mx-1 md:mx-0 border border-red max-w-screen-xl">
      <div className="flex flex-row md:flex-row ">
        <Link to={`/${id}`} className="md:w-1/3">
          <img
            src={image}
            alt={name}
            className="w-full h-auto object-cover rounded-lg text-center"
            style={{ maxHeight: "140px", background: "#fceaea", padding: "4px" }}
          />
        </Link>
        <div className="md:w-2/3 md:pl-2 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="text-gray-800 text-lg font-semibold" style={{ marginLeft: "22px" }}>{name}</div>
            <img
              src={ isAdded ? activeHeart: Heart}
              className={`w-5 h-5 md:w-auto md:h-36 object-cover rounded-lg cursor-pointer ${
                isAdded ? "text-red-500" : "text-gray-700"
              }`}
              onClick={handleToggleWishlist}
            />
          </div>
          <div className="text-gray-600 text-xs mb-2 text-center" style={{ fontFamily: "Roboto" }}>{descriptionText}</div>
          {description.length > 31 && (
            <div className="flex items-center justify-center    ">
              <Link to={`/${id}`} className="text-red-600 text-xs cursor-pointer hover:underline hover:bg-transparent mr-2">
                
              </Link>
            </div>
          )}
          <div className="flex items-center justify-between mt-auto">
            <div className="text-red-600 text-lg font-semibold" style={{ marginLeft: "12px" }}>${price}</div>
            <button   onClick={handleAddToCart}
             className="button bg-red-500 text-white text-sm px-3 py-1 rounded-md">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
