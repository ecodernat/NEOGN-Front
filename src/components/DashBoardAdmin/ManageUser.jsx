import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/slices/allUsersSlice";

import CardUser from "../Cards/CardUser";

const ManageUser = () => {
  const allUsers = useSelector((state) => state.allUsers.users);
  const dispatch = useDispatch();

  const getAllUsers = () => {
    return async function (dispatch) {
      try {
        const json = await axios.get("/api/users");
        const users = json.data;
        return dispatch(getUsers(users));
      } catch (error) {
        console.error("Error getting users:", error);
      }
    };
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const toggleAdminStatus = async (userId, newAdminStatus) => {
    try {
      await axios.put(`/api/users/update/${userId}`, {
        isAdmin: newAdminStatus,
      });
      dispatch(getAllUsers());
    } catch (error) {
      console.error("Error toggling admin status:", error);
    }
  };

  const toggleStatus = async (userId, newStatus) => {
    try {
      await axios.put(`/api/users/update/${userId}`, {
        isDisable: newStatus,
      });
      dispatch(getAllUsers());
    } catch (error) {
      console.error("Error toggling admin status:", error);
    }
  };

  return (
    <div className="w-auto flex justify-center flex-col ">
      <h3 className="mt-6 text-xl">Users</h3>
      <div className="flex flex-col mt-6 mb-20">
        <div className="px-2">
          {allUsers?.map((el) => (
            <CardUser
              key={el.id}
              id={el.id}
              toggleStatus={toggleStatus}
              toggleAdminStatus={toggleAdminStatus}
              name={el.name}
              email={el.email}
              image={el.photo_url}
              isAdmin={el.isAdmin}
              isDisable={el.isDisable}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
