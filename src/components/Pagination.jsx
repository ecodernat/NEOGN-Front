
const Pagination = ({allProducts, currentPage, productsPerPage, handlePagination}) => {
  const startIndex =(currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = allProducts ? allProducts.slice(startIndex, endIndex) : [];

  return (
    <div className="mt-4">
    <div className="grid grid-cols-2 gap-4">
      {displayedProducts.map((product) => (
        <div key={product.id} className="border p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-500">{product.description}</p>
          <p className="text-blue-500 mt-2">${product.price}</p>
        </div>
      ))}
    </div>
    <div className="mt-4">
      <button
        onClick={() => {
          if (currentPage > 1) {
            handlePagination(currentPage - 1);
          }
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
      >
        Anterior
      </button>
      <button
        onClick={() => {
          if (allProducts && currentPage < Math.ceil(allProducts.length / productsPerPage)) {
            handlePagination(currentPage + 1);
          }
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Siguiente
      </button>
    </div>
  </div>
);
};

export default Pagination;
