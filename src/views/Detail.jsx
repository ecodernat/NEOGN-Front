import  { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fetchProductById from "../redux/actions/fetchProductById";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/slices/cartSlice";
import heart from "../utils/images/AppbarIcons/DarkHeart.png";
import backIcon from "../utils/images/BasicIcons/backIcon.png";
import toast, { Toaster } from 'react-hot-toast'


const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const goBackHandler = () => {
    navigate(-1);
  };

  const product = useSelector((state) =>  state.detail.detail);

  const enCar = useSelector((state) => {
    return state.cart;
  });

  const productInCartCount = enCar.items.filter(
    (item) => item.id === product.id
  ).length;

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    const productData = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image_url,
      description: product.description,
    };
    toast.success('Added to cart successfully ')

    console.log(productData);
    dispatch(addToCart(productData));
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

      <div className="flex flex-row justify-evenly pr-3 pl-3">
        <div className="small images content flex flex-col w-1/4 md:w-1/5 lg:w-1/6 justify-evenly pr-3">
          <div className="inline-flex bg-absolutestaticwhite-s rounded-[12px] border-[1.5px] border-solid border-primary-color">
            <img
              className="relative w-full h-full object-cover"
              alt="small img"
              src={product.image_url}
            />
          </div>
          <div className="inline-flex bg-absolutestaticwhite-s rounded-[12px] border border-solid border-oil-03">
            <img
              className="relative w-full h-full object-cover"
              alt="small img"
              src={product.image_url}
            />
          </div>
          <div className="inline-flex bg-absolutestaticwhite-s rounded-[12px] border border-solid border-oil-03">
            <img
              className="relative w-full h-full object-cover"
              alt="small img"
              src={product.image_url}
            />
          </div>
          <div className="flex bg-absolutestaticwhite-s rounded-[12px] border border-solid border-oil-03">
            <img
              className="relative w-full h-full object-cover"
              alt="small img"
              src={product.image_url}
            />
          </div>
        </div>

        <div className="Big image flex bg-[#f6eaec] rounded-tl-[20px] rounded-bl-[20px] overflow-hidden relative !important">
          <div className="absolute top-10 right-10">
            <div className="Wishlist-Heart inline-flex relative bg-absolutestaticwhite-s rounded-[10px] border border-solid">
              <div
                className="bg-white rounded-[10px] overflow-hidden flex items-center justify-center"
                style={{ width: "34px", height: "34px" }}
              >
                <img
                  src={heart}
                  className="relative w-[24px] h-[24px] "
                  alt="Small Image"
                />
              </div>
            </div>
          </div>
          <img
            className="relative bg-cover bg-no-repeat"
            src={product.image_url}
          />
        </div>
      </div>

      <div className="2part flex flex-col justify-between relative pt-6 pl-[20px] pr-[20px] md:pl-15 md:pl-15 lg:pr-20 lg:pl-20">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Bold',Helvetica] font-bold text-oil-11 text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
            {`${product.name}`}
          </div>
          <div className="inline-flex items-center justify-center gap-[4px] px-[10px] py-[6px] relative flex-[0_0_auto] bg-absolutestaticwhite-s rounded-[10px] border border-solid border-oil-03">
            <img
              className="relative w-[16px] h-[16px]"
              alt="Star"
              src="https://i.postimg.cc/YCvVthCt/star-1-svgrepo-com.png"
            />
            <div className="relative w-fit mt-[-0.50px] [font-family:'Roboto-Medium',Helvetica] font-medium text-oil-11 text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
              4.9
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
              <div className="relative flex [font-family:'Roboto-Regular',Helvetica] font-normal text-oil-11 text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                Product Specifications
              </div>
            </div>
            <img
              src="https://i.postimg.cc/SxrvL3Nt/right-arrow-svgrepo-com.png"
              className="relative w-[24px] h-[24px]"
              alt="Right Arrow"
            />
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

            <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
              <div className="bg-oil-08 border-primary-color relative w-[24px] h-[24px] rounded-[12px] border-2 border-solid" />
              <div className="bg-oil-04 border-oil-03 relative w-[24px] h-[24px] rounded-[12px] border-2 border-solid" />
              <div className="bg-absolutestaticwhite-s border-oil-03 relative w-[24px] h-[24px] rounded-[12px] border-2 border-solid" />
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
              <span className="text-[18px]">99</span>
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
      <Toaster/>
    </div>
  );
};

export default Detail;
