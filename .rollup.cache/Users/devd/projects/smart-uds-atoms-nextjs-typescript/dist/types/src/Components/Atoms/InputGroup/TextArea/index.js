import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import './TextArea.css';
const TextArea = ({ value = '', onChange, placeholder = '', disabled = false, maxLength, showCharCount = false, rows = 4, cols, autoFocus = false, readOnly = false, className = '', id, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, }) => {
    const [text, setText] = useState(value);
    const remainingChars = maxLength ? maxLength - text.length : 0;
    useEffect(() => {
        setText(value);
    }, [value]);
    const handleTextChange = (event) => {
        const newValue = event.target.value;
        if (maxLength && newValue.length > maxLength)
            return;
        setText(newValue);
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    };
    return (_jsxs("div", { className: "relative", children: [_jsx("textarea", { id: id, value: text, onChange: handleTextChange, placeholder: placeholder, disabled: disabled, maxLength: maxLength, rows: rows, cols: cols, autoFocus: autoFocus, readOnly: readOnly, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, "aria-describedby": showCharCount ? `${id}-char-count` : undefined, className: `textarea-base ${disabled ? 'textarea-disabled' : ''} ${className}` }), showCharCount && maxLength !== undefined && (_jsxs("div", { id: `${id}-char-count`, className: `char-count ${remainingChars <= 10 ? 'text-warning' : ''} ${remainingChars <= 0 ? 'text-error' : ''}`, children: [text.length, "/", maxLength] }))] }));
};
export default TextArea;
//# sourceMappingURL=index.js.map