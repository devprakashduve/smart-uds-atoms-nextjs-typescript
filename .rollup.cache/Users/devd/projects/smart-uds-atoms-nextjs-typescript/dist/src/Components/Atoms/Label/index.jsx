import React from 'react';
import './Label.css';
import { classNames } from '@/Components/Utilities/componentsMethods';
const Label = ({ children, htmlFor, className }) => {
    const labelClass = classNames(`label-base block`, className);
    return (<label htmlFor={htmlFor} className={labelClass}>
      {children}
    </label>);
};
export default Label;
//# sourceMappingURL=index.jsx.map