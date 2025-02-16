import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { classNames } from '@/Components/Utilities/componentsMethods';
import Img from '../Img';
import './Avatar.css';
const Avatar = ({ src, alt, size = 16, className, width = 105, height = 105, circle = false, rounded = false, initials, status, }) => {
    const [imageError, setImageError] = useState(false);
    const dynamicClasses = `overflow-hidden ${rounded ? 'rounded' : circle && 'rounded-full'} ${className ? className : ''}`.trim();
    const containerClasses = classNames(`w-${size} h-${size} relative`, dynamicClasses);
    const imgClasses = 'w-full h-full object-cover';
    const showImage = src && !imageError;
    return (_jsxs("div", { className: containerClasses, children: [showImage ? (_jsx(Img, { className: imgClasses, src: src, alt: alt, width: width, height: height, onError: () => setImageError(true) })) : (_jsx("div", { className: "flex h-full w-full items-center justify-center bg-atom-avatar-background font-semibold text-atom-avatar-text", role: "img", "aria-label": alt, children: initials })), status && (_jsx("div", { "data-testid": "avatar-status", className: classNames(`absolute h-3 w-3 rounded-full border-2 border-white ${circle ? 'right-2 top-2' : 'right-1 top-1'}`, status === 'online' && 'bg-success', status === 'offline' && 'bg-neutral', status === 'away' && 'bg-warning', status === 'busy' && 'bg-error') }))] }));
};
export default Avatar;
//# sourceMappingURL=index.js.map