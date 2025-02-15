import { useState, useEffect } from 'react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';
import Avatar from '../../Avatar';
import { Item, SelectMenusProps } from './SelectMenus.interface';

const sizeClasses = {
  sm: 'py-1.5 pl-2 pr-6 text-sm',
  md: 'py-2 pl-3 pr-8 text-base',
  lg: 'py-3 pl-4 pr-10 text-lg',
};

const iconSizes = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
};

const SelectMenus: React.FC<SelectMenusProps> = ({
  items,
  defaultSelected,
  value,
  label,
  size = 'md',
  disabled = false,
  required = false,
  error = false,
  rounded = true,
  roundedFull = false,
  className = '',
  onChange,
  placeholder = 'Select an option', // New default value
}) => {
  const [selected, setSelected] = useState<Item>(defaultSelected || items[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const hasItems = items.length > 0;

  useEffect(() => {
    if (value !== undefined) setSelected(value);
  }, [value]);

  const handleSelect = (item: Item) => {
    if (disabled || !hasItems) return;
    setSelected(item);
    setIsTouched(true);
    setIsOpen(false);
    onChange?.(item);
  };

  const showError = error && (isTouched || !!selected);
  const isEmpty = !selected || selected.name === placeholder;
  const shouldShowRequiredError = required && isEmpty && isTouched;
  const borderRadiusClass = roundedFull
    ? 'rounded-full'
    : rounded
      ? 'rounded'
      : '';

  return (
    <div className={`min-w-[200px] ${className}`}>
      {label && (
        <label
          htmlFor="select-menus-input"
          className={`text-letter-default mb-1 block font-medium ${
            size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base'
          }`}
        >
          {label}
          {required && <span className="ml-1 text-error">*</span>}
        </label>
      )}

      <div className="relative mt-2">
        <button
          id="select-menus-input"
          onClick={() => setIsOpen(!isOpen)}
          disabled={disabled || !hasItems}
          className={`grid w-full cursor-default grid-cols-1 border transition-all ${borderRadiusClass} ${sizeClasses[size]} ${
            disabled || !hasItems
              ? 'cursor-not-allowed border-line-light bg-gray-100 text-letter-light'
              : error && showError
                ? 'hover:border-error-dark focus:border-error-dark cursor-pointer border-error'
                : 'cursor-pointer border-line-light hover:border-line-dark focus:border-line focus:shadow-md'
          }`}
        >
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            {selected.avatar && (
              <Avatar
                alt={selected.name}
                src={selected.avatar}
                size={5}
                circle
              />
            )}
            <span className="block truncate">
              {isEmpty ? placeholder : selected.name}
            </span>
          </span>
          <ChevronUpDownIcon
            aria-hidden="true"
            className={`col-start-1 row-start-1 size-5 self-center justify-self-end ${iconSizes[size]}`}
          />
        </button>

        {isOpen && (
          <ul className="absolute z-50 max-h-56 w-full overflow-auto border border-l-0 border-r-0 border-t-0 border-b-line-light bg-white py-1 text-base sm:text-sm">
            {items.map((item) => (
              <li
                key={item.id}
                onClick={() => handleSelect(item)}
                className={`group relative mt-1 cursor-default select-none py-2 pl-3 pr-9 hover:bg-line-dark ${
                  selected.id === item.id
                    ? 'bg-line-dark text-letter-light'
                    : ''
                }`}
              >
                <div className="flex items-center">
                  {item.avatar && (
                    <Avatar src={item.avatar} alt={item.name} size={5} circle />
                  )}
                  <span className="ml-3 block truncate font-normal">
                    {item.name}
                  </span>
                </div>

                {selected.id === item.id && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-line-dark">
                    <CheckIcon aria-hidden="true" className="size-5" />
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {shouldShowRequiredError && (
        <p className="mt-1 text-sm text-error">This field is required</p>
      )}
    </div>
  );
};

export default SelectMenus;
