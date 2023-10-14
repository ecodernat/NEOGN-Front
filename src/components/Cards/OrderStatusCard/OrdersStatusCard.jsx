import { useState, useEffect } from "react";
import imagePaths from "./imagePaths";

import { Link } from "react-router-dom";

const OrderStatusCard = ({ status, order }) => {
  const [statusInfo, setStatusInfo] = useState({
    statusColor: "",
    textColor: "",
    confirmedColor: "",
    preparingColor: "",
    shippedColor: "",
    deliveredColor: "",
    confirmedImg: "",
    preparingImg: "",
    shippedImg: "",
    deliveredImg: "",
  });

  useEffect(() => {
    let newStatusInfo = {};
    switch (status) {
      case "Confirmed":
        newStatusInfo = {
          statusColor: "bg-confirmed",
          textColor: "text-confirmed",
          confirmedColor: "bg-confirmed",
          preparingColor: "bg-inactive",
          shippedColor: "bg-inactive",
          deliveredColor: "bg-inactive",
          confirmedImg: imagePaths.Confirmed.active,
          preparingImg: imagePaths.Preparing.inactive,
          shippedImg: imagePaths.Shipped.inactive,
          deliveredImg: imagePaths.Delivered.inactive,
        };
        break;
      case "Preparing":
        newStatusInfo = {
          statusColor: "bg-preparing",
          textColor: "text-preparing",
          confirmedColor: "bg-confirmed",
          preparingColor: "bg-preparing",
          shippedColor: "bg-inactive",
          deliveredColor: "bg-inactive",
          confirmedImg: imagePaths.Confirmed.active,
          preparingImg: imagePaths.Preparing.active,
          shippedImg: imagePaths.Shipped.inactive,
          deliveredImg: imagePaths.Delivered.inactive,
        };
        break;
      case "Shipped":
        newStatusInfo = {
          statusColor: "bg-shipped",
          textColor: "text-shipped",
          confirmedColor: "bg-confirmed",
          preparingColor: "bg-preparing",
          shippedColor: "bg-shipped",
          deliveredColor: "bg-inactive",
          confirmedImg: imagePaths.Confirmed.active,
          preparingImg: imagePaths.Preparing.active,
          shippedImg: imagePaths.Shipped.active,
          deliveredImg: imagePaths.Delivered.inactive,
        };
        break;
      case "Delivered":
        newStatusInfo = {
          statusColor: "bg-delivered",
          textColor: "text-delivered",
          confirmedColor: "bg-confirmed",
          preparingColor: "bg-preparing",
          shippedColor: "bg-shipped",
          deliveredColor: "bg-delivered",
          confirmedImg: imagePaths.Confirmed.active,
          preparingImg: imagePaths.Preparing.active,
          shippedImg: imagePaths.Shipped.active,
          deliveredImg: imagePaths.Delivered.active,
        };
        break;
      default:
        break;
    }
    setStatusInfo(newStatusInfo);
  }, [status]);

  function formatOrderDate(dateString) {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(dateString);
    return date.toLocaleString("en-US", options);
  }

  const originalDate = order && order.date;

  const formattedDate = formatOrderDate(originalDate);

  return (
    <div className="font-maven-pro w-full h-auto flex justify-center">
      <div className="w-[340px] h-[180px] bg-rose-500 rounded-2xl px-5 py-4 flex flex-col gap-3">
        <div className="w-full h-auto flex justify-between items-center">
          <div
            className={`text-[15px] font-semibold ${statusInfo.statusColor} ${statusInfo.textColor} w-auto h-auto max-h-[26px] flex items-center px-3 rounded-full py-3`}
          >
            {status}
          </div>
          <div className="flex gap-x-2">
            <div
              className={`h-[32px] w-[32px] rounded-full ${statusInfo.confirmedColor} flex justify-center items-center`}
            >
              <img className="h-[26px] w-auto" src={statusInfo.confirmedImg} />
            </div>
            <div
              className={`h-[32px] w-[32px] rounded-full ${statusInfo.preparingColor} flex justify-center items-center`}
            >
              <img className="h-[22px] w-auto" src={statusInfo.preparingImg} />
            </div>
            <div
              className={`h-[32px] w-[32px] rounded-full ${statusInfo.shippedColor} flex justify-center items-center`}
            >
              <img className="h-[20px] w-auto" src={statusInfo.shippedImg} />
            </div>
            <div
              className={`h-[32px] w-[32px] rounded-full ${statusInfo.deliveredColor} flex justify-center items-center`}
            >
              <img className="h-[22px] w-auto" src={statusInfo.deliveredImg} />
            </div>
          </div>
        </div>
        <div className=" font-general-sans text-slate-200 text-sm font-medium">
          {order ? `#${order.paymentId}` : "#NG029931"}
        </div>
        <div className="text-slate-200 text-xl font-semibold">
          {order ? order.products[0].title : "HyperX Cloud II"}
        </div>
        <div className="flex justify-between w-auto h-auto">
          <h2 className="font-general-sans font-normal text-base text-slate-200">
            {formattedDate ? formattedDate : "22 Sep 2023 - 02:30PM"}
          </h2>
          {order ? (
            <Link to={`/Account/Orders/${order.paymentId}`}>
              <img
                className="w-auto h-[24px]"
                src="https://i.postimg.cc/D0zVf70v/right-chevron-svgrepo-com-1.png"
              />
            </Link>
          ) : (
            <img
              className="w-auto h-[24px]"
              src="https://i.postimg.cc/D0zVf70v/right-chevron-svgrepo-com-1.png"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderStatusCard;
