import React from 'react';
import { TableProps } from './TableProps.interface';
import Pagination from '@/Components/Molecules/Pagination';

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
      <table className="min-w-full border-collapse border border-atom-btn/30">
        <thead className="bg-atom-btn/70 text-left">
          <tr>
            {columns.map((col) => (
              <th
                className={`border-b border-atom-btn/30 px-4 py-4 text-sm font-semibold ${col.className || ''}`}
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
              className="cursor-pointer border-b border-atom-btn/30 transition-all hover:bg-atom-btn/30"
              onClick={() => onRowClick?.(row)}
            >
              {columns.map((col) => (
                <td
                  key={String(col.key)}
                  className={`border-r border-atom-btn/30 px-4 py-2 ${col.className || ''}`}
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        className="mt-4 flex justify-center"
      />
    </div>
  );
};

export default Table;
