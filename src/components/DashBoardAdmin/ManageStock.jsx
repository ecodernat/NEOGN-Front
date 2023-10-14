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
        const json = await axios.get(
          "https://neogn-back.up.railway.app/api/products"
        );
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
    console.log(userId);
    try {
      await axios.put(
        `https://neogn-back.up.railway.app/products/update/${userId}`,
        {
          isAvailable: currentStatus,
          stock: newStock,
        }
      );
      dispatch(setProductDetails());
    } catch (error) {
      console.error("Error toggling available status:", error);
    }
  };

  return (
    <div className="w-auto flex justify-center flex-col ">
      <h3 className="mt-6 text-xl">Products</h3>
      <div className="flex flex-col mt-6">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block w-full overflow-x-scroll sm:px-6 lg:mx-4">
            <div className="overflow-hidden border-b border-gray-200 rounded-md shadow-md">
              <table className="min-w-full w-auto overflow-x-scroll divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Stock
                    </th>
                  </tr>
                </thead>
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
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageStock;
