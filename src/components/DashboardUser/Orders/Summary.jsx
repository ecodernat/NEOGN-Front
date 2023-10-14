const Summary = ({ orderDetail }) => {
    const taxes = 5
    const shipping = 15
    const totalPrice = taxes + shipping + orderDetail.total
  return (
    <div className="font-general-sans w-full h-auto shadow-xl flex flex-col justify-center items-center pt-4 pb-10 rounded-2xl">
      <div className="w-full px-6 h-auto flex items-center justify-between my-2">
        <h2 className="text-lg font-medium">Order Summary</h2>
        <p className=" font-medium">(4 items)</p>
      </div>
      <div className="w-4/5 h-auto border-[1px] border-zinc-400 px-6 rounded-xl flex flex-col gap-y-[7px] py-5">
        <div className="w-full h-auto flex items-center justify-between">
          <h2>Subtotal</h2>
          <p className="font-semibold">$ {orderDetail.total}</p>
        </div>
        <div className="w-full h-auto flex items-center justify-between">
          <h2>Shipping</h2>
          <p className="font-semibold">$ {shipping}</p>
        </div>
        <div className="w-full h-auto flex items-center justify-between">
          <h2>Taxes</h2>
          <p className="font-semibold">$ {taxes}</p>
        </div>
        <div className="w-full py-2 flex justify-center items-center">
          <div className="w-full h-[1px] border border-zinc-400"></div>
        </div>
        <div className="w-full h-auto flex items-center justify-between">
          <h2 className="font-bold">Total</h2>
          <p className="font-bold">$ {totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
