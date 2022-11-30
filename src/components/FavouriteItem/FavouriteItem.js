import PropTypes from 'prop-types';
import { Image } from '../Image';

import styles from './FavouriteItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function FavouriteItem({ data, className }) {
    return (
        <Link
            className={cx('favourite-item', className)}
            to={`/@${data.animeTitle}`}
        >
            <Image
                alt={data.animeImg}
                src={data.animeImg}
                className={cx('img')}
            />
            <span className={cx('title')}>{data.animeTitle}</span>
        </Link>
    );
}

FavouriteItem.prototype = {
    className: PropTypes.string,
};

export default FavouriteItem;
