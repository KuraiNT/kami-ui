import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AccountItem({ to, title, icon, className }) {
    return (
        <Link to={to} className={cx('account-item', className)}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
        </Link>
    );
}

AccountItem.prototype = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired,
};

export default AccountItem;
