import React from 'react';
import './Image.css';
import Image from 'next/image';
import { classNames } from '@/Components/Utilities/componentsMethods';
const UDSImage = ({ src, alt, width = 300, height = 300, className, }) => {
    const imageClasses = classNames('object-cover', className);
    return (<Image src={src} alt={alt} width={width} height={height} className={imageClasses}/>);
};
export default UDSImage;
//# sourceMappingURL=index.jsx.map