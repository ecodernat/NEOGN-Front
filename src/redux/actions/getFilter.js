import axios from "axios";
import { setFilter } from "../slices/filterSlice";
import { setTotalPages } from "../slices/FilterParamsSlice";

const getFilter = (filterParams) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/api/products/filter`, {
        params: filterParams,
      });
      
      
      dispatch(setFilter(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export default getFilter;
