import axios from "axios";
import { getOrders } from "../slices/myOrdersSlice";

const getAllOrders = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/api/orders/${id}`);
      dispatch(getOrders(response.data));
    } catch (error) {
      console.error("Error getting detail:", error);
    }
  };
};

export default getAllOrders;
