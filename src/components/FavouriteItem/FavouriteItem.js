import PropTypes from 'prop-types';

import styles from './FavouriteItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function FavouriteItem({ img, title, to, className }) {
    return (
        <Link to={to} className={cx('favourite-item', className)}>
            {img}
            <span className={cx('title')}>{title}</span>
        </Link>
    );
}

FavouriteItem.prototype = {
    img: PropTypes.node.isRequired,
    title: PropTypes.string,
    to: PropTypes.string,
    className: PropTypes.string,
};

export default FavouriteItem;
