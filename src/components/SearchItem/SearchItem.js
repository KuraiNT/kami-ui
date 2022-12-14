import Proptypes from 'prop-types';

import styles from './SearchItem.module.scss';
import classNames from 'classnames/bind';
import { Image } from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SearchItem({ data, onClick }) {
    return (
        <Link
            onClick={onClick}
            className={cx('search-item')}
            to={`/@${data.animeTitle}`}
        >
            <Image
                src={data.animeImg}
                alt={data.animeImg}
                className={cx('img')}
            />
            <span className={cx('title')}>{data.animeTitle}</span>
        </Link>
    );
}

SearchItem.proptype = {
    data: Proptypes.object.isRequired,
};

export default SearchItem;
