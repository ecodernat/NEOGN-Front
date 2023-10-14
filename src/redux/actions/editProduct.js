import axios from "axios";

export function editProduct(id, payload) {
  return async function () {
    try {
      const response = await axios.put(
        `https://neogn-back.up.railway.app/api/products/update/${id}`,
        payload
      );
      return response;
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };
}
