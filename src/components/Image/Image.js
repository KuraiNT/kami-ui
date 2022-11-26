import PropTypes from 'prop-types';

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

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
};

export default Image;
