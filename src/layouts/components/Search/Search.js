import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useEffect, useState, useRef } from 'react';
import { SearchItem } from '~/components/SearchItem';
import { useDebounce } from '~/hooks';

import * as searchService from '~/services/searchService';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const inputUseRef = useRef();

    const debounce = useDebounce(searchValue, 500);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchService.search(debounce);
            setSearchResult(result);
        };

        fetchApi();
    }, [debounce]);

    const hideSearchResult = () => {
        setSearchResult([]);
        setSearchValue('');
    };

    const handleCloseSearchValue = () => {
        setSearchValue('');
    };

    return (
        <Tippy
            interactive
            visible={searchValue || searchResult.length > 0}
            placement="bottom"
            offset={[0, 4]}
            onHide={hideSearchResult}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('wrapper-scroll')}>
                        {searchResult.map((result, index) => (
                            <SearchItem key={index} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputUseRef}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className={cx('input-search')}
                    placeholder="Search..."
                />
                {searchValue && (
                    <FontAwesomeIcon
                        icon={faClose}
                        className={cx('btn-close')}
                        onClick={handleCloseSearchValue}
                    />
                )}
                <button className={cx('btn-search')}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
