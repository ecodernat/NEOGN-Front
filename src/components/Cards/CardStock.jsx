import { useState } from "react";

const CardStock = ({
  id,
  title,
  toggleStatus,
  image_url,
  isAvailable,
  stock,
}) => {
  const [status, setStatus] = useState(isAvailable);
  const [newStock, setNewStock] = useState(stock);

  const handleToggleStatus = () => {
    const newStatus = !status;
    setStatus(newStatus);
    toggleStatus(id, newStatus);
  };

  const handleStockChange = (event) => {
    const newStockValue = event.target.value;
    setNewStock(newStockValue);
  };

  const handleModifyStock = () => {
    toggleStatus(id, status, newStock);
  };

  return (
    <div className="max-w-screen-sm mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-transform transform hover:-translate-y-1">
        <div className="text-center">
          <img className="w-32  mx-auto mb-4" src={image_url} alt="" />
          <div className="text-lg font-medium text-gray-900">{title}</div>
        </div>
        <div className="text-center mt-4">
          {status ? (
            <button
              onClick={handleToggleStatus}
              className="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-[5px] hover:bg-green-600"
            >
              Enabled
            </button>
          ) : (
            <button
              onClick={handleToggleStatus}
              className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-[5px] hover:bg-red-600"
            >
              Disabled
            </button>
          )}
        </div>
        <div className="flex mt-4">
          <p className="text-lg font-medium text-gray-500">Stock:</p>
          <p className="text-lg font-semibold ml-2 text-gray-900">{stock}</p>
        </div>
        <div className="mt-4 text-center">
          <input
            className="w-full border p-2 rounded-lg"
            type="number"
            value={newStock}
            onChange={handleStockChange}
          />
          <button
            type="button"
            onClick={handleModifyStock}
            className="w-full mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-[5px] hover:bg-blue-500"
          >
            Modify Stock
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardStock;
