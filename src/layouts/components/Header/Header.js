import Search from '~/layouts/components/Search';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h3 className={cx('heading')}>Welcome!</h3>
                <Search />
            </div>
            <button>Login</button>
        </div>
    );
}

export default Header;
