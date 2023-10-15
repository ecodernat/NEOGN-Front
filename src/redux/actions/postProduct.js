import axios from "axios";

export function postProduct(payload) {
  return async function () {
    console.log(payload);
    const response = await axios.post("/api/products/create", payload);
    return response;
  };
}
