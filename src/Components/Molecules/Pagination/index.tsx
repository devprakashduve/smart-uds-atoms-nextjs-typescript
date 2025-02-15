import React from 'react';
import { PaginationProps } from './PaginationProps.interface';
import './Pagination.css';
import Button from '@/Components/Atoms/Button';
import Icon from '@/Components/Atoms/Icon';

const PaginationButton: React.FC<{
  onClick: () => void;
  disabled: boolean;
  className: string;
  children: React.ReactNode;
}> = ({ onClick, disabled, className, children }) => (
  <Button className={className} onClick={onClick} disabled={disabled}>
    {children}
  </Button>
);

const PageNumberButton: React.FC<{
  page: number;
  currentPage: number;
  onClick: (page: number) => void;
}> = ({ page, currentPage, onClick }) => (
  <Button
    key={page}
    variant="outline"
    className={`${page === currentPage ? 'active' : ''}`}
    onClick={() => onClick(page)}
  >
    {page}
  </Button>
);

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => {
  const handleClick = (page: number) => {
    if (page !== currentPage && page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);

    let startPage = Math.max(1, currentPage - halfMaxPagesToShow);
    let endPage = Math.min(totalPages, currentPage + halfMaxPagesToShow);

    if (currentPage <= halfMaxPagesToShow) {
      endPage = Math.min(totalPages, maxPagesToShow);
    } else if (currentPage + halfMaxPagesToShow >= totalPages) {
      startPage = Math.max(1, totalPages - maxPagesToShow + 1);
    }

    if (startPage > 1) {
      pages.push(
        <PageNumberButton
          key={1}
          page={1}
          currentPage={currentPage}
          onClick={handleClick}
        />
      );
      if (startPage > 2) {
        pages.push(<span key="start-ellipsis">...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PageNumberButton
          key={i}
          page={i}
          currentPage={currentPage}
          onClick={handleClick}
        />
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(<span key="end-ellipsis">...</span>);
      }
      pages.push(
        <PageNumberButton
          key={totalPages}
          page={totalPages}
          currentPage={currentPage}
          onClick={handleClick}
        />
      );
    }

    return pages;
  };

  return (
    <div className={`pagination-container ${className || ''}`}>
      <PaginationButton
        className="pagination-button previous"
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span className="sr-only">Previous</span>
        <Icon
          aria-hidden="true"
          className="text-primary-light"
          name={'chevronLeft'}
          variant={'outline'}
        />
      </PaginationButton>
      {renderPageNumbers()}
      <PaginationButton
        className="pagination-button next"
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span className="sr-only">Next</span>
        <Icon
          aria-hidden="true"
          className="text-primary-light"
          name={'chevronRight'}
          variant={'outline'}
        />
      </PaginationButton>
    </div>
  );
};

export default Pagination;
