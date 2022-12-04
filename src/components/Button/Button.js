import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    children,
    playBtn = false,
    primary = false,
    text = false,
    small = false,
    large = false,
    medium = false,
    outline = false,
    leftIcon = false,
    rightIcon = false,
    rounded = false,
    className,
    ...props
}) {
    let Comp = 'button';

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        playBtn,
        text,
        small,
        large,
        medium,
        outline,
        rounded,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.prototype = {
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    playBtn: PropTypes.bool,
    text: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    medium: PropTypes.bool,
    outline: PropTypes.bool,
    leftIcon: PropTypes.node.isRequired,
    rightIcon: PropTypes.node.isRequired,
    rounded: PropTypes.bool,
    className: PropTypes.string,
};

export default Button;
