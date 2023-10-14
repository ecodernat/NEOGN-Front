import { Link } from "react-router-dom";

const FailureComponent = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-auto shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Payment Failed</h2>
        <p className="text-lg mb-6">Sorry, your payment was not approved.</p>
        <Link
          to="/"
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default FailureComponent;
