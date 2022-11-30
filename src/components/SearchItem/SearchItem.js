import styles from './SearchItem.module.scss';
import classNames from 'classnames/bind';
import { Image } from '~/components/Image';

const cx = classNames.bind(styles);

function SearchItem({ data }) {
    return (
        <div className={cx('search-item')}>
            <Image
                src={data.animeImg}
                alt={data.animeImg}
                className={cx('img')}
            />
            <span className={cx('title')}>{data.animeTitle}</span>
        </div>
    );
}

export default SearchItem;
