import { forwardRef, useState } from 'react';
import classNames from 'classnames';

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    return (
        <img
            ref={ref}
            src={fallback || src}
            alt={alt}
            className={classNames(className)}
            {...props}
        />
    );
});

export default Image;
