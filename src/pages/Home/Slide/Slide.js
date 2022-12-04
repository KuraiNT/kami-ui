import styles from './Slide.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlideNav from './SlideNav';
import SlideItem from './SlideItem';

import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Slide({ data }) {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    const slider1 = useRef(null);
    const slider2 = useRef(null);

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);

    var slideProps = {
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: false,
    };

    var slideNavProps = {
        infinite: true,
        arrows: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: false,
        slidesToShow: 2,
        pauseOnHover: false,
    };

    return (
        <div className={cx('wrapper')}>
            <Slider
                {...slideProps}
                asNavFor={nav2}
                ref={slider1}
                className={cx('slide')}
            >
                {data.map((item, index) => {
                    return <SlideItem key={index} data={item} />;
                })}
            </Slider>
            <div className={cx('slide-nav')}>
                <Slider
                    {...slideNavProps}
                    asNavFor={nav1}
                    ref={slider2}
                    className={cx('nav')}
                >
                    {data.map((item, index) => {
                        return <SlideNav key={index} items={item} />;
                    })}
                </Slider>
                <div className={cx('control-nav')}>
                    <button
                        className={cx('btn-nav-slide')}
                        onClick={() => slider2.current.slickNext()}
                    >
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            className={'right-icon'}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Slide;
