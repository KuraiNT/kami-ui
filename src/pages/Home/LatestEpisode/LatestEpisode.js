import styles from './LatestEpisode.module.scss';
import { MovieItem } from '~/components/MovieItem';
import { Image } from '~/components/Image';
import { Pagination } from '~/components/Pagination';
import * as latestService from '~/services/latestService';

import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function LatestEpisode() {
    const [latestEp, setLatestEp] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fectApi = async () => {
            const result = await latestService.latestEp(page);
            setLatestEp(result);
        };
        fectApi();
    }, [page]);

    const nextPage = () => setPage((next) => next + 1);
    const prevPage = () => setPage((prev) => prev - 1);

    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('image')}
                alt=""
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/61c717ae-3d90-4186-bbef-9a7191eb6146/ddmainq-d4eb464c-826f-45e2-aed3-65b216ec12c8.png/v1/fill/w_891,h_720,strp/zenitsu_agatsuma_render___kimersu_no_yaiba_by_guntersw_ddmainq-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNjFjNzE3YWUtM2Q5MC00MTg2LWJiZWYtOWE3MTkxZWI2MTQ2XC9kZG1haW5xLWQ0ZWI0NjRjLTgyNmYtNDVlMi1hZWQzLTY1YjIxNmVjMTJjOC5wbmciLCJ3aWR0aCI6Ijw9ODkxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.zDQ6eyN_1iGepS-buOb9y83KvMdxEPMk6HCCjl2AyQY"
            />
            <div className={cx('container')}>
                <h1 className={cx('heading')}>Latest Episodes</h1>
                <div className={cx('content')}>
                    {latestEp.map((items, index) => {
                        return <MovieItem key={index} data={items} />;
                    })}
                </div>
                <Pagination nextPage={nextPage} prevPage={prevPage} />
            </div>
        </div>
    );
}

export default LatestEpisode;
