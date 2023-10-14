import { useState } from "react";
import ProductsDetails from "../Orders/ProductsDetails";
import Summary from "./Summary";

const ToggleOrders = ({ leftTittle, rightTittle, products, orderDetail }) => {
  const [orderToggle, setOrderToggle] = useState(false);

  const handleToggle = () => {
    setOrderToggle(!orderToggle);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[340px] max-w-sm h-auto justify-center flex flex-col">
        <div className="shadow rounded-xl h-[50px] flex p-1 relative items-center bg-rose-500">
          <div className="w-full flex justify-center text-slate-100 font-general-sans font-semibold text-base">
            <p>{leftTittle}</p>
          </div>
          <div className="w-full flex justify-center text-slate-100 font-general-sans font-semibold text-base">
            <p>{rightTittle}</p>
          </div>
          <span
            className={`elSwitch bg-slate-100 shadow font-general-sans font-semibold text-base text-rose-500 flex items-center justify-center w-1/2 rounded-xl h-[42px] transition-all top-[4px] absolute ${
              orderToggle ? "left-[166px]" : "left-1"
            }`}
            onClick={handleToggle}
          >
            {orderToggle ? `${rightTittle}` : `${leftTittle}`}
          </span>
        </div>
        {orderToggle ? (
          <Summary orderDetail={orderDetail} />
        ) : (
          <ProductsDetails products={products} />
        )}
      </div>
    </div>
  );
};

export default ToggleOrders;
