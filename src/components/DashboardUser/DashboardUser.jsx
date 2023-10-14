import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useAuth } from "../Account/Context/AuthContext";
import { clearUser, getUser } from "../../redux/slices/userSlice";
import NEOGN from "../../utils/images/Logo/NEOGN.png";
import ToggleDarkMode from "./ToggleDarkMode";
import { setLogin } from "../../redux/slices/LoginSlice";

const DashBoardUser = ({ handleThemeSwitch }) => {
  const auth = useAuth();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(setLogin({login:true}))
    if (auth.authReady) {
      const fetchDetail = async () => {
        try {
          setLoading(true);
          setError(null);

          const json = await axios.get(
            `http://localhost:3001/api/users/${auth.user.uid}`
          );
          if (!json) console.log("No existe en la db");
          const detail = json.data;
          dispatch(getUser(detail));
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchDetail();
    }
  }, [dispatch, auth.authReady, auth.user.uid]);

  const handleLogout = () => {
    auth.logout();
    dispatch(setLogin({login:false}));
    dispatch(clearUser());
  };

  return (
    <div className="h-full w-full flex flex-col gap-y-6 pt-10">
      <div className="w-auto h-auto flex items-center justify-between px-6">
        <div className="w-auto h-auto flex items-center gap-4">
          <img className="w-auto h-[32px]" src={NEOGN} />
          <h1 className="font-general-sans text-neutral-800 text-2xl font-semibold">
            Profile
          </h1>
        </div>
        <ToggleDarkMode handleThemeSwitch={handleThemeSwitch} />
      </div>
      <div className="w-full h-auto flex flex-col justify-center items-center gap-6">
        <div className="w-[120px] h-[120px] rounded-full flex items-center justify-center overflow-hidden">
          <img
            className="h-full w-full"
            src={
              user.photo
                ? user.photo
                : "https://cdn.icon-icons.com/icons2/3446/PNG/512/account_profile_user_avatar_icon_219236.png"
            }
          />
        </div>

        <h2 className="text-neutral-800 text-[21px] font-bold font-jakarta-sans">
          {user.name}
        </h2>
      </div>
      <div className="w-full p-2 flex justify-center items-center">
        <div className="w-4/5 h-[0px] border border-zinc-200"></div>
      </div>
      <div className="w-full h-auto gap-y-6 flex flex-col py-4 px-10">
        <Link
          to="/Account/EditProfile"
          className="w-auto h-auto flex items-center justify-between"
        >
          <div className="w-auto h-auto flex items-center gap-6">
            <img
              className="w-auto h-[24px]"
              src="https://www.svgrepo.com/show/497404/profile.svg"
            />
            <h1 className="font-general-sans text-neutral-800 text-lg font-medium">
              Edit Profile
            </h1>
          </div>
          <img
            className="w-auto h-[14px]"
            src="https://www.svgrepo.com/show/152459/right-thin-arrowheads.svg"
          />
        </Link>
        <Link
          to="/Account/Orders"
          className="w-auto h-auto flex items-center justify-between"
        >
          <div className="w-auto h-auto flex items-center gap-6">
            <img
              className="w-auto h-[24px]"
              src="https://www.svgrepo.com/show/221731/package-box.svg"
            />
            <h1 className="font-general-sans text-neutral-800 text-lg font-medium">
              Orders
            </h1>
          </div>
          <img
            className="w-auto h-[14px]"
            src="https://www.svgrepo.com/show/152459/right-thin-arrowheads.svg"
          />
        </Link>
        <Link
          to="/Wishlist"
          className="w-auto h-auto flex items-center justify-between"
        >
          <div className="w-auto h-auto flex items-center gap-6">
            <img
              className="w-auto h-[24px]"
              src="https://www.svgrepo.com/show/444723/heart.svg"
            />
            <h1 className="font-general-sanstext-neutral-800 text-lg font-medium">
              Wishlist
            </h1>
          </div>
          <img
            className="w-auto h-[14px]"
            src="https://www.svgrepo.com/show/152459/right-thin-arrowheads.svg"
          />
        </Link>
        <div className="w-auto h-auto flex items-center justify-between">
          <button
            className="w-auto h-auto flex items-center gap-6"
            onClick={() => handleLogout()}
          >
            <img
              className="w-auto h-[24px]"
              src="https://i.postimg.cc/GhXz4YRz/logout-svgrepo-com.png"
            />
            <h1 className="font-general-sans text-red-500 text-lg font-medium">
              Logout
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashBoardUser;
