import TitleSection from "../TitleSection";
import ToggleOrders from "./Orders/ToggleOrders";

const OrderHistory = () => {


  return (
    <div className="flex flex-col w-full h-auto pt-6">
      <TitleSection title="Orders" location="/Account" />
      {/* Card */}
      <div className="w-full h-full pt-11">
        <ToggleOrders leftTittle="Current" rightTittle="History" />
      </div>
    </div>
  );
};
export default OrderHistory;
