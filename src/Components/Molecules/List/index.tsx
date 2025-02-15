import React from 'react';
import { ListProps } from './ListProps.interface';
import './List.css';

const List = <T,>({ items, renderItem, className }: ListProps<T>) => {
  return (
    <ul className={`list-container ${className || ''}`}>
      {items.map((item, index) => (
        <li key={index} className="list-item">
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
};

export default List;
