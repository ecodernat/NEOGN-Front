import { useState } from "react";
import TitleSection from "../components/TitleSection";
import { useSelector } from "react-redux";
import WalletPayment from "../components/Cart/WalletBrick";
import { initMercadoPago } from "@mercadopago/sdk-react";
import CartProduct from "../components/Cards/CartProduct";

// console.log(import.meta.env.VITE_PUBLIC_KEY);

const token = import.meta.env.VITE_PUBLIC_KEY;
initMercadoPago(token);

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);
  const [totalValue, setTotalValue] = useState(0);

  const handleBuyClick = () => {
    if (cart) {
      setShowPaymentMethods(true);
    } else {
      <div className="font-general-sans font-medium w-auto flex justify-center items-center">
        No hay items en el carrito
      </div>;
    }
  };

  const calculateTotal = (newTotal) => {
    setTotalValue(newTotal);
  };

  return (
    <div className="font-general-sans">
      <TitleSection title={"My Cart"} onBack={"/"} />
      <div className="bg-white h-screen pt-6 pb-24 px-10">
        <div className="flex flex-col md:flex-row gap-4 w-auto">
          <div className="w-full flex flex-col justify-center items-center gap-y-4">
            {cart &&
              cart.items.map((product) => (
                <CartProduct
                  key={product.id}
                  id={product.id}
                  product={product}
                  calculateTotal={calculateTotal}
                />
              ))}
          </div>
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${totalValue}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>${cart.shippingPrice}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>${cart.tax}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">${cart.totalPrice}</span>
              </div>
              {!showPaymentMethods && (
                <button
                  className="text-white font-semibold bg-black hover:bg-slate-800 py-2 px-4 rounded-lg mt-4 w-full focus:outline-none focus:ring-4 focus:ring-gray-300"
                  onClick={handleBuyClick}
                >
                  Checkout
                </button>
              )}
              {showPaymentMethods && (
                <div className="md:w-auto lg:w-auto mx-auto my-auto align-center bg-white p-4 rounded">
                  <WalletPayment />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
