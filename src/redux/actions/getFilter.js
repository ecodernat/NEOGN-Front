import axios from "axios";
import { setFilter } from "../slices/filterSlice";


const getFilter = (filterParams) => {
  
    return async function (dispatch) {
        try {
            const response = await axios.get(`https://neogn-back.up.railway.app/api/products/filter` ,{
              params: filterParams
            });
            
            dispatch(setFilter(response.data))
        } catch (error) {
            console.error(error)
        }
    }
}

export default getFilter;
