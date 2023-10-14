import { useDispatch, useSelector } from "react-redux";
import { removeItem, setQuantity } from "../../redux/slices/cartSlice";
import { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast'


const CartProduct = ({ id, product, calculateTotal }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === product.id);
  const [total, setTotal] = useState(
    cartItem ? product.price * cartItem.quantity : 0
  );

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    calculateTotal(newTotal);
  }, [cartItems, calculateTotal]);

  const adjustQuantity = (act) => {
    if (act === "+" && cartItem) {
      dispatch(setQuantity({ id: product.id, act: "+" }));
      setTotal(product.price * (cartItem.quantity + 1));
    } else if (act === "-" && cartItem && cartItem.quantity > 1) {
      dispatch(setQuantity({ id: product.id, act: "-" }));
      setTotal(product.price * (cartItem.quantity - 1));
    } else {
      dispatch(removeItem(id));
      setTotal(0);
    }
  };

  const remove = (id) => {
    toast.success('Product successfully removed')
    dispatch(removeItem(id));
  };

  return (
    <div className="flex justify-around items-center shadow w-[auto] min-w-[345px] h-[105px] bg-white rounded-2xl gap-x-6">
      <div className="w-[170px] h-auto flex items-center gap-x-2 justify-center">
        <div className="flex items-center bg-red-50 justify-center w-[70px] h-[70px] rounded-[10px]">
          <img
            className="h-[65px] w-[65px]"
            src={product.image}
            alt="Product image"
          />
        </div>
        <div className="w-[85px] h-[60px] flex flex-col font-semibold gap-y-4">
          <h2 className="overflow-hidden h-auto">{product.name}</h2>
          <p className="font-extrabold h-auto">$ {product.price}</p>
        </div>
      </div>

      <div className="flex flex-col gap-y-6">
        <button className="w-full flex justify-end" onClick={() => remove(id)}>
          <img
            className="w-5 h-5"
            src="https://www.svgrepo.com/show/533007/trash.svg"
          />
        </button>
        <div className="flex items-center justify-around bg-black h-[28px] w-[80px] rounded-lg font-general-sans font-bold">
          <button className=" text-white" onClick={() => adjustQuantity("-")}>
            -
          </button>
          <span className="text-center w-auto text-white">
            {product.quantity}
          </span>
          <button className=" text-white" onClick={() => adjustQuantity("+")}>
            +
          </button>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default CartProduct;
