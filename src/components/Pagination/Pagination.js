import styles from './Pagination.module.scss';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Pagination({ nextPage, prevPage }) {
    return (
        <div className={cx('control')}>
            <button className={cx('btn-control')} onClick={prevPage}>
                <FontAwesomeIcon
                    className={cx('btn-icon')}
                    icon={faArrowLeft}
                />
            </button>
            <button className={cx('btn-control')} onClick={nextPage}>
                <FontAwesomeIcon
                    className={cx('btn-icon')}
                    icon={faArrowRight}
                />
            </button>
        </div>
    );
}

export default Pagination;
