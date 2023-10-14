import CardProduct from "../Cards/CardProduct";
import axios from "axios";
import { useEffect } from "react";
import { getProducts } from "../../redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductsToModify = () => {
  const products = useSelector((state) => state.products.products);
  console.log(products === true);
  const dispatch = useDispatch();

  const fetchProducts = () => {
    return async function (dispatch) {
      try {
        const json = await axios.get(
          "https://neogn-back.up.railway.app/api/products/filter?order=A-Z"
        );
        const products = json.data;
        return dispatch(getProducts(products.results));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const toggleStatus = async (productId, newStatus) => {
    console.log(productId);
    try {
      await axios.put(
        `https://neogn-back.up.railway.app/api/products/update/${productId}`,
        {
          isAvailable: newStatus,
        }
      );
      // dispatch(getAllUsers());
    } catch (error) {
      console.error("Error toggling admin status:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-auto h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-16 mb-4 pb-20">
        {products.map((el) => (
          <div key={el.id}>
            <CardProduct
              id={el.id}
              title={el.name}
              image_url={el.image_url[0]}
              toggleStatus={toggleStatus}
              isAvailable={el.isAvailable}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsToModify;
