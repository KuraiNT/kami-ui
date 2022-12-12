import styles from './MovieItem.module.scss';

import classNames from 'classnames/bind';
import { Image } from '../Image';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

const cx = classNames.bind(styles);

function MovieItem({ data }) {
    return (
        <Link className={cx('movie-item')} to={`/@${data.animeTitle}`}>
            <Image alt="" className={cx('image')} src={data.animeImg} />
            <Button medium className={cx('episodes')}>
                ep.{data.episodeNum}
            </Button>
            <div className={cx('bottom')}>
                <span className={cx('title')}>{data.animeTitle}</span>
            </div>
        </Link>
    );
}

export default MovieItem;
