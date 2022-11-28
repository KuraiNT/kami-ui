import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useEffect, useState } from 'react';
import { SearchItem } from '~/components/SearchItem';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Search.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, [searchResult]);

    return (
        <Tippy
            interactive
            visible={searchResult.length > 0}
            placement="bottom"
            offset={[0, 4]}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <SearchItem />
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input className={cx('input-search')} placeholder="Search..." />
                <button className={cx('btn-search')}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
