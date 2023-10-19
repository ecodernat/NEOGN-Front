import axios from "axios";
import { useEffect, useState } from "react";
import CardOrder from "../Cards/CardOrder";

const ordersJson = [
  {
    paymentId: "abc123",
    total: 50.99,
  },
  {
    paymentId: "xyz789",
    total: 25.49,
  },
  {
    paymentId: "def456",
    total: 75.0,
  },
  {
    paymentId: "ghi789",
    total: 32.95,
  },
  {
    paymentId: "ghi789",
    total: 32.95,
  },
  {
    paymentId: "ghi789",
    total: 32.95,
  },
  {
    paymentId: "ghi789",
    total: 32.95,
  },
  {
    paymentId: "ghi789",
    total: 32.95,
  },
  {
    paymentId: "ghi789",
    total: 32.95,
  },
  {
    paymentId: "ghi789",
    total: 32.95,
  },
  {
    paymentId: "ghi789",
    total: 32.95,
  },
];

const PurchaseHistory = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const json = await axios.get("/api/orders");
      const orders = json.data;
      console.log(orders);
      setOrders(orders);
    } catch (error) {
      console.error("Error getting orders:", error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="w-auto flex justify-center flex-col ">
      <h3 className="mt-6 text-xl">Orders</h3>
      <div className="flex flex-col mt-6 mb-20">
        <div className="px-2 ">
          {/* {orders?.map((el) => (
                <CardOrder key={el.paymentId} id={el.total} />
              ))} */}
          {ordersJson.map((el) => (
            <CardOrder key={el.paymentId} id={el.paymentId} total={el.total} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistory;
