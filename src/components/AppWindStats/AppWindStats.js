import React from 'react';
import { useState, useEffect } from 'react';
import useWeatherServices from '../../services/WeatherServices';

import './AppWindStats.scss';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

import CircleProgressBar from './CircleProgressBar';
import UVIndexIndicator from './UVIndexIndicator';

function AppWindStats({selectedCity}) {
    const {loading, error, getWeather, clearError} = useWeatherServices();
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        if(selectedCity){
            updateWeather(selectedCity)
        }
    }, [selectedCity])

    const updateWeather = ({lat, lon}) => {
        console.log(lat, lon)
        if (lat && lon) {
            clearError()
            getWeather(lat, lon)
                .then(onLoaded)
        }
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

const View = ({data}) => {
    const {windKph, windDir, humidity, pressure} = data;

    const arrowRotation = `rotate(${windDir}deg)`;
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
