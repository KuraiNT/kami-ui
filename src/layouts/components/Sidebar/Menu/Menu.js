import PropTypes from 'prop-types';

import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Menu({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

Menu.prototype = {
    children: PropTypes.node.isRequired,
};

export default Menu;
