import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import './Slider.css';
import { classNames } from '@/Components/Utilities/componentsMethods';
const Slider = ({ min, max, value: initialValue, step = 1, onChange, setStep, disabled = false, className = 'h-2', border, background, }) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (event) => {
        const newValue = Number(event.target.value);
        setValue(newValue);
        onChange(newValue);
        setStep(newValue); // Update step based on the new value
    };
    const borderColor = 'border border-atom-input-/40 hover:border-atom-input focus:border-atom-input';
    const sliderClass = classNames(className, border ? borderColor : '', background ? '' : 'bg-atom-input');
    return (_jsxs("div", { className: "slider-container", children: [_jsx("input", { title: "slider", type: "range", min: min, max: max, value: value, step: step, onChange: handleChange, className: `slider-thumb ${disabled ? 'slider-disabled' : ''} ${sliderClass}`, disabled: disabled }), _jsx("div", { className: "slider-value", children: value })] }));
};
export default Slider;
//# sourceMappingURL=index.js.map