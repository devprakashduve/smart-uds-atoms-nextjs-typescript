import React, { useState } from 'react';
import { DataTableProps } from './DataTableProps.interface';
import './DataTable.css';

const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  onSort,
  onPageChange,
  currentPage = 1,
  totalPages = 1,
}) => {
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(
    null
  );
  const [sortColumn, setSortColumn] = useState<string | null>(null);

  const handleSort = (columnId: string) => {
    const direction =
      sortColumn === columnId && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(direction);
    setSortColumn(columnId);
    if (onSort) onSort(columnId, direction);
  };

  const handlePageChange = (page: number) => {
    if (onPageChange) onPageChange(page);
  };

  // Sort the data based on the column and direction
  const sortedData = React.useMemo(() => {
    if (!sortColumn || sortDirection === null) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortColumn, sortDirection]);

  return (
    <div className="data-table">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.id}
                className="cursor-pointer px-4 py-2"
                onClick={() => column.sortable && handleSort(column.id)}
              >
                {column.label}
                {column.sortable &&
                  sortColumn === column.id &&
                  (sortDirection === 'asc' ? ' ↑' : ' ↓')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t">
              {columns.map((column) => (
                <td key={column.id} className="px-4 py-2">
                  {row[column.id]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-l bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-r bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
