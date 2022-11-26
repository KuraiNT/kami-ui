import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import { HomeIcon, PopularIcon, GenreIcon } from '~/components/Icons';
import { Image } from '~/components/Image';
import FavouriteItem from '~/components/FavouriteItem';

const cx = classNames.bind(styles);

function Sidebar() {
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
                <aside>
                    <Menu>
                        <FavouriteItem
                            className={cx('favouriteItem-active')}
                            to="/detail"
                            title="Naruto"
                            img={
                                <Image
                                    className={cx('img-favourite')}
                                    alt=""
                                    src="https://media.kitsu.io/anime/poster_images/10089/medium.jpg?1597697270"
                                />
                            }
                        />
                        <FavouriteItem
                            to="/detail"
                            title="Dragon Ball Z"
                            img={
                                <Image
                                    className={cx('img-favourite')}
                                    alt=""
                                    src="https://media.kitsu.io/anime/poster_images/10879/medium.jpg?1627149099"
                                />
                            }
                        />
                        <FavouriteItem
                            to="/detail"
                            title="One Piece"
                            img={
                                <Image
                                    className={cx('img-favourite')}
                                    alt=""
                                    src="https://gogocdn.net/images/anime/One-piece.jpg"
                                />
                            }
                        />
                    </Menu>
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
