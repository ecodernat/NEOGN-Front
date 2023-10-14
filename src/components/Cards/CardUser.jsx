import { useState } from "react";

const CardUser = ({
  id,
  name,
  toggleStatus,
  toggleAdminStatus,
  photo_secure_url,
  email,
  isAdmin,
  isDisable,
}) => {
  const [adminStatus, setAdminStatus] = useState(isAdmin);
  const [status, setStatus] = useState(isDisable);

  const handleToggleAdminStatus = () => {
    console.log(id);
    const newAdminStatus = !adminStatus;
    setAdminStatus(newAdminStatus);
    toggleAdminStatus(id, newAdminStatus);
  };

  const handleToggleStatus = () => {
    console.log(id);
    const newStatus = !status;
    setStatus(newStatus);
    toggleStatus(id, newStatus);
  };

  const defaultImageUrl =
    "https://i.pinimg.com/originals/1d/2a/7b/1d2a7b6ecfa0afc3b7c854d3aad01f37.jpg";

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      <tr className="transition-all hover:bg-gray-100 hover:shadow-lg">
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <img
                className="w-10 h-10 rounded-full"
                src={photo_secure_url || defaultImageUrl}
                alt=""
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">{name}</div>
              <div className="text-sm text-gray-500">{email}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          {status ? (
            <button
              onClick={handleToggleStatus}
              className="min-w-[80px] inline-flex px-4 py-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-[5px] hover:bg-green-600 hover:text-gray-100"
            >
              Disabled
            </button>
          ) : (
            <button
              onClick={handleToggleStatus}
              className="min-w-[80px] inline-flex px-4 py-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-[5px] hover:bg-red-600 hover:text-red-100"
            >
              Enabled
            </button>
          )}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {adminStatus === true ? "Admin" : "User"}
        </td>
        <td className="px-3 py-4 text-sm font-medium flex justify-center items-center">
          {adminStatus ? (
            <button
              type="button"
              className="min-w-[115px] w-[auto] focus:outline-none text-gray-200 bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={handleToggleAdminStatus}
            >
              Remove Admin
            </button>
          ) : (
            <button
              type="button"
              className="min-w-[115px] w-[auto] focus:outline-none text-gray-200 bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
              onClick={handleToggleAdminStatus}
            >
              Add Admin
            </button>
          )}
        </td>
      </tr>
    </tbody>
  );
};

export default CardUser;
