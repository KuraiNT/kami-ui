/* eslint-disable react/style-prop-object */
import styles from './Slide.module.scss';
import { Button } from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SlideItem({ data }) {
    return (
        <div className={cx('slide-item')}>
            <div
                className={cx('image')}
                style={{ backgroundImage: `url(${data.animeImg})` }}
            ></div>
            <div className={cx('body')}>
                <span className={cx('title')}>{data.animeTitle}</span>
                <Button
                    playBtn
                    to={`/@${data.animeTitle}`}
                    className={cx('play-btn')}
                    rightIcon={<FontAwesomeIcon icon={faPlay} />}
                >
                    Watch
                </Button>
            </div>
        </div>
    );
}

export default SlideItem;
