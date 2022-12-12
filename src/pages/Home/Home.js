import Slide from './Slide';
import LatestEpisode from './LatestEpisode';
import styles from './Home.module.scss';
import * as topService from '~/services/topService';

import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Home() {
    const [slideData, setSlideData] = useState([]);

    // get api slide
    useEffect(() => {
        const fetchApi = async () => {
            const result = await topService.top();
            setSlideData(result);
        };

        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Slide data={slideData} />
            <LatestEpisode />
            <div>Top Anime</div>
            <div>New Season</div>
        </div>
    );
}

export default Home;
