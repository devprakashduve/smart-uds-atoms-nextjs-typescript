import { jsx as _jsx } from "react/jsx-runtime";
import './Label.css';
import { classNames } from '@/Components/Utilities/componentsMethods';
const Label = ({ children, htmlFor, className }) => {
    const labelClass = classNames(`label-base block`, className);
    return (_jsx("label", { htmlFor: htmlFor, className: labelClass, children: children }));
};
export default Label;
//# sourceMappingURL=index.js.map