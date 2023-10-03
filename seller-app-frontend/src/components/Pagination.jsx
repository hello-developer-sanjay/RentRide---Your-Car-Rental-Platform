/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

function Pagination({ currentPage, totalPages }) {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.min(totalPages, 10); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <Link to={`/page/${currentPage - 1}`} className="page-link">
          &laquo; Previous
        </Link>
      )}
      {pageNumbers.map((pageNumber) => (
        <Link
          key={pageNumber}
          to={`/page/${pageNumber}`}
          className={`page-link ${pageNumber === currentPage ? 'active' : ''}`}
        >
          {pageNumber}
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link to={`/page/${currentPage + 1}`} className="page-link">
          Next &raquo;
        </Link>
      )}
    </div>
  );
}

export default Pagination;
