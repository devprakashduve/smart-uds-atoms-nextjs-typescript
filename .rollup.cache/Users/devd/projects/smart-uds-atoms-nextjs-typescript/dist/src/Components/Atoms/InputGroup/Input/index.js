import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useCallback } from 'react';
import { InputSize, InputType } from './InputProps.interface';
import './Input.css';
import { classNames } from '@/Components/Utilities/componentsMethods';
import Label from '../../Label';
import Icon from '../../Icon';
const Input = ({ value: initialValue, onChange, placeholder = '', disabled = false, type, label, id, name, className, size = InputSize.MD, isRequired, rounded, roundedFull, showIcon = false, customIconSVG, customIconName, }) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState('');
    const [iconName, setIconName] = useState('');
    const [inputType, setInputType] = useState(type);
    const boxSize = {
        [InputSize.SM]: 'h-10',
        [InputSize.MD]: 'h-12',
        [InputSize.LG]: 'h-14',
    }[size];
    useEffect(() => {
        const iconMap = {
            [InputType.PASSWORD]: customIconName || 'openEye',
            [InputType.EMAIL]: customIconName || 'envelop',
            [InputType.TEL]: customIconName || 'phone',
            [InputType.TEXT]: customIconName || '',
            [InputType.NUMBER]: customIconName || '',
        };
        setIconName(iconMap[type] || '');
    }, [type, customIconName]);
    const validateInput = useCallback((value) => {
        if (isRequired && !value)
            return 'This field is required.';
        switch (type) {
            case InputType.EMAIL:
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value))
                    return 'Invalid email address.';
                break;
            case InputType.NUMBER:
                if (isNaN(Number(value)))
                    return 'Must be a number.';
                break;
            case InputType.TEL:
                const telRegex = /^\+?[1-9]\d{1,14}$/;
                if (!telRegex.test(value))
                    return 'Invalid phone number.';
                break;
            case InputType.PASSWORD:
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                if (!passwordRegex.test(value))
                    return 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
                break;
            default:
                break;
        }
        return '';
    }, [type, isRequired]);
    const handleChange = useCallback((e) => {
        const newValue = e.target.value;
        setValue(newValue);
        const errorMessage = validateInput(newValue);
        setError(errorMessage);
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    }, [onChange, validateInput]);
    const inputClass = classNames('w-full bg-atom-input-background placeholder:text-atom-input-text/40 text-atom-input-text text-sm border border-atom-input/40 hover:border-atom-input focus:border-atom-input pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none', className, boxSize, error && 'border border-error hover:border-error focus:border-error', rounded && 'rounded', roundedFull && 'rounded-full');
    return (_jsxs("div", { className: "relative w-full", children: [label && (_jsxs(Label, { className: "mb-2 block text-sm text-atom-input-text", htmlFor: name, children: [label, isRequired && _jsx("span", { className: "text-error", children: " *" })] })), _jsxs("div", { className: "relative", children: [_jsx("input", { title: name, type: inputType, id: id, name: name, value: value, onChange: handleChange, placeholder: placeholder, disabled: disabled, className: `${inputClass} ${disabled ? 'input-disabled' : ''} ${error ? 'input-error' : ''}`, required: isRequired }), showIcon && (_jsx("span", { className: "absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3", onClick: () => {
                            if (type === InputType.PASSWORD) {
                                setIconName(iconName === 'openEye' ? 'closeEye' : 'openEye');
                                setInputType(inputType === InputType.PASSWORD
                                    ? InputType.TEXT
                                    : InputType.PASSWORD);
                            }
                        }, children: customIconSVG ? (_jsx(Icon, { name: '', variant: 'outline', children: customIconSVG })) : (_jsx(Icon, { name: iconName, variant: 'outline' })) }))] }), error && _jsx("p", { className: "text-error", children: error })] }));
};
export default Input;
//# sourceMappingURL=index.js.map