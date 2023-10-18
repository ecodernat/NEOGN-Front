import { useState } from "react";
import { Link } from "react-router-dom";

const CardProduct = ({ title, image_url, toggleStatus, isAvailable, id }) => {
  const [status, setStatus] = useState(isAvailable);

  const handleToggleStatus = () => {
    const newStatus = !status;
    setStatus(newStatus);
    toggleStatus(id, newStatus);
  };
  return (
    <div className="font-general-sans w-[230px] h-[auto] bg-white flex justify-center items-center flex-col rounded-2xl gap-y-4 shadow-xl p-3 ">
      <div className="w-[200px] h-[47px] text-center text-bg-neutral-800 text-md font-bold leading-normal line-clamp-2">
        {title}
      </div>
      <div className="flex center justify-center w-[100px] h-[100px]">
        <img className="w-auto rounded-[9px] " src={image_url} />
      </div>
      <div className="w-full h-auto flex justify-center items-center gap-4">
        <Link to={`/Admin/Products-To-Modify/${id}`}>
          <button className="px-4 py-1 min-w-[80px] bg-neutral-800 rounded-[7px] justify-center items-center inline-flex text-white font-semibold hover:text-white hover:bg-blue-500">
            Edit
          </button>
        </Link>
        {/* <button
          onClick={() => handleToggleStatus}
          className="px-4 py-1 bg-neutral-800 rounded-[7px] justify-center items-center inline-flex text-white font-semibold hover:bg-red-500 hover:text-white"
        >
          Delete
        </button> */}
        {status ? (
          <button
            onClick={handleToggleStatus}
            className="min-w-[80px] inline-flex px-4 py-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-[5px] hover:bg-green-600 hover:text-gray-100"
          >
            Available
          </button>
        ) : (
          <button
            onClick={handleToggleStatus}
            className="min-w-[80px] inline-flex px-4 py-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-[5px] hover:bg-red-600 hover:text-red-100"
          >
            No Available
          </button>
        )}
      </div>
    </div>
  );
};

export default CardProduct;
