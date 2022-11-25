import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import { HomeIcon, PopularIcon, GenreIcon } from '~/components/Icons';
import { Image } from '~/components/Image';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <Image
                alt=""
                className={cx('logo')}
                src="https://kamiwatch.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=1920&q=75"
            />
            <aside>
                <Menu>
                    <MenuItem icon={<HomeIcon />} title="Home" to="/" />
                    <MenuItem
                        icon={<PopularIcon />}
                        title="Popular"
                        to="/popular"
                    />
                    <MenuItem icon={<GenreIcon />} title="Genre" to="/genre" />
                </Menu>
            </aside>
        </div>
    );
}

export default Sidebar;
