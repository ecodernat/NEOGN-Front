import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";


const DetailOrderCard = ({ product }) => {
  const dispatch = useDispatch();

    const handleAddToCart = () => {
        const productData = {
          id: product.id,
          name: product.title,
          price: product.unit_price,
          image: product.picture_url,
          description: product.description,
        };
        toast.success('Added to cart successfully')
    
        console.log(productData);
        dispatch(addToCart(productData));
      };

  return (
    <div className="flex justify-around items-center shadow-xl w-full min-w-[345px] h-[105px] bg-white rounded-2xl">
      <div className="flex items-center bg-violet-50  justify-center w-[70px] h-[70px] rounded-[10px]">
        <img
          className="h-[65px] w-[65px]"
          src={product.picture_url}
          alt="Product image"
        />
      </div>
      <div className="w-auto h-[auto] flex flex-col gap-y-4">
        <h2 className="font-general-sans font-semibold overflow-hidden h-auto">{product.title}</h2>
        <div className="flex w-full gap-x-28">
          <p className="font-general-sans font-semibold h-auto text-rose-500">$ {product.unit_price}</p>
          <button
            onClick={handleAddToCart}
           className="px-5 font-roboto font-bold bg-rose-500 text-slate-100 flex justify-end items-center rounded-lg">
            Buy
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
export default DetailOrderCard;
