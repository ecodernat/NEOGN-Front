import axios from "axios";

export function editRating(id, payload) {
console.log("id y payload", id, payload)

  return async function () {
    try {
      const response = await axios.put(`/api/products/rating/${id}`, payload);
      console.log("el response",response)
      return response;

    } catch (error) {
      console.error("Error editing rating:", error);
    }
  };
}
