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
    const newAdminStatus = !adminStatus;
    setAdminStatus(newAdminStatus);
    toggleAdminStatus(id, newAdminStatus);
  };

  const handleToggleStatus = () => {
    const newStatus = !status;
    setStatus(newStatus);
    toggleStatus(id, newStatus);
  };

  const defaultImageUrl =
    "https://i.pinimg.com/originals/1d/2a/7b/1d2a7b6ecfa0afc3b7c854d3aad01f37.jpg";

  return (
    <div className="max-w-screen-sm mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-transform transform hover:-translate-y-1">
        <div className="flex flex-col items-center">
          <img
            className="w-32 h-32 rounded-full mb-2"
            src={photo_secure_url || defaultImageUrl}
            alt=""
          />
          <div className="text-lg font-medium text-gray-900 text-center">
            {name}
          </div>
          <div className="text-sm text-gray-500 text-center">{email}</div>
        </div>
        <div className="mt-4">
          <div className="flex mb-4">
            <p className="text-lg font-medium text-gray-500 text-center">
              Role:
            </p>
            <p className="text-lg font-semibold ml-2 text-gray-900 text-center">
              {adminStatus ? "Admin" : "User"}
            </p>
          </div>
          {status ? (
            <button
              onClick={handleToggleStatus}
              className="w-full px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded hover:bg-red-600"
            >
              Disabled
            </button>
          ) : (
            <button
              onClick={handleToggleStatus}
              className="w-full px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded hover:bg-green-600"
            >
              Enabled
            </button>
          )}
        </div>
        <div>
          <button
            type="button"
            onClick={handleToggleAdminStatus}
            className="w-full px-4 py-2 mt-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            {adminStatus ? "Remove Admin" : "Add Admin"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardUser;
