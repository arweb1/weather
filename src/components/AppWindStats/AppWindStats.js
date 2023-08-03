import React from 'react';
import { useState, useEffect } from 'react';
import useWeatherServices from '../../services/WeatherServices';

import './AppWindStats.scss';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

import CircleProgressBar from './CircleProgressBar';
import UVIndexIndicator from './UVIndexIndicator';

function AppWindStats() {
    const {loading, error, getWeather, clearError} = useWeatherServices();
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        updateData()
    }, [])

    const updateData = () => {
        getWeather()
            .then(onLoaded)
    }

    const onLoaded = (data) => {
        setWeather(data)
    }
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Loader/> : null
    const content = !(loading || error || !weather) ? <View data={weather}/> : null
  return (
    <div className="AppWindStats">
        {errorMessage}
        {spinner}
        {content}
    </div>
  );
}

function getWindDirectionAngle(direction) {
    const directions = {
      N: 0,
      NNE: 22.5,
      NE: 45,
      ENE: 67.5,
      E: 90,
      ESE: 112.5,
      SE: 135,
      SSE: 157.5,
      S: 180,
      SSW: 202.5,
      SW: 225,
      WSW: 247.5,
      W: 270,
      WNW: 292.5,
      NW: 315,
      NNW: 337.5,
    };
  
    return directions[direction] || 0;
  }

const View = ({data}) => {
    const {windKph, windDir, humidity, pressure} = data;

    const arrowRotation = `rotate(${getWindDirectionAngle(windDir)}deg)`;
    const [progressPercent, setProgressPercent] = useState(null)


    useEffect(() => {
        setProgressPercent(humidity)
      }, []);

    return(
        <>
            <div className='AppStat'>
            <div className="AppStat__text">
                <p className="AppStat__text-title">Wind</p>
                <p className="App__text-description">Today wind speed</p>
                <span>{windKph}</span>
            </div>
            <div className="AppStat__rate">
                <div className="compass">
                    <span style={{ transform: `translate(50%, -50%) ${arrowRotation}`, transformOrigin: 'center center' }}></span>
                </div>
            </div>
        </div>
        <div className='AppStat'>
            <div className="AppStat__text">
                <p className="AppStat__text-title">Rain Chanse</p>
                <p className="App__text-description">Today rain chanse</p>
                <span>{humidity}%</span>
            </div>
            <div className="AppStat__rate">
                <div className="progress">
                    <CircleProgressBar progressPercent={progressPercent}/>
                </div>
            </div>
        </div>
        <div className='AppStat'>
            <div className="AppStat__text">
                <p className="AppStat__text-title">Pressure</p>
                <p className="App__text-description">Today Pressure</p>
                <span>12km/h</span>
            </div>
            <div className="AppStat__rate">
                <div className="CircleProgressBar">
                    <span></span>
                </div>
            </div>
        </div>
        <div className='AppStat'>
            <div className="AppStat__text">
                <p className="AppStat__text-title">UV Index</p>
                <p className="App__text-description">Today UV Index</p>
                <span>12km/h</span>
            </div>
            <div className="AppStat__rate">
                <div className="UvIndicator">
                    <UVIndexIndicator/>
                </div>
            </div>
        </div>
        </>
    )
}


export default AppWindStats;
