import axios from "axios";
import { setProductDetail } from "../slices/detailSlice";
const fetchProductById = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://neogn-back.up.railway.app/api/products/${id}`
      );
      console.log(response);
      dispatch(setProductDetail(response.data));
    } catch (error) {
      console.error("Error getting detail:", error);
    }
  };
};

export default fetchProductById;
