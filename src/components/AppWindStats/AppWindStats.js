import React from 'react';

import useWeatherServices from '../../services/WeatherServices';

import './AppWindStats.scss';

function AppWindStats() {

  return (
    <div className="AppWindStats">
        <div className='AppStat'>
            <div className="AppStat__text">
                <p className="AppStat__text-title">Wind</p>
                <p className="App__text-description">Today wind speed</p>
                <span>11km/h</span>
            </div>
            <div className="AppStat__rate">
                <div className="compass">
                    <span></span>
                </div>
            </div>
        </div>
        <div className='AppStat'>
            <div className="AppStat__text">
                <p className="AppStat__text-title">Wind</p>
                <p className="App__text-description">Today wind speed</p>
                <span>11km/h</span>
            </div>
            <div className="AppStat__rate">
                <div className="compass">
                    <span></span>
                </div>
            </div>
        </div>
        <div className='AppStat'>
            <div className="AppStat__text">
                <p className="AppStat__text-title">Wind</p>
                <p className="App__text-description">Today wind speed</p>
                <span>12km/h</span>
            </div>
            <div className="AppStat__rate">
                <div className="compass">
                    <span></span>
                </div>
            </div>
        </div>
        <div className='AppStat'>
            <div className="AppStat__text">
                <p className="AppStat__text-title">Wind</p>
                <p className="App__text-description">Today wind speed</p>
                <span>12km/h</span>
            </div>
            <div className="AppStat__rate">
                <div className="compass">
                    <span></span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AppWindStats;
