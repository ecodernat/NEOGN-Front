import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/slices/FilterParamsSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const filterParams = useSelector((state) => state.filterParams);
  const totalPages = filterParams.totalPages;

  const handlePrevClick = () => {
    if (currentPage > 1) {
      dispatch(setPage({ page: currentPage - 1 }));
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      dispatch(setPage({ page: currentPage + 1 }));
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center gap-2 items-center">
      <a
        href="#"
        className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        onClick={() => {
          if (currentPage > 1) {
            handlePrevClick();
          }
        }}
      >
        <span className="sr-only">Prev Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <p className="text-gray-900">{currentPage}</p>
      <a
        href="#"
        className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        onClick={() => {
          handleNextClick();
        }}
      >
        <span className="sr-only">Next Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
};

export default Pagination;
