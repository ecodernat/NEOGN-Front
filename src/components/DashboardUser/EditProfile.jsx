import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { editProfile } from "../../redux/actions/editProfile";
import { useAuth } from "../Account/Context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../redux/slices/userSlice";
import TitleSection from "../TitleSection";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const auth = useAuth();
  const navigate = useNavigate();

  const { uid } = auth.user;

  const [input, setInput] = useState({
    username: "",
    name: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (user) {
      setInput({
        username: user.username,
        name: user.name,
        address: user.address,
      });
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(event);
      await dispatch(editProfile(uid, input));
      await dispatch(getUser(input));
      toast.success("Your profile was successfully updated.");
      navigate("/Account/EditProfile");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while updating your profile.");
    }
  };

  return (
    <div className="flex flex-col w-full h-auto pt-6">
      <TitleSection title="Edit Profile" location="/Account"/>
        <form 
        className="w-full h-auto p-10"
        onSubmit={(event) => handleSubmit(event)}>
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                type="text"
                value={input.username || ""}
                name="username"
                id="username"
                placeholder="Type your username"
                onChange={(e) => handleChange(e)}
                autoComplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg block w-full p-2.5  dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={input.name || ""}
                id="name"
                placeholder="Type your name"
                onChange={(e) => handleChange(e)}
                autoComplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg block w-full p-2.5  dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                required=""
              />
            </div>

            <div>
              <label
                htmlFor="genre"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address
              </label>
              <input
                type="text"
                value={input.address || ""}
                name="address"
                id="address"
                placeholder="Type your address"
                onChange={(e) => handleChange(e)}
                autoComplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg block w-full p-2.5  dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="size"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <label
                type="text"
                autoComplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg block w-full p-2.5  dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                required=""
              >
                {user.email}
              </label>
            </div>
          </div>
          <div className="flex justify-center pt-10">
            <button
              type="submit"
              className="h-[50px] flex w-full text-white justify-center items-center bg-rose-500 rounded-[25px] hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-neutral-500 font-medium text-sm px-5 py-2.5 text-center dark:text-black dark:bg-gray-200 dark:hover:bg-white"
            >
              Edit Profile
            </button>
          </div>
        </form>
        <Toaster />
      </div>
  );
};
export default Profile;
