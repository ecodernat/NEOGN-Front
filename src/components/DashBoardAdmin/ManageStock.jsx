import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProductDetail } from "../../redux/slices/detailSlice";

import CardStock from "../Cards/CardStock";

const ManageStock = () => {
  const detail = useSelector((state) => state.detail.detail);
  const dispatch = useDispatch();

  const setProductDetails = () => {
    return async function (dispatch) {
      try {
        const json = await axios.get("/api/products");
        const users = json.data;
        return dispatch(setProductDetail(users));
      } catch (error) {
        console.error("Error getting users:", error);
      }
    };
  };

  useEffect(() => {
    dispatch(setProductDetails());
  }, [dispatch]);

  const toggleStatus = async (userId, currentStatus, newStock) => {
    try {
      await axios.put(`/api/products/update/${userId}`, {
        isAvailable: currentStatus,
        stock: newStock,
      });
      dispatch(setProductDetails());
    } catch (error) {
      console.error("Error toggling available status:", error);
    }
  };

  return (
    <div className="w-auto flex justify-center flex-col ">
      <h3 className="mt-6 text-xl">Products</h3>
      <div className="flex flex-col mt-6 mb-20">
        <div className="px-2">
          {detail.map((el) => (
            <CardStock
              key={el.id}
              id={el.id}
              title={el.name}
              toggleStatus={toggleStatus}
              image_url={el.image_url}
              isAvailable={el.isAvailable}
              stock={el.stock}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageStock;
