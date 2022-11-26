import { Link } from 'react-router-dom';

import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuItem({ to, title, icon, className }) {
    return (
        <Link to={to} className={cx('menu-item', className)}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
            <span className={cx('ping')}></span>
        </Link>
    );
}

export default MenuItem;
