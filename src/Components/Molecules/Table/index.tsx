import React from 'react';
import { TableProps } from './TableProps.interface';
import Button from '@/Components/Atoms/Button';
// import './Table.css';

const Table = <T,>({
  data,
  columns,
  onRowClick,
  className,
  currentPage,
  pageSize,
  onPageChange,
}: TableProps<T>) => {
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = data.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(data.length / pageSize);

  return (
    <div className={`table-container ${className || ''}`}>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100 text-left">
          <tr>
            {columns.map((col) => (
              <th
                className={`border-b border-gray-300 px-4 py-2 text-sm font-semibold ${col.className || ''}`}
                key={String(col.key)}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="cursor-pointer border-b border-gray-300 transition-all hover:bg-blue-50"
              onClick={() => onRowClick?.(row)}
            >
              {columns.map((col) => (
                <td
                  key={String(col.key)}
                  className={`border-r border-gray-300 px-4 py-2 ${col.className || ''}`}
                >
                  {col.render
                    ? col.render(row[col.key], row)
                    : (row[col.key] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-controls mt-4 flex justify-center">
        <Button
          className="mx-1 rounded border border-gray-300 px-4 py-2"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            className={`mx-1 rounded border border-gray-300 px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          className="mx-1 rounded border border-gray-300 px-4 py-2"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Table;
