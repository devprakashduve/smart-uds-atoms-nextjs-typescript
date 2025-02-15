import React from 'react';
import { SearchResultsTemplateProps } from './SearchResultsTemplateProps.interface';
import './SearchResultsTemplate.css';

const SearchResultsTemplate: React.FC<SearchResultsTemplateProps> = ({
  query,
  results,
  isLoading,
  totalResults,
  onPageChange,
  currentPage,
  children,
}) => {
  return (
    <div className="search-results-template">
      {/* Search Results Header */}
      <header className="header bg-blue-500 px-4 py-6 text-white">
        <h1 className="text-3xl font-semibold">Search Results</h1>
        <p className="text-lg">
          Showing results for: <span className="italic">{query}</span>
        </p>
      </header>

      {/* Search Results List */}
      <div className="results-container px-4 py-6">
        {isLoading ? (
          <div className="loader">Loading...</div>
        ) : results.length === 0 ? (
          <p>
            No results found for <strong>{query}</strong>
          </p>
        ) : (
          <ul className="results-list space-y-4">
            {results.map((result, index) => (
              <li
                key={index}
                className="result-item rounded border p-4 shadow-md"
              >
                {/* Render result item, customize based on your data */}
                <h2 className="text-xl font-semibold">{result.title}</h2>
                <p className="text-gray-700">{result.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination flex justify-center py-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="pagination-button mx-2 rounded-md bg-gray-200 px-4 py-2 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="page-info text-lg">
          Page {currentPage} of {Math.ceil(totalResults / 10)}
        </span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= Math.ceil(totalResults / 10)}
          className="pagination-button mx-2 rounded-md bg-gray-200 px-4 py-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Additional children content */}
      {children}
    </div>
  );
};

export default SearchResultsTemplate;
