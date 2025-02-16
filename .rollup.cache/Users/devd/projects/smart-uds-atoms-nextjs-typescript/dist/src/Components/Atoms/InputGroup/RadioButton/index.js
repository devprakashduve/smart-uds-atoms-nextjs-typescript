import { __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useId } from 'react';
import './RadioButton.css';
import Label from '../../Label';
import { classNames } from '@/Components/Utilities/componentsMethods';
const RadioButton = (_a) => {
    var { initialChecked = false, onChange, label, name, size, title, disabled = false, id, className, labelClassNames = '' } = _a, props = __rest(_a, ["initialChecked", "onChange", "label", "name", "size", "title", "disabled", "id", "className", "labelClassNames"]);
    const [checked, setChecked] = useState(initialChecked);
    const generatedId = useId();
    const radioId = id || generatedId;
    const handleChange = (event) => {
        setChecked(event.target.checked);
        onChange === null || onChange === void 0 ? void 0 : onChange(event.target.checked);
    };
    const radioClass = classNames(className);
    const getSizeClasses = () => {
        switch (size) {
            case 'lg':
                return { input: 'h-8 w-8', indicator: 'h-4 w-4' };
            case 'md':
                return { input: 'h-6 w-6', indicator: 'h-3 w-3' };
            case 'sm':
            default:
                return { input: 'h-4 w-4', indicator: 'h-1/2 w-1/2' };
        }
    };
    const { input: inputSize, indicator: indicatorSize } = getSizeClasses();
    return (_jsxs("div", { className: "inline-flex items-center", children: [_jsxs("div", { className: "relative flex cursor-pointer items-center", children: [_jsx("input", Object.assign({}, props, { id: radioId, title: title || name, checked: checked, name: name, onChange: handleChange, type: "radio", disabled: disabled, className: `peer ${inputSize} z-auto ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} appearance-none rounded-full border border-atom-input checked:border-atom-input hover:border-atom-input/40 ${radioClass}` })), _jsx("span", { className: `absolute left-1/2 top-1/2 z-[-9] ${indicatorSize} -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-atom-input-text opacity-0 transition-opacity duration-200 peer-checked:opacity-100 ${disabled ? 'bg-opacity-50' : ''}` })] }), label && (_jsx(Label, { htmlFor: radioId, className: `mx-2 ${labelClassNames} ${disabled ? 'opacity-50' : ''}`, children: label }))] }));
};
export default RadioButton;
//# sourceMappingURL=index.js.map