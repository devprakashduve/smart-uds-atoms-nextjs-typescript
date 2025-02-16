import React from 'react';
import { classNames } from '@/Components/Utilities/componentsMethods';
import './Avatar.css';
import UDSImage from '../Image';
const Avatar = ({ src, alt, size = 16, className, width = 105, height = 105, circle = false, rounded = false, initials, status, }) => {
    const dynamicClasses = `overflow-hidden ${rounded ? 'rounded' : circle && 'rounded-full'} ${className ? className : ''}`.trim();
    const containerClasses = classNames(`w-${size} h-${size} relative`, dynamicClasses);
    const imgClasses = 'w-full h-full object-cover';
    const showImage = src;
    return (<div className={containerClasses}>
      {showImage ? (<UDSImage className={imgClasses} src={src} alt={alt} width={width} height={height}/>) : (<div className="flex h-full w-full items-center justify-center bg-atom-avatar-background font-semibold text-atom-avatar-text" role="img" aria-label={alt}>
          {initials}
        </div>)}
      {status && (<div data-testid="avatar-status" className={classNames(`absolute h-3 w-3 rounded-full border-2 border-white ${circle ? 'right-2 top-2' : 'right-1 top-1'}`, status === 'online' && 'bg-success', status === 'offline' && 'bg-neutral', status === 'away' && 'bg-warning', status === 'busy' && 'bg-error')}/>)}
    </div>);
};
export default Avatar;
