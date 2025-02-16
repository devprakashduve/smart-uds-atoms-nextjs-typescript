import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import Avatar from '../../Avatar';
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
const SelectMenus = ({ items, defaultSelected, value, label, size = 'md', disabled = false, required = false, error = false, className = '', onChange, placeholder = 'Select an option', // New default value
 }) => {
    const [selected, setSelected] = useState(defaultSelected || items[0]);
    const [isOpen, setIsOpen] = useState(false);
    const [isTouched, setIsTouched] = useState(false);
    const hasItems = items.length > 0;
    useEffect(() => {
        if (value !== undefined)
            setSelected(value);
    }, [value]);
    const handleSelect = (item) => {
        if (disabled || !hasItems)
            return;
        setSelected(item);
        setIsTouched(true);
        setIsOpen(false);
        onChange === null || onChange === void 0 ? void 0 : onChange(item);
    };
    const showError = error && (isTouched || !!selected);
    const isEmpty = !selected || selected.name === placeholder;
    const shouldShowRequiredError = required && isEmpty && isTouched;
    return (_jsxs("div", { className: `w-full ${className}`, children: [label && (_jsxs("label", { htmlFor: "select-menus-input", className: `text-atom-input-text-default mb-1 block font-medium ${size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base'}`, children: [label, required && _jsx("span", { className: "ml-1 text-error", children: "*" })] })), _jsxs("div", { className: "relative mt-2", children: [_jsxs("button", { onClick: () => setIsOpen(!isOpen), disabled: disabled || !hasItems, className: `grid w-full cursor-default grid-cols-1 rounded-input border bg-atom-input-background transition-all ${sizeClasses[size]} ${disabled || !hasItems
                            ? 'text-atom--input-text/40 cursor-not-allowed border-atom-input/40 bg-atom-input-background/20'
                            : error && showError
                                ? 'cursor-pointer border-error hover:border-error focus:border-error'
                                : 'cursor-pointer border-atom-input/40 hover:border-atom-input focus:border-atom-input focus:shadow-md'}`, children: [_jsxs("span", { className: "col-start-1 row-start-1 flex items-center gap-3 pr-6", children: [selected.avatar && (_jsx(Avatar, { alt: selected.name, src: selected.avatar, size: 5, circle: true })), _jsx("span", { className: "block truncate", children: isEmpty ? placeholder : selected.name })] }), _jsx(ChevronUpDownIcon, { "aria-hidden": "true", className: `col-start-1 row-start-1 size-5 self-center justify-self-end ${iconSizes[size]}` })] }), isOpen && (_jsx("ul", { className: "absolute z-50 max-h-56 w-full overflow-auto rounded-input border border-l-0 border-r-0 border-t-0 border-b-atom-input/40 bg-atom-input-background py-1 text-base sm:text-sm", children: items.map((item) => (_jsx("li", { onClick: () => handleSelect(item), className: `group relative mt-1 cursor-default select-none py-2 pl-3 pr-9 hover:bg-atom-input ${selected.id === item.id
                                ? 'text-atom--input-text/40 bg-atom-input'
                                : ''}`, children: _jsxs("div", { className: "flex items-center", children: [item.avatar && (_jsx(Avatar, { src: item.avatar, alt: item.name, size: 5, circle: true })), _jsx("span", { className: "ml-3 block truncate font-normal", children: item.name })] }) }, item.id))) }))] }), shouldShowRequiredError && (_jsx("p", { className: "mt-1 text-sm text-error", children: "This field is required" }))] }));
};
export default SelectMenus;
//# sourceMappingURL=index.js.map