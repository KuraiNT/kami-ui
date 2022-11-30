import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { HomeIcon, PopularIcon, GenreIcon } from '~/components/Icons';
import { Image } from '~/components/Image';
import FavouriteItem from '~/components/FavouriteItem';
import { Menu, MenuItem } from './Menu';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Sidebar() {
    const [topResult, setTopResult] = useState([]);

    useEffect(() => {
        fetch('https://gogoanime.consumet.org/top-airing')
            .then((res) => res.json())
            .then((res) => setTopResult(res));
    }, [topResult]);

    return (
        <div className={cx('wrapper')}>
            <Image
                alt=""
                className={cx('logo')}
                src="https://kamiwatch.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=1920&q=75"
            />
            <aside className={cx('aside')}>
                <Menu>
                    <MenuItem
                        icon={<HomeIcon />}
                        title="Home"
                        to="/"
                        className={cx('active')}
                    />
                    <MenuItem
                        icon={<PopularIcon />}
                        title="Popular"
                        to="/popular"
                        className={cx('default')}
                    />
                    <MenuItem
                        icon={<GenreIcon />}
                        title="Genre"
                        to="/genre"
                        className={cx('default')}
                    />
                </Menu>
            </aside>
            <div className={cx('favourite')}>
                <h1 className={cx('title')}>FAVOURITES</h1>
                <aside className={cx('menu-favourite')}>
                    {topResult.map((result, index) => (
                        <FavouriteItem
                            key={index}
                            data={result}
                            className={cx('favouriteItem-active')}
                        />
                    ))}
                </aside>
            </div>
            <div className={cx('footer')}>
                <span className={cx('footer-sidebar')}>
                    Kami Watch Copyright © 2022
                </span>
            </div>
        </div>
    );
}

export default Sidebar;
