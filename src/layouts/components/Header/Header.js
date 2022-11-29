import Search from '~/layouts/components/Search';
import { Button } from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faMoon, faUser } from '@fortawesome/free-regular-svg-icons';
import { Image } from '~/components/Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Button text>Welcome!</Button>
                <Search />
            </div>

            <Tippy
                visible
                interactive
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cx('account')} {...attrs}>
                        <PopperWrapper>
                            <AccountItem
                                className={cx('account-item')}
                                to={'/Profile'}
                                title="Your profile"
                                icon={<FontAwesomeIcon icon={faUser} />}
                            />
                            <AccountItem
                                className={cx('account-item')}
                                to={''}
                                title="Dark mode"
                                icon={<FontAwesomeIcon icon={faMoon} />}
                            />
                            <AccountItem
                                className={cx('account-item', 'active')}
                                to={''}
                                title="Log out"
                                icon={
                                    <FontAwesomeIcon
                                        icon={faArrowRightFromBracket}
                                    />
                                }
                            />
                        </PopperWrapper>
                    </div>
                )}
            >
                <Image
                    className={cx('avatar')}
                    src="https://i.pinimg.com/564x/2c/3c/74/2c3c74aee29dc33134fe311ba80e3ef8.jpg"
                />
            </Tippy>
            {/* <Button
                primary
                leftIcon={<FontAwesomeIcon icon={faArrowRightToBracket} />}
            >
                Login
            </Button> */}
        </div>
    );
}

export default Header;
