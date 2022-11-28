import styles from './SearchItem.module.scss';
import classNames from 'classnames/bind';
import { Image } from '~/components/Image';

const cx = classNames.bind(styles);

function SearchItem() {
    return (
        <div className={cx('search-item')}>
            <Image
                src="https://gogocdn.net/images/anime/N/naruto.jpg"
                alt=""
                className={cx('img')}
            />
            <span className={cx('title')}>Naruto</span>
        </div>
    );
}

export default SearchItem;
