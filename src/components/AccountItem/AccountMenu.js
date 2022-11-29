import PropTypes from 'prop-types';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import AccountItem from './AccountItem';

import styles from './Account.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AccountMenu({ children, items = [] }) {
    const renderItem = () => {
        return items.map((item, index) => {
            return <AccountItem key={index} data={item} />;
        });
    };

    return (
        <Tippy
            delay={[0, 700]}
            offset={[0, 8]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('account')} {...attrs}>
                    <PopperWrapper>{renderItem()}</PopperWrapper>
                    <div className={cx('arrow')} data-popper-arrow></div>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

AccountMenu.prototype = {
    children: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
};

export default AccountMenu;
