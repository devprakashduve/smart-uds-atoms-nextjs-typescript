import React from 'react';
import { TableProps } from './TableProps.interface';
import './Table.css';

const Table = <T,>({ data, columns, onRowClick, className }: TableProps<T>) => {
  return (
    <table className={`custom-table ${className || ''}`}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={String(col.key)}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className="table-row"
            onClick={() => onRowClick?.(row)}
          >
            {columns.map((col) => (
              <td key={String(col.key)}>
                {col.render
                  ? col.render(row[col.key], row)
                  : (row[col.key] as React.ReactNode)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
