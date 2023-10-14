import axios from "axios";
import { getOrderDetail } from "../slices/orderDetailSlice";

const getOrderPerId = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/orders/perid/${id}`
      );
      dispatch(getOrderDetail(response.data));
    } catch (error) {
      console.error("Error getting detail:", error);
    }
  };
};

export default getOrderPerId;