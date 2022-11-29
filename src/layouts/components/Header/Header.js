import Search from '~/layouts/components/Search';
import { Button } from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faMoon, faUser } from '@fortawesome/free-regular-svg-icons';
import { Image } from '~/components/Image';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { AccountMenu } from '~/components/AccountItem';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        to: '/profile',
        title: 'Your profile',
        icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
        to: '',
        title: 'Dark mode',
        icon: <FontAwesomeIcon icon={faMoon} />,
    },
    {
        to: '',
        title: 'Log out',
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        separate: true,
    },
];

function Header() {
    const currentUser = false;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Button text>Welcome!</Button>
                <Search />
            </div>

            {currentUser ? (
                <AccountMenu items={MENU_ITEMS}>
                    <Image
                        className={cx('avatar')}
                        src="https://i.pinimg.com/564x/2c/3c/74/2c3c74aee29dc33134fe311ba80e3ef8.jpg"
                    />
                </AccountMenu>
            ) : (
                <Button
                    primary
                    leftIcon={<FontAwesomeIcon icon={faArrowRightToBracket} />}
                >
                    Login
                </Button>
            )}
        </div>
    );
}

export default Header;
