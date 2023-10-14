import axios from "axios";

export function postProduct(payload) {
  return async function () {
    console.log(payload);
    const response = await axios.post(
      "https://neogn-back.up.railway.app/api/products/create",
      payload
    );
    return response;
  };
}
