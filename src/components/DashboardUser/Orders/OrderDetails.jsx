import TitleSection from "../../TitleSection";
import ToggleOrderDetails from "../Orders/ToggleOrderDetails";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import getOrderPerId from "../../../redux/actions/getDetailOrder";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const orderDetail = useSelector((state) => state.orderDetail.orderDetail);

  // const orderDetail = {
  //   paymentId: 12345,
  //   products: [
  //     {
  //       id: "SKU005",
  //       name: "Product 1",
  //       price: 10.99,
  //       quantity: 2,
  //     },
  //     {
  //       id: "SKU006",
  //       name: "Product 2",
  //       price: 5.99,
  //       quantity: 1,
  //     },
  //   ],
  // };

  const products = orderDetail.products;

  useEffect(() => {
    // Comentado para evitar llamada real al servidor mientras se realiza la prueba
    dispatch(getOrderPerId(id));
  }, [dispatch, id]);

  console.log(orderDetail);
  return (
    <div className="flex flex-col w-full h-auto pt-6">
      <TitleSection title="Order Details" location="/Account/Orders" />
      <div className="w-full flex justify-center font-maven-pro font-medium text-xl mt-2">
        <div className="w-[340px]">
          <h2>Order ID #{orderDetail.paymentId}</h2>
        </div>
      </div>
      {/* Card */}
      <div className="w-full h-full pt-2">
        <ToggleOrderDetails
          leftTittle="Products"
          rightTittle="Summary"
          products={products}
          orderDetail={orderDetail}
        />
      </div>
    </div>
  );
};
export default OrderHistory;
