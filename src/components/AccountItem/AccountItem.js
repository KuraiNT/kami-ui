import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styles from './Account.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AccountItem({ data, className }) {
    return (
        <Link
            to={data.to}
            className={cx(
                'account-item',
                className,
                data.separate && 'separate',
            )}
        >
            <span className={cx('icon')}>{data.icon}</span>
            <span className={cx('title')}>{data.title}</span>
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
