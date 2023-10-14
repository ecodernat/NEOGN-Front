import OrderStatusCard from "../../Cards/OrderStatusCard/OrdersStatusCard";
const HistoryOrders = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-6 pt-6 pb-24">
      {/* Posterior se hará map con los productos que tengan estado Delivered enviado por props*/}
      <OrderStatusCard status="Delivered" />
      <OrderStatusCard status="Delivered" />
      <OrderStatusCard status="Delivered" />
    </div>
  );
};
export default HistoryOrders;
