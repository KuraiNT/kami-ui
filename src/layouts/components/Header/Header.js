import Search from '~/layouts/components/Search';
import { Button } from '~/components/Button';

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
            <Button primary>Login</Button>
        </div>
    );
}

export default Header;
