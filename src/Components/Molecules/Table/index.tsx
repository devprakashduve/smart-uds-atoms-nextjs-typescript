import React, { useState, useMemo } from 'react';
import { TableProps } from './TableProps.interface';
import Pagination from '@/Components/Molecules/Pagination';

type SortDirection = 'asc' | 'desc' | null;

const SortIcon = ({ direction }: { direction: SortDirection }) => {
  if (direction === 'asc')
    return <span aria-hidden="true" className="ml-1 text-xs">↑</span>;
  if (direction === 'desc')
    return <span aria-hidden="true" className="ml-1 text-xs">↓</span>;
  return <span aria-hidden="true" className="ml-1 text-xs opacity-40">↕</span>;
};

const Table = <T,>({
  data,
  columns,
  onRowClick,
  className,
  currentPage,
  pageSize,
  onPageChange,
  defaultSort,
}: TableProps<T>) => {
  const [sortKey, setSortKey] = useState<keyof T | null>(defaultSort?.key ?? null);
  const [sortDir, setSortDir] = useState<SortDirection>(defaultSort?.direction ?? null);

  const handleSort = (key: keyof T) => {
    if (sortKey === key) {
      setSortDir((prev) => (prev === 'asc' ? 'desc' : prev === 'desc' ? null : 'asc'));
      if (sortDir === 'desc') setSortKey(null);
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  const sortedData = useMemo(() => {
    if (!sortKey || !sortDir) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (aVal == null) return 1;
      if (bVal == null) return -1;
      const cmp = String(aVal).localeCompare(String(bVal), undefined, { numeric: true });
      return sortDir === 'asc' ? cmp : -cmp;
    });
  }, [data, sortKey, sortDir]);

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = sortedData.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(data.length / pageSize);

  return (
    <div className={`table-container overflow-x-auto ${className || ''}`}>
      <table className="min-w-full border-collapse border border-atom-btn/30">
        <thead className="bg-atom-btn/70 text-left">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className={`border-b border-atom-btn/30 px-4 py-4 text-sm font-semibold ${col.className || ''} ${col.sortable ? 'cursor-pointer select-none hover:bg-atom-btn/80' : ''}`}
                onClick={col.sortable ? () => handleSort(col.key) : undefined}
                aria-sort={
                  col.sortable && sortKey === col.key
                    ? sortDir === 'asc'
                      ? 'ascending'
                      : sortDir === 'desc'
                        ? 'descending'
                        : 'none'
                    : undefined
                }
              >
                <span className="inline-flex items-center">
                  {col.header}
                  {col.sortable && (
                    <SortIcon direction={sortKey === col.key ? sortDir : null} />
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`border-b border-atom-btn/30 transition-all hover:bg-atom-btn/30 ${onRowClick ? 'cursor-pointer' : ''}`}
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
