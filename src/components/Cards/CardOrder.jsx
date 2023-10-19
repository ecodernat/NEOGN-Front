const CardOrder = ({ id, total }) => {
  return (
    <div className="max-w-screen-sm mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-transform transform hover:-translate-y-1">
        <div className="text-center">
          <div className="text-lg font-medium text-gray-900">
            Purchase Order
          </div>
          <p className="text-sm text-gray-500">ID de compra: {id}</p>
          <p className="text-sm text-gray-500">Total: {total}</p>
        </div>
      </div>
    </div>
  );
};

export default CardOrder;
