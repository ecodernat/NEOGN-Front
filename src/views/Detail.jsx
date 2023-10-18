import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fetchProductById from "../redux/actions/fetchProductById";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/slices/CartSlice";
import { clearDetail } from "../redux/slices/detailSlice";
import heart from "../utils/images/AppbarIcons/DarkHeart.png";
import activeHeart from "../utils/images/AppbarIcons/ActiveHeart.png";
import backIcon from "../utils/images/BasicIcons/backIcon.png";
import toast, { Toaster } from "react-hot-toast";
import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/slices/WishlistSlice";

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const goBackHandler = () => {
    navigate(-1);
  };

  const product = useSelector((state) => state.detail.detail);
  const enCar = useSelector((state) => {
    return state.cart;
  });

  const productInCartCount =
    Array.isArray(enCar.items) && enCar.items.length > 0
      ? enCar.items.filter((item) => item.id === id)[0].quantity
      : 0;

  useEffect(() => {
    dispatch(fetchProductById(id));
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, id]);

  const handleAddToCart = () => {
    const productData = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image_url,
      description: product.description,
    };
    toast.success("Added to cart successfully ");

    dispatch(addToCart(productData));
  };

  const [currentImage, setCurrentImage] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleClick = (newImage) => {
    setSelectedImageIndex(newImage);
    if (product.image_url[newImage]) {
      setCurrentImage(product.image_url[newImage]);
    } else {
      setCurrentImage(product.image_url);
    }
  };
  useEffect(() => {
    if (product.image_url) {
      setCurrentImage(product.image_url[0] || "");
    }
  }, [product]);

  const wishlist = useSelector((state) => state.wishlist);
  const loginState = useSelector((state) => state.login);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const existingProduct = wishlist.find((product) => product.id === id);
    setIsAdded(existingProduct ? true : false);
    dispatch(fetchProductById(id));
  }, [wishlist, dispatch, id]);

  const toggleWishlist = () => {
    const existingProduct = wishlist.find((product) => product.id === id);
    if (existingProduct) {
      dispatch(removeFromWishlist({ id }));
    } else {
      const productData = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image_url,
        description: product.description,
      };
      dispatch(addToWishlist(productData));
    }
  };

  const handleToggleWishlist = () => {
    if (!loginState.login) {
      return navigate("/Account");
    }
    toggleWishlist(id);
    setIsAdded(!isAdded);
  };

  return (
    <div className="allHome flex flex-col w-auto h-auto  left-[15px] mt-[30px] mb-[140px] md:mb-[600px] lg:mb-[700px]">
      <div className="detail-header flex  flex-row gap-5 w-full pl-4 pb-3  md:pl-15 lg:pl-20">
        <button className="arrow-left   ">
          <img
            src={backIcon}
            alt="Arrow"
            className="w-[24px] h-[24px]"
            onClick={goBackHandler}
          />
        </button>
        <h1
          className="detail-text font-bold text-[20px]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Detail
        </h1>
      </div>

      <div className="flex flex-row  justify-evenly pr-3 pl-3 h-[20rem] md:h-[30rem] lg:h-[34rem] xl:h-auto ">
        <div className="small images overflow-hidden content flex flex-col w-1/3 md:w-1/5 lg:w-1/6 h-[20rem] md:h-[30rem] lg:h-[34rem] xl:h-auto justify-evenly pr-3">
          <div
            className={`inline-flex justify-center h-[4rem] w-[4rem] md:h-[6rem] md:w-[6rem] lg:h-[10rem] lg:w-[10rem] xl:h-auto bg-absolutestaticwhite-s rounded-[12px] p-1 ${
              selectedImageIndex === 1
                ? "border border-red-400"
                : "border border-solid border-oil-03"
            }`}
          >
            <button onClick={() => handleClick(1)} className={` `}>
              <img
                className="w-full h-full object-center object-middle object-contain bg-cover bg-no-repeat "
                alt="small img"
                src={
                  product.image_url && product.image_url[1]
                    ? product.image_url[1]
                    : currentImage
                }
              />
            </button>
          </div>

          <div
            className={`inline-flex justify-center h-[4rem] w-[4rem] md:h-[6rem] md:w-[6rem] lg:h-[10rem] lg:w-[10rem] xl:h-auto bg-absolutestaticwhite-s rounded-[12px] p-1 ${
              selectedImageIndex === 2
                ? "border border-red-400"
                : "border border-solid border-oil-03"
            }`}
          >
            <button onClick={() => handleClick(2)}>
              <img
                className="w-full h-full object-center object-middle object-contain bg-cover bg-no-repeat "
                alt="small img"
                src={
                  product.image_url && product.image_url[2]
                    ? product.image_url[2]
                    : currentImage
                }
              />
            </button>
          </div>

          <div
            className={`inline-flex justify-center h-[4rem] w-[4rem] md:h-[6rem] md:w-[6rem] lg:h-[10rem] lg:w-[10rem] xl:h-auto bg-absolutestaticwhite-s rounded-[12px] p-1 ${
              selectedImageIndex === 3
                ? "border border-red-400"
                : "border border-solid border-oil-03"
            }`}
          >
            <button onClick={() => handleClick(3)}>
              <img
                className="w-full h-full object-center object-middle object-contain bg-cover bg-no-repeat "
                alt="small img"
                src={
                  product.image_url && product.image_url[3]
                    ? product.image_url[3]
                    : currentImage
                }
              />
            </button>
          </div>
          <div
            className={`inline-flex justify-center h-[4rem] w-[4rem] md:h-[6rem] md:w-[6rem] lg:h-[10rem] lg:w-[10rem] xl:h-auto bg-absolutestaticwhite-s rounded-[12px] p-1 ${
              selectedImageIndex === 0
                ? "border border-red-400"
                : "border border-solid border-oil-03"
            }`}
          >
            <button onClick={() => handleClick(0)}>
              <img
                className="w-full h-full object-center object-middle object-contain bg-cover bg-no-repeat "
                alt="small img"
                src={
                  product.image_url && product.image_url[0]
                    ? product.image_url[0]
                    : currentImage
                }
              />
            </button>
          </div>
        </div>

        <div className="Big image  flex bg-[#f6eaec] rounded-tl-[20px] rounded-bl-[20px] overflow-hidden relative  w-[30rem] md:w-[35rem] lg:w-[44rem] xl:w-auto">
          <div className="absolute top-6 right-6">
            <div
              className="Wishlist-Heart inline-flex relative bg-absolutestaticwhite-s rounded-[10px] border border-solid"
              style={{ zIndex: 1 }}
            >
              <div
                className="bg-white rounded-[10px] overflow-hidden flex items-center justify-center"
                style={{ width: "34px", height: "34px" }}
              >
                {
                  <img
                    src={isAdded ? activeHeart : heart}
                    className={`w-5 h-5 md:w-auto md:h-auto object-cover rounded-lg cursor-pointer ${
                      isAdded ? "text-red-500" : "text-gray-500"
                    }`}
                    onClick={handleToggleWishlist}
                  />
                }
              </div>
            </div>
          </div>
          <img
            className="w-full h-full object-center object-middle object-contain bg-cover bg-no-repeat p-2"
            src={currentImage}
          />
        </div>
      </div>

      <div className="2part flex flex-col justify-between relative pt-6 pl-[20px] pr-[20px] md:pl-15 md:pl-15 lg:pr-20 lg:pl-20">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Bold',Helvetica] font-bold text-oil-11 text-[24px] tracking-[0] leading-[normal] overflow-hidden">
            {`${product.name}`}
          </div>
          <div className="inline-flex items-center justify-center gap-[4px] px-[10px] py-[6px] relative flex-[0_0_auto] bg-absolutestaticwhite-s rounded-[10px] border border-solid border-oil-03">
            <img
              className="relative w-[16px] h-[16px]"
              alt="Star"
              src="https://i.postimg.cc/YCvVthCt/star-1-svgrepo-com.png"
            />
            <div className="relative w-fit mt-[-0.50px] [font-family:'Roboto-Medium',Helvetica] font-medium text-oil-11 text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
              {product.averageRating}
            </div>
          </div>
        </div>

        <p className="  relative  justify-around font-[Roboto-Regular, Helvetica] font-normal text-oil-11 text-[14px] tracking-[0] leading-normal">
          {product.description}
        </p>

        <div className="flex flex-col pt-5 gap-[16px]  ">
          <div className="Specifications-container flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="gap-[12px] inline-flex items-center relative flex-[0_0_auto]">
              <div className="justify-center gap-[10px] p-[9px] bg-[#f6eaec] rounded-[10px] inline-flex items-center relative flex-[0_0_auto]">
                <img
                  src="https://i.postimg.cc/NjZnFBKm/document-svgrepo-com.png"
                  className="relative w-[24px] h-[24px]"
                  alt="Document Icon"
                />
              </div>
              <div className="relative w-[300px] overflow-hidden [font-family:'Roboto-Regular',Helvetica] font-normal text-oil-11 text-[16px] tracking-[0] leading-[normal]">
                <input
                  type="checkbox"
                  className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className=" h-12 w-full pl-5 flex items-center">
                  <h1 className="">Product Specifications</h1>
                </div>
                <div className="absolute top-3 right-3  transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>

                <div className="content bg-gray-100 rounded-[12px] overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                  <div className="p-4">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quibusdam quisquam id officia quam cumque fugiat. Delectus
                      a error alias atque ratione esse voluptate beatae fugiat
                      vitae, officia at ullam enim.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <img
              src="https://i.postimg.cc/SxrvL3Nt/right-arrow-svgrepo-com.png"
              className="relative w-[24px] h-[24px]"
              alt="Right Arrow"
            /> */}
          </div>
          <img className="relative h-px bg-gray-300 w-full" />
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="gap-[12px] inline-flex items-center relative flex-[0_0_auto]">
              <div className="justify-center gap-[10px] p-[9px] bg-[#f6eaec] rounded-[10px] inline-flex items-center relative flex-[0_0_auto]">
                <img
                  src="https://i.postimg.cc/d0dxTpCX/colors-svgrepo-com.png"
                  className="relative w-[24px] h-[24px]"
                  alt="Colors Icon"
                />
              </div>
              <div className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-oil-11 text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                Colors
              </div>
            </div>

            <div className="inline-flex items-start  gap-[8px] relative flex-[0_0_auto]">
              <div
                className={`bg-oil-08 bg-red-100 ${
                  product.color == "Red"
                    ? "border-red-700 bg-red-800"
                    : "border-oil-03"
                } border-primary-color  relative w-[24px] h-[24px] rounded-[12px] border-2 border-solid`}
              />
              <div
                className={`bg-oil-0 bg-gray-100 ${
                  product.color == "Black"
                    ? "border-red-700 bg-gray-800"
                    : "border-oil-03"
                } relative w-[24px] h-[24px] rounded-[12px] border-2 border-solid`}
              />

              <div
                className={`bg-absolutestaticwhite-s border-oil-03 ${
                  product.color == "White"
                    ? "border-red-700 bg-white"
                    : "border-oil-03"
                } relative w-[24px] h-[24px] rounded-[12px] border-2 border-solid`}
              />
            </div>
          </div>
          <img className="relative h-px bg-gray-300 w-full" />
        </div>

        <div className="flex flex-row pt-4  ">
          <div className="flex w-[342px] items-center justify-between ">
            <p className="relative w-fit [font-family:'Roboto-Medium',Helvetica] font-medium text-[#0d0d0d] text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
              <span className="[font-family:'Roboto-Medium',Helvetica] font-medium text-[#0d0d0d] text-[24px] tracking-[0]">
                {`$${product.price}`}
              </span>
              {/* <span className="text-[18px]">99</span> */}
            </p>
          </div>
          <button
            style={{ backgroundColor: "rgba(229, 70, 96, 1)" }}
            className="flex w-[200px] items-center justify-center gap-[4px] p-[12px] relative rounded-[15px]"
            onClick={handleAddToCart}
          >
            <div className="relative w-fit [font-family:'Roboto-Medium',Helvetica] font-medium text-absolutestaticwhite-s text-[18px] tracking-[0] leading-[normal] whitespace-nowrap">
              Add To Cart ({productInCartCount})
            </div>
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Detail;
