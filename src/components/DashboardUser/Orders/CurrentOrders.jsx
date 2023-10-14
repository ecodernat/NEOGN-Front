import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import OrderStatusCard from "../../Cards/OrderStatusCard/OrdersStatusCard";
import getAllOrders from "../../../redux/actions/getOrders";

const CurrentOrders = () => {
  const dispatch = useDispatch();
  const myOrders = useSelector((state) => state.myOrders.myOrders);
  const userId = useSelector((state) => state.user.id);

  useEffect(() => {
    dispatch(getAllOrders(userId));
  }, [dispatch]);

  return (
    <div className="w-full h-auto flex flex-col gap-6 pt-6 pb-24">
      {/* Posterior se hará map con los productos dependiendo su estado enviado por props*/}
      {myOrders.length > 0 &&
        myOrders.map((order, index) => (
          <OrderStatusCard key={index} order={order} status="Confirmed" />
        ))}
      <OrderStatusCard status="Shipped" />
      <OrderStatusCard status="Confirmed" />
      <OrderStatusCard status="Preparing" />
      <OrderStatusCard status="Confirmed" />
      <OrderStatusCard status="Shipped" />
    </div>
  );
};
export default CurrentOrders;
