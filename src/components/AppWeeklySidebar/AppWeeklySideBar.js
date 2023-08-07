import React from 'react'

import { useState, useEffect } from 'react';

import './AppWeeklySidebar.scss'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import WbCloudyOutlinedIcon from '@mui/icons-material/WbCloudyOutlined';
import useWeatherServices from '../../services/WeatherServices';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function AppWeeklySideBar({selectedCity}) {
    const {loading, error, getWeatherForecast, clearError} = useWeatherServices();
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        if (selectedCity) {
            updateWeather(selectedCity);
        }
    }, [selectedCity]); // Добавленная зависимость

    useEffect(() => {
        console.log("Weather has changed:", weather);
      }, [weather]);

    const updateWeather = ({ lat, lon }) => {
        if (lat && lon) {
            clearError();
            getWeatherForecast(lat, lon).then(onLoaded);
        }
    };

    const onLoaded = (weather) => {
        console.log(weather);
        setWeather(weather);
    };
    console.log(weather);

    const spinner = loading ? <Loader/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;
    const content = !(loading || error || !weather) ? <View data={weather}/> : null

  return (
    <div className='AppWeeklySideBar'>
        {spinner}
        {errorMessage}
        {content}
    </div>
  )
}


const View = ({data}) => {
    const {daily, hourly} = data;
    console.log(daily, hourly)
    return(
        <>
            <div className="AppWeeklySideBar__chooseWeek">
            <ArrowBackIosNewOutlinedIcon className='icon'/>
            <p>This Week</p>
            <ArrowForwardIosOutlinedIcon className='icon'/>
        </div>
        <div className="AppWeeklySideBar__today">
            <p>Today</p>
            <ul className="AppWeeklySideBar__today-list">
                {hourly.map((hour, i) => {
                    return(
                        <li className="AppWeeklySideBar__today-list-data active" key={i}>
                            <div className="time">{hour.localTime}</div>
                            <WbCloudyOutlinedIcon className='icon'/>
                            <div className="weather">{hour.temp}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
        <ul className="AppWeeklySideBar__nextDays">
            {daily.map((day, key) => {
                return(
                    <li className="AppWeeklySideBar__nextDays-day" key={key}>
                        <div className="AppWeeklySideBar__nextDays-day-text">
                            <p className='day'>{day.localTime}</p>
                            <p className='data'>{day.title}</p>
                        </div>
                        <p>{day.temp}</p>
                        <WbCloudyOutlinedIcon className='icon'/>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default AppWeeklySideBar