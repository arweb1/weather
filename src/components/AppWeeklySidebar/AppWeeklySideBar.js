import React from 'react'
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
//test commit
import './AppWeeklySidebar.scss'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import WbCloudyOutlinedIcon from '@mui/icons-material/WbCloudyOutlined';
import useWeatherServices from '../../services/WeatherServices';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function AppWeeklySideBar({ selectedCity }) {
    const { loading, error, getWeatherForecast, clearError } = useWeatherServices();
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        if (selectedCity) {
            updateWeather(selectedCity);
        }
    }, [selectedCity]); // Добавленная зависимостьokj

    const updateWeather = ({ lat, lon }) => {
        if (lat && lon) {
            clearError();
            getWeatherForecast(lat, lon).then(onLoaded);
        }
    };

    const onLoaded = (weather) => {
        setWeather(weather);
    };

    const spinner = loading ? <Loader /> : null;
    const errorMessage = error ? <ErrorMessage /> : null;
    const content = !(loading || error || !weather) ? <View data={weather} /> : null

    return (
        <div className='AppWeeklySideBar'>
            {spinner}
            {errorMessage}
            {content}
        </div>
    )
}


const View = ({ data }) => {
    const { daily, hourly } = data;
    console.log(daily);
    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3, // Количество показываемых слайдов в окне
        slidesToScroll: 1,
    };

    return (
        <>
            <div className="AppWeeklySideBar__chooseWeek">
                <ArrowBackIosNewOutlinedIcon className='icon' />
                <p>This Week</p>
                <ArrowForwardIosOutlinedIcon className='icon' />
            </div>
            <div className="AppWeeklySideBar__today">
                <p>Today</p>
                <Slider {...sliderSettings} className="AppWeeklySideBar__today-list">
                    {hourly.map((hour, i) => {
                        return (
                            <li className="AppWeeklySideBar__today-list-data active" key={i}>
                                <div className="time">{hour.localTime}</div>
                                <WbCloudyOutlinedIcon className='icon' />
                                <div className="weather">{hour.temp}</div>
                            </li>
                        )
                    })}
                </Slider>
            </div>
            <ul className="AppWeeklySideBar__nextDays">
                {daily.map((day, key) => {
                    return (
                        <li className="AppWeeklySideBar__nextDays-day" key={key}>
                            <div className="AppWeeklySideBar__nextDays-day-text">
                                <p className='day'>{day.localTime}</p>
                                <p className='data'>{day.title}</p>
                            </div>
                            <p>{day.temp}</p>
                            <WbCloudyOutlinedIcon className='icon' />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default AppWeeklySideBar