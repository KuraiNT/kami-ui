import styles from './Slide.module.scss';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SlideNav({ items }) {
    return (
        <div className={cx('container')}>
            <Link
                className={cx('image-nav')}
                style={{
                    backgroundImage: `url(${items.animeImg})`,
                }}
            ></Link>
        </div>
    );
}

export default SlideNav;
