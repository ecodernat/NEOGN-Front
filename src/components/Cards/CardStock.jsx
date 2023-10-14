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
    console.log(id);
    const newStatus = !status;
    setStatus(newStatus);
    toggleStatus(id, newStatus);
  };

  const handleStockChange = (event) => {
    const newStockValue = event.target.value;
    setNewStock(newStockValue);
  };

  const handleModifyStock = () => {
    // Aquí debes llamar a la función toggleStatus con el nuevo valor de stock
    toggleStatus(id, status, newStock);
  };

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      <tr className="transition-all hover:bg-gray-100 hover:shadow-lg">
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <img className="w-10 h-10 rounded-full" src={image_url} alt="" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">{title}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          {status ? (
            <button
              onClick={() => handleToggleStatus(id, !status)}
              className="inline-flex px-4 py-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-[5px] hover:bg-green-600 hover:text-gray-100"
            >
              Enabled
            </button>
          ) : (
            <button
              onClick={() => handleToggleStatus(id, !status)}
              className="inline-flex px-4 py-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-[5px] hover:bg-red-600 hover:text-red-100"
            >
              Disabled
            </button>
          )}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {stock}
        </td>
        <td className="px-3 py-4 text-sm font-medium text-right whitespace-nowrap">
          <input
            className="border-2 mr-2 rounded-lg h-9 p-2"
            type="number"
            value={newStock}
            onChange={handleStockChange}
          />
          <button
            type="button"
            onClick={handleModifyStock}
            className="w-[auto] focus:outline-none text-gray-200 bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-2 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
          >
            Modify Stock
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default CardStock;
