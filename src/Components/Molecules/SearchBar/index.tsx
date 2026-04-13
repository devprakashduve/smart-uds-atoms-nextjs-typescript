import React, { useState, useEffect } from 'react';
import { SearchBarProps } from './SearchBarProps.interface';
import './SearchBar.css';
import Input from '@/Components/Atoms/InputGroup/Input';
import CustomLink from '@/Components/Atoms/CustomLink';

const dummyData = [
  { name: 'Apple', href: '/apple' },
  { name: 'Banana', href: '/banana' },
  { name: 'Cherry', href: '/cherry' },
  { name: 'Date', href: '/date' },
  { name: 'Elderberry', href: '/elderberry' },
  { name: 'Fig', href: '/fig' },
  { name: 'Grape', href: '/grape' },
  { name: 'Honeydew', href: '/honeydew' },
];

const SearchBar: React.FC<SearchBarProps> = ({
  value = '',
  onChange,
  onSearch,
  className,
  noResultText = 'No result found',
  placeholder = 'Search...',
  data,
}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const [filteredData, setFilteredData] = useState<
    { name: string; href: string }[]
  >([]);

  useEffect(() => {
    if (inputValue.length >= 2) {
      const sourceData = data || dummyData;
      const results = sourceData.filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredData(results);
    } else {
      setFilteredData([]);
    }
  }, [inputValue, data]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(inputValue);
    }
  };

  return (
    <div className={` ${className || ''}`}>
      <Input
        type={'text'}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        name={'search'}
        showIcon={true}
        customIconName="search"
        placeholder={placeholder}
      />
      {inputValue.length >= 2 && (
        <ul>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <CustomLink href={item.href} underlineHover={false} key={index}>
                <li
                  className="border-b-menu-dark hover:bg-menu-light hover:text-menu-dark border-b p-2 hover:cursor-pointer"
                  key={index}
                >
                  {item.name}
                </li>
              </CustomLink>
            ))
          ) : (
            <li key={'noData'} className="p-2">
              {noResultText}
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
