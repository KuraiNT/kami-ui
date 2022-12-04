import Slide from '~/pages/Home/Slide';
import styles from './Home.module.scss';
import * as topService from '~/services/topService';

import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Home() {
    const [topData, setTopData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await topService.top();
            setTopData(result);
        };

        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Slide data={topData} />
            <div>Latest Episodes</div>
            <div>Top Anime</div>
            <div>New Season</div>
        </div>
    );
}

export default Home;
