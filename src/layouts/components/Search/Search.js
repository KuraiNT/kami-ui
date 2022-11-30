import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useEffect, useState, useRef } from 'react';
import { SearchItem } from '~/components/SearchItem';
import { useDebounce } from '~/hooks';

import * as searchService from '~/services/searchService';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);

    const inputUseRef = useRef();

    const debounce = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            const result = await searchService.search(debounce);
            setSearchResult(result);
        };

        fetchApi();
    }, [debounce]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputUseRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            placement="bottom"
            offset={[0, 4]}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('wrapper-scroll')}>
                        {searchResult.map((result) => (
                            <SearchItem key={result.animeId} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputUseRef}
                    value={searchValue}
                    spellCheck={false}
                    onFocus={() => setShowResult(true)}
                    onChange={handleChange}
                    className={cx('input-search')}
                    placeholder="Search..."
                />
                {searchValue && (
                    <FontAwesomeIcon
                        icon={faClose}
                        className={cx('btn-close')}
                        onClick={handleClear}
                    />
                )}
                <button
                    className={cx('btn-search')}
                    onMouseDown={(e) => e.preventDefault()}
                >
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
