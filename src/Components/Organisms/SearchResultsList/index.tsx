import React from 'react';
import { SearchResultListProps } from './SearchResultsListProps.interface';
import './SearchResultsList.css';

const SearchResultList: React.FC<SearchResultListProps> = ({
  results,
  isLoading,
  totalResults,
  currentPage,
  totalPages,
  onPageChange,
  onResultClick,
}) => {
  const handlePageChange = (page: number) => {
    if (onPageChange) onPageChange(page);
  };

  const handleResultClick = (id: string) => {
    if (onResultClick) onResultClick(id);
  };

  return (
    <div className="search-result-list">
      <h2 className="mb-4 text-xl font-bold">
        Search Results ({totalResults})
      </h2>

      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul className="result-list">
          {results.map((result) => (
            <li
              key={result.id}
              className="result-item"
              onClick={() => handleResultClick(result.id)}
            >
              <div className="result-image">
                {result.imageUrl && (
                  <img src={result.imageUrl} alt={result.title} />
                )}
              </div>
              <div className="result-content">
                <h3 className="result-title">{result.title}</h3>
                <p className="result-description">{result.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="pagination-page">{currentPage}</span>
          <button
            className="pagination-button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchResultList;
