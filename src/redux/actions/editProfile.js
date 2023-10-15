import axios from "axios";

export function editProfile(id, payload) {
  return async function () {
    try {
      const response = await axios.put(`/api/users/update/${id}`, payload);
      return response;
    } catch (error) {
      console.error("Error editing profile:", error);
    }
  };
}
