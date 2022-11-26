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

export default FavouriteItem;
