import toast, { Toaster } from "react-hot-toast";

import { useState } from "react";

import Rating from "./Rating";
import axios from "axios";

const DetailOrderCard = ({ product }) => {
  const [showRating, setShowRating] = useState(false);
  const [ratingProduct, setRatingProduct] = useState(0);

  const handleToRating = async () => {
    const SKU = product.id;

    try {
      const response = await axios.put(`/api/products/rating/${SKU}`, {
        rating: ratingProduct,
      });
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }

    setShowRating(false);
    console.log("lo que pasamos a redux", product.id, ratingProduct);
  };

  return (
    <div className="relative flex justify-around items-center shadow-xl w-full min-w-[345px] h-[105px] bg-white rounded-2xl">
      <div className="flex items-center bg-violet-50  justify-center w-[70px] h-[70px] rounded-[10px]">
        <img
          className="h-[65px] w-[65px]"
          src={product.image_url}
          alt="Product image"
        />
      </div>
      <div className="w-auto h-[auto] flex flex-col gap-y-4">
        <h2 className="font-general-sans font-semibold overflow-hidden h-auto">
          {product.name}
        </h2>

        <div className="flex w-full gap-x-28">
          <p className="font-general-sans font-semibold h-auto text-rose-500">
            $ {product.price}
          </p>
          {showRating && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-4 rounded-lg">
                <Rating
                  rating={ratingProduct}
                  setRating={setRatingProduct}
                  handleToRating={handleToRating}
                />
              </div>
            </div>
          )}
          <button
            onClick={() => setShowRating(true)}
            className="px-5 font-roboto font-bold bg-rose-500 text-slate-100 flex justify-end items-center rounded-lg"
          >
            add rating
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
export default DetailOrderCard;
