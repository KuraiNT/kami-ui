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
    const [showResult, setShowResult] = useState(false);

    const inputUseRef = useRef();

    const debounce = useDebounce(searchValue, 500);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchService.search(debounce);
            setSearchResult(result);
        };

        fetchApi();
    }, [debounce]);

    const handleCloseSearchValue = () => {
        setSearchValue('');
        setSearchResult([]);
        inputUseRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <Tippy
            interactive
            visible={showResult || searchResult.length > 0}
            placement="bottom"
            offset={[0, 4]}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('wrapper-scroll')}>
                        {searchResult.map((result, index) => (
                            <SearchItem key={index} data={result} />
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
                <button
                    className={cx('btn-search')}
                    onMouseDown={(e) => e.preventDefault()}
                >
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
